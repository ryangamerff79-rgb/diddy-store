"use client";

import Link from "next/link";

const products = [
  {
    id: "omega",
    name: "OMEGA",
    subtitle: "ULTIMATE PERFORMANCE",
    description:
      "A experiência mais completa da Diddy Store. Um pacote desenvolvido para quem busca o máximo desempenho.",
    price: "35",
    badge: "🔥 MAIS VENDIDO",
    icon: "⚡",
    featured: true,
    color: "purple",
    features: ["FPS", "INPUT LAG", "WINDOWS", "GAMES"],
  },
  {
    id: "suprema",
    name: "SUPREMA",
    subtitle: "EXTREME BOOST",
    description:
      "Otimização avançada focada em desempenho, estabilidade e uma experiência mais fluida.",
    price: "20",
    badge: "⭐ RECOMENDADO",
    icon: "👑",
    color: "blue",
    features: ["FPS", "ESTABILIDADE", "WINDOWS", "PERFORMANCE"],
  },
  {
    id: "avancada",
    name: "AVANÇADA",
    subtitle: "PERFORMANCE BOOST",
    description:
      "Uma solução equilibrada para melhorar o desempenho do Windows e dos seus jogos.",
    price: "10",
    badge: "",
    icon: "🚀",
    color: "cyan",
    features: ["FPS", "WINDOWS", "BOOST", "GAMES"],
  },
  {
    id: "basica",
    name: "BÁSICA",
    subtitle: "STARTER BOOST",
    description:
      "O pacote essencial para começar a otimizar seu Windows de maneira simples e prática.",
    price: "5",
    badge: "",
    icon: "🛠️",
    color: "green",
    features: ["WINDOWS", "LIMPEZA", "BOOST", "CONFIG"],
  },
  {
    id: "fivem",
    name: "FIVEM BOOST",
    subtitle: "GAMING PERFORMANCE",
    description:
      "Pack direcionado para quem busca uma experiência mais fluida no FiveM.",
    price: "10",
    badge: "🎮 FIVEM",
    icon: "🎮",
    color: "orange",
    features: ["FIVEM", "FPS", "PERFORMANCE", "GAMING"],
  },
  {
    id: "sensi",
    name: "PACK SENSI",
    subtitle: "AIM EXPERIENCE",
    description:
      "Configurações focadas em sensibilidade, mouse e experiência de jogo.",
    price: "5",
    badge: "",
    icon: "🎯",
    color: "red",
    features: ["SENSI", "MOUSE", "AIM", "CONFIG"],
  },
];

