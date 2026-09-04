"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const products = {
  omega: {
    name: "OMEGA",
    price: 35,
    description:
      "Nossa otimização mais completa para máximo desempenho.",
    badge: "🔥 MAIS VENDIDO",
    type: "OTIMIZAÇÃO",
    features: [
      "Pacote completo de otimização",
      "Configurações focadas em desempenho",
      "Ajustes para uma experiência mais fluida",
    ],
  },

  suprema: {
    name: "Otimização Suprema",
    price: 20,
    description:
      "Pacote avançado focado em desempenho e estabilidade.",
    badge: "⭐ RECOMENDADO",
    type: "OTIMIZAÇÃO",
    features: [
      "Otimização avançada",
      "Configurações de desempenho",
      "Foco em estabilidade",
    ],
  },

  avancada: {
    name: "Otimização Avançada",
    price: 10,
    description:
      "Uma opção equilibrada para melhorar o desempenho do PC.",
    badge: "⚡ EQUILIBRADA",
    type: "OTIMIZAÇÃO",
    features: [
      "Otimização do sistema",
      "Configurações de desempenho",
      "Pacote intermediário",
    ],
  },

  basica: {
    name: "Otimização Básica",
    price: 5,
    description:
      "O pacote essencial para começar a otimizar seu Windows.",
    badge: "🚀 ESSENCIAL",
    type: "OTIMIZAÇÃO",
    features: [
      "Otimização básica",
      "Configurações essenciais",
      "Ideal para começar",
    ],
  },

  fivem: {
    name: "Pack FiveM",
    price: 10,
    description:
      "Pack focado em desempenho e configurações para FiveM.",
    badge: "🎮 FIVEM",
    type: "GAMING",
    features: [
      "Configurações focadas em FiveM",
      "Ajustes de desempenho",
      "Experiência mais fluida",
    ],
  },

  sensi: {
    name: "Pack Sensi",
    price: 5,
    description:
      "Pack de configurações de sensibilidade.",
    badge: "🎯 GAMING",
    type: "GAMING",
    features: [
      "Configurações de sensibilidade",
      "Perfil para jogos",
      "Pacote rápido e simples",
    ],
  },
};

type ProductKey = keyof typeof products;

