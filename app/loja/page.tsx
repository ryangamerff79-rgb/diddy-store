"use client";

import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: "omega",
    name: "OMEGA",
    subtitle: "ULTIMATE PERFORMANCE",
    description:
      "Nossa otimização mais completa para quem busca uma experiência de desempenho mais avançada.",
    price: 35,
    oldPrice: 49.9,
    badge: "🔥 MAIS VENDIDO",
    category: "OTIMIZAÇÃO",
    icon: "👑",
    featured: true,
  },
  {
    id: "suprema",
    name: "SUPREMA",
    subtitle: "ADVANCED PERFORMANCE",
    description:
      "Pacote avançado focado em desempenho e estabilidade para o uso diário e gaming.",
    price: 20,
    oldPrice: 29.9,
    badge: "⭐ RECOMENDADO",
    category: "OTIMIZAÇÃO",
    icon: "⚡",
    featured: false,
  },
  {
    id: "avancada",
    name: "AVANÇADA",
    subtitle: "BALANCED PERFORMANCE",
    description:
      "Uma opção equilibrada para quem deseja começar a trabalhar a experiência do sistema.",
    price: 10,
    oldPrice: 15.9,
    badge: "",
    category: "OTIMIZAÇÃO",
    icon: "🚀",
    featured: false,
  },
  {
    id: "basica",
    name: "BÁSICA",
    subtitle: "STARTER PERFORMANCE",
    description:
      "O pacote essencial para começar a explorar uma experiência de sistema mais organizada.",
    price: 5,
    oldPrice: 8.9,
    badge: "",
    category: "OTIMIZAÇÃO",
    icon: "⚙️",
    featured: false,
  },
  {
    id: "fivem",
    name: "FIVEM BOOST",
    subtitle: "FIVEM PERFORMANCE",
    description:
      "Pack direcionado para usuários que querem focar sua experiência no FiveM.",
    price: 10,
    oldPrice: 15.9,
    badge: "🎮 FIVEM",
    category: "FIVEM",
    icon: "🎮",
    featured: false,
  },
  {
    id: "sensi",
    name: "PACK SENSI",
    subtitle: "GAMING SETTINGS",
    description:
      "Pack focado em configurações de sensibilidade e experiência de gameplay.",
    price: 5,
    oldPrice: 8.9,
    badge: "🎯 GAMING",
    category: "GAMING",
    icon: "🎯",
    featured: false,
  },
];

const categories = [
  {
    id: "TODOS",
    label: "Todos os produtos",
    icon: "◈",
  },
  {
    id: "OTIMIZAÇÃO",
    label: "Otimização",
    icon: "⚡",
  },
  {
    id: "FIVEM",
    label: "FiveM",
    icon: "🎮",
  },
  {
    id: "GAMING",
    label: "Gaming",
    icon: "🎯",
  },
];

const comparison = [
  {
    name: "BÁSICA",
    price: "R$ 5",
    level: "Essencial",
    focus: "Sistema",
    recommended: false,
  },
  {
    name: "AVANÇADA",
    price: "R$ 10",
    level: "Intermediário",
    focus: "Sistema + Gaming",
    recommended: false,
  },
  {
    name: "SUPREMA",
    price: "R$ 20",
    level: "Avançado",
    focus: "Desempenho",
    recommended: true,
  },
  {
    name: "OMEGA",
    price: "R$ 35",
    level: "Completo",
    focus: "Performance",
    recommended: false,
  },
];

