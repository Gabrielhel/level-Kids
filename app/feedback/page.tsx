import Link from "next/link";
import Header from "../components/Header";

const feedbacks = [
  {
    name: "Pamela",
    role: "Mãe da Alice (5 anos)",
    msg: "Tivemos uma experiência incrível com a festa da Alice na Level Kids. Foi a primeira festa que aconteceu na Casa de festas e foi muito especial! Amamos o espaço, o pessoal que trabalhou na festa foi maravilhoso e atencioso com as crianças. Com certeza repetiremos outros aniversários da Alice na Level Kids! ❤️",
  },

];

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      {/* Header opcional (se você quiser manter o logo clicável) */}
      <Header />

      <main className="mx-auto max-w-6xl px-6 pt-10 pb-16">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold text-emerald-800">Feedback</h1>
          <p className="mt-3 mx-auto max-w-2xl text-lg text-slate-700">
            Um mural com mensagens reais de quem já viveu a aventura na selva 🌿✨
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/galeria"
              className="rounded-full bg-white px-6 py-3 font-extrabold text-emerald-800 shadow hover:bg-emerald-50"
            >
              Ver Galeria
            </Link>

            <a
              href="https://wa.me/5547999328029"
              className="rounded-full bg-emerald-700 px-6 py-3 font-extrabold text-white shadow hover:bg-emerald-800"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </header>

        {/* Mural */}
        <section className="mt-10">
          <div className="grid gap-6 md:grid-cols-2">
            {feedbacks.map((f, i) => (
                <ChatBubble
    key={i}
    name={f.name}
    role={f.role}
    msg={f.msg}
    side={i % 2 === 0 ? "left" : "right"}
    delayMs={i * 250}
  />
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-white/70 p-6 shadow backdrop-blur">
            <p className="text-center text-slate-700">
              Quer aparecer no mural? Envie sua mensagem no WhatsApp e a gente adiciona 💚
            </p>
          </div>
        </section>

<style>{`
  @keyframes lkFadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .lk-bubble {
    opacity: 0;
    animation: lkFadeUp 4500ms cubic-bezier(.2,.8,.2,1) both;
  }
`}</style>


      </main>
    </div>
  );
}

function ChatBubble({
  name,
  role,
  msg,
  side,
  delayMs = 0,
}: {
  name: string;
  role: string;
  msg: string;
  side: "left" | "right";
  delayMs?: number;
}) {
  const isRight = side === "right";

  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"}`}>
      <div
      style={{ animationDelay: `${delayMs}ms` }}
        className={[
          "lk-bubble relative max-w-[520px] rounded-3xl px-7 py-6 shadow-md bg-white",
          isRight ? "border border-emerald-100" : "border border-slate-100", 
        ].join(" ")}
      >
        {/* Aspas grandes decorativas */}
        <div className="pointer-events-none absolute -top-6 left-4 text-[96px] font-extrabold leading-none text-emerald-200/60">
          “
        </div>

        {/* Rabinho estilo WhatsApp */}
        <div
          className={[
            "absolute top-8 h-3 w-3 rotate-45 bg-white",
            isRight
              ? "-right-1 border-r border-t border-emerald-100"
              : "-left-1 border-l border-b border-slate-100",
          ].join(" ")}
        />

        {/* Estrelas */}
        <div className="relative mb-3 flex gap-1 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>

        {/* Mensagem */}
        <p className="relative text-[17px] leading-relaxed text-slate-800">
          {msg}
        </p>

        {/* Nome */}
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <p className="font-extrabold text-emerald-900">{name}</p>
            <p className="text-sm text-slate-600">{role}</p>
          </div>

          <div className="text-sm font-bold text-emerald-800/70">✓✓</div>
        </div>
      </div>
    </div>
  );
}

