import { NextResponse } from "next/server";
import crypto from "node:crypto";

import {
  getOrderByPaymentId,
  updateOrderPayment,
} from "../../../lib/db";

function getSignatureParts(
  signature: string
) {
  const parts: Record<string, string> = {};

  for (const part of signature.split(",")) {
    const [key, ...valueParts] = part.split("=");

    if (!key || valueParts.length === 0) {
      continue;
    }

    parts[key.trim()] = valueParts.join("=").trim();
  }

  return {
    ts: parts.ts || null,
    v1: parts.v1 || null,
  };
}

function safeCompare(
  a: string,
  b: string
) {
  const aBuffer = Buffer.from(a, "utf8");
  const bBuffer = Buffer.from(b, "utf8");

  if (aBuffer.length !== bBuffer.length) {
    return false;
  }

  return crypto.timingSafeEqual(
    aBuffer,
    bBuffer
  );
}

function validateWebhookSignature(
  req: Request,
  body: any,
  secret: string
) {
  const xSignature =
    req.headers.get("x-signature");

  const xRequestId =
    req.headers.get("x-request-id");

  if (!xSignature) {
    return false;
  }

  const { ts, v1 } =
    getSignatureParts(xSignature);

  if (!ts || !v1) {
    return false;
  }

  /*
   * O Mercado Pago utiliza:
   *
   * id:<data.id>;
   * request-id:<x-request-id>;
   * ts:<timestamp>;
   *
   * na assinatura HMAC-SHA256.
   */

  const url = new URL(req.url);

  const queryDataId =
    url.searchParams.get("data.id");

  const bodyDataId =
    body?.data?.id
      ? String(body.data.id)
      : null;

  const dataId =
    queryDataId || bodyDataId;

  let manifest = "";

  if (dataId) {
    manifest += `id:${dataId};`;
  }

  if (xRequestId) {
    manifest += `request-id:${xRequestId};`;
  }

  manifest += `ts:${ts};`;

  const calculatedSignature =
    crypto
      .createHmac("sha256", secret)
      .update(manifest)
      .digest("hex");

  return safeCompare(
    calculatedSignature,
    v1
  );
}

export async function POST(req: Request) {
  try {
    /*
     * --------------------------------------------------
     * 1. Verificar Secret do Webhook
     * --------------------------------------------------
     */

    const webhookSecret =
      process.env.MERCADOPAGO_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error(
        "MERCADOPAGO_WEBHOOK_SECRET não configurado."
      );

      return NextResponse.json(
        {
          error:
            "Webhook não configurado corretamente.",
        },
        { status: 500 }
      );
    }

    /*
     * --------------------------------------------------
     * 2. Ler o corpo da notificação
     * --------------------------------------------------
     */

    const body = await req.json();

    /*
     * --------------------------------------------------
     * 3. Validar assinatura do Mercado Pago
     * --------------------------------------------------
     */

    const validSignature =
      validateWebhookSignature(
        req,
        body,
        webhookSecret
      );

    if (!validSignature) {
      console.warn(
        "Webhook rejeitado: assinatura inválida."
      );

      return NextResponse.json(
        {
          error:
            "Assinatura do webhook inválida.",
        },
        { status: 401 }
      );
    }

    /*
     * --------------------------------------------------
     * 4. Identificar o pagamento
     * --------------------------------------------------
     */

    const paymentId =
      body?.data?.id ||
      body?.id ||
      body?.resource
        ?.split("/")
        .pop();

    if (!paymentId) {
      console.warn(
        "Webhook recebido sem payment ID."
      );

      return NextResponse.json(
        { ok: true },
        { status: 200 }
      );
    }

    const paymentIdString =
      String(paymentId);

    /*
     * --------------------------------------------------
     * 5. Access Token do Mercado Pago
     * --------------------------------------------------
     */

    const accessToken =
      process.env.MERCADOPAGO_ACCESS_TOKEN;

    if (!accessToken) {
      console.error(
        "MERCADOPAGO_ACCESS_TOKEN não configurado."
      );

      return NextResponse.json(
        {
          error:
            "Mercado Pago não configurado.",
        },
        { status: 500 }
      );
    }

    /*
     * --------------------------------------------------
     * 6. Consultar o pagamento diretamente
     *    no Mercado Pago
     * --------------------------------------------------
     */

    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${encodeURIComponent(
        paymentIdString
      )}`,
      {
        method: "GET",
        headers: {
          Authorization:
            `Bearer ${accessToken}`,
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(
        "Mercado Pago retornou erro:",
        response.status
      );

      /*
       * Retornamos erro para que a notificação
       * possa ser processada novamente.
       */
      return NextResponse.json(
        {
          error:
            "Não foi possível consultar o pagamento.",
        },
        { status: 502 }
      );
    }

    const payment =
      await response.json();

    /*
     * --------------------------------------------------
     * 7. Procurar pedido no Supabase
     * --------------------------------------------------
     */

    const order =
      await getOrderByPaymentId(
        paymentIdString
      );

    if (!order) {
      console.warn(
        "Pagamento recebido, mas pedido não encontrado:",
        paymentIdString
      );

      return NextResponse.json(
        { ok: true },
        { status: 200 }
      );
    }

    /*
     * --------------------------------------------------
     * 8. Conferir se o pagamento pertence
     *    realmente a este pedido
     * --------------------------------------------------
     */

    const paymentExternalReference =
      payment?.external_reference
        ? String(
            payment.external_reference
          )
        : "";

    const orderExternalReference =
      String(
        order.external_reference
      );

    if (
      !paymentExternalReference ||
      paymentExternalReference !==
        orderExternalReference
    ) {
      console.error(
        "External reference não corresponde ao pedido.",
        {
          paymentId: paymentIdString,
          paymentExternalReference,
          orderExternalReference,
        }
      );

      return NextResponse.json(
        {
          error:
            "Pagamento não corresponde ao pedido.",
        },
        { status: 409 }
      );
    }

    /*
     * --------------------------------------------------
     * 9. Status verdadeiro vindo do Mercado Pago
     * --------------------------------------------------
     */

    const status =
      payment?.status ||
      order.status ||
      "pending";

    /*
     * Só um pagamento realmente aprovado
     * libera a entrega.
     */
    const delivered =
      status === "approved";

    /*
     * --------------------------------------------------
     * 10. Atualizar pedido
     * --------------------------------------------------
     */

    await updateOrderPayment(
      paymentIdString,
      status,
      delivered
    );

    console.log(
      "Pedido atualizado com sucesso:",
      {
        paymentId: paymentIdString,
        status,
        delivered,
      }
    );

    /*
     * --------------------------------------------------
     * 11. Resposta
     * --------------------------------------------------
     */

    return NextResponse.json(
      {
        ok: true,
        paymentId: paymentIdString,
        status,
        delivered,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Erro no webhook:",
      error
    );

    /*
     * Diferente do webhook antigo,
     * não retornamos 200 em caso de erro.
     *
     * Isso permite que o Mercado Pago
     * tente enviar a notificação novamente.
     */

    return NextResponse.json(
      {
        error:
          "Erro interno ao processar webhook.",
      },
      { status: 500 }
    );
  }
}
