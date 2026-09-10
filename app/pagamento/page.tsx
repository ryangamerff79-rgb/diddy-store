"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type PaymentData = {
  paymentId?: string;
  status?: string;
  externalReference?: string;
  qrCode?: string;
  qrCodeBase64?: string;
  ticketUrl?: string;
  orderId?: string;
};

export default function Pagamento() {
  const [payment, setPayment] =
    useState<PaymentData | null>(null);

  const [status, setStatus] =
    useState("pending");

  const [copied, setCopied] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    try {
      const stored =
        sessionStorage.getItem("diddy_payment");

      if (!stored) {
        setError("Pagamento não encontrado.");
        return;
      }

      const data = JSON.parse(stored);

      setPayment(data);
      setStatus(data.status || "pending");
    } catch {
      setError("Não foi possível carregar o pagamento.");
    }
  }, []);

  useEffect(() => {
    if (!payment?.orderId) return;

    const checkPayment = async () => {
      try {
        const response = await fetch(
          `/api/pedido?id=${payment.orderId}`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) return;

        const order = await response.json();

        setStatus(order.status);

        if (order.approved) {
          window.location.href =
            `/entrega?id=${order.id}`;
        }
      } catch {
        // Continua verificando
      }
    };

    checkPayment();

    const interval = setInterval(
      checkPayment,
      4000
    );

    return () => clearInterval(interval);
  }, [payment?.orderId]);

  function copyPix() {
    if (!payment?.qrCode) return;

    navigator.clipboard
      .writeText(payment.qrCode)
      .then(() => {
        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 2500);
      })
      .catch(() => {
        setError(
          "Não foi possível copiar o código PIX."
        );
      });
  }

  if (error) {
    return (
      <main className="pix-page">
        <div className="background-grid" />

        <div className="error-container">
          <div className="error-icon">!</div>

          <span className="brand-mini">
            DIDDY STORE
          </span>

          <h1>Pagamento não encontrado</h1>

          <p>{error}</p>

          <Link
            href="/loja"
            className="back-button"
          >
            Voltar para a loja
          </Link>
        </div>

        <style jsx global>{styles}</style>
      </main>
    );
  }

  if (!payment) {
    return (
      <main className="pix-page">
        <div className="background-grid" />

        <div className="loading-container">
          <div className="big-spinner" />

          <span>
            PREPARANDO PAGAMENTO
          </span>

          <h1>Carregando PIX...</h1>

          <p>
            Aguarde enquanto preparamos seu pagamento.
          </p>
        </div>

        <style jsx global>{styles}</style>
      </main>
    );
  }

  const approved = status === "approved";

  return (
    <main className="pix-page">
      <div className="background-grid" />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <div className="pix-container">

        {/* HEADER */}

        <header className="topbar">

          <Link
            href="/loja"
            className="brand"
          >
            <span className="brand-mark">
              D
            </span>

            <span className="brand-text">
              DIDDY
              <span>STORE</span>
            </span>
          </Link>

          <div className="security">
            <span className="security-dot" />
            PAGAMENTO SEGURO
          </div>

        </header>

        {/* STEPS */}

        <div className="steps">

          <div className="step done">
            <span>✓</span>
            <div>
              <strong>Produto</strong>
              <small>Selecionado</small>
            </div>
          </div>

          <div className="step-line active" />

          <div className="step current">
            <span>2</span>
            <div>
              <strong>PIX</strong>
              <small>Pagamento</small>
            </div>
          </div>

          <div className="step-line" />

          <div className="step">
            <span>3</span>
            <div>
              <strong>Entrega</strong>
              <small>Automática</small>
            </div>
          </div>

        </div>

        {/* TITLE */}

        <section className="hero">

          <span className="eyebrow">
            PAGAMENTO PIX
          </span>

          <h1>
            Finalize seu
            <span> pagamento.</span>
          </h1>

          <p>
            Escaneie o QR Code ou copie o código
            PIX para concluir sua compra.
          </p>

        </section>

        {/* STATUS */}

        <div
          className={
            approved
              ? "status approved-status"
              : "status waiting-status"
          }
        >

          <div className="status-icon">
            {approved ? "✓" : "↻"}
          </div>

          <div>
            <strong>
              {approved
                ? "Pagamento aprovado!"
                : "Aguardando pagamento"}
            </strong>

            <span>
              {approved
                ? "Sua compra está sendo preparada."
                : "Após a confirmação, sua entrega será liberada."}
            </span>
          </div>

          {!approved && (
            <div className="status-pulse" />
          )}

        </div>

        {/* MAIN */}

        <div className="pix-grid">

          {/* QR */}

          <section className="qr-card">

            <div className="card-heading">

              <div>
                <span className="card-label">
                  PAGUE COM
                </span>

                <h2>QR Code PIX</h2>
              </div>

              <div className="pix-symbol">
                ✦
              </div>

            </div>

            <div className="qr-wrapper">

              {payment.qrCodeBase64 ? (
                <img
                  src={`data:image/png;base64,${payment.qrCodeBase64}`}
                  alt="QR Code PIX"
                />
              ) : (
                <div className="qr-placeholder">
                  QR Code indisponível
                </div>
              )}

            </div>

            <div className="scan-info">
              <span>📱</span>

              <div>
                <strong>
                  Abra o aplicativo do seu banco
                </strong>

                <p>
                  Escolha a opção PIX e escaneie
                  o QR Code acima.
                </p>
              </div>
            </div>

          </section>

          {/* COPIA E COLA */}

          <section className="details-card">

            <span className="card-label">
              PIX COPIA E COLA
            </span>

            <h2>
              Ou use o código
            </h2>

            <p className="details-description">
              Copie o código abaixo e cole no
              aplicativo do seu banco.
            </p>

            <div className="code-box">

              <textarea
                readOnly
                value={
                  payment.qrCode ||
                  "Código PIX indisponível."
                }
                aria-label="Código PIX"
              />

            </div>

            <button
              type="button"
              className={
                copied
                  ? "copy-button copied"
                  : "copy-button"
              }
              onClick={copyPix}
              disabled={!payment.qrCode}
            >
              <span>
                {copied ? "✓" : "⧉"}
              </span>

              {copied
                ? "Código copiado!"
                : "Copiar código PIX"}
            </button>

            {payment.ticketUrl && (
              <a
                href={payment.ticketUrl}
                target="_blank"
                rel="noreferrer"
                className="ticket-link"
              >
                Abrir página de pagamento →
              </a>
            )}

            <div className="order-info">

              <div>
                <span>ID DO PAGAMENTO</span>

                <strong>
                  {payment.paymentId || "—"}
                </strong>
              </div>

              <div>
                <span>STATUS</span>

                <strong className="status-text">
                  {approved
                    ? "APROVADO"
                    : "PENDENTE"}
                </strong>
              </div>

            </div>

          </section>

        </div>

        {/* INSTRUCTIONS */}

        <section className="instructions">

          <div className="instruction-title">

            <span>COMO PAGAR</span>

            <h2>
              É rápido e simples.
            </h2>

          </div>

          <div className="instruction-grid">

            <div className="instruction">
              <div className="instruction-number">
                01
              </div>

              <div>
                <strong>
                  Abra seu banco
                </strong>

                <p>
                  Entre no aplicativo do seu
                  banco ou carteira digital.
                </p>
              </div>
            </div>

            <div className="instruction">
              <div className="instruction-number">
                02
              </div>

              <div>
                <strong>
                  Escolha PIX
                </strong>

                <p>
                  Selecione a opção de pagamento
                  por PIX.
                </p>
              </div>
            </div>

            <div className="instruction">
              <div className="instruction-number">
                03
              </div>

              <div>
                <strong>
                  Confirme o pagamento
                </strong>

                <p>
                  Confira os dados e confirme
                  a transação.
                </p>
              </div>
            </div>

          </div>

        </section>

        {/* WAITING */}

        {!approved && (
          <div className="waiting-box">

            <div className="waiting-spinner" />

            <div>
              <strong>
                Aguardando confirmação
              </strong>

              <p>
                Esta página verifica automaticamente
                a confirmação do pagamento.
              </p>
            </div>

          </div>
        )}

        {/* FOOTER */}

        <footer className="footer">

          <span>© 2026 Diddy Store</span>

          <span>•</span>

          <span>
            Performance • Gaming • Otimização
          </span>

        </footer>

      </div>

      <style jsx global>{styles}</style>
    </main>
  );
}

