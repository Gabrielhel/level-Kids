import Link from "next/link";

export default function GaleriaPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-emerald-900">Galeria</h1>
          <p className="mt-2 text-slate-600">
            Festas e nosso espaço encantado ✨
          </p>
        </div>

        <Link
          href="/"
          className="rounded-full bg-white px-5 py-2 font-extrabold text-emerald-900 shadow-sm hover:bg-emerald-50"
        >
          Voltar
        </Link>
      </div>

      {/* FESTAS */}
      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-emerald-900">🎉 Festas</h2>
        <p className="mt-2 text-slate-600">Momentos incríveis na selva.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
            <img
              key={num}
              src={`/Galeria/festas/${num}.png`}
              alt={`Festa Level Kids ${num}`}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* ESPAÇO */}
      <section className="mt-14">
        <h2 className="text-2xl font-extrabold text-emerald-900">
          🏡 Nosso Espaço
        </h2>
        <p className="mt-2 text-slate-600">Estrutura pensada para encantar.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {Array.from({ length: 14 }, (_, i) => i + 1).map((num) => (
            <img
              key={num}
              src={`/Galeria/espaco/${num}.png`}
              alt={`Espaço Level Kids ${num}`}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow"
              loading="lazy"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
