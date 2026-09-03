"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const products: Record<
  string,
  {
    name: string;
    price: number;
    description: string;
    icon: string;
  }
> = {
  omega: {
    name: "OMEGA",
    price: 35,
    description:
      "Nossa otimização mais completa para quem busca uma experiência de desempenho superior.",
    icon: "⚡",
  },
  suprema: {
    name: "OTIMIZAÇÃO SUPREMA",
    price: 20,
    description:
      "Pacote avançado focado em desempenho, estabilidade e experiência mais fluida.",
    icon: "👑",
  },
  avancada: {
    name: "OTIMIZAÇÃO AVANÇADA",
    price: 10,
    description:
      "Uma opção equilibrada para melhorar o desempenho do Windows e dos seus jogos.",
    icon: "🚀",
  },
  basica: {
    name: "OTIMIZAÇÃO BÁSICA",
    price: 5,
    description:
      "O pacote essencial para começar sua experiência de otimização.",
    icon: "🛠️",
  },
  fivem: {
    name: "PACK FIVEM",
    price: 10,
    description:
      "Pack focado em desempenho e configurações para FiveM.",
    icon: "🎮",
  },
  sensi: {
    name: "PACK SENSI",
    price: 5,
    description:
      "Pack de configurações de sensibilidade para sua experiência de jogo.",
    icon: "🎯",
  },
};

