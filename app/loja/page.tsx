"use client";

import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: "omega",
    name: "OMEGA",
    short: "ULTIMATE PERFORMANCE",
    description:
      "Nossa otimização mais completa para quem quer extrair o máximo da experiência no PC.",
    price: 35,
    oldPrice: 49.9,
    badge: "🔥 MAIS VENDIDO",
    accent: "violet",
    icon: "⚡",
    features: [
      "Otimização avançada",
      "Ajustes de desempenho",
      "Foco em FPS e fluidez",
      "Pack completo",
    ],
  },
  {
    id: "suprema",
    name: "SUPREMA",
    short: "EXTREME PERFORMANCE",
    description:
      "Pacote avançado focado em desempenho, estabilidade e uma experiência mais fluida.",
    price: 20,
    oldPrice: 29.9,
    badge: "⭐ RECOMENDADO",
    accent: "blue",
    icon: "👑",
    features: [
      "Otimizações avançadas",
      "Melhorias de desempenho",
      "Ajustes para jogos",
      "Configuração completa",
    ],
  },
  {
    id: "avancada",
    name: "AVANÇADA",
    short: "PERFORMANCE BOOST",
    description:
      "Uma opção equilibrada para melhorar o desempenho do Windows e dos seus jogos.",
    price: 10,
    oldPrice: 14.9,
    badge: null,
    accent: "cyan",
    icon: "🚀",
    features: [
      "Otimizações do sistema",
      "Foco em desempenho",
      "Configurações para jogos",
      "Fácil utilização",
    ],
  },
  {
    id: "basica",
    name: "BÁSICA",
    short: "STARTER BOOST",
    description:
      "O pacote essencial para começar sua experiência de otimização.",
    price: 5,
    oldPrice: 7.9,
    badge: null,
    accent: "green",
    icon: "🛠️",
    features: [
      "Otimização básica",
      "Ajustes essenciais",
      "Melhor experiência",
      "Ideal para começar",
    ],
  },
  {
    id: "fivem",
    name: "FIVEM BOOST",
    short: "FIVEM PERFORMANCE",
    description:
      "Pack focado em desempenho e configurações para uma experiência mais fluida no FiveM.",
    price: 10,
    oldPrice: 14.9,
    badge: "🎮 FIVEM",
    accent: "orange",
    icon: "🎮",
    features: [
      "Foco em FiveM",
      "Ajustes de desempenho",
      "Mais estabilidade",
      "Configurações específicas",
    ],
  },
  {
    id: "sensi",
    name: "PACK SENSI",
    short: "AIM CONFIG",
    description:
      "Pack de configurações de sensibilidade para sua experiência de jogo.",
    price: 5,
    oldPrice: 7.9,
    badge: "🎯 GAMING",
    accent: "pink",
    icon: "🎯",
    features: [
      "Configurações de sensi",
      "Perfil para jogos",
      "Ajustes rápidos",
      "Setup simplificado",
    ],
  },
];

const categories = [
  "TODOS",
  "OTIMIZAÇÃO",
  "FIVEM",
  "GAMING",
];

