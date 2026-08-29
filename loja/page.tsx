import Link from "next/link";

const products = [
  {
    id: "omega",
    name: "OMEGA",
    price: 35,
    description: "Nossa otimização mais completa para máximo desempenho.",
    badge: "🔥 MAIS VENDIDO",
  },
  {
    id: "suprema",
    name: "Otimização Suprema",
    price: 20,
    description: "Pacote avançado focado em desempenho e estabilidade.",
    badge: "⭐ RECOMENDADO",
  },
  {
    id: "avancada",
    name: "Otimização Avançada",
    price: 10,
    description: "Uma opção equilibrada para melhorar o desempenho do PC.",
    badge: "",
  },
  {
    id: "basica",
    name: "Otimização Básica",
    price: 5,
    description: "O pacote essencial para começar a otimizar seu Windows.",
    badge: "",
  },
  {
    id: "fivem",
    name: "Pack FiveM",
    price: 10,
    description: "Pack focado em desempenho e configurações para FiveM.",
    badge: "🎮 FIVEM",
  },
  {
    id: "sensi",
    name: "Pack Sensi",
    price: 5,
    description: "Pack de configurações de sensibilidade.",
    badge: "",
  },
];

export default function Loja() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold tracking-[0.3em] text-purple-400">
            DIDDY STORE
          </p>

          <h1 className="text-5xl font-black md:text-7xl">
            Nossa Loja
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Escolha a otimização ideal para levar o desempenho do seu PC ao máximo.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-600 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]"
            >
              {product.badge && (
                <span className="rounded-full border border-purple-700 bg-purple-950/50 px-3 py-1 text-xs font-bold text-purple-300">
                  {product.badge}
                </span>
              )}

              <h2 className="mt-7 text-3xl font-black">
                {product.name}
              </h2>

              <p className="mt-4 min-h-14 text-zinc-400">
                {product.description}
              </p>

              <p className="mt-8 text-4xl font-black text-purple-400">
                R$ {product.price.toFixed(2).replace(".", ",")}
              </p>

              <Link
                href={`/checkout?produto=${product.id}`}
                className="mt-8 block w-full rounded-2xl bg-purple-600 py-4 text-center font-black transition hover:bg-purple-500"
              >
                Comprar agora →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="text-sm text-zinc-500 transition hover:text-purple-400"
          >
            ← Voltar para o início
          </Link>
        </div>

      </div>
    </main>
  );
}
