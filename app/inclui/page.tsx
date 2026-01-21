import Link from "next/link";
import Header from "../components/Header";

const blocos = [
  {
    title: "👩‍🏫 EQUIPE E MONITORIA",
    items: [
      "Recepcionista, monitores, recreacionistas, garçom e coordenador operacional",
      "Brincadeiras guiadas e acompanhamento durante toda a festa",
      "Organização completa do fluxo: chegada, parabéns e alimentação",
     
    ],
  },
  {
    title: "🌿 ESPAÇO TEMÁTICO",
    items: [
      "Ambiente seguro, lúdico e pensado especialmente para crianças",
      "Áreas de brincadeiras + espaço de convivência para pais e responsáveis (com mesa de sinuca)",
      "Mobiliário moderno e confortável",
      "Mini quadra de futebol",
      "Simuladores e fliperamas",
      "Arvorismo externo",
    ],
  },
  {
    title: "🎈 DECORAÇÃO E CLIMA DA FESTA",
    items: [
      "Decoração base do espaço com arranjo de mesa",
      "Orientação de layout e plano de chão personalizado",
      "Duração do evento: 4h",
    ],
  },
  {
    title: "🧼 Conforto & Segurança",
    items: [
      "Ambiente limpo e organizado",
      "Banheiros e áreas de apoio",
      "Ambiente climatizado",
      "Sistema de som equalizado com conexão Bluetooth",
      "Sistema de microfone sem fio",
    ],
  },
];

const extras = [
  "🎂 Bolo temático (sob encomenda)",
  "🍭 Docinhos personalizados",
  "✨ Decoração premium",
  "🎭 Animação / personagens",
  "📸 Fotografia",
  "🎬 Vídeo da festa (videomaker)",
];

export default function IncluiPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      <Header />

      <main className="mx-auto max-w-6xl px-6 pt-10 pb-16">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-emerald-800">
            O que está incluso
          </h1>
          <p className="mt-3 mx-auto max-w-2xl text-lg text-slate-700">
            Tudo pensado para a festa ficar leve, segura e divertida — sem dor de cabeça ✨
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/cardapio"
              className="rounded-full bg-white px-6 py-3 font-extrabold text-emerald-800 shadow hover:bg-emerald-50"
            >
              Ver Cardápio
            </Link>

            <Link
              href="/galeria"
              className="rounded-full bg-white px-6 py-3 font-extrabold text-emerald-800 shadow hover:bg-emerald-50"
            >
              Ver Galeria
            </Link>

            <a
              href="https://wa.me/5547999328029"
              target="_blank"
rel="noopener noreferrer"
              className="rounded-full bg-emerald-700 px-6 py-3 font-extrabold text-white shadow hover:bg-emerald-800"
            >
              Pedir orçamento no WhatsApp
            </a>
          </div>
        </header>

        {/* Blocos principais */}
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          {blocos.map((b) => (
            <div
              key={b.title}
              className="rounded-3xl bg-white/80 p-7 shadow backdrop-blur"
            >
              <h2 className="text-xl font-extrabold text-emerald-900">
                {b.title}
              </h2>

              <ul className="mt-4 space-y-3">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-3 text-[17px] text-slate-800">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-900">
                      ✓
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Extras */}
        <section className="mt-10 rounded-3xl bg-white/70 p-8 shadow backdrop-blur">
          <h2 className="text-2xl font-extrabold text-emerald-900">
            Extras (opcionais)
          </h2>
          <p className="mt-2 text-slate-700">
            Quer deixar ainda mais especial? Esses itens podem ser adicionados:
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map((e) => (
              <div
                key={e}
                className="rounded-2xl bg-white px-4 py-3 shadow-sm"
              >
                <p className="font-bold text-slate-800">{e}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://wa.me/5547999328029"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-emerald-700 px-8 py-3 font-extrabold text-white shadow hover:bg-emerald-800"
            >
              Quero adicionar extras 💚
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