export default function LojaPage() {
  const [category, setCategory] = useState("TODOS");

  const filteredProducts = products.filter((product) => {
    if (category === "TODOS") return true;
    if (category === "FIVEM") return product.id === "fivem";
    if (category === "GAMING") return product.id === "sensi";
    return ["omega", "suprema", "avancada", "basica"].includes(product.id);
  });

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
          color: #fff;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          font-family: inherit;
        }

        ::selection {
          background: #8b5cf6;
          color: white;
        }
      `}</style>

      <main className="store">
        <div className="noise" />
        <div className="grid" />

        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <div className="ambient ambient-three" />

        {/* NAVBAR */}
        <header className="navbar">
          <div className="nav-container">
            <Link href="/" className="brand">
              <div className="brand-mark">
                <span>⚡</span>
              </div>

              <div className="brand-text">
                <strong>
                  DIDDY <em>STORE</em>
                </strong>
                <small>PERFORMANCE STORE</small>
              </div>
            </Link>

            <nav className="nav-links">
              <Link href="/">INÍCIO</Link>
              <a href="#produtos" className="active">
                PRODUTOS
              </a>
              <a href="#beneficios">BENEFÍCIOS</a>
            </nav>

            <a
              href="https://discord.gg/sHe3uSR57b"
              target="_blank"
              rel="noreferrer"
              className="discord-button"
            >
              <span>◈</span>
              DISCORD
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="hero-container">
            <div className="hero-left">
              <div className="live-pill">
                <span className="live-dot" />
                LOJA ONLINE
                <i />
                ENTREGA DIGITAL
              </div>

              <h1>
                MAIS
                <br />
                <span>DESEMPENHO.</span>
              </h1>

              <p className="hero-description">
                Otimize sua experiência. Melhore a fluidez.
                <br />
                Escolha o pack ideal para seu setup.
              </p>

              <div className="hero-actions">
                <a href="#produtos" className="primary-action">
                  VER PRODUTOS
                  <span>↓</span>
                </a>

                <a href="#beneficios" className="secondary-action">
                  SAIBA MAIS
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>6+</strong>
                  <span>PACKS</span>
                </div>

                <i />

                <div>
                  <strong>100%</strong>
                  <span>DIGITAL</span>
                </div>

                <i />

                <div>
                  <strong>24/7</strong>
                  <span>ACESSO</span>
                </div>
              </div>
            </div>

            {/* HERO EMBED */}
            <div className="hero-visual">
              <div className="visual-ring ring-one" />
              <div className="visual-ring ring-two" />
              <div className="visual-ring ring-three" />

              <div className="floating-card card-top">
                <span className="card-icon">↗</span>
                <div>
                  <small>PERFORMANCE</small>
                  <strong>BOOST MODE</strong>
                </div>
              </div>

              <div className="performance-card">
                <div className="performance-top">
                  <div>
                    <span className="mini-label">
                      DIDDY PERFORMANCE
                    </span>
                    <h3>MAX POWER</h3>
                  </div>

                  <div className="power-icon">⚡</div>
                </div>

                <div className="fake-graph">
                  <div className="graph-line">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="graph-fill" />
                </div>

                <div className="graph-bottom">
                  <div>
                    <span>PERFORMANCE</span>
                    <strong>MAX</strong>
                  </div>

                  <div>
                    <span>MODE</span>
                    <strong>ACTIVE</strong>
                  </div>
                </div>
              </div>

              <div className="floating-card card-bottom">
                <span className="status-check">✓</span>
                <div>
                  <small>STATUS</small>
                  <strong>OPTIMIZED</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL PARA EXPLORAR</span>
            <div />
          </div>
        </section>

        {/* BENEFITS */}
        <section id="beneficios" className="benefits">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">
                  POR QUE DIDDY STORE?
                </span>

                <h2>
                  FEITO PARA
                  <br />
                  <span>PERFORMANCE.</span>
                </h2>
              </div>

              <p>
                Uma seleção de packs desenvolvidos para diferentes
                necessidades, desde otimizações essenciais até
                configurações específicas para gaming.
              </p>
            </div>

            <div className="benefit-grid">
              <div className="benefit-card">
                <div className="benefit-number">01</div>
                <div className="benefit-icon">⚡</div>
                <h3>FOCO EM DESEMPENHO</h3>
                <p>
                  Packs organizados para priorizar uma experiência
                  mais fluida no seu computador.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-number">02</div>
                <div className="benefit-icon">🎮</div>
                <h3>GAMING</h3>
                <p>
                  Opções específicas para diferentes jogos e
                  diferentes tipos de setup.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-number">03</div>
                <div className="benefit-icon">🔒</div>
                <h3>PROCESSO SIMPLES</h3>
                <p>
                  Compra digital com processo de pagamento
                  organizado e entrega após confirmação.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-number">04</div>
                <div className="benefit-icon">🚀</div>
                <h3>VÁRIOS NÍVEIS</h3>
                <p>
                  Escolha entre diferentes packs de acordo com
                  o que você procura.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="produtos" className="products-section">
          <div className="section-container">
            <div className="products-heading">
              <div>
                <span className="section-kicker">
                  DIDDY STORE / PRODUCTS
                </span>

                <h2>
                  ESCOLHA SEU
                  <br />
                  <span>PACK.</span>
                </h2>
              </div>

              <div className="product-counter">
                <strong>{filteredProducts.length}</strong>
                <span>PRODUTOS DISPONÍVEIS</span>
              </div>
            </div>

            {/* FILTERS */}
            <div className="filters">
              {categories.map((item) => (
                <button
                  key={item}
                  className={
                    category === item ? "selected" : ""
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* PRODUCT GRID */}
            <div className="products-grid">
              {filteredProducts.map((product, index) => (
                <article
                  className={`product-card ${product.accent} ${
                    index === 0 ? "featured" : ""
                  }`}
                  key={product.id}
                >
                  {product.badge && (
                    <div className="product-badge">
                      {product.badge}
                    </div>
                  )}

                  <div className="card-glow" />

                  <div className="product-head">
                    <div className="product-symbol">
                      {product.icon}
                    </div>

                    <div className="product-code">
                      DIDDY / {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="product-content">
                    <span className="product-type">
                      {product.short}
                    </span>

                    <h3>{product.name}</h3>

                    <p>{product.description}</p>
                  </div>

                  <div className="product-features">
                    {product.features.map((feature) => (
                      <div key={feature}>
                        <span>✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="product-footer">
                    <div className="price-area">
                      <span>POR APENAS</span>

                      <div>
                        <small>R$</small>
                        <strong>
                          {product.price
                            .toFixed(2)
                            .replace(".", ",")}
                        </strong>
                      </div>

                      <del>
                        R${" "}
                        {product.oldPrice
                          .toFixed(2)
                          .replace(".", ",")}
                      </del>
                    </div>

                    <Link
                      href={`/checkout?produto=${product.id}`}
                      className="buy-button"
                    >
                      COMPRAR
                      <span>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="cta-container">
            <div className="cta-glow" />

            <span className="section-kicker">
              PRONTO PARA O PRÓXIMO NÍVEL?
            </span>

            <h2>
              SEU SETUP.
              <br />
              <span>SUA PERFORMANCE.</span>
            </h2>

            <p>
              Escolha seu pack e comece sua experiência com a
              Diddy Store.
            </p>

            <a href="#produtos" className="cta-button">
              EXPLORAR PACKS
              <span>↗</span>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-container">
            <div className="footer-brand">
              <div className="footer-logo">
                <span>⚡</span>
                DIDDY <em>STORE</em>
              </div>

              <p>
                PERFORMANCE • FPS • OTIMIZAÇÃO
              </p>
            </div>

            <div className="footer-links">
              <Link href="/">INÍCIO</Link>
              <a href="#produtos">PRODUTOS</a>
              <a href="#beneficios">BENEFÍCIOS</a>
              <a
                href="https://discord.gg/sHe3uSR57b"
                target="_blank"
                rel="noreferrer"
              >
                DISCORD
              </a>
            </div>

            <div className="copyright">
              © {new Date().getFullYear()} DIDDY STORE
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        .store {
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(
              circle at 75% 10%,
              rgba(124, 58, 237, 0.13),
              transparent 28%
            ),
            radial-gradient(
              circle at 15% 45%,
              rgba(59, 130, 246, 0.07),
              transparent 25%
            ),
            #030305;
        }

        .noise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E");
        }

        .grid {
          position: absolute;
          inset: 0;
          height: 1100px;
          pointer-events: none;
          opacity: 0.035;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.5) 1px,
              transparent 1px
            );
          background-size: 55px 55px;
          mask-image: linear-gradient(
            to bottom,
            black 0%,
            transparent 90%
          );
        }

        .ambient {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(100px);
          animation: float 9s ease-in-out infinite;
        }

        .ambient-one {
          width: 400px;
          height: 400px;
          right: -180px;
          top: 120px;
          background: rgba(124, 58, 237, 0.1);
        }

        .ambient-two {
          width: 280px;
          height: 280px;
          left: -150px;
          top: 550px;
          background: rgba(37, 99, 235, 0.08);
          animation-delay: -3s;
        }

        .ambient-three {
          width: 250px;
          height: 250px;
          right: 15%;
          top: 750px;
          background: rgba(168, 85, 247, 0.05);
          animation-delay: -6s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -25px, 0);
          }
        }

        /* NAVBAR */

        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          height: 76px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          background: rgba(3, 3, 5, 0.72);
          backdrop-filter: blur(24px);
        }

        .nav-container {
          width: min(1180px, calc(100% - 40px));
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

        .brand-mark {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          border: 1px solid rgba(139, 92, 246, 0.35);
          background: linear-gradient(
            145deg,
            rgba(139, 92, 246, 0.18),
            rgba(255, 255, 255, 0.02)
          );
          box-shadow:
            0 0 25px rgba(124, 58, 237, 0.15),
            inset 0 1px rgba(255, 255, 255, 0.12);
        }

        .brand-mark span {
          font-size: 18px;
        }

        .brand-text strong {
          display: block;
          font-size: 15px;
          line-height: 1;
          font-weight: 950;
          letter-spacing: -0.5px;
        }

        .brand-text em {
          color: #a78bfa;
          font-style: normal;
        }

        .brand-text small {
          display: block;
          margin-top: 4px;
          color: rgba(255, 255, 255, 0.24);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 35px;
        }

        .nav-links a {
          position: relative;
          color: rgba(255, 255, 255, 0.3);
          font-size: 8px;
          font-weight: 950;
          letter-spacing: 1.4px;
          transition: 0.2s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #fff;
        }

        .nav-links a.active::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -10px;
          width: 4px;
          height: 4px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: #8b5cf6;
          box-shadow: 0 0 12px #8b5cf6;
        }

        .discord-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 10px;
          background: rgba(139, 92, 246, 0.07);
          color: #c4b5fd;
          font-size: 8px;
          font-weight: 950;
          letter-spacing: 0.7px;
          transition: 0.25s ease;
        }

        .discord-button:hover {
          transform: translateY(-2px);
          border-color: rgba(139, 92, 246, 0.5);
          background: rgba(139, 92, 246, 0.13);
        }

        /* HERO */

        .hero {
          position: relative;
          min-height: 700px;
          display: flex;
          align-items: center;
        }

        .hero-container {
          position: relative;
          z-index: 5;
          width: min(1180px, calc(100% - 40px));
          margin: auto;
          padding: 90px 0 110px;
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          align-items: center;
          gap: 50px;
        }

        .live-pill {
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 11px;
          border: 1px solid rgba(139, 92, 246, 0.18);
          border-radius: 100px;
          background: rgba(139, 92, 246, 0.055);
          color: #a78bfa;
          font-size: 7px;
          font-weight: 950;
          letter-spacing: 1.2px;
          animation: appear 0.8s ease both;
        }

        .live-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 12px #4ade80;
          animation: pulse 1.8s infinite;
        }

        .live-pill i {
          width: 1px;
          height: 10px;
          background: rgba(255, 255, 255, 0.12);
          margin: 0 2px;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0.35;
          }
        }

        @keyframes appear {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero h1 {
          margin: 22px 0 0;
          font-size: clamp(60px, 8vw, 105px);
          line-height: 0.82;
          letter-spacing: -7px;
          font-weight: 1000;
          animation: appear 0.8s 0.1s ease both;
        }

        .hero h1 span {
          background: linear-gradient(
            100deg,
            #fff 0%,
            #c4b5fd 35%,
            #8b5cf6 75%,
            #60a5fa 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-description {
          margin: 27px 0 0;
          color: rgba(255, 255, 255, 0.35);
          font-size: 12px;
          line-height: 1.8;
          animation: appear 0.8s 0.2s ease both;
        }

        .hero-actions {
          display: flex;
          gap: 10px;
          margin-top: 29px;
          animation: appear 0.8s 0.3s ease both;
        }

        .primary-action,
        .secondary-action {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          min-width: 145px;
          height: 45px;
          border-radius: 10px;
          font-size: 8px;
          font-weight: 950;
          letter-spacing: 1px;
          transition: 0.25s ease;
        }

        .primary-action {
          border: 1px solid rgba(139, 92, 246, 0.4);
          background: linear-gradient(
            135deg,
            #8b5cf6,
            #6d28d9
          );
          box-shadow: 0 12px 35px rgba(124, 58, 237, 0.2);
        }

        .primary-action:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 45px rgba(124, 58, 237, 0.32);
        }

        .primary-action span {
          font-size: 14px;
        }

        .secondary-action {
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.025);
          color: rgba(255, 255, 255, 0.45);
        }

        .secondary-action:hover {
          color: white;
          border-color: rgba(255, 255, 255, 0.16);
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-top: 42px;
          animation: appear 0.8s 0.4s ease both;
        }

        .hero-stats div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .hero-stats strong {
          font-size: 19px;
          font-weight: 950;
        }

        .hero-stats span {
          color: rgba(255, 255, 255, 0.2);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .hero-stats i {
          width: 1px;
          height: 27px;
          background: rgba(255, 255, 255, 0.08);
        }

        /* HERO VISUAL */

        .hero-visual {
          position: relative;
          height: 430px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: visualAppear 1s 0.15s ease both;
        }

        @keyframes visualAppear {
          from {
            opacity: 0;
            transform: scale(0.92);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .visual-ring {
          position: absolute;
          border: 1px solid rgba(139, 92, 246, 0.08);
          border-radius: 50%;
          animation: spin 18s linear infinite;
        }

        .ring-one {
          width: 410px;
          height: 410px;
        }

        .ring-two {
          width: 330px;
          height: 330px;
          border-style: dashed;
          animation-duration: 25s;
          animation-direction: reverse;
        }

        .ring-three {
          width: 250px;
          height: 250px;
          border-color: rgba(139, 92, 246, 0.12);
          animation-duration: 12s;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .performance-card {
          position: relative;
          z-index: 3;
          width: 350px;
          min-height: 230px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 23px;
          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.07),
              rgba(255, 255, 255, 0.018)
            ),
            rgba(5, 5, 9, 0.75);
          backdrop-filter: blur(25px);
          box-shadow:
            0 30px 100px rgba(0, 0, 0, 0.45),
            0 0 80px rgba(124, 58, 237, 0.1),
            inset 0 1px rgba(255, 255, 255, 0.12);
          transform: perspective(900px) rotateY(-8deg) rotateX(4deg);
        }

        .performance-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .mini-label {
          color: #a78bfa;
          font-size: 7px;
          font-weight: 950;
          letter-spacing: 1.5px;
        }

        .performance-top h3 {
          margin: 5px 0 0;
          font-size: 22px;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .power-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          border: 1px solid rgba(139, 92, 246, 0.25);
          background: rgba(139, 92, 246, 0.1);
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.15);
        }

        .fake-graph {
          position: relative;
          height: 105px;
          margin-top: 20px;
          overflow: hidden;
          border-radius: 10px;
          background:
            linear-gradient(
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }

        .graph-fill {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 75%;
          opacity: 0.18;
          background: linear-gradient(
            to top,
            rgba(139, 92, 246, 0.5),
            transparent
          );
          clip-path: polygon(
            0 100%,
            0 75%,
            10% 68%,
            20% 72%,
            30% 45%,
            40% 57%,
            50% 30%,
            60% 42%,
            70% 22%,
            80% 30%,
            90% 8%,
            100% 15%,
            100% 100%
          );
        }

        .graph-line {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .graph-line span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #a78bfa;
          box-shadow: 0 0 10px #8b5cf6;
          transform: translateY(
            calc(var(--i, 0) * 1px)
          );
        }

        .graph-line span:nth-child(1) {
          transform: translateY(25px);
        }

        .graph-line span:nth-child(2) {
          transform: translateY(18px);
        }

        .graph-line span:nth-child(3) {
          transform: translateY(25px);
        }

        .graph-line span:nth-child(4) {
          transform: translateY(4px);
        }

        .graph-line span:nth-child(5) {
          transform: translateY(13px);
        }

        .graph-line span:nth-child(6) {
          transform: translateY(-8px);
        }

        .graph-line span:nth-child(7) {
          transform: translateY(0px);
        }

        .graph-line span:nth-child(8) {
          transform: translateY(-15px);
        }

        .graph-line span:nth-child(9) {
          transform: translateY(-5px);
        }

        .graph-line span:nth-child(10) {
          transform: translateY(-24px);
        }

        .graph-bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
        }

        .graph-bottom div {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .graph-bottom span {
          color: rgba(255, 255, 255, 0.2);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .graph-bottom strong {
          color: #c4b5fd;
          font-size: 8px;
        }

        .floating-card {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          background: rgba(8, 8, 12, 0.8);
          backdrop-filter: blur(18px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
          animation: cardFloat 5s ease-in-out infinite;
        }

        .card-top {
          top: 38px;
          right: 8px;
        }

        .card-bottom {
          bottom: 45px;
          left: 0;
          animation-delay: -2s;
        }

        @keyframes cardFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        .card-icon,
        .status-check {
          width: 29px;
          height: 29px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: rgba(139, 92, 246, 0.1);
          color: #a78bfa;
          font-size: 12px;
        }

        .status-check {
          background: rgba(74, 222, 128, 0.08);
          color: #4ade80;
        }

        .floating-card small,
        .floating-card strong {
          display: block;
        }

        .floating-card small {
          color: rgba(255, 255, 255, 0.2);
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .floating-card strong {
          margin-top: 3px;
          font-size: 8px;
          letter-spacing: 0.5px;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.18);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .scroll-indicator div {
          width: 1px;
          height: 25px;
          background: linear-gradient(
            to bottom,
            rgba(139, 92, 246, 0.6),
            transparent
          );
        }

        /* COMMON */

        .section-container {
          width: min(1180px, calc(100% - 40px));
          margin: auto;
        }

        .section-kicker {
          color: #8b5cf6;
          font-size: 7px;
          font-weight: 950;
          letter-spacing: 2px;
        }

        /* BENEFITS */

        .benefits {
          position: relative;
          padding: 110px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .section-heading {
          display: grid;
          grid-template-columns: 1fr 0.7fr;
          gap: 50px;
          align-items: end;
        }

        .section-heading h2,
        .products-heading h2,
        .cta h2 {
          margin: 12px 0 0;
          font-size: clamp(40px, 5vw, 65px);
          line-height: 0.88;
          letter-spacing: -4px;
          font-weight: 1000;
        }

        .section-heading h2 span,
        .products-heading h2 span,
        .cta h2 span {
          color: #8b5cf6;
        }

        .section-heading > p {
          max-width: 390px;
          justify-self: end;
          margin: 0;
          color: rgba(255, 255, 255, 0.28);
          font-size: 10px;
          line-height: 1.8;
        }

        .benefit-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-top: 50px;
        }

        .benefit-card {
          position: relative;
          min-height: 245px;
          padding: 23px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.018);
          transition: 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-6px);
          border-color: rgba(139, 92, 246, 0.25);
          background: rgba(139, 92, 246, 0.035);
        }

        .benefit-number {
          position: absolute;
          right: 18px;
          top: 18px;
          color: rgba(255, 255, 255, 0.08);
          font-size: 9px;
          font-weight: 950;
        }

        .benefit-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;
          border: 1px solid rgba(139, 92, 246, 0.15);
          border-radius: 12px;
          background: rgba(139, 92, 246, 0.06);
          font-size: 18px;
        }

        .benefit-card h3 {
          margin: 25px 0 0;
          font-size: 10px;
          font-weight: 950;
          letter-spacing: 0.5px;
        }

        .benefit-card p {
          margin: 10px 0 0;
          color: rgba(255, 255, 255, 0.24);
          font-size: 9px;
          line-height: 1.7;
        }

        /* PRODUCTS */

        .products-section {
          position: relative;
          padding: 110px 0 120px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .products-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
        }

        .product-counter {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 5px;
        }

        .product-counter strong {
          font-size: 28px;
          font-weight: 950;
        }

        .product-counter span {
          color: rgba(255, 255, 255, 0.2);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .filters {
          display: flex;
          gap: 7px;
          margin-top: 45px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .filters button {
          padding: 9px 13px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.02);
          color: rgba(255, 255, 255, 0.25);
          font-size: 7px;
          font-weight: 950;
          letter-spacing: 1px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .filters button:hover {
          color: white;
          border-color: rgba(139, 92, 246, 0.2);
        }

        .filters button.selected {
          border-color: rgba(139, 92, 246, 0.35);
          background: rgba(139, 92, 246, 0.12);
          color: #c4b5fd;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 25px;
        }

        .product-card {
          position: relative;
          min-height: 410px;
          padding: 25px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.065);
          border-radius: 20px;
          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.035),
              rgba(255, 255, 255, 0.012)
            ),
            rgba(5, 5, 8, 0.7);
          backdrop-filter: blur(15px);
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .product-card:hover {
          transform: translateY(-7px);
          border-color: rgba(139, 92, 246, 0.28);
          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.35),
            0 0 60px rgba(124, 58, 237, 0.07);
        }

        .product-card.featured {
          border-color: rgba(139, 92, 246, 0.16);
        }

        .card-glow {
          position: absolute;
          width: 230px;
          height: 230px;
          right: -120px;
          top: -120px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.08);
          filter: blur(65px);
          transition: 0.4s ease;
        }

        .product-card:hover .card-glow {
          transform: scale(1.35);
          opacity: 1.4;
        }

        .product-card.blue .card-glow {
          background: rgba(59, 130, 246, 0.08);
        }

        .product-card.cyan .card-glow {
          background: rgba(6, 182, 212, 0.07);
        }

        .product-card.green .card-glow {
          background: rgba(34, 197, 94, 0.06);
        }

        .product-card.orange .card-glow {
          background: rgba(249, 115, 22, 0.07);
        }

        .product-card.pink .card-glow {
          background: rgba(236, 72, 153, 0.07);
        }

        .product-badge {
          position: absolute;
          top: 19px;
          right: 19px;
          padding: 7px 9px;
          border: 1px solid rgba(139, 92, 246, 0.2);
          border-radius: 7px;
          background: rgba(139, 92, 246, 0.08);
          color: #c4b5fd;
          font-size: 6px;
          font-weight: 950;
          letter-spacing: 0.8px;
        }

        .product-head {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .product-symbol {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(139, 92, 246, 0.18);
          border-radius: 16px;
          background: linear-gradient(
            145deg,
            rgba(139, 92, 246, 0.13),
            rgba(255, 255, 255, 0.02)
          );
          font-size: 23px;
          box-shadow: inset 0 1px rgba(255, 255, 255, 0.1);
        }

        .product-code {
          color: rgba(255, 255, 255, 0.12);
          font-size: 6px;
          font-weight: 950;
          letter-spacing: 1.5px;
        }

        .product-content {
          position: relative;
          z-index: 2;
          margin-top: 25px;
        }

        .product-type {
          color: #8b5cf6;
          font-size: 6px;
          font-weight: 950;
          letter-spacing: 1.8px;
        }

        .product-card.blue .product-type {
          color: #60a5fa;
        }

        .product-card.cyan .product-type {
          color: #67e8f9;
        }

        .product-card.green .product-type {
          color: #86efac;
        }

        .product-card.orange .product-type {
          color: #fdba74;
        }

        .product-card.pink .product-type {
          color: #f9a8d4;
        }

        .product-content h3 {
          margin: 7px 0 0;
          font-size: 27px;
          font-weight: 1000;
          letter-spacing: -1.3px;
        }

        .product-content p {
          max-width: 400px;
          min-height: 43px;
          margin: 8px 0 0;
          color: rgba(255, 255, 255, 0.28);
          font-size: 9px;
          line-height: 1.65;
        }

        .product-features {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 23px;
        }

        .product-features div {
          display: flex;
          align-items: center;
          gap: 7px;
          color: rgba(255, 255, 255, 0.3);
          font-size: 7px;
          font-weight: 750;
        }

        .product-features span {
          width: 17px;
          height: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 5px;
          background: rgba(74, 222, 128, 0.06);
          color: #4ade80;
          font-size: 7px;
        }

        .product-footer {
          position: absolute;
          z-index: 3;
          left: 25px;
          right: 25px;
          bottom: 25px;
          display: flex;
          align-items: end;
          justify-content: space-between;
          padding-top: 17px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .price-area > span {
          color: rgba(255, 255, 255, 0.18);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .price-area > div {
          display: flex;
          align-items: baseline;
          margin-top: 3px;
        }

        .price-area small {
          margin-right: 3px;
          color: rgba(255, 255, 255, 0.35);
          font-size: 9px;
          font-weight: 900;
        }

        .price-area strong {
          font-size: 27px;
          font-weight: 1000;
          letter-spacing: -1px;
        }

        .price-area del {
          display: block;
          margin-top: 1px;
          color: rgba(255, 255, 255, 0.14);
          font-size: 7px;
        }

        .buy-button {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 13px 16px;
          border: 1px solid rgba(139, 92, 246, 0.28);
          border-radius: 10px;
          background: rgba(139, 92, 246, 0.1);
          color: #c4b5fd;
          font-size: 7px;
          font-weight: 950;
          letter-spacing: 1px;
          transition: 0.25s ease;
        }

        .buy-button span {
          font-size: 14px;
          transition: 0.25s ease;
        }

        .buy-button:hover {
          transform: translateY(-2px);
          background: linear-gradient(
            135deg,
            #8b5cf6,
            #6d28d9
          );
          color: white;
          box-shadow: 0 12px 30px rgba(124, 58, 237, 0.25);
        }

        .buy-button:hover span {
          transform: translateX(3px);
        }

        /* CTA */

        .cta {
          position: relative;
          padding: 120px 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .cta-container {
          position: relative;
          max-width: 900px;
          margin: auto;
          padding: 80px 30px;
          overflow: hidden;
          text-align: center;
          border: 1px solid rgba(139, 92, 246, 0.15);
          border-radius: 30px;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(139, 92, 246, 0.13),
              transparent 55%
            ),
            rgba(255, 255, 255, 0.018);
        }

        .cta-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          left: 50%;
          top: -250px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.18);
          filter: blur(80px);
        }

        .cta h2 {
          position: relative;
          margin-top: 15px;
        }

        .cta p {
          position: relative;
          margin: 20px auto 0;
          max-width: 430px;
          color: rgba(255, 255, 255, 0.3);
          font-size: 10px;
          line-height: 1.7;
        }

        .cta-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 25px;
          margin-top: 28px;
          padding: 14px 20px;
          border-radius: 10px;
          background: linear-gradient(
            135deg,
            #8b5cf6,
            #6d28d9
          );
          font-size: 8px;
          font-weight: 950;
          letter-spacing: 1px;
          box-shadow: 0 15px 45px rgba(124, 58, 237, 0.25);
          transition: 0.25s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 60px rgba(124, 58, 237, 0.35);
        }

        .cta-button span {
          font-size: 14px;
        }

        /* FOOTER */

        footer {
          position: relative;
          padding: 30px 0;
        }

        .footer-container {
          width: min(1180px, calc(100% - 40px));
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-logo {
          font-size: 12px;
          font-weight: 950;
        }

        .footer-logo span {
          margin-right: 6px;
        }

        .footer-logo em {
          color: #8b5cf6;
          font-style: normal;
        }

        .footer-brand p {
          margin: 5px 0 0;
          color: rgba(255, 255, 255, 0.15);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1.2px;
        }

        .footer-links {
          display: flex;
          gap: 25px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.2);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 0.8px;
          transition: 0.2s;
        }

        .footer-links a:hover {
          color: #a78bfa;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.13);
          font-size: 6px;
          font-weight: 900;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }

          .hero-container {
            grid-template-columns: 1fr;
            padding-top: 70px;
          }

          .hero-visual {
            margin-top: 10px;
          }

          .section-heading {
            grid-template-columns: 1fr;
          }

          .section-heading > p {
            justify-self: start;
          }

          .benefit-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 700px) {
          .nav-container,
          .section-container,
          .footer-container,
          .hero-container {
            width: calc(100% - 28px);
          }

          .discord-button {
            display: none;
          }

          .hero {
            min-height: auto;
          }

          .hero-container {
            padding: 65px 0 100px;
          }

          .hero h1 {
            font-size: 65px;
            letter-spacing: -4px;
          }

          .hero-visual {
            height: 350px;
            transform: scale(0.9);
          }

          .performance-card {
            width: 300px;
          }

          .ring-one {
            width: 350px;
            height: 350px;
          }

          .ring-two {
            width: 290px;
            height: 290px;
          }

          .ring-three {
            width: 220px;
            height: 220px;
          }

          .benefits,
          .products-section {
            padding: 80px 0;
          }

          .benefit-grid {
            grid-template-columns: 1fr;
          }

          .products-heading {
            align-items: start;
            flex-direction: column;
            gap: 25px;
          }

          .product-counter {
            align-items: start;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .product-card {
            min-height: 410px;
          }

          .footer-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
          }

          .footer-links {
            flex-wrap: wrap;
          }

          .copyright {
            margin-top: 5px;
          }
        }

        @media (max-width: 430px) {
          .hero h1 {
            font-size: 54px;
          }

          .hero-actions {
            flex-direction: column;
          }

          .primary-action,
          .secondary-action {
            width: 100%;
          }

          .hero-stats {
            gap: 14px;
          }

          .hero-stats i {
            height: 22px;
          }

          .hero-visual {
            transform: scale(0.75);
            margin-left: -35px;
            margin-right: -35px;
          }

          .filters {
            overflow-x: auto;
            scrollbar-width: none;
          }

          .filters::-webkit-scrollbar {
            display: none;
          }

          .product-features {
            grid-template-columns: 1fr;
          }

          .product-content h3 {
            font-size: 24px;
          }

          .product-footer {
            left: 20px;
            right: 20px;
          }

          .product-card {
            padding: 20px;
          }

          .cta {
            padding: 80px 14px;
          }

          .cta-container {
            padding: 65px 20px;
          }

          .section-heading h2,
          .products-heading h2,
          .cta h2 {
            font-size: 45px;
            letter-spacing: -3px;
          }
        }
      `}</style>
    </>
  );
}
