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
  const [productKey, setProductKey] =
    useState<ProductKey | null>(null);

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
      setError("Digite seu e-mail para continuar.");
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
          data?.error ||
            "Não foi possível criar o pagamento."
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
      <main className="checkout-page loading-page">
        <div className="loading-orb" />

        <div className="loading-box">
          <div className="spinner" />

          <span className="loading-label">
            DIDDY STORE
          </span>

          <h1>Carregando checkout...</h1>

          <p>
            Preparando sua experiência de compra.
          </p>
        </div>

        <style jsx global>{`
          * {
            box-sizing: border-box;
          }

          html,
          body {
            margin: 0;
            padding: 0;
            background: #030106;
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
            background:
              radial-gradient(
                circle at 50% -10%,
                rgba(124, 58, 237, 0.22),
                transparent 35%
              ),
              #030106;
            color: white;
          }

          .loading-page {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }

          .loading-orb {
            position: absolute;
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: rgba(124, 58, 237, 0.15);
            filter: blur(100px);
          }

          .loading-box {
            position: relative;
            z-index: 2;
            text-align: center;
          }

          .spinner {
            width: 48px;
            height: 48px;
            margin: 0 auto 24px;
            border: 3px solid rgba(255, 255, 255, 0.08);
            border-top-color: #a855f7;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }

          .loading-label {
            color: #a855f7;
            font-size: 11px;
            font-weight: 900;
            letter-spacing: 0.3em;
          }

          .loading-box h1 {
            margin: 12px 0 0;
            font-size: 30px;
            font-weight: 900;
          }

          .loading-box p {
            margin-top: 10px;
            color: #71717a;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="grid-background" />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="checkout-container">

        {/* NAVBAR */}

        <header className="topbar">
          <Link href="/loja" className="brand">
            <span className="brand-mark">
              D
            </span>

            <span className="brand-name">
              DIDDY
              <span>STORE</span>
            </span>
          </Link>

          <div className="secure-pill">
            <span className="secure-dot" />
            <span>CHECKOUT SEGURO</span>
          </div>
        </header>

        {/* PROGRESSO */}

        <div className="progress-area">

          <div className="step active">
            <div className="step-number">1</div>

            <div>
              <strong>Produto</strong>
              <span>Selecionado</span>
            </div>
          </div>

          <div className="progress-line active-line" />

          <div className="step active">
            <div className="step-number">2</div>

            <div>
              <strong>Pagamento</strong>
              <span>PIX</span>
            </div>
          </div>

          <div className="progress-line" />

          <div className="step">
            <div className="step-number">3</div>

            <div>
              <strong>Entrega</strong>
              <span>Automática</span>
            </div>
          </div>

        </div>

        {/* VOLTAR */}

        <Link href="/loja" className="back-link">
          <span>←</span>
          Voltar para produtos
        </Link>

        {/* TÍTULO */}

        <section className="heading">
          <span className="eyebrow">
            FINALIZE SUA COMPRA
          </span>

          <h1>
            Seu próximo nível
            <span> começa aqui.</span>
          </h1>

          <p>
            Revise seu produto, informe seu e-mail
            e gere seu pagamento PIX.
          </p>
        </section>

        {/* CHECKOUT */}

        <div className="checkout-grid">

          {/* PRODUTO */}

          <section className="product-card">

            <div className="card-top-glow" />

            <div className="product-inner">

              <div className="product-header">

                <div className="product-icon">
                  {product.type === "GAMING"
                    ? "🎮"
                    : "⚡"}
                </div>

                <div>
                  <span className="small-label">
                    PRODUTO DIGITAL
                  </span>

                  <span className="product-category">
                    {product.type}
                  </span>
                </div>

              </div>

              <div className="badge">
                {product.badge}
              </div>

              <h2>{product.name}</h2>

              <p className="product-description">
                {product.description}
              </p>

              <div className="price-box">

                <span className="price-label">
                  VALOR TOTAL
                </span>

                <div className="price">
                  <small>R$</small>

                  {product.price
                    .toFixed(2)
                    .replace(".", ",")}
                </div>

                <span className="digital">
                  Produto digital
                </span>

              </div>

              <div className="divider" />

              <div className="included-title">
                O QUE VOCÊ RECEBE
              </div>

              <div className="features">

                {product.features.map((feature) => (
                  <div
                    className="feature"
                    key={feature}
                  >
                    <span className="feature-check">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </div>
                ))}

              </div>

              <div className="product-note">
                <span>✦</span>

                <p>
                  O produto é disponibilizado
                  digitalmente após a confirmação
                  do pagamento.
                </p>
              </div>

            </div>
          </section>

          {/* PAGAMENTO */}

          <section className="payment-card">

            <div className="payment-header">

              <div>
                <span className="eyebrow">
                  PAGAMENTO
                </span>

                <h2>
                  Finalizar pedido
                </h2>
              </div>

              <div className="lock-icon">
                🔒
              </div>

            </div>

            <p className="payment-description">
              Informe um e-mail válido para
              identificarmos seu pedido e
              disponibilizarmos a entrega.
            </p>

            <div className="field">

              <label htmlFor="email">
                E-MAIL
              </label>

              <div
                className={`input-wrapper ${
                  error ? "input-error" : ""
                }`}
              >
                <span className="input-icon">
                  @
                </span>

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
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="error-message">
                  <span>!</span>
                  {error}
                </div>
              )}

            </div>

            {/* MÉTODO */}

            <div className="method-title">
              MÉTODO DE PAGAMENTO
            </div>

            <div className="pix-card">

              <div className="pix-logo">
                <span>✦</span>
              </div>

              <div className="pix-info">
                <strong>PIX</strong>

                <span>
                  Pagamento instantâneo
                </span>
              </div>

              <div className="selected">
                ✓
              </div>

            </div>

            {/* BOTÃO */}

            <button
              type="button"
              className="payment-button"
              onClick={createPayment}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="button-spinner" />

                  <span>
                    Criando pagamento...
                  </span>
                </>
              ) : (
                <>
                  <span>
                    Gerar pagamento PIX
                  </span>

                  <span className="button-arrow">
                    →
                  </span>
                </>
              )}
            </button>

            {/* GARANTIAS */}

            <div className="trust-grid">

              <div className="trust-item">
                <span>🔐</span>
                <strong>Seguro</strong>
                <small>Pagamento protegido</small>
              </div>

              <div className="trust-item">
                <span>⚡</span>
                <strong>Rápido</strong>
                <small>PIX instantâneo</small>
              </div>

              <div className="trust-item">
                <span>📦</span>
                <strong>Digital</strong>
                <small>Entrega automática</small>
              </div>

            </div>

            <div className="payment-footer">

              <span className="footer-lock">
                🔒
              </span>

              <p>
                Seus dados são utilizados apenas
                para processar e identificar seu
                pedido.
              </p>

            </div>

          </section>

        </div>

        {/* RESUMO */}

        <section className="bottom-info">

          <div className="info-item">
            <span>01</span>

            <div>
              <strong>
                Escolha seu produto
              </strong>

              <p>
                Você está comprando:
                <b> {product.name}</b>
              </p>
            </div>
          </div>

          <div className="info-item">
            <span>02</span>

            <div>
              <strong>
                Pague com PIX
              </strong>

              <p>
                Gere o QR Code na próxima etapa.
              </p>
            </div>
          </div>

          <div className="info-item">
            <span>03</span>

            <div>
              <strong>
                Receba digitalmente
              </strong>

              <p>
                A entrega é liberada após
                confirmação.
              </p>
            </div>
          </div>

        </section>

        <footer className="footer">
          <span>© 2026 Diddy Store</span>
          <span className="footer-separator">•</span>
          <span>Performance • Gaming • Otimização</span>
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
          background: #030106;
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

        button,
        input {
          font: inherit;
        }

        .checkout-page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% -15%,
              rgba(124, 58, 237, 0.20),
              transparent 35%
            ),
            radial-gradient(
              circle at 5% 55%,
              rgba(168, 85, 247, 0.08),
              transparent 25%
            ),
            radial-gradient(
              circle at 95% 80%,
              rgba(124, 58, 237, 0.07),
              transparent 25%
            ),
            #030106;
          color: white;
          padding: 0 20px 60px;
        }

        .grid-background {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.22;
          background-image:
            linear-gradient(
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            );
          background-size: 55px 55px;
          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 80%
            );
        }

        .ambient {
          position: fixed;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.18;
        }

        .ambient-one {
          width: 380px;
          height: 380px;
          background: #7c3aed;
          left: -240px;
          top: 35%;
        }

        .ambient-two {
          width: 330px;
          height: 330px;
          background: #a855f7;
          right: -220px;
          bottom: 10%;
        }

        .checkout-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
        }

        /* NAVBAR */

        .topbar {
          height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid
            rgba(255,255,255,0.07);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
        }

        .brand-mark {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background:
            linear-gradient(
              135deg,
              #7c3aed,
              #a855f7
            );
          box-shadow:
            0 10px 35px
            rgba(124,58,237,0.3);
          font-size: 18px;
          font-weight: 950;
        }

        .brand-name {
          font-size: 18px;
          font-weight: 950;
          letter-spacing: -0.05em;
        }

        .brand-name span {
          color: #a855f7;
        }

        .secure-pill {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 14px;
          border: 1px solid
            rgba(255,255,255,0.08);
          border-radius: 999px;
          background:
            rgba(255,255,255,0.025);
          color: #a1a1aa;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .secure-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #a855f7;
          box-shadow:
            0 0 14px
            rgba(168,85,247,0.9);
        }

        /* PROGRESS */

        .progress-area {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 35px;
        }

        .step {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #52525b;
        }

        .step-number {
          width: 31px;
          height: 31px;
          display: grid;
          place-items: center;
          border: 1px solid
            rgba(255,255,255,0.08);
          border-radius: 50%;
          font-size: 11px;
          font-weight: 900;
        }

        .step.active {
          color: white;
        }

        .step.active .step-number {
          border-color:
            rgba(168,85,247,0.5);
          background:
            rgba(124,58,237,0.18);
          color: #c4b5fd;
          box-shadow:
            0 0 25px
            rgba(124,58,237,0.12);
        }

        .step strong,
        .step span {
          display: block;
        }

        .step strong {
          font-size: 11px;
          font-weight: 900;
        }

        .step span {
          margin-top: 2px;
          color: #52525b;
          font-size: 9px;
        }

        .active .step span {
          color: #71717a;
        }

        .progress-line {
          width: 70px;
          height: 1px;
          background:
            rgba(255,255,255,0.08);
        }

        .active-line {
          background:
            linear-gradient(
              90deg,
              rgba(124,58,237,0.7),
              rgba(168,85,247,0.15)
            );
        }

        /* BACK */

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 45px;
          color: #a78bfa;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: 0.2s;
        }

        .back-link:hover {
          color: white;
          transform: translateX(-3px);
        }

        /* HEADING */

        .heading {
          margin-top: 28px;
          text-align: center;
        }

        .eyebrow {
          color: #a855f7;
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 0.22em;
        }

        .heading h1 {
          margin: 12px 0 0;
          font-size: clamp(38px, 6vw, 62px);
          line-height: 0.98;
          letter-spacing: -0.065em;
          font-weight: 950;
        }

        .heading h1 span {
          background:
            linear-gradient(
              90deg,
              #a78bfa,
              #c084fc
            );
          -webkit-background-clip: text;
          color: transparent;
        }

        .heading p {
          max-width: 600px;
          margin: 17px auto 0;
          color: #71717a;
          font-size: 14px;
          line-height: 1.7;
        }

        /* GRID */

        .checkout-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .product-card,
        .payment-card {
          position: relative;
          overflow: hidden;
          border: 1px solid
            rgba(255,255,255,0.08);
          border-radius: 30px;
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.055),
              rgba(255,255,255,0.018)
            );
          box-shadow:
            0 35px 100px
            rgba(0,0,0,0.35),
            inset 0 1px
            rgba(255,255,255,0.04);
          backdrop-filter: blur(25px);
        }

        .product-card {
          min-height: 590px;
        }

        .card-top-glow {
          position: absolute;
          width: 400px;
          height: 250px;
          top: -180px;
          left: 30%;
          border-radius: 50%;
          background:
            rgba(124,58,237,0.22);
          filter: blur(80px);
        }

        .product-inner {
          position: relative;
          padding: 38px;
        }

        .product-header {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .product-icon {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          border: 1px solid
            rgba(168,85,247,0.2);
          border-radius: 16px;
          background:
            rgba(124,58,237,0.12);
          font-size: 22px;
          box-shadow:
            0 15px 35px
            rgba(124,58,237,0.1);
        }

        .small-label,
        .product-category {
          display: block;
        }

        .small-label {
          color: #52525b;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.16em;
        }

        .product-category {
          margin-top: 4px;
          color: #a78bfa;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .badge {
          display: inline-flex;
          margin-top: 30px;
          padding: 8px 12px;
          border: 1px solid
            rgba(168,85,247,0.2);
          border-radius: 999px;
          background:
            rgba(124,58,237,0.1);
          color: #c4b5fd;
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 0.04em;
        }

        .product-inner h2 {
          margin: 17px 0 0;
          font-size: clamp(38px, 5vw, 55px);
          line-height: 0.98;
          letter-spacing: -0.06em;
          font-weight: 950;
        }

        .product-description {
          max-width: 480px;
          margin: 17px 0 0;
          color: #a1a1aa;
          font-size: 14px;
          line-height: 1.7;
        }

        .price-box {
          margin-top: 27px;
          padding: 19px;
          border: 1px solid
            rgba(255,255,255,0.06);
          border-radius: 18px;
          background:
            rgba(0,0,0,0.18);
        }

        .price-label {
          display: block;
          color: #52525b;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.15em;
        }

        .price {
          display: flex;
          align-items: flex-start;
          margin-top: 6px;
          color: white;
          font-size: 45px;
          line-height: 1;
          letter-spacing: -0.06em;
          font-weight: 950;
        }

        .price small {
          margin-top: 7px;
          margin-right: 7px;
          color: #a78bfa;
          font-size: 14px;
          letter-spacing: 0;
        }

        .digital {
          display: block;
          margin-top: 7px;
          color: #52525b;
          font-size: 10px;
        }

        .divider {
          height: 1px;
          margin: 27px 0;
          background:
            rgba(255,255,255,0.07);
        }

        .included-title,
        .method-title {
          color: #71717a;
          font-size: 9px;
          font-weight: 950;
          letter-spacing: 0.17em;
        }

        .features {
          display: grid;
          gap: 12px;
          margin-top: 17px;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #d4d4d8;
          font-size: 13px;
        }

        .feature-check {
          width: 23px;
          height: 23px;
          flex: 0 0 23px;
          display: grid;
          place-items: center;
          border: 1px solid
            rgba(168,85,247,0.2);
          border-radius: 50%;
          background:
            rgba(124,58,237,0.12);
          color: #c4b5fd;
          font-size: 11px;
          font-weight: 950;
        }

        .product-note {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid
            rgba(255,255,255,0.06);
        }

        .product-note span {
          color: #a855f7;
        }

        .product-note p {
          margin: 0;
          color: #52525b;
          font-size: 10px;
          line-height: 1.6;
        }

        /* PAYMENT */

        .payment-card {
          padding: 38px;
        }

        .payment-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .payment-card h2 {
          margin: 9px 0 0;
          font-size: 35px;
          line-height: 1;
          letter-spacing: -0.05em;
          font-weight: 950;
        }

        .lock-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border: 1px solid
            rgba(255,255,255,0.07);
          border-radius: 13px;
          background:
            rgba(255,255,255,0.025);
          font-size: 17px;
        }

        .payment-description {
          margin: 17px 0 30px;
          color: #71717a;
          font-size: 13px;
          line-height: 1.7;
        }

        .field label {
          display: block;
          margin-bottom: 9px;
          color: #a1a1aa;
          font-size: 9px;
          font-weight: 950;
          letter-spacing: 0.15em;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          height: 57px;
          border: 1px solid
            rgba(255,255,255,0.09);
          border-radius: 15px;
          background:
            rgba(0,0,0,0.25);
          transition: 0.2s;
        }

        .input-wrapper:focus-within {
          border-color:
            rgba(168,85,247,0.65);
          box-shadow:
            0 0 0 4px
            rgba(124,58,237,0.09),
            0 10px 35px
            rgba(124,58,237,0.07);
        }

        .input-wrapper.input-error {
          border-color:
            rgba(239,68,68,0.5);
        }

        .input-icon {
          width: 48px;
          color: #71717a;
          text-align: center;
          font-size: 18px;
          font-weight: 700;
        }

        .input-wrapper input {
          width: 100%;
          height: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: white;
          padding-right: 16px;
          font-size: 14px;
        }

        .input-wrapper input::placeholder {
          color: #3f3f46;
        }

        .input-wrapper input:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 10px;
          padding: 10px 12px;
          border: 1px solid
            rgba(239,68,68,0.15);
          border-radius: 10px;
          background:
            rgba(239,68,68,0.07);
          color: #fca5a5;
          font-size: 11px;
          font-weight: 700;
        }

        .error-message span {
          width: 18px;
          height: 18px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background:
            rgba(239,68,68,0.15);
          font-weight: 950;
        }

        .method-title {
          margin-top: 27px;
        }

        .pix-card {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 10px;
          padding: 14px;
          border: 1px solid
            rgba(168,85,247,0.35);
          border-radius: 16px;
          background:
            linear-gradient(
              135deg,
              rgba(124,58,237,0.12),
              rgba(124,58,237,0.035)
            );
          box-shadow:
            inset 0 1px
            rgba(255,255,255,0.03);
        }

        .pix-logo {
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background:
            linear-gradient(
              135deg,
              #7c3aed,
              #9333ea
            );
          color: white;
          font-size: 18px;
          box-shadow:
            0 10px 30px
            rgba(124,58,237,0.25);
        }

        .pix-info strong,
        .pix-info span {
          display: block;
        }

        .pix-info strong {
          font-size: 13px;
          font-weight: 950;
        }

        .pix-info span {
          margin-top: 3px;
          color: #71717a;
          font-size: 10px;
        }

        .selected {
          width: 23px;
          height: 23px;
          display: grid;
          place-items: center;
          margin-left: auto;
          border-radius: 50%;
          background: #7c3aed;
          color: white;
          font-size: 11px;
          font-weight: 950;
        }

        /* BUTTON */

        .payment-button {
          position: relative;
          width: 100%;
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 18px;
          overflow: hidden;
          border: 0;
          border-radius: 16px;
          background:
            linear-gradient(
              135deg,
              #7c3aed,
              #9333ea
            );
          color: white;
          cursor: pointer;
          font-size: 13px;
          font-weight: 950;
          box-shadow:
            0 18px 50px
            rgba(124,58,237,0.2);
          transition:
            transform 0.2s,
            box-shadow 0.2s,
            opacity 0.2s;
        }

        .payment-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              110deg,
              transparent 20%,
              rgba(255,255,255,0.13) 50%,
              transparent 80%
            );
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .payment-button:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow:
            0 24px 60px
            rgba(124,58,237,0.32);
        }

        .payment-button:hover:not(:disabled)::before {
          transform: translateX(100%);
        }

        .payment-button:active:not(:disabled) {
          transform: translateY(-1px);
        }

        .payment-button:disabled {
          cursor: not-allowed;
          opacity: 0.65;
        }

        .button-arrow {
          font-size: 20px;
          transition: transform 0.2s;
        }

        .payment-button:hover
          .button-arrow {
          transform: translateX(4px);
        }

        .button-spinner {
          width: 19px;
          height: 19px;
          border: 2px solid
            rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        /* TRUST */

        .trust-grid {
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 8px;
          margin-top: 18px;
        }

        .trust-item {
          padding: 13px 7px;
          border: 1px solid
            rgba(255,255,255,0.05);
          border-radius: 13px;
          background:
            rgba(255,255,255,0.018);
          text-align: center;
        }

        .trust-item > span {
          display: block;
          margin-bottom: 6px;
          font-size: 15px;
        }

        .trust-item strong,
        .trust-item small {
          display: block;
        }

        .trust-item strong {
          color: #d4d4d8;
          font-size: 9px;
          font-weight: 900;
        }

        .trust-item small {
          margin-top: 3px;
          color: #52525b;
          font-size: 8px;
        }

        .payment-footer {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-top: 19px;
          padding-top: 17px;
          border-top: 1px solid
            rgba(255,255,255,0.06);
        }

        .footer-lock {
          font-size: 11px;
        }

        .payment-footer p {
          margin: 0;
          color: #52525b;
          font-size: 9px;
          line-height: 1.6;
        }

        /* BOTTOM INFO */

        .bottom-info {
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 10px;
          margin-top: 18px;
        }

        .info-item {
          display: flex;
          gap: 13px;
          padding: 18px;
          border: 1px solid
            rgba(255,255,255,0.06);
          border-radius: 18px;
          background:
            rgba(255,255,255,0.018);
        }

        .info-item > span {
          color: #a855f7;
          font-size: 10px;
          font-weight: 950;
        }

        .info-item strong {
          display: block;
          color: #d4d4d8;
          font-size: 11px;
          font-weight: 900;
        }

        .info-item p {
          margin: 5px 0 0;
          color: #52525b;
          font-size: 9px;
          line-height: 1.5;
        }

        .info-item p b {
          color: #71717a;
        }

        /* FOOTER */

        .footer {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 35px;
          color: #3f3f46;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.03em;
        }

        .footer-separator {
          color: #27272a;
        }

        /* RESPONSIVO */

        @media (max-width: 850px) {

          .checkout-page {
            padding-left: 14px;
            padding-right: 14px;
          }

          .checkout-grid {
            grid-template-columns: 1fr;
          }

          .product-card {
            min-height: auto;
          }

          .bottom-info {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 600px) {

          .topbar {
            height: 68px;
          }

          .secure-pill {
            display: none;
          }

          .progress-area {
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 3px;
          }

          .progress-line {
            width: 35px;
            flex: 0 0 35px;
          }

          .step {
            flex: 0 0 auto;
          }

          .step div:last-child {
            display: none;
          }

          .back-link {
            margin-top: 30px;
          }

          .heading {
            text-align: left;
          }

          .heading p {
            margin-left: 0;
          }

          .product-inner,
          .payment-card {
            padding: 25px;
          }

          .product-inner h2 {
            font-size: 42px;
          }

          .payment-card h2 {
            font-size: 31px;
          }

          .trust-grid {
            grid-template-columns: 1fr;
          }

          .trust-item {
            display: flex;
            align-items: center;
            gap: 10px;
            text-align: left;
          }

          .trust-item > span {
            margin: 0;
          }

          .trust-item strong,
          .trust-item small {
            display: inline;
          }

          .trust-item small {
            margin-left: 5px;
          }

          .footer {
            flex-wrap: wrap;
            text-align: center;
          }

        }

        @media (max-width: 400px) {

          .product-inner,
          .payment-card {
            padding: 20px;
          }

          .product-inner h2 {
            font-size: 37px;
          }

          .price {
            font-size: 40px;
          }

          .heading h1 {
            font-size: 37px;
          }

        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

      `}</style>
    </main>
  );
}
