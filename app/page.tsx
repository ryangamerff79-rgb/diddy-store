
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-bold tracking-[0.4em] text-purple-400">
          PERFORMANCE • FPS • OPTIMIZAÇÃO
        </p>

        <h1 className="text-6xl font-black tracking-tight md:text-8xl">
          DIDDY
          <span className="text-purple-500"> STORE</span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-zinc-400 md:text-2xl">
          Mais FPS. Menos input lag. Mais desempenho para seu PC.
        </p>

        <p className="mt-4 max-w-xl text-zinc-600">
          Packs de otimização para Windows, FiveM, Fortnite, Valorant e muito mais.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/loja"
            className="rounded-2xl bg-purple-600 px-8 py-4 font-black transition hover:scale-105 hover:bg-purple-500"
          >
            Ver produtos →
          </Link>

          <a
            href="https://discord.gg/sHe3uSR57b"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-purple-500/50 px-8 py-4 font-bold transition hover:bg-purple-500/10"
          >
            Discord
          </a>
        </div>
      </section>
    </main>
  );
}
