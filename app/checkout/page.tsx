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
      <main className="min-h-screen bg-[#050208] px-5 py-32 text-white">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center">
          <div className="mb-5 text-5xl">⚠️</div>

          <h1 className="text-4xl font-black">
            Produto não encontrado
          </h1>

          <p className="mt-4 text-zinc-400">
            O produto selecionado não existe ou o link está incorreto.
          </p>

          <Link
            href="/loja"
            className="mt-8 inline-block rounded-xl bg-purple-600 px-6 py-4 font-black transition hover:bg-purple-500"
          >
            ← Voltar para a loja
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050208] px-5 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-6xl">

        <Link
          href="/loja"
          className="text-sm font-bold text-purple-400 transition hover:text-white"
        >
          ← Voltar para a loja
        </Link>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {/* PRODUTO */}
          <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />

            <div className="relative">

              <span className="inline-block rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-2 text-xs font-black text-purple-300">
                {product.badge}
              </span>

              <p className="mt-8 text-xs font-black tracking-[0.2em] text-purple-400">
                SEU PEDIDO
              </p>

              <h1 className="mt-3 text-5xl font-black tracking-tight">
                {product.name}
              </h1>

              <p className="mt-5 max-w-lg leading-7 text-zinc-400">
                {product.description}
              </p>

              <div className="mt-8 text-5xl font-black">
                <span className="mr-2 text-lg text-purple-400">
                  R$
                </span>

                {product.price.toFixed(2).replace(".", ",")}
              </div>

              <div className="my-8 h-px bg-white/10" />

              <h2 className="text-2xl font-black">
                O que está incluso
              </h2>

              <div className="mt-6 space-y-4">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-purple-500/15 font-black text-purple-300">
                      ✓
                    </span>

                    {feature}
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* PAGAMENTO */}
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 shadow-2xl backdrop-blur-xl">

            <div className="flex items-center gap-2 text-xs font-black tracking-[0.15em] text-purple-400">
              🔒 CHECKOUT SEGURO
            </div>

            <h2 className="mt-5 text-4xl font-black">
              Finalizar compra
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              Informe seu e-mail para receber as instruções de pagamento e acompanhar seu pedido.
            </p>

            <div className="mt-8">

              <label
                htmlFor="email"
                className="text-sm font-bold"
              >
                E-mail
              </label>

              <input
                id="email"
                type="email"
                placeholder="voce@email.com"
                className="mt-3 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500"
              />

            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-xl bg-purple-600 py-4 font-black transition hover:-translate-y-0.5 hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-900/30"
            >
              Continuar para pagamento →
            </button>

            <div className="mt-6 grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-zinc-500">
              <div className="rounded-lg border border-white/5 bg-black/20 p-3">
                <span className="text-purple-400">PIX</span>
              </div>

              <div className="rounded-lg border border-white/5 bg-black/20 p-3">
                RÁPIDO
              </div>

              <div className="rounded-lg border border-white/5 bg-black/20 p-3">
                DIGITAL
              </div>
            </div>

            <p className="mt-7 text-center text-xs leading-5 text-zinc-600">
              O pagamento será processado com segurança.
              Após a confirmação, o pedido poderá ser liberado.
            </p>

          </section>

        </div>
      </div>
    </main>
  );
}
