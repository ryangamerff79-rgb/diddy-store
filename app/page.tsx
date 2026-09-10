import Link from "next/link";

const products = [
  {
    name: "OMEGA",
    price: "R$ 35",
    description: "Nossa otimização mais completa para máximo desempenho.",
    badge: "🔥 MAIS VENDIDO",
    color: "purple",
  },
  {
    name: "SUPREMA",
    price: "R$ 20",
    description: "Pacote avançado focado em desempenho e estabilidade.",
    badge: "⭐ RECOMENDADO",
    color: "blue",
  },
  {
    name: "AVANÇADA",
    price: "R$ 10",
    description: "Equilíbrio entre desempenho, estabilidade e praticidade.",
    badge: "",
    color: "cyan",
  },
  {
    name: "BÁSICA",
    price: "R$ 5",
    description: "O pacote essencial para começar.",
    badge: "",
    color: "green",
  },
  {
    name: "FIVEM BOOST",
    price: "R$ 10",
    description: "Pack focado em desempenho para FiveM.",
    badge: "🎮 FIVEM",
    color: "orange",
  },
  {
    name: "PACK SENSI",
    price: "R$ 5",
    description: "Configurações para uma experiência mais confortável.",
    badge: "🎯 GAMING",
    color: "pink",
  },
];

const games = [
  "FiveM",
  "Fortnite",
  "Valorant",
  "GTA V",
  "CS2",
  "Roblox",
];

