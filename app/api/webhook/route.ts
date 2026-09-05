import { NextResponse } from "next/server";
import {
  getOrderByPaymentId,
  updateOrderStatus,
} from "../../../lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const paymentId =
      body?.data?.id ||
      body?.id ||
      body?.resource?.split("/").pop();

    if (!paymentId) {
      return NextResponse.json({ ok: true });
    }

    const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;

    if (!accessToken) {
      return NextResponse.json({ ok: true });
    }

    const response = await fetch(
      `https://api.mercadopago.com/v1/payments/${paymentId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return NextResponse.json({ ok: true });
    }

    const payment = await response.json();

    const order = await getOrderByPaymentId(String(paymentId));

    if (!order) {
      return NextResponse.json({ ok: true });
    }

    const status = payment.status || order.status;

    await updateOrderStatus(
      String(paymentId),
      status
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro no webhook:", error);

    return NextResponse.json({ ok: true });
  }
}
