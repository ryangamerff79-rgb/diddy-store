"use client";

import { useEffect, useState } from "react";

export default function Pagamento() {
  const [payment, setPayment] = useState<any>(null);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const stored = sessionStorage.getItem("diddy_payment");

    if (!stored) {
      return;
    }

    const data = JSON.parse(stored);

    setPayment(data);

    const interval = setInterval(async () => {
      if (!data.orderId) {
        return;
      }

      try {
        const response = await fetch(
          `/api/pedido?id=${data.orderId}`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          return;
        }

        const order = await response.json();

        setStatus(order.status);

        if (order.approved) {
          window.location.href = `/entrega?id=${order.id}`;
        }
      } catch {
        // Continua verificando
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!payment) {
    return (
      <main className="min-h-screen bg-[#050208] px-5 pt-40 text-center text-white">
        <h1 className="text-3xl font-black">
          Pagamento não encontrado
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050208] px-5 pt-36 text-white">
      <div className="mx-auto max-w-xl text-center">

        <p className="text-sm font-black text-purple-400">
          PAGAMENTO PIX
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Finalize o pagamento
        </h1>

        {payment.qrCodeBase64 && (
          <img
            src={`data:image/png;base64,${payment.qrCodeBase64}`}
            alt="QR Code Pix"
            className="mx-auto mt-8 w-72 rounded-3xl bg-white p-4"
          />
        )}

        {payment.qrCode && (
          <textarea
            readOnly
            value={payment.qrCode}
            className="mt-7 h-32 w-full rounded-2xl border border-white/10 bg-black p-4 text-xs text-zinc-300"
          />
        )}

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
          <b>
            {status === "approved"
              ? "Pagamento aprovado!"
              : "Aguardando confirmação..."}
          </b>

          <p className="mt-2 text-sm text-zinc-500">
            O site verifica automaticamente a confirmação do Mercado Pago.
          </p>
        </div>

      </div>
    </main>
  );
}