export default function LojaPage() {
  const [category, setCategory] = useState("TODOS");

  const filteredProducts = products.filter((product) => {
    if (category === "TODOS") return true;
    return product.category === category;
  });

  return (
    <main className="min-h-screen overflow-hidden bg-[#030106] text-white">

      {/* BACKGROUND */}

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-15%] top-[-10%] h-[550px] w-[550px] rounded-full bg-purple-700/20 blur-[160px]" />

        <div className="absolute right-[-15%] top-[25%] h-[500px] w-[500px] rounded-full bg-fuchsia-700/10 blur-[160px]" />

        <div className="absolute bottom-[-15%] left-[25%] h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-2xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">

          <Link href="/" className="group flex items-center gap-3">

            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-xl shadow-[0_0_30px_rgba(168,85,247,.15)] transition duration-300 group-hover:scale-110 group-hover:bg-purple-500/20">
              👑
            </div>

            <div>
              <div className="font-black tracking-tight">
                DIDDY <span className="text-purple-500">STORE</span>
              </div>

              <div className="text-[9px] font-bold tracking-[.25em] text-zinc-600">
                PERFORMANCE STORE
              </div>
            </div>

          </Link>

          <nav className="hidden items-center gap-8 text-xs font-black text-zinc-500 md:flex">
            <Link href="/" className="transition hover:text-white">
              INÍCIO
            </Link>

            <a
              href="#produtos"
              className="text-purple-400 transition hover:text-purple-300"
            >
              PRODUTOS
            </a>

            <a
              href="#comparativo"
              className="transition hover:text-white"
            >
              COMPARAR
            </a>

            <a
              href="#beneficios"
              className="transition hover:text-white"
            >
              BENEFÍCIOS
            </a>
          </nav>

          <a
            href="https://discord.gg/sHe3uSR57b"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-purple-600 px-4 py-3 text-xs font-black shadow-[0_0_25px_rgba(168,85,247,.25)] transition hover:scale-105 hover:bg-purple-500"
          >
            DISCORD
          </a>

        </div>

      </header>

      {/* HERO */}

      <section className="relative px-5 pb-20 pt-20 sm:px-6 sm:pt-28">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_.8fr]">

          <div>

            <div className="inline-flex items-center gap-3 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-[10px] font-black tracking-[.2em] text-purple-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400 shadow-[0_0_15px_#a855f7]" />
              LOJA ONLINE
              <span className="h-3 w-px bg-white/10" />
              ENTREGA DIGITAL
            </div>

            <h1 className="mt-8 text-6xl font-black leading-[.88] tracking-[-.06em] sm:text-8xl lg:text-[105px]">

              ESCOLHA
              <br />

              <span className="bg-gradient-to-r from-purple-300 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                SEU PACK.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
              Encontre a solução que combina com o seu objetivo.
              Explore nossos packs e escolha o nível de experiência
              que você procura.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href="#produtos"
                className="rounded-2xl bg-purple-600 px-7 py-4 text-sm font-black shadow-[0_0_40px_rgba(168,85,247,.25)] transition hover:-translate-y-1 hover:bg-purple-500"
              >
                EXPLORAR PRODUTOS ↓
              </a>

              <Link
                href="/"
                className="rounded-2xl border border-white/10 bg-white/[0.02] px-7 py-4 text-sm font-black text-zinc-400 transition hover:border-purple-500/30 hover:text-white"
              >
                VOLTAR AO INÍCIO
              </Link>

            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-white/5 py-6">

              <div>
                <strong className="text-2xl font-black">06</strong>
                <p className="mt-1 text-[9px] font-black tracking-[.2em] text-zinc-700">
                  PACKS
                </p>
              </div>

              <div className="border-l border-white/5 pl-5">
                <strong className="text-2xl font-black">PIX</strong>
                <p className="mt-1 text-[9px] font-black tracking-[.2em] text-zinc-700">
                  PAGAMENTO
                </p>
              </div>

              <div className="border-l border-white/5 pl-5">
                <strong className="text-2xl font-black">24/7</strong>
                <p className="mt-1 text-[9px] font-black tracking-[.2em] text-zinc-700">
                  ACESSO
                </p>
              </div>

            </div>

          </div>

          {/* HERO VISUAL */}

          <div className="relative hidden lg:block">

            <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-[110px]" />

            <div className="relative aspect-square">

              <div className="absolute inset-[8%] rounded-full border border-purple-500/10" />

              <div className="absolute inset-[18%] rounded-full border border-purple-500/10" />

              <div className="absolute inset-[28%] rounded-full border border-purple-500/10" />

              <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-600/20 to-transparent blur-2xl" />

              <div className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-[35px] border border-purple-500/30 bg-[#09050f]/90 p-7 shadow-[0_0_80px_rgba(168,85,247,.15)] backdrop-blur-xl">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-[9px] font-black tracking-[.25em] text-purple-400">
                      DIDDY PERFORMANCE
                    </p>

                    <h3 className="mt-2 text-3xl font-black">
                      MAX POWER
                    </h3>
                  </div>

                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-500/10 text-xl">
                    ⚡
                  </div>

                </div>

                <div className="mt-8 h-28 overflow-hidden rounded-2xl border border-white/5 bg-black/40 p-4">

                  <div className="flex h-full items-end gap-2">

                    {[35, 48, 42, 60, 55, 72, 66, 82, 76, 95].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-gradient-to-t from-purple-700/20 to-purple-400/80 transition hover:from-purple-500 hover:to-purple-300"
                          style={{
                            height: `${height}%`,
                          }}
                        />
                      )
                    )}

                  </div>

                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <p className="text-[8px] font-black text-zinc-700">
                      PERFORMANCE
                    </p>

                    <p className="mt-1 text-lg font-black text-purple-300">
                      MAX
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                    <p className="text-[8px] font-black text-zinc-700">
                      MODE
                    </p>

                    <p className="mt-1 text-lg font-black text-green-400">
                      ACTIVE
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TRUST BAR */}

      <section className="border-y border-white/5 bg-white/[0.015]">

        <div className="mx-auto grid max-w-7xl md:grid-cols-4">

          {[
            ["⚡", "FOCO EM PERFORMANCE", "Experiência pensada para gamers"],
            ["💳", "PAGAMENTO PIX", "Mercado Pago"],
            ["🚀", "ENTREGA DIGITAL", "Processo automatizado"],
            ["💬", "SUPORTE", "Entre em nossa comunidade"],
          ].map(([icon, title, description]) => (
            <div
              key={title}
              className="border-b border-white/5 p-6 last:border-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <div className="flex items-center gap-4">

                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-purple-500/10">
                  {icon}
                </div>

                <div>
                  <p className="text-xs font-black">
                    {title}
                  </p>

                  <p className="mt-1 text-[11px] text-zinc-600">
                    {description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </section>

      {/* PRODUCTS */}

      <section id="produtos" className="px-5 py-24 sm:px-6 sm:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>

              <p className="text-[10px] font-black tracking-[.3em] text-purple-400">
                CATÁLOGO DIDDY STORE
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                ENCONTRE
                <br />
                <span className="text-purple-500">
                  SEU NÍVEL.
                </span>
              </h2>

            </div>

            {/* FILTERS */}

            <div className="flex flex-wrap gap-2">

              {categories.map((item) => (

                <button
                  key={item.id}
                  onClick={() => setCategory(item.id)}
                  className={`rounded-xl border px-4 py-3 text-xs font-black transition duration-300 ${
                    category === item.id
                      ? "border-purple-500/40 bg-purple-600 text-white shadow-[0_0_25px_rgba(168,85,247,.2)]"
                      : "border-white/5 bg-white/[0.02] text-zinc-600 hover:border-purple-500/20 hover:text-white"
                  }`}
                >
                  <span className="mr-2">
                    {item.icon}
                  </span>

                  {item.label}
                </button>

              ))}

            </div>

          </div>

          {/* PRODUCT GRID */}

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

            {filteredProducts.map((product, index) => (

              <article
                key={product.id}
                className={`group relative overflow-hidden rounded-[30px] border ${
                  product.featured
                    ? "border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,.1)]"
                    : "border-white/5"
                } bg-[#08050d] p-7 transition duration-500 hover:-translate-y-2 hover:border-purple-500/30`}
              >

                {product.featured && (
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-600/20 blur-3xl transition group-hover:bg-purple-500/30" />
                )}

                {product.badge && (
                  <div className="absolute right-6 top-6 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-[9px] font-black text-purple-300">
                    {product.badge}
                  </div>
                )}

                <div className="relative">

                  <div className="flex items-start justify-between">

                    <div className="grid h-16 w-16 place-items-center rounded-2xl border border-purple-500/10 bg-purple-500/10 text-2xl transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {product.icon}
                    </div>

                    <span className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-[8px] font-black tracking-[.15em] text-zinc-700">
                      {product.category}
                    </span>

                  </div>

                  <p className="mt-8 text-[9px] font-black tracking-[.25em] text-purple-400">
                    {product.subtitle}
                  </p>

                  <h3 className="mt-2 text-3xl font-black tracking-tight">
                    {product.name}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-zinc-600">
                    {product.description}
                  </p>

                  <div className="my-7 h-px bg-white/5" />

                  <div className="flex items-end justify-between">

                    <div>

                      <p className="text-[9px] font-black text-zinc-700">
                        PAGAMENTO ÚNICO
                      </p>

                      <div className="mt-1 flex items-baseline gap-2">

                        <span className="text-4xl font-black">
                          R$ {product.price.toFixed(2).replace(".", ",")}
                        </span>

                        <del className="text-xs font-bold text-zinc-700">
                          R$ {product.oldPrice.toFixed(2).replace(".", ",")}
                        </del>

                      </div>

                    </div>

                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500/10 text-purple-400 transition group-hover:bg-purple-600 group-hover:text-white">
                      →
                    </div>

                  </div>

                  <Link
                    href={`/checkout?produto=${product.id}`}
                    className="mt-7 block rounded-2xl bg-purple-600 px-5 py-4 text-center text-sm font-black shadow-[0_0_25px_rgba(168,85,247,.12)] transition duration-300 hover:bg-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,.25)]"
                  >
                    COMPRAR {product.name}
                  </Link>

                  <div className="mt-4 flex items-center justify-center gap-2 text-[9px] font-bold text-zinc-700">
                    <span className="text-green-500">●</span>
                    ENTREGA DIGITAL APÓS CONFIRMAÇÃO
                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* WHICH ONE */}

      <section
        id="beneficios"
        className="border-y border-white/5 bg-white/[0.015] px-5 py-24 sm:px-6 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-[10px] font-black tracking-[.3em] text-purple-400">
              NÃO SABE QUAL ESCOLHER?
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-6xl">
              ENCONTRE O
              <br />
              <span className="text-purple-500">
                PACK CERTO.
              </span>
            </h2>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl border border-white/5 bg-[#08050d] p-7">

              <div className="text-3xl">💰</div>

              <h3 className="mt-6 text-xl font-black">
                QUERO COMEÇAR
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Se você está começando, os packs Básica e Avançada
                são opções mais acessíveis para conhecer a proposta.
              </p>

              <Link
                href="/checkout?produto=basica"
                className="mt-6 inline-block text-xs font-black text-purple-400"
              >
                VER BÁSICA →
              </Link>

            </div>

            <div className="rounded-3xl border border-purple-500/30 bg-purple-500/[0.04] p-7 shadow-[0_0_50px_rgba(168,85,247,.07)]">

              <div className="text-3xl">⭐</div>

              <h3 className="mt-6 text-xl font-black">
                QUERO EQUILÍBRIO
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                A Suprema busca entregar uma experiência mais completa
                sem chegar ao preço do pacote máximo.
              </p>

              <Link
                href="/checkout?produto=suprema"
                className="mt-6 inline-block text-xs font-black text-purple-400"
              >
                VER SUPREMA →
              </Link>

            </div>

            <div className="rounded-3xl border border-purple-500/30 bg-[#08050d] p-7">

              <div className="text-3xl">👑</div>

              <h3 className="mt-6 text-xl font-black">
                QUERO O COMPLETO
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                OMEGA é nossa opção mais completa para quem quer
                explorar o pacote de maior nível da loja.
              </p>

              <Link
                href="/checkout?produto=omega"
                className="mt-6 inline-block text-xs font-black text-purple-400"
              >
                VER OMEGA →
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* COMPARISON */}

      <section
        id="comparativo"
        className="px-5 py-24 sm:px-6 sm:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-[10px] font-black tracking-[.3em] text-purple-400">
              COMPARATIVO
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              COMPARE OS
              <span className="text-purple-500"> PACKS.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-600">
              Veja rapidamente a proposta de cada nível antes de
              escolher seu produto.
            </p>

          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-white/5 bg-[#08050d]">

            <div className="hidden grid-cols-5 border-b border-white/5 px-6 py-5 text-[9px] font-black tracking-[.15em] text-zinc-700 md:grid">

              <span>PACK</span>
              <span>PREÇO</span>
              <span>NÍVEL</span>
              <span>FOCO</span>
              <span>STATUS</span>

            </div>

            {comparison.map((item) => (

              <div
                key={item.name}
                className="grid gap-3 border-b border-white/5 p-6 last:border-0 md:grid-cols-5 md:items-center"
              >

                <div className="font-black">
                  {item.name}
                </div>

                <div className="font-black text-purple-400">
                  {item.price}
                </div>

                <div className="text-sm text-zinc-500">
                  {item.level}
                </div>

                <div className="text-sm text-zinc-500">
                  {item.focus}
                </div>

                <div>
                  {item.recommended ? (
                    <span className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-[9px] font-black text-purple-300">
                      ⭐ RECOMENDADO
                    </span>
                  ) : (
                    <span className="text-[9px] font-black text-zinc-700">
                      DISPONÍVEL
                    </span>
                  )}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="border-y border-white/5 bg-white/[0.015] px-5 py-24 sm:px-6 sm:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-[10px] font-black tracking-[.3em] text-purple-400">
              PROCESSO DE COMPRA
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              DO PRODUTO À
              <span className="text-purple-500"> ENTREGA.</span>
            </h2>

          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-4">

            {[
              ["01", "ESCOLHA", "Selecione seu pack."],
              ["02", "CHECKOUT", "Informe os dados necessários."],
              ["03", "PIX", "Realize o pagamento."],
              ["04", "ENTREGA", "Acompanhe a confirmação."],
            ].map(([number, title, text]) => (

              <div
                key={number}
                className="rounded-3xl border border-white/5 bg-[#08050d] p-7 transition hover:-translate-y-1 hover:border-purple-500/20"
              >

                <span className="text-5xl font-black text-purple-500/20">
                  {number}
                </span>

                <h3 className="mt-6 font-black">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="px-5 py-28 sm:px-6 sm:py-36">

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-purple-500/20 bg-gradient-to-br from-purple-950/50 via-[#0b0611] to-black p-10 text-center sm:p-16">

          <div className="absolute left-1/2 top-0 h-60 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[100px]" />

          <div className="relative">

            <div className="text-5xl">
              👑
            </div>

            <p className="mt-6 text-[10px] font-black tracking-[.3em] text-purple-400">
              DIDDY STORE
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-6xl">
              QUAL SERÁ O SEU
              <br />
              <span className="text-purple-500">
                PRÓXIMO PACK?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-500">
              Explore todos os produtos e escolha a opção que
              mais combina com seu objetivo.
            </p>

            <a
              href="#produtos"
              className="mt-9 inline-block rounded-2xl bg-purple-600 px-9 py-4 text-sm font-black shadow-[0_0_40px_rgba(168,85,247,.25)] transition hover:scale-105 hover:bg-purple-500"
            >
              ESCOLHER MEU PACK →
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/5 px-5 py-12 sm:px-6">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div>

            <div className="text-xl font-black">
              DIDDY <span className="text-purple-500">STORE</span>
            </div>

            <p className="mt-2 text-[10px] font-black tracking-[.2em] text-zinc-700">
              MAIS FPS • MENOS INPUT LAG
            </p>

          </div>

          <div className="flex flex-wrap gap-6 text-xs font-black text-zinc-600">

            <Link href="/">
              INÍCIO
            </Link>

            <a href="#produtos">
              PRODUTOS
            </a>

            <a href="#comparativo">
              COMPARAR
            </a>

            <Link href="/faq">
              FAQ
            </Link>

            <Link href="/termos">
              TERMOS
            </Link>

          </div>

          <a
            href="https://discord.gg/sHe3uSR57b"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-purple-600 px-5 py-3 text-xs font-black transition hover:bg-purple-500"
          >
            DISCORD
          </a>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/5 pt-6 text-[10px] font-bold text-zinc-800">
          © 2026 Diddy Store. Todos os direitos reservados.
        </div>

      </footer>

    </main>
  );
}