export default function Checkout() {
  const [productKey, setProductKey] = useState<ProductKey | null>(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const produto = params.get("produto");

    if (produto && produto in products) {
      setProductKey(produto as ProductKey);
    }
  }, []);

  const product = productKey ? products[productKey] : null;

  async function createPayment() {
    setError("");

    if (!email.trim()) {
      setError("Digite seu e-mail.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError("Digite um e-mail válido.");
      return;
    }

    if (!productKey || !product) {
      setError("Produto inválido.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/pagamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productKey,
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Não foi possível criar o pagamento."
        );
      }

      sessionStorage.setItem(
        "diddy_payment",
        JSON.stringify(data)
      );

      window.location.href = "/pagamento";
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro ao criar pagamento."
      );

      setLoading(false);
    }
  }

  if (!product) {
    return (
      <main className="checkout-page">
        <div className="loading-box">
          <div className="spinner" />
          <p>Carregando checkout...</p>
        </div>

        <style jsx global>{`
          * {
            box-sizing: border-box;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            background: #050208;
          }

          .checkout-page {
            min-height: 100vh;
            background:
              radial-gradient(
                circle at 20% 10%,
                rgba(124, 58, 237, 0.2),
                transparent 30%
              ),
              radial-gradient(
                circle at 80% 80%,
                rgba(168, 85, 247, 0.12),
                transparent 30%
              ),
              #050208;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px;
            font-family:
              Inter,
              ui-sans-serif,
              system-ui,
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              sans-serif;
          }

          .loading-box {
            text-align: center;
          }

          .spinner {
            width: 42px;
            height: 42px;
            border: 3px solid rgba(255, 255, 255, 0.1);
            border-top-color: #a855f7;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            margin: 0 auto 18px;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          .loading-box p {
            color: #a1a1aa;
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="checkout-container">

        <header className="topbar">
          <Link href="/loja" className="brand">
            <span className="brand-icon">D</span>
            <span>
              DIDDY<span className="purple">STORE</span>
            </span>
          </Link>

          <div className="secure-top">
            <span>🔒</span>
            CHECKOUT SEGURO
          </div>
        </header>

        <div className="back-area">
          <Link href="/loja" className="back-link">
            ← Voltar para a loja
          </Link>
        </div>

        <div className="checkout-grid">

          {/* PRODUTO */}
          <section className="product-card">

            <div className="product-glow" />

            <div className="product-content">

              <div className="badge">
                {product.badge}
              </div>

              <div className="product-type">
                {product.type}
              </div>

              <h1>{product.name}</h1>

              <p className="description">
                {product.description}
              </p>

              <div className="price-area">
                <span className="currency">R$</span>

                <span className="price">
                  {product.price.toFixed(2).replace(".", ",")}
                </span>
              </div>

              <div className="separator" />

              <h2>O que está incluso</h2>

              <div className="features">
                {product.features.map((feature) => (
                  <div className="feature" key={feature}>
                    <span className="check">✓</span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* PAGAMENTO */}
          <section className="payment-card">

            <div className="secure-label">
              <span>🔒</span>
              PAGAMENTO PROTEGIDO
            </div>

            <h2>Finalizar compra</h2>

            <p className="payment-description">
              Informe seu e-mail abaixo. Ele será usado para
              identificar seu pedido e realizar a entrega digital.
            </p>

            <label htmlFor="email">
              Seu e-mail
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setError("");
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  createPayment();
                }
              }}
              placeholder="voce@email.com"
              autoComplete="email"
            />

            {error && (
              <div className="error">
                <span>!</span>
                {error}
              </div>
            )}

            <button
              type="button"
              className="payment-button"
              onClick={createPayment}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="button-spinner" />
                  Criando PIX...
                </>
              ) : (
                <>
                  Gerar pagamento PIX
                  <span>→</span>
                </>
              )}
            </button>

            <div className="payment-method">
              <div className="pix-icon">P</div>

              <div>
                <strong>PIX</strong>
                <span>Pagamento instantâneo</span>
              </div>

              <div className="approved">
                ✓
              </div>
            </div>

            <div className="trust">
              <div>
                <span>🔐</span>
                Pagamento seguro
              </div>

              <div>
                <span>⚡</span>
                Aprovação rápida
              </div>

              <div>
                <span>📦</span>
                Entrega digital
              </div>
            </div>

            <p className="terms">
              Ao continuar, você será direcionado para a
              etapa de pagamento PIX. A liberação do produto
              ocorre após a confirmação do pagamento.
            </p>

          </section>

        </div>

        <footer className="footer">
          <span>© 2026 Diddy Store</span>
          <span>•</span>
          <span>Pagamento seguro</span>
        </footer>

      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: #050208;
        }

        body {
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .checkout-page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 15% 0%,
              rgba(124, 58, 237, 0.18),
              transparent 32%
            ),
            radial-gradient(
              circle at 90% 75%,
              rgba(168, 85, 247, 0.1),
              transparent 28%
            ),
            #050208;
          color: white;
          padding: 30px 20px 50px;
        }

        .ambient {
          position: fixed;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.25;
        }

        .ambient-one {
          width: 300px;
          height: 300px;
          background: #7c3aed;
          left: -180px;
          top: 25%;
        }

        .ambient-two {
          width: 250px;
          height: 250px;
          background: #9333ea;
          right: -130px;
          bottom: 10%;
        }

        .checkout-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
        }

        .topbar {
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 11px;
          color: white;
          text-decoration: none;
          font-size: 17px;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .brand-icon {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          box-shadow: 0 8px 30px rgba(124, 58, 237, 0.3);
          font-weight: 950;
        }

        .purple {
          color: #a855f7;
        }

        .secure-top {
          color: #71717a;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .secure-top span {
          margin-right: 7px;
        }

        .back-area {
          padding: 30px 0 24px;
        }

        .back-link {
          color: #a78bfa;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
          transition: 0.2s;
        }

        .back-link:hover {
          color: white;
        }

        .checkout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .product-card,
        .payment-card {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.035);
          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.35),
            inset 0 1px rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(25px);
        }

        .product-card {
          min-height: 580px;
        }

        .product-glow {
          position: absolute;
          width: 350px;
          height: 350px;
          right: -170px;
          top: -180px;
          border-radius: 50%;
          background: rgba(124, 58, 237, 0.2);
          filter: blur(60px);
        }

        .product-content {
          position: relative;
          padding: 42px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          padding: 9px 13px;
          border: 1px solid rgba(168, 85, 247, 0.25);
          border-radius: 999px;
          background: rgba(124, 58, 237, 0.12);
          color: #c4b5fd;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 0.06em;
        }

        .product-type {
          margin-top: 35px;
          color: #a78bfa;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 0.2em;
        }

        .product-card h1 {
          margin: 10px 0 0;
          font-size: clamp(42px, 5vw, 64px);
          line-height: 0.95;
          letter-spacing: -0.055em;
          font-weight: 950;
        }

        .description {
          max-width: 470px;
          margin: 23px 0 0;
          color: #a1a1aa;
          font-size: 15px;
          line-height: 1.7;
        }

        .price-area {
          display: flex;
          align-items: flex-start;
          margin-top: 32px;
        }

        .currency {
          margin-top: 9px;
          margin-right: 7px;
          color: #a78bfa;
          font-size: 17px;
          font-weight: 900;
        }

        .price {
          font-size: 53px;
          line-height: 1;
          letter-spacing: -0.06em;
          font-weight: 950;
        }

        .separator {
          height: 1px;
          margin: 35px 0 30px;
          background: rgba(255, 255, 255, 0.08);
        }

        .product-card h2 {
          margin: 0;
          font-size: 22px;
          font-weight: 950;
        }

        .features {
          display: grid;
          gap: 15px;
          margin-top: 22px;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #d4d4d8;
          font-size: 14px;
        }

        .check {
          width: 27px;
          height: 27px;
          flex: 0 0 27px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(124, 58, 237, 0.16);
          color: #c4b5fd;
          font-weight: 950;
        }

        .payment-card {
          padding: 42px;
        }

        .secure-label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #a78bfa;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 0.14em;
        }

        .payment-card h2 {
          margin: 18px 0 0;
          font-size: 38px;
          line-height: 1;
          letter-spacing: -0.045em;
          font-weight: 950;
        }

        .payment-description {
          margin: 16px 0 30px;
          color: #a1a1aa;
          font-size: 14px;
          line-height: 1.7;
        }

        label {
          display: block;
          margin-bottom: 9px;
          color: #e4e4e7;
          font-size: 13px;
          font-weight: 850;
        }

        input {
          display: block;
          width: 100%;
          height: 54px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          outline: none;
          background: rgba(0, 0, 0, 0.28);
          color: white;
          padding: 0 16px;
          font-size: 14px;
          transition: 0.2s;
        }

        input::placeholder {
          color: #52525b;
        }

        input:focus {
          border-color: rgba(168, 85, 247, 0.75);
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
        }

        .error {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-top: 12px;
          padding: 12px 14px;
          border: 1px solid rgba(239, 68, 68, 0.18);
          border-radius: 12px;
          background: rgba(239, 68, 68, 0.08);
          color: #fca5a5;
          font-size: 13px;
          font-weight: 700;
        }

        .error span {
          width: 21px;
          height: 21px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.15);
          font-weight: 950;
        }

        .payment-button {
          width: 100%;
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 18px;
          border: 0;
          border-radius: 14px;
          background: linear-gradient(135deg, #7c3aed, #9333ea);
          color: white;
          font-size: 14px;
          font-weight: 950;
          cursor: pointer;
          box-shadow: 0 15px 40px rgba(124, 58, 237, 0.18);
          transition: 0.2s;
        }

        .payment-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 20px 45px rgba(124, 58, 237, 0.3);
        }

        .payment-button:disabled {
          cursor: not-allowed;
          opacity: 0.65;
        }

        .button-spinner {
          width: 19px;
          height: 19px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        .payment-method {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
          padding: 15px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          background: rgba(0, 0, 0, 0.2);
        }

        .pix-icon {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: rgba(168, 85, 247, 0.12);
          color: #c4b5fd;
          font-weight: 950;
        }

        .payment-method strong {
          display: block;
          font-size: 13px;
        }

        .payment-method span {
          display: block;
          margin-top: 2px;
          color: #71717a;
          font-size: 11px;
        }

        .approved {
          margin-left: auto;
          color: #a78bfa;
          font-size: 18px;
          font-weight: 950;
        }

        .trust {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 22px;
        }

        .trust div {
          padding: 12px 5px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 11px;
          background: rgba(255, 255, 255, 0.02);
          color: #71717a;
          text-align: center;
          font-size: 9px;
          font-weight: 800;
        }

        .trust span {
          display: block;
          margin-bottom: 5px;
          font-size: 14px;
        }

        .terms {
          margin: 23px 0 0;
          color: #52525b;
          font-size: 10px;
          line-height: 1.6;
          text-align: center;
        }

        .footer {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 28px;
          color: #3f3f46;
          font-size: 10px;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 820px) {
          .checkout-page {
            padding: 15px 14px 35px;
          }

          .topbar {
            height: 60px;
          }

          .secure-top {
            display: none;
          }

          .back-area {
            padding: 25px 0 18px;
          }

          .checkout-grid {
            grid-template-columns: 1fr;
          }

          .product-card {
            min-height: auto;
          }

          .product-content,
          .payment-card {
            padding: 28px;
          }

          .product-card h1 {
            font-size: 46px;
          }

          .payment-card h2 {
            font-size: 32px;
          }
        }

        @media (max-width: 450px) {
          .trust {
            grid-template-columns: 1fr;
          }

          .footer {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </main>
  );
}