export default function CheckoutPage() {
  const params = useSearchParams();
  const productKey = params.get("produto") || "";
  const product = products[productKey];

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generatePix() {
    setError("");

    if (!email.trim()) {
      setError("Digite seu e-mail para continuar.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Digite um e-mail válido.");
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
          email,
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
      <>
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            background: #030305;
            color: white;
            font-family:
              Inter, ui-sans-serif, system-ui, -apple-system,
              BlinkMacSystemFont, "Segoe UI", sans-serif;
          }
        `}</style>

        <main className="error-page">
          <div className="error-box">
            <div className="error-icon">⚠️</div>

            <h1>Produto não encontrado</h1>

            <p>
              O produto selecionado não existe ou o link está
              incorreto.
            </p>

            <Link href="/loja">
              Voltar para a loja →
            </Link>
          </div>

          <style jsx>{`
            .error-page {
              min-height: 100vh;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 20px;
              background:
                radial-gradient(
                  circle at 50% 20%,
                  rgba(124, 58, 237, 0.16),
                  transparent 35%
                ),
                #030305;
            }

            .error-box {
              width: 100%;
              max-width: 500px;
              text-align: center;
              padding: 50px 30px;
              border: 1px solid rgba(255,255,255,.08);
              border-radius: 25px;
              background: rgba(255,255,255,.025);
            }

            .error-icon {
              font-size: 40px;
            }

            h1 {
              margin: 20px 0 10px;
              font-size: 28px;
            }

            p {
              color: rgba(255,255,255,.4);
            }

            a {
              display: inline-block;
              margin-top: 20px;
              padding: 13px 20px;
              border-radius: 11px;
              background: #8b5cf6;
              color: white;
              font-weight: 800;
            }
          `}</style>
        </main>
      </>
    );
  }

  return (
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #030305;
          color: white;
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        ::selection {
          background: #8b5cf6;
          color: white;
        }
      `}</style>

      <main className="checkout">
        {/* BACKGROUND */}
        <div className="grid" />

        <div className="orb orb1" />
        <div className="orb orb2" />

        {/* NAVBAR */}
        <header className="navbar">
          <div className="nav-inner">
            <Link href="/loja" className="brand">
              <div className="brand-icon">⚡</div>

              <div>
                <div className="brand-name">
                  DIDDY <span>STORE</span>
                </div>

                <div className="brand-sub">
                  PERFORMANCE STORE
                </div>
              </div>
            </Link>

            <div className="secure">
              <span>●</span>
              CHECKOUT SEGURO
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <section className="content">
          <div className="breadcrumb">
            <Link href="/loja">Loja</Link>
            <span>/</span>
            <span>Checkout</span>
          </div>

          <div className="title-area">
            <div className="mini-status">
              <span />
              FINALIZAÇÃO DE PEDIDO
            </div>

            <h1>
              Finalize sua{" "}
              <strong>compra.</strong>
            </h1>

            <p>
              Confira seu pedido e informe o e-mail que será
              utilizado no processo de compra.
            </p>
          </div>

          {/* CHECKOUT GRID */}
          <div className="checkout-grid">
            {/* PRODUCT */}
            <div className="product-panel">
              <div className="panel-label">
                SEU PEDIDO
              </div>

              <div className="product-preview">
                <div className="product-glow" />

                <div className="product-icon">
                  {product.icon}
                </div>

                <div className="product-info">
                  <div className="product-category">
                    DIDDY STORE • PERFORMANCE
                  </div>

                  <h2>{product.name}</h2>

                  <p>{product.description}</p>
                </div>
              </div>

              <div className="features">
                <div>
                  <span>✓</span>
                  Produto digital
                </div>

                <div>
                  <span>✓</span>
                  Pagamento via PIX
                </div>

                <div>
                  <span>✓</span>
                  Processo automatizado
                </div>
              </div>

              <div className="price-box">
                <div>
                  <div className="price-label">
                    TOTAL DO PEDIDO
                  </div>

                  <div className="price">
                    <small>R$</small>{" "}
                    {product.price.toFixed(2).replace(".", ",")}
                  </div>
                </div>

                <div className="pix-mini">
                  <span>◆</span>
                  PIX
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="form-panel">
              <div className="panel-label">
                PAGAMENTO
              </div>

              <h2>Quase lá.</h2>

              <p className="form-description">
                Informe seu e-mail para continuar para o
                pagamento.
              </p>

              <label htmlFor="email">
                E-MAIL
              </label>

              <div className="input-wrapper">
                <span className="input-icon">
                  @
                </span>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      generatePix();
                    }
                  }}
                  placeholder="voce@email.com"
                  autoComplete="email"
                />
              </div>

              <div className="email-note">
                <span>ⓘ</span>
                Usaremos este e-mail durante o processo
                de compra.
              </div>

              {error && (
                <div className="error">
                  <span>!</span>
                  {error}
                </div>
              )}

              <button
                onClick={generatePix}
                disabled={loading}
                className="pay-button"
              >
                {loading ? (
                  <>
                    <span className="spinner" />
                    GERANDO PIX...
                  </>
                ) : (
                  <>
                    GERAR PAGAMENTO PIX
                    <span>→</span>
                  </>
                )}
              </button>

              <div className="secure-payment">
                <div className="lock">
                  🔒
                </div>

                <div>
                  <strong>Pagamento protegido</strong>
                  <span>
                    Processado com segurança pelo Mercado Pago
                  </span>
                </div>
              </div>

              <div className="accepted">
                <span>FORMAS DE PAGAMENTO</span>

                <div>
                  <div className="pix-box">
                    ◆ PIX
                  </div>

                  <div className="mp-box">
                    Mercado Pago
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEPS */}
          <div className="steps">
            <div className="step active">
              <div>1</div>
              <span>Pedido</span>
            </div>

            <i />

            <div className="step">
              <div>2</div>
              <span>PIX</span>
            </div>

            <i />

            <div className="step">
              <div>3</div>
              <span>Confirmação</span>
            </div>

            <i />

            <div className="step">
              <div>4</div>
              <span>Entrega</span>
            </div>
          </div>

          <Link href="/loja" className="back">
            ← Voltar para os produtos
          </Link>
        </section>

        <footer>
          <div>
            DIDDY <span>STORE</span>
          </div>

          <p>
            PERFORMANCE • FPS • OTIMIZAÇÃO
          </p>
        </footer>
      </main>

      <style jsx>{`
        .checkout {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(124, 58, 237, 0.16),
              transparent 35%
            ),
            radial-gradient(
              circle at 0% 50%,
              rgba(59, 130, 246, 0.07),
              transparent 30%
            ),
            #030305;
        }

        .grid {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: .035;
          background-image:
            linear-gradient(
              rgba(255,255,255,.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.5) 1px,
              transparent 1px
            );
          background-size: 55px 55px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 85%
          );
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .orb1 {
          width: 400px;
          height: 400px;
          left: -220px;
          top: 250px;
          background: rgba(124,58,237,.1);
        }

        .orb2 {
          width: 350px;
          height: 350px;
          right: -180px;
          top: 500px;
          background: rgba(37,99,235,.08);
        }

        /* NAV */

        .navbar {
          position: relative;
          z-index: 10;
          height: 76px;
          border-bottom: 1px solid rgba(255,255,255,.07);
          background: rgba(3,3,5,.65);
          backdrop-filter: blur(22px);
        }

        .nav-inner {
          width: min(1050px, calc(100% - 40px));
          height: 100%;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .brand-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid rgba(139,92,246,.3);
          background: rgba(139,92,246,.1);
          box-shadow: 0 0 30px rgba(124,58,237,.15);
        }

        .brand-name {
          font-size: 15px;
          font-weight: 950;
        }

        .brand-name span {
          color: #a78bfa;
        }

        .brand-sub {
          margin-top: 2px;
          color: rgba(255,255,255,.25);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .secure {
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(255,255,255,.3);
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .secure span {
          color: #4ade80;
          text-shadow: 0 0 10px #4ade80;
        }

        /* CONTENT */

        .content {
          position: relative;
          z-index: 5;
          width: min(1050px, calc(100% - 40px));
          margin: auto;
          padding: 45px 0 80px;
        }

        .breadcrumb {
          display: flex;
          gap: 10px;
          color: rgba(255,255,255,.22);
          font-size: 9px;
          font-weight: 800;
        }

        .breadcrumb a {
          color: #a78bfa;
        }

        .title-area {
          margin-top: 30px;
        }

        .mini-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #a78bfa;
          font-size: 8px;
          font-weight: 950;
          letter-spacing: 2px;
        }

        .mini-status span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8b5cf6;
          box-shadow: 0 0 12px #8b5cf6;
        }

        .title-area h1 {
          margin: 12px 0 0;
          font-size: clamp(38px, 6vw, 60px);
          line-height: 1;
          letter-spacing: -3px;
          font-weight: 950;
        }

        .title-area h1 strong {
          background: linear-gradient(
            90deg,
            #c4b5fd,
            #8b5cf6,
            #60a5fa
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .title-area p {
          max-width: 570px;
          margin-top: 15px;
          color: rgba(255,255,255,.35);
          font-size: 12px;
          line-height: 1.7;
        }

        /* CHECKOUT */

        .checkout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-top: 42px;
        }

        .product-panel,
        .form-panel {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.075);
          border-radius: 25px;
          background: rgba(255,255,255,.025);
          backdrop-filter: blur(20px);
        }

        .product-panel {
          padding: 27px;
        }

        .form-panel {
          padding: 27px;
          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(139,92,246,.08),
              transparent 40%
            ),
            rgba(255,255,255,.025);
        }

        .panel-label {
          color: #a78bfa;
          font-size: 8px;
          font-weight: 950;
          letter-spacing: 2px;
        }

        /* PRODUCT */

        .product-preview {
          position: relative;
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 25px;
          padding: 20px;
          border: 1px solid rgba(255,255,255,.06);
          border-radius: 18px;
          background: rgba(0,0,0,.22);
          overflow: hidden;
        }

        .product-glow {
          position: absolute;
          width: 170px;
          height: 170px;
          left: -100px;
          top: -80px;
          border-radius: 50%;
          background: rgba(139,92,246,.18);
          filter: blur(55px);
        }

        .product-icon {
          position: relative;
          flex-shrink: 0;
          width: 68px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 19px;
          border: 1px solid rgba(139,92,246,.2);
          background: linear-gradient(
            145deg,
            rgba(139,92,246,.16),
            rgba(255,255,255,.025)
          );
          font-size: 28px;
          box-shadow: 0 15px 40px rgba(124,58,237,.12);
        }

        .product-info {
          position: relative;
        }

        .product-category {
          color: rgba(255,255,255,.25);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .product-info h2 {
          margin: 6px 0 0;
          font-size: 20px;
          font-weight: 950;
        }

        .product-info p {
          margin: 6px 0 0;
          color: rgba(255,255,255,.3);
          font-size: 9px;
          line-height: 1.6;
        }

        .features {
          display: grid;
          gap: 9px;
          margin-top: 22px;
        }

        .features div {
          display: flex;
          align-items: center;
          gap: 9px;
          color: rgba(255,255,255,.38);
          font-size: 9px;
          font-weight: 700;
        }

        .features span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 6px;
          background: rgba(74,222,128,.08);
          color: #4ade80;
          font-size: 9px;
        }

        .price-box {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-top: 25px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,.06);
        }

        .price-label {
          color: rgba(255,255,255,.22);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .price {
          margin-top: 4px;
          font-size: 35px;
          line-height: 1;
          font-weight: 950;
          letter-spacing: -2px;
        }

        .price small {
          color: rgba(255,255,255,.35);
          font-size: 12px;
          letter-spacing: 0;
        }

        .pix-mini {
          padding: 8px 10px;
          border-radius: 8px;
          border: 1px solid rgba(74,222,128,.15);
          background: rgba(74,222,128,.06);
          color: #86efac;
          font-size: 8px;
          font-weight: 950;
        }

        .pix-mini span {
          margin-right: 4px;
        }

        /* FORM */

        .form-panel h2 {
          margin: 18px 0 0;
          font-size: 28px;
          letter-spacing: -1px;
          font-weight: 950;
        }

        .form-description {
          margin-top: 7px;
          color: rgba(255,255,255,.3);
          font-size: 10px;
          line-height: 1.6;
        }

        label {
          display: block;
          margin-top: 28px;
          color: rgba(255,255,255,.5);
          font-size: 8px;
          font-weight: 950;
          letter-spacing: 1.5px;
        }

        .input-wrapper {
          position: relative;
          margin-top: 9px;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #a78bfa;
          font-size: 14px;
          font-weight: 900;
        }

        input {
          width: 100%;
          height: 54px;
          padding: 0 16px 0 43px;
          border-radius: 13px;
          border: 1px solid rgba(255,255,255,.08);
          outline: none;
          background: rgba(0,0,0,.3);
          color: white;
          font-size: 12px;
          transition: .25s ease;
        }

        input::placeholder {
          color: rgba(255,255,255,.2);
        }

        input:focus {
          border-color: rgba(139,92,246,.55);
          box-shadow: 0 0 0 3px rgba(139,92,246,.08);
        }

        .email-note {
          display: flex;
          gap: 7px;
          margin-top: 9px;
          color: rgba(255,255,255,.22);
          font-size: 8px;
          line-height: 1.5;
        }

        .email-note span {
          color: #a78bfa;
        }

        .error {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 13px;
          padding: 10px 12px;
          border: 1px solid rgba(248,113,113,.15);
          border-radius: 10px;
          background: rgba(248,113,113,.07);
          color: #fca5a5;
          font-size: 9px;
        }

        .error span {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(248,113,113,.15);
          font-weight: 900;
        }

        .pay-button {
          width: 100%;
          height: 54px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 0;
          border-radius: 13px;
          background: linear-gradient(
            135deg,
            #8b5cf6,
            #6d28d9
          );
          color: white;
          font-size: 9px;
          font-weight: 950;
          letter-spacing: .8px;
          cursor: pointer;
          box-shadow:
            0 15px 45px rgba(124,58,237,.22),
            inset 0 1px rgba(255,255,255,.2);
          transition: .3s ease;
        }

        .pay-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow:
            0 20px 60px rgba(124,58,237,.35),
            inset 0 1px rgba(255,255,255,.25);
        }

        .pay-button:disabled {
          cursor: wait;
          opacity: .7;
        }

        .pay-button span:last-child {
          font-size: 15px;
        }

        .spinner {
          width: 15px;
          height: 15px;
          border: 2px solid rgba(255,255,255,.25);
          border-top-color: white;
          border-radius: 50%;
          animation: spin .7s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .secure-payment {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 18px;
          padding: 13px;
          border: 1px solid rgba(255,255,255,.05);
          border-radius: 11px;
          background: rgba(255,255,255,.02);
        }

        .lock {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: rgba(74,222,128,.07);
          font-size: 13px;
        }

        .secure-payment strong,
        .secure-payment span {
          display: block;
        }

        .secure-payment strong {
          color: rgba(255,255,255,.65);
          font-size: 8px;
        }

        .secure-payment span {
          margin-top: 3px;
          color: rgba(255,255,255,.22);
          font-size: 7px;
        }

        .accepted {
          margin-top: 22px;
        }

        .accepted > span {
          color: rgba(255,255,255,.18);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .accepted > div {
          display: flex;
          gap: 7px;
          margin-top: 8px;
        }

        .pix-box,
        .mp-box {
          padding: 7px 9px;
          border: 1px solid rgba(255,255,255,.06);
          border-radius: 7px;
          background: rgba(255,255,255,.025);
          color: rgba(255,255,255,.3);
          font-size: 7px;
          font-weight: 900;
        }

        /* STEPS */

        .steps {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 45px;
        }

        .step {
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(255,255,255,.2);
          font-size: 8px;
          font-weight: 800;
        }

        .step div {
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.08);
          font-size: 8px;
        }

        .step.active {
          color: #c4b5fd;
        }

        .step.active div {
          border-color: rgba(139,92,246,.4);
          background: rgba(139,92,246,.12);
          color: #c4b5fd;
        }

        .steps i {
          width: 45px;
          height: 1px;
          margin: 0 10px;
          background: rgba(255,255,255,.07);
        }

        .back {
          display: block;
          width: fit-content;
          margin: 30px auto 0;
          color: rgba(255,255,255,.25);
          font-size: 9px;
          font-weight: 800;
          transition: .2s;
        }

        .back:hover {
          color: #a78bfa;
        }

        footer {
          position: relative;
          z-index: 5;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          padding: 25px;
          border-top: 1px solid rgba(255,255,255,.06);
          color: rgba(255,255,255,.18);
          font-size: 8px;
          font-weight: 900;
        }

        footer span {
          color: #a78bfa;
        }

        footer p {
          margin: 0;
          font-size: 7px;
          letter-spacing: 1px;
        }

        @media (max-width: 750px) {
          .checkout-grid {
            grid-template-columns: 1fr;
          }

          .checkout-grid .form-panel {
            order: -1;
          }

          .steps i {
            width: 18px;
            margin: 0 5px;
          }
        }

        @media (max-width: 520px) {
          .nav-inner,
          .content {
            width: calc(100% - 28px);
          }

          .secure {
            display: none;
          }

          .content {
            padding-top: 30px;
          }

          .title-area h1 {
            font-size: 40px;
          }

          .product-preview {
            align-items: flex-start;
            flex-direction: column;
          }

          .steps {
            justify-content: space-between;
          }

          .step {
            flex-direction: column;
          }

          .step span {
            font-size: 7px;
          }

          .steps i {
            flex: 1;
          }

          footer {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
