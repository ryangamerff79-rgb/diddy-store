```tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const products = [
  {
    id: "omega",
    name: "OMEGA",
    price: 35,
    description:
      "Nossa otimização mais completa para extrair o máximo desempenho do seu PC.",
    badge: "🔥 MAIS VENDIDO",
    icon: "⚡",
    accent: "purple",
    features: ["Otimização avançada", "FPS", "Input Lag", "Windows"],
  },
  {
    id: "suprema",
    name: "OTIMIZAÇÃO SUPREMA",
    price: 20,
    description:
      "Pacote avançado focado em desempenho, estabilidade e uma experiência mais fluida.",
    badge: "⭐ RECOMENDADO",
    icon: "👑",
    accent: "blue",
    features: ["FPS", "Estabilidade", "Windows", "Desempenho"],
  },
  {
    id: "avancada",
    name: "OTIMIZAÇÃO AVANÇADA",
    price: 10,
    description:
      "Uma opção equilibrada para melhorar o desempenho do Windows e dos seus jogos.",
    badge: "",
    icon: "🚀",
    accent: "cyan",
    features: ["Windows", "FPS", "Desempenho", "Otimização"],
  },
  {
    id: "basica",
    name: "OTIMIZAÇÃO BÁSICA",
    price: 5,
    description:
      "O pacote essencial para começar a otimizar seu Windows de forma simples.",
    badge: "",
    icon: "🛠️",
    accent: "green",
    features: ["Windows", "Limpeza", "Desempenho", "Configurações"],
  },
  {
    id: "fivem",
    name: "PACK FIVEM",
    price: 10,
    description:
      "Pack focado em desempenho e configurações para uma experiência mais fluida no FiveM.",
    badge: "🎮 FIVEM",
    icon: "🎮",
    accent: "orange",
    features: ["FiveM", "FPS", "Desempenho", "Configurações"],
  },
  {
    id: "sensi",
    name: "PACK SENSI",
    price: 5,
    description:
      "Pack de configurações de sensibilidade para deixar sua experiência mais confortável.",
    badge: "",
    icon: "🎯",
    accent: "red",
    features: ["Sensi", "Mouse", "Precisão", "Configurações"],
  },
];

function AnimatedBackground() {
  const [particles, setParticles] = useState<
    { left: string; top: string; delay: string; duration: string }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 35 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${4 + Math.random() * 7}s`,
    }));

    setParticles(generated);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[140px]" />
        <div className="absolute right-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-[-200px] left-[30%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[160px]" />

        {particles.map((particle, index) => (
          <span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-white/30 animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
    </>
  );
}

export default function LojaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050507] text-white">
      <AnimatedBackground />

      {/* NAVBAR */}
      <nav className="relative z-20 border-b border-white/[0.06] bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-xl shadow-[0_0_30px_rgba(168,85,247,.15)] transition group-hover:scale-105">
              ⚡
            </div>

            <div>
              <div className="text-lg font-black tracking-tight">
                DIDDY<span className="text-purple-400"> STORE</span>
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/35">
                Performance Store
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-white/50 md:flex">
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Início
            </Link>

            <span className="text-white">Produtos</span>

            <a
              href="https://discord.gg/sHe3uSR57b"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-purple-300"
            >
              Discord
            </a>
          </div>

          <a
            href="https://discord.gg/sHe3uSR57b"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-bold text-purple-200 transition hover:border-purple-400/40 hover:bg-purple-500/20"
          >
            Discord
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-14 pt-16 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* STATUS */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.07] px-4 py-2 text-xs font-bold text-purple-200 shadow-[0_0_40px_rgba(168,85,247,.08)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            SISTEMA ONLINE • OTIMIZAÇÕES DISPONÍVEIS
          </div>

          {/* TITLE */}
          <h1 className="text-5xl font-black tracking-[-0.04em] md:text-7xl">
            MAIS{" "}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              FPS.
            </span>
            <br />
            MENOS{" "}
            <span className="bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
              INPUT LAG.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/45 md:text-lg">
            Packs de otimização desenvolvidos para melhorar a experiência
            do seu PC em Windows, FiveM, Fortnite, Valorant e muito mais.
          </p>

          {/* STATS */}
          <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl">
            <div className="border-r border-white/[0.07] px-3 py-5">
              <div className="text-xl font-black text-white">6+</div>
              <div className="mt-1 text-[9px] font-bold uppercase tracking-widest text-white/30">
                Packs
              </div>
            </div>

            <div className="border-r border-white/[0.07] px-3 py-5">
              <div className="text-xl font-black text-white">24/7</div>
              <div className="mt-1 text-[9px] font-bold uppercase tracking-widest text-white/30">
                Disponível
              </div>
            </div>

            <div className="px-3 py-5">
              <div className="text-xl font-black text-purple-300">PIX</div>
              <div className="mt-1 text-[9px] font-bold uppercase tracking-widest text-white/30">
                Pagamento
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative z-10 mx-auto max-w-7xl px-5 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">
              PERFORMANCE PACKS
            </div>

            <h2 className="text-2xl font-black tracking-tight md:text-3xl">
              Escolha sua otimização
            </h2>
          </div>

          <div className="hidden text-right md:block">
            <div className="text-xs font-bold text-white/40">
              PAGAMENTO SEGURO
            </div>
            <div className="mt-1 text-[10px] text-white/20">
              Mercado Pago • PIX
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-[1px] transition duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-white/[0.04] ${
                index === 0
                  ? "shadow-[0_0_80px_rgba(168,85,247,.10)]"
                  : ""
              }`}
            >
              {/* CARD GLOW */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 blur-[70px] transition duration-500 group-hover:bg-purple-500/20" />

              <div className="relative h-full rounded-[23px] bg-[#0a0a0e]/95 p-6">
                {/* BADGE */}
                <div className="mb-6 flex min-h-[24px] items-center justify-between">
                  {product.badge ? (
                    <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-[9px] font-black tracking-wider text-purple-200">
                      {product.badge}
                    </span>
                  ) : (
                    <span />
                  )}

                  <span className="text-xs font-bold text-white/20">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* ICON */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.08] to-white/[0.02] text-2xl shadow-[0_0_35px_rgba(168,85,247,.08)] transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {product.icon}
                </div>

                {/* NAME */}
                <h3 className="text-xl font-black tracking-tight">
                  {product.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/40">
                  {product.description}
                </p>

                {/* FEATURES */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-lg border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wide text-white/35"
                    >
                      ✓ {feature}
                    </span>
                  ))}
                </div>

                {/* PRICE */}
                <div className="mt-7 flex items-end justify-between border-t border-white/[0.07] pt-6">
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-widest text-white/25">
                      Por apenas
                    </div>

                    <div className="mt-1 text-3xl font-black tracking-tight">
                      <span className="mr-1 text-sm font-bold text-white/30">
                        R$
                      </span>
                      {product.price}
                    </div>
                  </div>

                  <Link
                    href={`/checkout?produto=${product.id}`}
                    className="group/button relative overflow-hidden rounded-xl bg-white px-5 py-3 text-xs font-black text-black transition duration-300 hover:scale-105 hover:bg-purple-100"
                  >
                    <span className="relative z-10">
                      COMPRAR
                    </span>

                    <span className="absolute inset-0 -translate-x-full bg-purple-300 transition duration-300 group-hover/button:translate-x-0" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY DIDDY */}
      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400">
              POR QUE DIDDY STORE?
            </div>

            <h2 className="mt-3 text-3xl font-black">
              Feito para quem quer desempenho.
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/35">
              Escolha o pack ideal para seu objetivo e tenha acesso ao produto
              após a confirmação do pagamento.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: "⚡",
                title: "Foco em desempenho",
                text: "Packs organizados para diferentes níveis de otimização.",
              },
              {
                icon: "🔒",
                title: "Pagamento seguro",
                text: "Pagamento realizado através do Mercado Pago.",
              },
              {
                icon: "🚀",
                title: "Entrega rápida",
                text: "Após a confirmação, seu produto fica disponível.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.07] bg-black/20 p-6 transition hover:border-purple-400/20 hover:bg-white/[0.025]"
              >
                <div className="text-2xl">{item.icon}</div>

                <h3 className="mt-5 font-black">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/35">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-5 py-24">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-purple-400/15 bg-gradient-to-br from-purple-500/[0.12] via-white/[0.03] to-blue-500/[0.08] p-8 text-center shadow-[0_0_100px_rgba(168,85,247,.08)] md:p-14">
          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-purple-500/20 blur-[80px]" />

          <div className="relative">
            <div className="text-4xl">⚡</div>

            <h2 className="mt-5 text-3xl font-black md:text-4xl">
              Pronto para buscar mais desempenho?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/40">
              Escolha seu pack e comece sua experiência com a Diddy Store.
            </p>

            <a
              href="https://discord.gg/sHe3uSR57b"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 text-xs font-black text-black transition hover:scale-105 hover:bg-purple-100"
            >
              ENTRAR NO DISCORD →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-center md:flex-row md:text-left">
          <div>
            <div className="text-sm font-black">
              DIDDY<span className="text-purple-400"> STORE</span>
            </div>

            <div className="mt-1 text-[10px] text-white/20">
              Performance • FPS • Otimização
            </div>
          </div>

          <div className="text-[10px] text-white/20">
            © {new Date().getFullYear()} Diddy Store. Todos os direitos
            reservados.
          </div>

          <a
            href="https://discord.gg/sHe3uSR57b"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-white/40 transition hover:text-purple-300"
          >
            Discord →
          </a>
        </div>
      </footer>
    </main>
  );
}
```
