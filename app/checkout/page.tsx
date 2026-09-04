import Link from "next/link";

const products = {
  omega: {
    name: "OMEGA",
    price: 35,
    description: "Nossa otimização mais completa para máximo desempenho.",
    badge: "🔥 MAIS VENDIDO",
    features: [
      "Pacote completo de otimização",
      "Configurações focadas em desempenho",
      "Ajustes para uma experiência mais fluida",
    ],
  },

  suprema: {
    name: "Otimização Suprema",
    price: 20,
    description: "Pacote avançado focado em desempenho e estabilidade.",
    badge: "⭐ RECOMENDADO",
    features: [
      "Otimização avançada",
      "Configurações de desempenho",
      "Foco em estabilidade",
    ],
  },

  avancada: {
    name: "Otimização Avançada",
    price: 10,
    description: "Uma opção equilibrada para melhorar o desempenho do PC.",
    badge: "⚡ EQUILIBRADA",
    features: [
      "Otimização do sistema",
      "Configurações de desempenho",
      "Pacote intermediário",
    ],
  },

  basica: {
    name: "Otimização Básica",
    price: 5,
    description: "O pacote essencial para começar a otimizar seu Windows.",
    badge: "🚀 ESSENCIAL",
    features: [
      "Otimização básica",
      "Configurações essenciais",
      "Ideal para começar",
    ],
  },

  fivem: {
    name: "Pack FiveM",
    price: 10,
    description: "Pack focado em desempenho e configurações para FiveM.",
    badge: "🎮 FIVEM",
    features: [
      "Configurações focadas em FiveM",
      "Ajustes de desempenho",
      "Experiência mais fluida",
    ],
  },

  sensi: {
    name: "Pack Sensi",
    price: 5,
    description: "Pack de configurações de sensibilidade.",
    badge: "🎯 GAMING",
    features: [
      "Configurações de sensibilidade",
      "Perfil para jogos",
      "Pacote rápido e simples",
    ],
  },
};

type ProductKey = keyof typeof products;