const styles = `

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
textarea {
  font: inherit;
}

.pix-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: 0 20px 60px;
  background:
    radial-gradient(
      circle at 50% -10%,
      rgba(124,58,237,0.22),
      transparent 35%
    ),
    radial-gradient(
      circle at 5% 50%,
      rgba(168,85,247,0.08),
      transparent 25%
    ),
    #030106;
  color: white;
}

.background-grid {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.2;
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
  filter: blur(120px);
  opacity: 0.16;
}

.ambient-one {
  width: 400px;
  height: 400px;
  left: -260px;
  top: 35%;
  background: #7c3aed;
}

.ambient-two {
  width: 350px;
  height: 350px;
  right: -240px;
  bottom: 10%;
  background: #a855f7;
}

.pix-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
}

/* HEADER */

.topbar {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid
    rgba(255,255,255,0.07);
}

.brand {
  display: flex;
  align-items: center;
  gap: 11px;
  color: white;
  text-decoration: none;
}

.brand-mark {
  width: 37px;
  height: 37px;
  display: grid;
  place-items: center;
  border-radius: 11px;
  background:
    linear-gradient(
      135deg,
      #7c3aed,
      #a855f7
    );
  box-shadow:
    0 10px 35px
    rgba(124,58,237,0.3);
  font-weight: 950;
}

.brand-text {
  font-size: 17px;
  font-weight: 950;
  letter-spacing: -0.05em;
}

.brand-text span {
  color: #a855f7;
}

.security {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 13px;
  border: 1px solid
    rgba(255,255,255,0.07);
  border-radius: 999px;
  color: #71717a;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.security-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #a855f7;
  box-shadow:
    0 0 12px
    rgba(168,85,247,0.8);
}

/* STEPS */

.steps {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
}

.step {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #52525b;
}

.step > span {
  width: 29px;
  height: 29px;
  display: grid;
  place-items: center;
  border: 1px solid
    rgba(255,255,255,0.08);
  border-radius: 50%;
  font-size: 10px;
  font-weight: 950;
}

.step strong,
.step small {
  display: block;
}

.step strong {
  font-size: 10px;
}

.step small {
  margin-top: 2px;
  color: #3f3f46;
  font-size: 8px;
}

.step.current,
.step.done {
  color: white;
}

.step.current > span {
  background:
    rgba(124,58,237,0.2);
  border-color:
    rgba(168,85,247,0.5);
  color: #c4b5fd;
}

.step.done > span {
  background:
    #7c3aed;
  border-color:
    #7c3aed;
  color: white;
}

.step-line {
  width: 65px;
  height: 1px;
  background:
    rgba(255,255,255,0.08);
}

.step-line.active {
  background:
    linear-gradient(
      90deg,
      #7c3aed,
      rgba(168,85,247,0.15)
    );
}

/* HERO */

.hero {
  margin-top: 55px;
  text-align: center;
}

.eyebrow,
.card-label {
  color: #a855f7;
  font-size: 9px;
  font-weight: 950;
  letter-spacing: 0.22em;
}

.hero h1 {
  margin: 12px 0 0;
  font-size: clamp(40px, 6vw, 62px);
  line-height: 0.95;
  letter-spacing: -0.065em;
  font-weight: 950;
}

.hero h1 span {
  background:
    linear-gradient(
      90deg,
      #a78bfa,
      #c084fc
    );
  -webkit-background-clip: text;
  color: transparent;
}

.hero p {
  max-width: 560px;
  margin: 17px auto 0;
  color: #71717a;
  font-size: 13px;
  line-height: 1.7;
}

/* STATUS */

.status {
  display: flex;
  align-items: center;
  gap: 13px;
  max-width: 760px;
  margin: 30px auto 0;
  padding: 14px 17px;
  border: 1px solid
    rgba(255,255,255,0.07);
  border-radius: 17px;
  background:
    rgba(255,255,255,0.025);
}

.status-icon {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background:
    rgba(124,58,237,0.15);
  color: #c4b5fd;
  font-weight: 950;
}

.status strong,
.status span {
  display: block;
}

.status strong {
  font-size: 12px;
}

.status span {
  margin-top: 3px;
  color: #71717a;
  font-size: 10px;
}

.status-pulse {
  width: 8px;
  height: 8px;
  margin-left: auto;
  border-radius: 50%;
  background: #a855f7;
  box-shadow:
    0 0 0 0
    rgba(168,85,247,0.5);
  animation: pulse 1.6s infinite;
}

.approved-status {
  border-color:
    rgba(168,85,247,0.3);
}

@keyframes pulse {
  70% {
    box-shadow:
      0 0 0 9px
      rgba(168,85,247,0);
  }
}

/* GRID */

.pix-grid {
  display: grid;
  grid-template-columns:
    1fr 1fr;
  gap: 18px;
  margin-top: 18px;
}

.qr-card,
.details-card {
  border: 1px solid
    rgba(255,255,255,0.08);
  border-radius: 27px;
  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,0.055),
      rgba(255,255,255,0.018)
    );
  box-shadow:
    0 35px 100px
    rgba(0,0,0,0.3),
    inset 0 1px
    rgba(255,255,255,0.04);
  backdrop-filter: blur(25px);
}

.qr-card {
  padding: 31px;
}

.details-card {
  padding: 31px;
}

.card-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.qr-card h2,
.details-card h2 {
  margin: 8px 0 0;
  font-size: 27px;
  letter-spacing: -0.045em;
  font-weight: 950;
}

.pix-symbol {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background:
    linear-gradient(
      135deg,
      #7c3aed,
      #9333ea
    );
  box-shadow:
    0 10px 30px
    rgba(124,58,237,0.22);
}

.qr-wrapper {
  width: min(290px, 100%);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  margin: 25px auto 20px;
  padding: 14px;
  border-radius: 22px;
  background: white;
  box-shadow:
    0 25px 60px
    rgba(0,0,0,0.3);
}

.qr-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
}

.qr-placeholder {
  color: #71717a;
  font-size: 11px;
}

.scan-info {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 13px;
  border: 1px solid
    rgba(255,255,255,0.06);
  border-radius: 14px;
  background:
    rgba(0,0,0,0.18);
}

.scan-info > span {
  font-size: 16px;
}

.scan-info strong {
  display: block;
  color: #d4d4d8;
  font-size: 10px;
}

.scan-info p {
  margin: 4px 0 0;
  color: #52525b;
  font-size: 9px;
  line-height: 1.5;
}

/* DETAILS */

.details-description {
  margin: 12px 0 20px;
  color: #71717a;
  font-size: 11px;
  line-height: 1.6;
}

.code-box {
  padding: 10px;
  border: 1px solid
    rgba(255,255,255,0.07);
  border-radius: 15px;
  background: #020103;
}

.code-box textarea {
  width: 100%;
  height: 105px;
  display: block;
  resize: none;
  border: 0;
  outline: 0;
  background: transparent;
  color: #a1a1aa;
  font-size: 9px;
  line-height: 1.6;
  word-break: break-all;
}

.copy-button {
  width: 100%;
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  margin-top: 11px;
  border: 0;
  border-radius: 14px;
  background:
    linear-gradient(
      135deg,
      #7c3aed,
      #9333ea
    );
  color: white;
  cursor: pointer;
  font-size: 11px;
  font-weight: 950;
  box-shadow:
    0 14px 35px
    rgba(124,58,237,0.18);
  transition: 0.2s;
}

.copy-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow:
    0 18px 45px
    rgba(124,58,237,0.3);
}

.copy-button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.copy-button.copied {
  background:
    linear-gradient(
      135deg,
      #6d28d9,
      #7c3aed
    );
}

.ticket-link {
  display: block;
  margin-top: 12px;
  color: #a78bfa;
  text-align: center;
  text-decoration: none;
  font-size: 9px;
  font-weight: 800;
}

.ticket-link:hover {
  color: white;
}

.order-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid
    rgba(255,255,255,0.06);
}

.order-info div {
  padding: 12px;
  border-radius: 12px;
  background:
    rgba(255,255,255,0.02);
}

.order-info span,
.order-info strong {
  display: block;
}

.order-info span {
  color: #52525b;
  font-size: 7px;
  font-weight: 900;
  letter-spacing: 0.12em;
}

.order-info strong {
  margin-top: 5px;
  color: #a1a1aa;
  font-size: 9px;
  word-break: break-all;
}

.order-info .status-text {
  color: #c4b5fd;
}

/* INSTRUCTIONS */

.instructions {
  margin-top: 18px;
  padding: 27px 30px;
  border: 1px solid
    rgba(255,255,255,0.06);
  border-radius: 23px;
  background:
    rgba(255,255,255,0.018);
}

.instruction-title span {
  color: #71717a;
  font-size: 8px;
  font-weight: 950;
  letter-spacing: 0.18em;
}

.instruction-title h2 {
  margin: 7px 0 0;
  font-size: 23px;
  letter-spacing: -0.04em;
  font-weight: 950;
}

.instruction-grid {
  display: grid;
  grid-template-columns:
    repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
}

.instruction {
  display: flex;
  gap: 11px;
  padding: 15px;
  border: 1px solid
    rgba(255,255,255,0.05);
  border-radius: 15px;
  background:
    rgba(0,0,0,0.12);
}

.instruction-number {
  color: #a855f7;
  font-size: 9px;
  font-weight: 950;
}

.instruction strong {
  display: block;
  color: #d4d4d8;
  font-size: 10px;
}

.instruction p {
  margin: 5px 0 0;
  color: #52525b;
  font-size: 9px;
  line-height: 1.5;
}

/* WAITING */

.waiting-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 18px;
  padding: 17px;
  border: 1px solid
    rgba(168,85,247,0.12);
  border-radius: 17px;
  background:
    rgba(124,58,237,0.045);
}

.waiting-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid
    rgba(168,85,247,0.18);
  border-top-color: #a855f7;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.waiting-box strong,
.waiting-box p {
  display: block;
}

.waiting-box strong {
  font-size: 10px;
}

.waiting-box p {
  margin: 3px 0 0;
  color: #52525b;
  font-size: 9px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ERROR */

.error-container,
.loading-container {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.error-icon {
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background:
    rgba(239,68,68,0.1);
  color: #fca5a5;
  font-size: 24px;
  font-weight: 950;
}

.brand-mini {
  margin-top: 20px;
  color: #a855f7;
  font-size: 9px;
  font-weight: 950;
  letter-spacing: 0.2em;
}

.error-container h1,
.loading-container h1 {
  margin: 10px 0 0;
  font-size: 30px;
  font-weight: 950;
}

.error-container p,
.loading-container p {
  max-width: 400px;
  margin: 10px 0 0;
  color: #71717a;
  font-size: 12px;
  line-height: 1.6;
}

.back-button {
  margin-top: 25px;
  padding: 13px 20px;
  border-radius: 13px;
  background: #7c3aed;
  color: white;
  text-decoration: none;
  font-size: 11px;
  font-weight: 900;
}

.big-spinner {
  width: 45px;
  height: 45px;
  margin-bottom: 20px;
  border: 3px solid
    rgba(255,255,255,0.08);
  border-top-color: #a855f7;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.loading-container > span {
  color: #a855f7;
  font-size: 9px;
  font-weight: 950;
  letter-spacing: 0.2em;
}

/* FOOTER */

.footer {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
  color: #3f3f46;
  font-size: 9px;
}

/* MOBILE */

@media (max-width: 800px) {

  .pix-page {
    padding-left: 14px;
    padding-right: 14px;
  }

  .pix-grid {
    grid-template-columns: 1fr;
  }

  .instruction-grid {
    grid-template-columns: 1fr;
  }

}

@media (max-width: 560px) {

  .topbar {
    height: 68px;
  }

  .security {
    display: none;
  }

  .steps {
    justify-content: flex-start;
    overflow-x: auto;
  }

  .step div:last-child {
    display: none;
  }

  .step-line {
    width: 30px;
    flex: 0 0 30px;
  }

  .hero {
    margin-top: 42px;
    text-align: left;
  }

  .hero p {
    margin-left: 0;
  }

  .status {
    align-items: flex-start;
  }

  .qr-card,
  .details-card {
    padding: 22px;
    border-radius: 22px;
  }

  .qr-card h2,
  .details-card h2 {
    font-size: 24px;
  }

  .instructions {
    padding: 22px;
  }

  .order-info {
    grid-template-columns: 1fr;
  }

  .footer {
    flex-wrap: wrap;
    text-align: center;
  }

}

`;