export default function LojaPage() {
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
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        ::selection {
          background: #8b5cf6;
          color: white;
        }

        .store {
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(
              circle at 50% -10%,
              rgba(124, 58, 237, 0.18),
              transparent 35%
            ),
            radial-gradient(
              circle at 0% 45%,
              rgba(59, 130, 246, 0.08),
              transparent 30%
            ),
            radial-gradient(
              circle at 100% 70%,
              rgba(168, 85, 247, 0.08),
              transparent 30%
            ),
            #030305;
        }

        .noise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.025;
          z-index: 100;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E");
        }

        .grid-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.04;
          background-image:
            linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px);
          background-size: 55px 55px;
          mask-image: linear-gradient(to bottom, black, transparent 85%);
        }

        .orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(100px);
          pointer-events: none;
          animation: floatOrb 9s ease-in-out infinite;
        }

        .orb-one {
          width: 400px;
          height: 400px;
          background: rgba(124, 58, 237, 0.12);
          top: -180px;
          left: -150px;
        }

        .orb-two {
          width: 350px;
          height: 350px;
          background: rgba(37, 99, 235, 0.09);
          right: -130px;
          top: 400px;
          animation-delay: -3s;
        }

        .orb-three {
          width: 300px;
          height: 300px;
          background: rgba(217, 70, 239, 0.08);
          left: 35%;
          bottom: 100px;
          animation-delay: -6s;
        }

        @keyframes floatOrb {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(25px, -25px, 0) scale(1.08);
          }
        }

        /* NAVBAR */

        .navbar {
          position: relative;
          z-index: 20;
          height: 76px;
          border-bottom: 1px solid rgba(255,255,255,.07);
          background: rgba(3,3,5,.65);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }

        .nav-inner {
          width: min(1180px, calc(100% - 40px));
          height: 100%;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 19px;
          background: linear-gradient(
            135deg,
            rgba(139,92,246,.25),
            rgba(59,130,246,.08)
          );
          border: 1px solid rgba(139,92,246,.3);
          box-shadow: 0 0 30px rgba(124,58,237,.18);
        }

        .logo-name {
          font-size: 16px;
          font-weight: 900;
          letter-spacing: -.5px;
        }

        .logo-name span {
          color: #a78bfa;
        }

        .logo-sub {
          margin-top: 2px;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 2px;
          color: rgba(255,255,255,.28);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          color: rgba(255,255,255,.45);
          font-size: 12px;
          font-weight: 700;
        }

        .nav-links a {
          transition: .25s ease;
        }

        .nav-links a:hover {
          color: white;
        }

        .nav-discord {
          padding: 10px 15px;
          border: 1px solid rgba(139,92,246,.25);
          border-radius: 11px;
          background: rgba(139,92,246,.08);
          color: #c4b5fd;
        }

        /* HERO */

        .hero {
          position: relative;
          z-index: 5;
          width: min(1180px, calc(100% - 40px));
          margin: auto;
          padding: 95px 0 70px;
          text-align: center;
        }

        .status {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 15px;
          border-radius: 999px;
          border: 1px solid rgba(139,92,246,.22);
          background: rgba(139,92,246,.07);
          color: #c4b5fd;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.5px;
          box-shadow: 0 0 45px rgba(124,58,237,.08);
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 12px #4ade80;
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: .45;
            transform: scale(.75);
          }
        }

        .hero h1 {
          margin: 25px auto 0;
          max-width: 850px;
          font-size: clamp(48px, 8vw, 88px);
          line-height: .92;
          letter-spacing: -5px;
          font-weight: 950;
        }

        .gradient-text {
          background: linear-gradient(
            90deg,
            #c4b5fd,
            #a855f7,
            #60a5fa,
            #c084fc
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientMove 6s ease infinite;
        }

        @keyframes gradientMove {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .hero-description {
          max-width: 650px;
          margin: 27px auto 0;
          color: rgba(255,255,255,.42);
          font-size: 15px;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 34px;
        }

        .primary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 155px;
          padding: 14px 22px;
          border-radius: 13px;
          background: linear-gradient(135deg, #8b5cf6, #6d28d9);
          border: 1px solid rgba(255,255,255,.14);
          box-shadow:
            0 15px 50px rgba(124,58,237,.25),
            inset 0 1px rgba(255,255,255,.2);
          font-size: 11px;
          font-weight: 900;
          transition: .3s ease;
        }

        .primary-button:hover {
          transform: translateY(-3px);
          box-shadow:
            0 20px 65px rgba(124,58,237,.38),
            inset 0 1px rgba(255,255,255,.25);
        }

        .secondary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 22px;
          border-radius: 13px;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.09);
          color: rgba(255,255,255,.7);
          font-size: 11px;
          font-weight: 900;
          transition: .3s ease;
        }

        .secondary-button:hover {
          transform: translateY(-3px);
          background: rgba(255,255,255,.07);
          color: white;
        }

        /* STATS */

        .stats {
          width: min(650px, 100%);
          margin: 50px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255,255,255,.025);
          backdrop-filter: blur(15px);
        }

        .stat {
          padding: 19px 10px;
          border-right: 1px solid rgba(255,255,255,.07);
        }

        .stat:last-child {
          border-right: 0;
        }

        .stat-number {
          font-size: 20px;
          font-weight: 950;
        }

        .stat-label {
          margin-top: 5px;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,.27);
        }

        /* SECTION */

        .products-section {
          position: relative;
          z-index: 5;
          width: min(1180px, calc(100% - 40px));
          margin: auto;
          padding: 25px 0 100px;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 25px;
        }

        .eyebrow {
          color: #a78bfa;
          font-size: 8px;
          font-weight: 950;
          letter-spacing: 2.5px;
        }

        .section-heading h2 {
          margin: 7px 0 0;
          font-size: 29px;
          letter-spacing: -1.5px;
          font-weight: 950;
        }

        .payment-info {
          text-align: right;
        }

        .payment-title {
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,.4);
        }

        .payment-sub {
          margin-top: 5px;
          color: rgba(255,255,255,.2);
          font-size: 9px;
        }

        /* PRODUCTS */

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .product-card {
          position: relative;
          min-height: 430px;
          border: 1px solid rgba(255,255,255,.075);
          border-radius: 23px;
          padding: 1px;
          background: rgba(255,255,255,.025);
          transition:
            transform .4s cubic-bezier(.2,.8,.2,1),
            border-color .4s ease,
            box-shadow .4s ease;
        }

        .product-card:hover {
          transform: translateY(-9px);
          border-color: rgba(139,92,246,.35);
          box-shadow:
            0 25px 80px rgba(0,0,0,.45),
            0 0 45px rgba(124,58,237,.08);
        }

        .featured {
          border-color: rgba(139,92,246,.28);
          box-shadow: 0 0 70px rgba(124,58,237,.09);
        }

        .card-inner {
          position: relative;
          height: 100%;
          min-height: 428px;
          padding: 24px;
          overflow: hidden;
          border-radius: 22px;
          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(139,92,246,.07),
              transparent 35%
            ),
            #08080c;
        }

        .card-light {
          position: absolute;
          width: 170px;
          height: 170px;
          right: -100px;
          top: -100px;
          border-radius: 50%;
          background: rgba(139,92,246,.15);
          filter: blur(50px);
          transition: .5s ease;
        }

        .product-card:hover .card-light {
          transform: scale(1.5);
          opacity: .8;
        }

        .card-top {
          min-height: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          padding: 6px 9px;
          border-radius: 7px;
          background: rgba(139,92,246,.1);
          border: 1px solid rgba(139,92,246,.2);
          color: #c4b5fd;
          font-size: 7px;
          font-weight: 950;
          letter-spacing: .8px;
        }

        .number {
          color: rgba(255,255,255,.15);
          font-size: 9px;
          font-weight: 900;
        }

        .product-icon {
          width: 61px;
          height: 61px;
          margin-top: 21px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 17px;
          font-size: 26px;
          border: 1px solid rgba(255,255,255,.09);
          background: linear-gradient(
            145deg,
            rgba(139,92,246,.14),
            rgba(255,255,255,.025)
          );
          box-shadow: 0 15px 40px rgba(124,58,237,.1);
          transition: .4s ease;
        }

        .product-card:hover .product-icon {
          transform: translateY(-4px) rotate(4deg) scale(1.05);
        }

        .product-name {
          margin-top: 20px;
          font-size: 20px;
          font-weight: 950;
          letter-spacing: -.6px;
        }

        .product-subtitle {
          margin-top: 4px;
          color: #8b5cf6;
          font-size: 7px;
          font-weight: 950;
          letter-spacing: 1.5px;
        }

        .product-description {
          min-height: 69px;
          margin-top: 13px;
          color: rgba(255,255,255,.38);
          font-size: 11px;
          line-height: 1.65;
        }

        .features {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-top: 12px;
        }

        .feature {
          padding: 6px 8px;
          border-radius: 7px;
          border: 1px solid rgba(255,255,255,.055);
          background: rgba(255,255,255,.025);
          color: rgba(255,255,255,.3);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: .5px;
        }

        .card-bottom {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          display: flex;
          align-items: end;
          justify-content: space-between;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,.06);
        }

        .price-label {
          color: rgba(255,255,255,.22);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .price {
          margin-top: 3px;
          font-size: 29px;
          font-weight: 950;
          letter-spacing: -1.5px;
        }

        .price span {
          margin-right: 3px;
          color: rgba(255,255,255,.3);
          font-size: 10px;
        }

        .buy-button {
          position: relative;
          overflow: hidden;
          padding: 12px 17px;
          border-radius: 10px;
          background: white;
          color: #050505;
          font-size: 8px;
          font-weight: 950;
          letter-spacing: .6px;
          transition: .3s ease;
        }

        .buy-button::before {
          content: "";
          position: absolute;
          width: 80px;
          height: 200%;
          left: -100px;
          top: -50%;
          transform: rotate(20deg);
          background: rgba(139,92,246,.5);
          transition: .45s ease;
        }

        .buy-button:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 35px rgba(255,255,255,.1);
        }

        .buy-button:hover::before {
          left: 120%;
        }

        .buy-button span {
          position: relative;
          z-index: 2;
        }

        /* BENEFITS */

        .benefits-section {
          position: relative;
          z-index: 5;
          border-top: 1px solid rgba(255,255,255,.06);
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: rgba(255,255,255,.015);
        }

        .benefits {
          width: min(1180px, calc(100% - 40px));
          margin: auto;
          padding: 80px 0;
        }

        .benefits-heading {
          text-align: center;
        }

        .benefits-heading h2 {
          margin: 8px 0 0;
          font-size: 32px;
          letter-spacing: -1.5px;
          font-weight: 950;
        }

        .benefits-heading p {
          max-width: 570px;
          margin: 13px auto 0;
          color: rgba(255,255,255,.32);
          font-size: 12px;
          line-height: 1.7;
        }

        .benefit-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 40px;
        }

        .benefit {
          padding: 25px;
          border: 1px solid rgba(255,255,255,.065);
          border-radius: 17px;
          background: rgba(255,255,255,.018);
          transition: .3s ease;
        }

        .benefit:hover {
          border-color: rgba(139,92,246,.2);
          transform: translateY(-4px);
        }

        .benefit-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(139,92,246,.09);
          border: 1px solid rgba(139,92,246,.15);
          font-size: 19px;
        }

        .benefit h3 {
          margin: 17px 0 0;
          font-size: 13px;
          font-weight: 900;
        }

        .benefit p {
          margin: 7px 0 0;
          color: rgba(255,255,255,.3);
          font-size: 10px;
          line-height: 1.7;
        }

        /* CTA */

        .cta-section {
          position: relative;
          z-index: 5;
          width: min(1000px, calc(100% - 40px));
          margin: auto;
          padding: 90px 0;
        }

        .cta {
          position: relative;
          overflow: hidden;
          text-align: center;
          padding: 65px 25px;
          border: 1px solid rgba(139,92,246,.17);
          border-radius: 25px;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(139,92,246,.14),
              transparent 50%
            ),
            rgba(255,255,255,.018);
          box-shadow: 0 0 100px rgba(124,58,237,.07);
        }

        .cta::before {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          left: 50%;
          top: -180px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: #8b5cf6;
          opacity: .12;
          filter: blur(80px);
        }

        .cta-icon {
          position: relative;
          font-size: 35px;
        }

        .cta h2 {
          position: relative;
          margin: 14px 0 0;
          font-size: clamp(28px, 5vw, 42px);
          letter-spacing: -2px;
          font-weight: 950;
        }

        .cta p {
          position: relative;
          max-width: 530px;
          margin: 13px auto 0;
          color: rgba(255,255,255,.32);
          font-size: 12px;
          line-height: 1.7;
        }

        .cta-button {
          position: relative;
          display: inline-flex;
          margin-top: 25px;
          padding: 14px 22px;
          border-radius: 11px;
          background: white;
          color: #050505;
          font-size: 9px;
          font-weight: 950;
          transition: .3s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px) scale(1.03);
        }

        /* FOOTER */

        .footer {
          position: relative;
          z-index: 5;
          border-top: 1px solid rgba(255,255,255,.06);
        }

        .footer-inner {
          width: min(1180px, calc(100% - 40px));
          margin: auto;
          padding: 27px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .footer-brand {
          font-size: 12px;
          font-weight: 950;
        }

        .footer-brand span {
          color: #a78bfa;
        }

        .footer-sub {
          margin-top: 4px;
          color: rgba(255,255,255,.2);
          font-size: 8px;
        }

        .footer-copy {
          color: rgba(255,255,255,.18);
          font-size: 8px;
        }

        .footer-discord {
          color: rgba(255,255,255,.4);
          font-size: 9px;
          font-weight: 800;
          transition: .2s;
        }

        .footer-discord:hover {
          color: #a78bfa;
        }

        /* MOBILE */

        @media (max-width: 850px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .benefit-grid {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 70px;
          }

          .hero h1 {
            letter-spacing: -3px;
          }
        }

        @media (max-width: 620px) {
          .navbar {
            height: 68px;
          }

          .nav-inner,
          .hero,
          .products-section,
          .benefits,
          .cta-section,
          .footer-inner {
            width: min(100% - 28px, 1180px);
          }

          .nav-links {
            display: none;
          }

          .nav-discord {
            padding: 9px 12px;
            font-size: 9px;
          }

          .hero {
            padding: 65px 0 55px;
          }

          .hero h1 {
            font-size: 50px;
            letter-spacing: -3px;
          }

          .hero-description {
            font-size: 12px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .stats {
            margin-top: 35px;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .section-heading {
            display: block;
          }

          .payment-info {
            display: none;
          }

          .benefits {
            padding: 65px 0;
          }

          .benefits-heading h2 {
            font-size: 27px;
          }

          .cta {
            padding: 50px 20px;
          }

          .footer-inner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <div className="store">
        <div className="noise" />
        <div className="grid-bg" />

        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />

        {/* NAVBAR */}
        <header className="navbar">
          <div className="nav-inner">
            <Link href="/" className="logo">
              <div className="logo-icon">⚡</div>

              <div>
                <div className="logo-name">
                  DIDDY <span>STORE</span>
                </div>

                <div className="logo-sub">
                  PERFORMANCE STORE
                </div>
              </div>
            </Link>

            <nav className="nav-links">
              <Link href="/">Início</Link>
              <span style={{ color: "white" }}>Produtos</span>

              <a
                href="https://discord.gg/sHe3uSR57b"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </nav>

            <a
              href="https://discord.gg/sHe3uSR57b"
              target="_blank"
              rel="noreferrer"
              className="nav-discord"
            >
              Discord ↗
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="status">
            <span className="status-dot" />
            SISTEMA ONLINE • PACKS DISPONÍVEIS
          </div>

          <h1>
            MAIS <span className="gradient-text">FPS.</span>
            <br />
            MENOS <span className="gradient-text">INPUT LAG.</span>
          </h1>

          <p className="hero-description">
            Otimizações para quem quer extrair mais desempenho do PC.
            Escolha seu pack e leve sua experiência para outro nível.
          </p>

          <div className="hero-buttons">
            <a href="#produtos" className="primary-button">
              VER PRODUTOS ↓
            </a>

            <a
              href="https://discord.gg/sHe3uSR57b"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              💬 NOSSO DISCORD
            </a>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="stat-number">06</div>
              <div className="stat-label">PACKS</div>
            </div>

            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">DISPONÍVEL</div>
            </div>

            <div className="stat">
              <div
                className="stat-number"
                style={{ color: "#a78bfa" }}
              >
                PIX
              </div>
              <div className="stat-label">PAGAMENTO</div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="products-section" id="produtos">
          <div className="section-heading">
            <div>
              <div className="eyebrow">PERFORMANCE PACKS</div>

              <h2>Escolha sua otimização</h2>
            </div>

            <div className="payment-info">
              <div className="payment-title">
                PAGAMENTO SEGURO
              </div>

              <div className="payment-sub">
                Mercado Pago • PIX
              </div>
            </div>
          </div>

          <div className="products-grid">
            {products.map((product, index) => (
              <article
                key={product.id}
                className={`product-card ${
                  product.featured ? "featured" : ""
                }`}
              >
                <div className="card-inner">
                  <div className="card-light" />

                  <div className="card-top">
                    <div>
                      {product.badge && (
                        <span className="badge">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <span className="number">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="product-icon">
                    {product.icon}
                  </div>

                  <div className="product-name">
                    {product.name}
                  </div>

                  <div className="product-subtitle">
                    {product.subtitle}
                  </div>

                  <p className="product-description">
                    {product.description}
                  </p>

                  <div className="features">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="feature"
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>

                  <div className="card-bottom">
                    <div>
                      <div className="price-label">
                        POR APENAS
                      </div>

                      <div className="price">
                        <span>R$</span>
                        {product.price}
                      </div>
                    </div>

                    <Link
                      href={`/checkout?produto=${product.id}`}
                      className="buy-button"
                    >
                      <span>COMPRAR →</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="benefits-section">
          <div className="benefits">
            <div className="benefits-heading">
              <div className="eyebrow">
                DIDDY STORE EXPERIENCE
              </div>

              <h2>Performance em primeiro lugar.</h2>

              <p>
                Uma experiência simples para você escolher,
                pagar e receber seu produto.
              </p>
            </div>

            <div className="benefit-grid">
              <div className="benefit">
                <div className="benefit-icon">⚡</div>

                <h3>Foco em desempenho</h3>

                <p>
                  Packs separados por diferentes níveis
                  de otimização e necessidades.
                </p>
              </div>

              <div className="benefit">
                <div className="benefit-icon">🔒</div>

                <h3>Pagamento seguro</h3>

                <p>
                  Pagamento realizado através do Mercado
                  Pago com PIX.
                </p>
              </div>

              <div className="benefit">
                <div className="benefit-icon">🚀</div>

                <h3>Entrega rápida</h3>

                <p>
                  Depois da confirmação do pagamento, seu
                  produto fica disponível.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta">
            <div className="cta-icon">⚡</div>

            <h2>Pronto para buscar mais desempenho?</h2>

            <p>
              Escolha o pack ideal para você e comece sua
              experiência com a Diddy Store.
            </p>

            <a
              href="#produtos"
              className="cta-button"
            >
              ESCOLHER MEU PACK →
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-inner">
            <div>
              <div className="footer-brand">
                DIDDY <span>STORE</span>
              </div>

              <div className="footer-sub">
                PERFORMANCE • FPS • OTIMIZAÇÃO
              </div>
            </div>

            <div className="footer-copy">
              © {new Date().getFullYear()} Diddy Store
            </div>

            <a
              href="https://discord.gg/sHe3uSR57b"
              target="_blank"
              rel="noreferrer"
              className="footer-discord"
            >
              Discord →
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
