import { NextResponse } from "next/server";
import { supabase } from "../../../lib/db";
import { products, ProductKey } from "../../../lib/products";

export async function GET(req: Request) {
  try {
    const id = new URL(req.url).searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Pedido não informado." },
        { status: 400 }
      );
    }

    const { data: order, error } = await supabase
      .from("orders")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      console.error("Erro ao buscar pedido:", error);

      return NextResponse.json(
        { error: "Erro ao consultar o pedido." },
        { status: 500 }
      );
    }

    if (!order) {
      return NextResponse.json(
        { error: "Pedido não encontrado." },
        { status: 404 }
      );
    }

    const product = products[order.product_key as ProductKey];

    return NextResponse.json({
      id: order.id,
      status: order.status,
      approved: order.status === "approved" && order.delivered,
      product: product
        ? {
            name: product.name,
            deliveryUrl: product.deliveryUrl,
          }
        : null,
    });
  } catch (error) {
    console.error("Erro na API de pedido:", error);

    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
