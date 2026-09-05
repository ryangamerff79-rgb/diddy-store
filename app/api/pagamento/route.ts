import { NextResponse } from "next/server";
import { MercadoPagoConfig, Payment } from "mercadopago";
import crypto from "node:crypto";
import { createOrder } from "@/lib/db";

const products = {
  omega: { name: "OMEGA", price: 35 },
  suprema: { name: "Otimização Suprema", price: 20 },
  avancada: { name: "Otimização Avançada", price: 10 },
  basica: { name: "Otimização Básica", price: 5 },
  fivem: { name: "Pack FiveM", price: 10 },
  sensi: { name: "Pack Sensi", price: 5 },
} as const;

type ProductKey = keyof typeof products;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const productKey = body?.productKey as ProductKey | undefined;
    const email = body?.email;

    const product =
      productKey && products[productKey]
        ? products[productKey]
        : null;

    if (!product) {
      return NextResponse.json(
        { error: "Produto inválido." },
        { status: 400 }
      );
    }

    if (
      typeof email !== "string" ||
      !/^\S+@\S+\.\S+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { error: "E-mail inválido." },
        { status: 400 }
      );
    }

    const accessToken =
      process.env.MERCADOPAGO_ACCESS_TOKEN;

    if (!accessToken) {
      return NextResponse.json(
        {
          error:
            "MERCADOPAGO_ACCESS_TOKEN não está configurado.",
        },
        { status: 500 }
      );
    }

    const client = new MercadoPagoConfig({
      accessToken,
    });

    const payment = new Payment(client);

    const externalReference = crypto.randomUUID();

    const result = await payment.create({
      body: {
        transaction_amount: product.price,
        description: `Diddy Store - ${product.name}`,
        payment_method_id: "pix",
        payer: {
          email: email.trim(),
        },
        external_reference: externalReference,
      },
      requestOptions: {
        idempotencyKey: crypto.randomUUID(),
      },
    });

    const transactionData =
      result.point_of_interaction?.transaction_data;

    if (!transactionData) {
      return NextResponse.json(
        {
          error:
            "O Mercado Pago não retornou os dados do PIX.",
        },
        { status: 500 }
      );
    }

    const paymentId = String(result.id);

    await createOrder({
      id: crypto.randomUUID(),
      payment_id: paymentId,
      external_reference: externalReference,
      product_key: productKey!,
      email: email.trim(),
      status: result.status || "pending",
      delivered: false,
    });

    return NextResponse.json({
      paymentId,
      status: result.status,
      externalReference,
      qrCode: transactionData.qr_code || "",
      qrCodeBase64:
        transactionData.qr_code_base64 || "",
      ticketUrl:
        transactionData.ticket_url || "",
    });
  } catch (error: any) {
    console.error("ERRO:", error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Erro ao criar pagamento PIX.",
      },
      { status: 500 }
    );
  }
}