export default async function Checkout({
  searchParams,
}: {
  searchParams: Promise<{ produto?: string }>;
}) {
  const params = await searchParams;
  const productKey = params.produto as ProductKey | undefined;

  const product = productKey ? products[productKey] : undefined;

  if (!product) {
    return (
      <main className="checkout-page">
        <div className="checkout-container">
          <div className="error-card">
            <div className="error-icon">!</div>

            <h1>Produto não encontrado</h1>

            <p>
              O produto selecionado não existe ou o link está incorreto.
            </p>

            <Link href="/loja" className="back-button">
              ← Voltar para a loja
            </Link>
          </div>
        </div>

        <style jsx>{`
          .checkout-page {
            min-height: 100vh;
            background:
              radial-gradient(
                circle at 50% 0%,
                rgba(124, 58, 237, 0.18),
                transparent 35%
              ),
              #050208;
            color: white;
            padding: 120px 20px 60px;
          }

          .checkout-container {
            max-width: 900px;
            margin: 0 auto;
          }

          .error-card {
            text-align: center;
            padding: 70px 30px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 28px;
            background: rgba(255, 255, 255, 0.035);
            backdrop-filter: blur(20px);
          }

          .error-icon {
            width: 60px;
            height: 60px;
            margin: 0 auto 20px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background: rgba(239, 68, 68, 0.15);
            color: #f87171;
            font-size: 30px;
            font-weight: 900;
          }

          h1 {
            font-size: 38px;
            margin: 0 0 12px;
          }

          p {
            color: #a1a1aa;
            margin-bottom: 30px;
          }

          .back-button {
            display: inline-block;
            padding: 14px 22px;
            border-radius: 12px;
            background: #7c3aed;
            color: white;
            text-decoration: none;
            font-weight: 800;
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <Link href="/loja" className="back-link">
          ← Voltar para a loja
        </Link>

        <div className="checkout-grid">
          <section className="product-card">
            <div className="badge">{product.badge}</div>

            <p className="eyebrow">SEU PEDIDO</p>

            <h1>{product.name}</h1>

            <p className="description">{product.description}</p>

            <div className="price">
              <span>R$</span>
              {product.price.toFixed(2).replace(".", ",")}
            </div>

            <div className="divider" />

            <h2>O que está incluso</h2>

            <div className="features">
              {product.features.map((feature) => (
                <div className="feature" key={feature}>
                  <span>✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </section>

          <section className="payment-card">
            <div className="secure">
              <span>🔒</span>
              CHECKOUT SEGURO
            </div>

            <h2>Finalizar compra</h2>

            <p className="payment-description">
              Informe seu e-mail para receber as instruções de pagamento e
              acompanhar seu pedido.
            </p>

            <label htmlFor="email">E-mail</label>

            <input
              id="email"
              type="email"
              placeholder="voce@email.com"
            />

            <button type="button" className="payment-button">
              Continuar para pagamento →
            </button>

            <div className="payment-info">
              <span>PIX</span>
              <span>Pagamento rápido</span>
              <span>Entrega digital</span>
            </div>

            <p className="small-text">
              Ao continuar, você será direcionado para a etapa de pagamento.
            </p>
          </section>
        </div>
      </div>

      <style jsx>{`
        .checkout-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 15% 10%,
              rgba(124, 58, 237, 0.16),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 80%,
              rgba(168, 85, 247, 0.1),
              transparent 30%
            ),
            #050208;
          color: white;
          padding: 120px 20px 70px;
        }

        .checkout-container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .back-link {
          display: inline-block;
          color: #a78bfa;
          text-decoration: none;
          font-weight: 700;
          margin-bottom: 28px;
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
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.035);
          backdrop-filter: blur(24px);
          border-radius: 30px;
          padding: 38px;
          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.3);
        }

        .product-card {
          position: relative;
          overflow: hidden;
        }

        .product-card::before {
          content: "";
          position: absolute;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: rgba(124, 58, 237, 0.18);
          filter: blur(80px);
          top: -140px;
          right: -100px;
        }

        .badge {
          position: relative;
          display: inline-block;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(124, 58, 237, 0.14);
          border: 1px solid rgba(167, 139, 250, 0.2);
          color: #c4b5fd;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.08em;
        }

        .eyebrow {
          margin: 35px 0 10px;
          color: #a78bfa;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.15em;
        }

        h1 {
          position: relative;
          margin: 0;
          font-size: clamp(38px, 5vw, 58px);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .description {
          position: relative;
          color: #a1a1aa;
          font-size: 16px;
          line-height: 1.7;
          margin: 20px 0;
          max-width: 480px;
        }

        .price {
          position: relative;
          margin-top: 30px;
          font-size: 52px;
          font-weight: 950;
          letter-spacing: -0.05em;
        }

        .price span {
          font-size: 18px;
          color: #a78bfa;
          margin-right: 6px;
          vertical-align: top;
        }

        .divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin: 32px 0;
        }

        h2 {
          margin: 0;
          font-size: 24px;
          font-weight: 900;
        }

        .features {
          display: grid;
          gap: 14px;
          margin-top: 22px;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #d4d4d8;
        }

        .feature span {
          width: 25px;
          height: 25px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(124, 58, 237, 0.18);
          color: #c4b5fd;
          font-weight: 900;
        }

        .secure {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #a78bfa;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .payment-card h2 {
          font-size: 34px;
          margin-top: 22px;
        }

        .payment-description {
          color: #a1a1aa;
          line-height: 1.6;
          margin: 12px 0 28px;
        }

        label {
          display: block;
          margin-bottom: 9px;
          font-size: 14px;
          font-weight: 800;
        }

        input {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          background: rgba(0, 0, 0, 0.3);
          color: white;
          padding: 16px;
          outline: none;
          font-size: 15px;
        }

        input:focus {
          border-color: rgba(167, 139, 250, 0.7);
          box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
        }

        .payment-button {
          width: 100%;
          border: 0;
          border-radius: 14px;
          padding: 17px;
          margin-top: 18px;
          background: linear-gradient(135deg, #7c3aed, #9333ea);
          color: white;
          font-size: 15px;
          font-weight: 900;
          cursor: pointer;
          transition: 0.2s;
        }

        .payment-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(124, 58, 237, 0.3);
        }

        .payment-info {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          margin-top: 22px;
          color: #71717a;
          font-size: 11px;
          font-weight: 800;
        }

        .payment-info span:first-child {
          color: #a78bfa;
        }

        .small-text {
          color: #52525b;
          font-size: 11px;
          line-height: 1.5;
          text-align: center;
          margin-top: 25px;
        }

        @media (max-width: 800px) {
          .checkout-page {
            padding-top: 90px;
          }

          .checkout-grid {
            grid-template-columns: 1fr;
          }

          .product-card,
          .payment-card {
            padding: 26px;
            border-radius: 24px;
          }

          .price {
            font-size: 44px;
          }
        }
      `}</style>
    </main>
  );
}