const faqs = [
  {
    question: "Como recebo meu produto?",
    answer:
      "Após a confirmação do pagamento, o sistema libera automaticamente a página de entrega do seu pedido.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento é realizado através do Mercado Pago usando PIX.",
  },
  {
    question: "A entrega é automática?",
    answer:
      "Sim. O sistema verifica a confirmação do pagamento e libera a entrega automaticamente.",
  },
  {
    question: "Qual produto devo escolher?",
    answer:
      "A escolha depende do seu objetivo. OMEGA é o pacote mais completo, enquanto Básica e Avançada são opções mais simples.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030106] text-white">

      {/* BACKGROUND EFFECTS */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-15%] top-[-10%] h-[500px] w-[500px] rounded-full bg-purple-700/20 blur-[150px]" />
        <div className="absolute right-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-fuchsia-700/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-purple-500/10 bg-black/60 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link href="/" className="group flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl border border-purple-400/30 bg-purple-500/10 text-2xl shadow-[0_0_30px_rgba(168,85,247,.25)] transition group-hover:scale-110">
              👑
            </div>

            <div>
              <div className="text-lg font-black tracking-tight">
                DIDDY <span className="text-purple-500">STORE</span>
              </div>

              <div className="text-[9px] font-bold tracking-[0.25em] text-zinc-600">
                PERFORMANCE STORE
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-bold text-zinc-400 md:flex">
            <Link className="transition hover:text-white" href="/">
              Início
            </Link>

            <Link className="transition hover:text-purple-400" href="/loja">
              Loja
            </Link>

            <a className="transition hover:text-purple-400" href="#como-funciona">
              Como funciona
            </a>

            <a className="transition hover:text-purple-400" href="#faq">
              FAQ
            </a>

            <a className="transition hover:text-purple-400" href="#sobre">
              Sobre
            </a>
          </nav>

          <a
            href="https://discord.gg/sHe3uSR57b"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-black shadow-[0_0_25px_rgba(168,85,247,.35)] transition hover:scale-105 hover:bg-purple-500"
          >
            Discord
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 pt-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">

          <div className="animate-[fadeIn_1s_ease-out]">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-black tracking-[0.18em] text-purple-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
              PERFORMANCE • FPS • OTIMIZAÇÃO
            </div>

            <h1 className="text-6xl font-black leading-[.9] tracking-[-0.05em] sm:text-7xl lg:text-[100px]">
              DIDDY
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                STORE
              </span>
            </h1>

            <h2 className="mt-8 max-w-2xl text-2xl font-black sm:text-3xl">
              MAIS FPS.
              <span className="text-purple-500"> MENOS INPUT LAG.</span>
              <br />
              MAIS DESEMPENHO.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg">
              Packs e configurações focados em melhorar a experiência de
              utilização do seu PC e dos seus jogos.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/loja"
                className="group rounded-2xl bg-purple-600 px-8 py-4 text-center font-black shadow-[0_0_40px_rgba(168,85,247,.3)] transition duration-300 hover:-translate-y-1 hover:bg-purple-500 hover:shadow-[0_0_60px_rgba(168,85,247,.5)]"
              >
                EXPLORAR PRODUTOS
                <span className="ml-2 transition group-hover:ml-4">
                  →
                </span>
              </Link>

              <a
                href="#como-funciona"
                className="rounded-2xl border border-purple-500/30 bg-white/[0.02] px-8 py-4 text-center font-black transition hover:border-purple-400 hover:bg-purple-500/10"
              >
                COMO FUNCIONA
              </a>

            </div>

            {/* GAMES */}
            <div className="mt-12 flex flex-wrap gap-3">
              {games.map((game) => (
                <div
                  key={game}
                  className="rounded-xl border border-white/5 bg-white/[0.025] px-4 py-2 text-xs font-bold text-zinc-500 transition hover:border-purple-500/30 hover:text-purple-300"
                >
                  🎮 {game}
                </div>
              ))}
            </div>
          </div>

          {/* PERFORMANCE CARD */}
          <div className="relative hidden lg:block">

            <div className="absolute inset-0 rounded-[40px] bg-purple-600/20 blur-[100px]" />

            <div className="relative rounded-[40px] border border-purple-500/20 bg-[#09050f]/90 p-5 shadow-[0_0_100px_rgba(168,85,247,.12)] backdrop-blur-xl">

              <div className="rounded-[30px] border border-white/5 bg-black/40 p-7">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold tracking-[.25em] text-purple-400">
                      DIDDY PERFORMANCE
                    </p>

                    <h3 className="mt-2 text-2xl font-black">
                      SEU PC. SEU DESEMPENHO.
                    </h3>
                  </div>

                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-purple-500/10 text-xl">
                    ⚡
                  </div>
                </div>

                <div className="mt-8 space-y-4">

                  {[
                    ["⚡", "PERFORMANCE", "Mais fluidez"],
                    ["🎯", "PRECISÃO", "Menos interferências"],
                    ["🛡️", "ESTABILIDADE", "Experiência consistente"],
                    ["🎮", "GAMING", "Foco nos seus jogos"],
                  ].map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.025] p-4 transition hover:border-purple-500/30 hover:bg-purple-500/5"
                    >
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-purple-500/10 text-xl transition group-hover:scale-110">
                        {icon}
                      </div>

                      <div>
                        <p className="font-black">{title}</p>
                        <p className="mt-1 text-sm text-zinc-600">
                          {text}
                        </p>
                      </div>

                      <span className="ml-auto text-purple-500">
                        →
                      </span>
                    </div>
                  ))}

                </div>

                <div className="mt-6 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs font-bold text-zinc-600">
                        PERFORMANCE MODE
                      </p>

                      <p className="mt-1 text-xl font-black text-purple-300">
                        ATIVADO
                      </p>
                    </div>

                    <div className="h-3 w-3 animate-pulse rounded-full bg-purple-400 shadow-[0_0_20px_#a855f7]" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY DIDDY */}
      <section id="sobre" className="border-y border-white/5 bg-white/[0.015] px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs font-black tracking-[.25em] text-purple-400">
              POR QUE DIDDY STORE?
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              FEITA PARA QUEM
              <br />
              <span className="text-purple-500">
                QUER MAIS DO PC.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-zinc-500">
              Nossa proposta é reunir configurações e packs focados em
              desempenho, organização e experiência para gamers.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-4">

            {[
              ["⚡", "PERFORMANCE", "Foco em uma experiência mais fluida."],
              ["🎮", "GAMING", "Pensado para quem joga no PC."],
              ["🛡️", "ESTABILIDADE", "Configurações organizadas."],
              ["💬", "SUPORTE", "Comunidade e atendimento."],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="group rounded-3xl border border-white/5 bg-[#08050c] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_20px_60px_rgba(168,85,247,.08)]"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-purple-500/10 text-2xl transition group-hover:scale-110">
                  {icon}
                </div>

                <h3 className="mt-7 font-black">
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

      {/* PRODUCTS */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-black tracking-[.25em] text-purple-400">
                NOSSOS PRODUTOS
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                ENCONTRE SUA
                <br />
                <span className="text-purple-500">
                  OTIMIZAÇÃO.
                </span>
              </h2>
            </div>

            <Link
              href="/loja"
              className="font-black text-purple-400 transition hover:text-purple-300"
            >
              VER TODA A LOJA →
            </Link>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {products.map((product, index) => (
              <div
                key={product.name}
                className={`group relative overflow-hidden rounded-3xl border ${
                  index === 0
                    ? "border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,.12)]"
                    : "border-white/5"
                } bg-[#08050d] p-7 transition duration-500 hover:-translate-y-2 hover:border-purple-500/40`}
              >

                {product.badge && (
                  <div className="absolute right-5 top-5 rounded-full bg-purple-600/20 px-3 py-1 text-[10px] font-black text-purple-300">
                    {product.badge}
                  </div>
                )}

                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-purple-500/10 text-2xl">
                  {index === 0 ? "👑" : "⚡"}
                </div>

                <p className="mt-8 text-xs font-black tracking-[.2em] text-purple-400">
                  DIDDY PACK
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  {product.name}
                </h3>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-zinc-600">
                  {product.description}
                </p>

                <div className="mt-7 flex items-end gap-2">
                  <span className="text-3xl font-black">
                    {product.price}
                  </span>

                  <span className="pb-1 text-xs font-bold text-zinc-700">
                    pagamento único
                  </span>
                </div>

                <Link
                  href="/loja"
                  className="mt-7 block rounded-2xl bg-purple-600 px-5 py-4 text-center text-sm font-black transition hover:bg-purple-500"
                >
                  COMPRAR AGORA →
                </Link>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="como-funciona"
        className="border-y border-white/5 bg-white/[0.015] px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-xs font-black tracking-[.25em] text-purple-400">
              COMO FUNCIONA?
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              SIMPLES.
              <span className="text-purple-500"> RÁPIDO.</span>
              <br />
              AUTOMÁTICO.
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-4">

            {[
              ["01", "ESCOLHA", "Escolha o produto ideal para você."],
              ["02", "PAGUE", "Realize o pagamento através do PIX."],
              ["03", "CONFIRMAÇÃO", "O sistema verifica o pagamento."],
              ["04", "ENTREGA", "Após a aprovação, a entrega é liberada."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="relative rounded-3xl border border-white/5 bg-[#08050d] p-7"
              >
                <div className="text-5xl font-black text-purple-500/30">
                  {number}
                </div>

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

      {/* OPTIMIZATION INFO */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-xs font-black tracking-[.25em] text-purple-400">
              SOBRE OTIMIZAÇÃO
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              O QUE É
              <br />
              <span className="text-purple-500">
                OTIMIZAÇÃO?
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-zinc-500">
              Otimização é o processo de ajustar configurações do sistema
              para buscar uma experiência mais adequada ao seu uso,
              especialmente em jogos e aplicações.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-zinc-600">
              O resultado pode variar de acordo com o hardware, sistema,
              jogo e configurações utilizadas.
            </p>

            <Link
              href="/faq"
              className="mt-8 inline-block rounded-xl border border-purple-500/30 px-6 py-3 text-sm font-black text-purple-300 transition hover:bg-purple-500/10"
            >
              SABER MAIS →
            </Link>
          </div>

          <div className="grid gap-4">

            {[
              ["⚡", "MAIS FLUIDEZ", "Busque uma experiência mais consistente."],
              ["🎯", "MENOS INTERFERÊNCIAS", "Organize configurações do sistema."],
              ["🛡️", "MAIS ESTABILIDADE", "Priorize uma configuração equilibrada."],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="flex gap-5 rounded-3xl border border-white/5 bg-white/[0.02] p-7"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-purple-500/10 text-xl">
                  {icon}
                </div>

                <div>
                  <h3 className="font-black">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {text}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="border-y border-white/5 bg-white/[0.015] px-6 py-28"
      >
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-xs font-black tracking-[.25em] text-purple-400">
              PERGUNTAS FREQUENTES
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              TIRE SUAS
              <span className="text-purple-500"> DÚVIDAS.</span>
            </h2>
          </div>

          <div className="mt-12 space-y-3">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/5 bg-[#08050d] p-5"
              >
                <summary className="cursor-pointer list-none font-black">
                  <div className="flex items-center justify-between">
                    {faq.question}

                    <span className="text-xl text-purple-500 transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
                  {faq.answer}
                </p>
              </details>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-32">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-purple-500/20 bg-gradient-to-br from-purple-950/50 to-[#08050d] p-10 text-center sm:p-16">

          <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[100px]" />

          <div className="relative">
            <div className="text-5xl">👑</div>

            <p className="mt-6 text-xs font-black tracking-[.3em] text-purple-400">
              DIDDY STORE
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-6xl">
              PRONTO PARA
              <br />
              <span className="text-purple-500">
                ELEVAR SUA EXPERIÊNCIA?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-zinc-500">
              Conheça nossos produtos e encontre o pack mais adequado
              para o seu objetivo.
            </p>

            <Link
              href="/loja"
              className="mt-9 inline-block rounded-2xl bg-purple-600 px-9 py-4 font-black shadow-[0_0_40px_rgba(168,85,247,.3)] transition hover:scale-105 hover:bg-purple-500"
            >
              IR PARA A LOJA →
            </Link>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-12">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div>
            <div className="text-xl font-black">
              DIDDY <span className="text-purple-500">STORE</span>
            </div>

            <p className="mt-2 text-xs font-bold text-zinc-700">
              Mais FPS • Menos Input Lag
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm font-bold text-zinc-600">
            <Link href="/">Início</Link>
            <Link href="/loja">Loja</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/termos">Termos</Link>
          </div>

          <a
            href="https://discord.gg/sHe3uSR57b"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-black transition hover:bg-purple-500"
          >
            Discord
          </a>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/5 pt-6 text-xs text-zinc-700">
          © 2026 Diddy Store. Todos os direitos reservados.
        </div>

      </footer>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: rgba(168, 85, 247, .35);
          color: white;
        }
      `}</style>

    </main>
  );
}
