"use client";

import { useEffect, useState } from "react";

export default function Entrega() {
  const [order, setOrder] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("id");

    if (!id) {
      setError("Pedido não informado.");
      return;
    }

    fetch(`/api/pedido?id=${id}`, {
      cache: "no-store",
    })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Erro ao buscar pedido.");
        }

        setOrder(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <main className="min-h-screen bg-[#050208] px-5 pt-40 text-center text-white">
        <h1 className="text-4xl font-black">Erro no pedido</h1>

        <p className="mt-4 text-zinc-500">
          {error}
        </p>
      </main>
    );
  }

  if (!order) {
    return (
      <main className="min-h-screen bg-[#050208] px-5 pt-40 text-center text-white">
        <h1 className="text-3xl font-black">
          Verificando pagamento...
        </h1>
      </main>
    );
  }

  if (!order.approved) {
    return (
      <main className="min-h-screen bg-[#050208] px-5 pt-40 text-center text-white">
        <h1 className="text-4xl font-black">
          Pagamento ainda não aprovado
        </h1>

        <p className="mt-4 text-zinc-500">
          A entrega será liberada após a confirmação do Mercado Pago.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050208] px-5 pt-36 text-white">
      <div className="mx-auto max-w-2xl text-center">

        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-purple-600 text-3xl">
          ✓
        </div>

        <p className="mt-8 text-sm font-black text-purple-400">
          PEDIDO APROVADO
        </p>

        <h1 className="mt-3 text-5xl font-black">
          Sua compra está pronta!
        </h1>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-left">

          <p className="text-xs font-black text-zinc-500">
            PRODUTO
          </p>

          <h2 className="mt-2 text-2xl font-black">
            {order.product?.name}
          </h2>

          <a
            href={order.product?.deliveryUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 block rounded-2xl bg-purple-600 px-6 py-4 text-center font-black transition hover:bg-purple-500"
          >
            Baixar meu produto →
          </a>

          <p className="mt-4 text-center text-xs text-zinc-600">
            Seu produto foi liberado automaticamente após a confirmação do pagamento.
          </p>

        </div>
      </div>
    </main>
  );
}
