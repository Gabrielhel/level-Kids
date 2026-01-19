import Link from "next/link";
import StickyLogo from "./components/StickyLogo";

export default function HomePage() {
  return (
    <main>
      <Header />

      {/* HERO (imagem inteira) */}
<section
  id="topo"
  className="relative min-h-screen flex items-center"
  style={{
    backgroundImage: "url('/home-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center top",
  }}
>
  {/* camada leve pra dar contraste */}
  <div className="absolute inset-0 bg-white/30" />

  {/* conteúdo */}
  <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-40">
    <img
      src="/adesivo.png"
      alt="Level Kids — Universo encantado"
      className="w-full max-w-3xl drop-shadow-2xl"
    />
  </div>
</section>

<section className="w-full bg-[#6E8A75] py-12">
  <div className="mx-auto max-w-6xl px-6">
    <h2 className="text-3xl font-extrabold text-emerald-950">Destaques</h2>
    <p className="mt-2 text-emerald-950/70">
      Tudo o que você precisa para uma festa inesquecível 
    </p>

    {/* Cards */}
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {/* Inclui */}
      <Link
        href="/inclui"
        className="group relative block overflow-hidden rounded-3xl bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-emerald-300" />
        <h3 className="text-xl font-extrabold text-slate-900">O que está incluso</h3>
        <p className="mt-2 text-slate-600">
          Monitor, decoração, estrutura e tudo que vem no aluguel.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2 font-extrabold text-white shadow-sm transition group-hover:bg-emerald-800">
          Ver mais <span className="transition group-hover:translate-x-0.5">→</span>
        </div>
      </Link>

      {/* Cardápio */}
      <Link
        href="/cardapio"
        className="group relative block overflow-hidden rounded-3xl bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-amber-300" />
        <h3 className="text-xl font-extrabold text-slate-900">Cardápio</h3>
        <p className="mt-2 text-slate-600">Opções deliciosas para crianças e adultos.</p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-200 px-5 py-2 font-extrabold text-amber-900 shadow-sm transition group-hover:bg-amber-300">
          Ver mais <span className="transition group-hover:translate-x-0.5">→</span>
        </div>
      </Link>

      {/* Feedback */}
      <Link
        href="/feedback"
        className="group relative block overflow-hidden rounded-3xl bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-sky-300" />
        <h3 className="text-xl font-extrabold text-slate-900">Feedback</h3>
        <p className="mt-2 text-slate-600">Veja o que as famílias dizem sobre a Level Kids.</p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-200 px-5 py-2 font-extrabold text-sky-900 shadow-sm transition group-hover:bg-sky-300">
          Ver mais <span className="transition group-hover:translate-x-0.5">→</span>
        </div>
      </Link>
    </div>
  </div>
</section>





      {/* GALERIA (mantida) */}
<section className="mx-auto max-w-6xl px-6 py-14">
  <h2 className="text-2xl font-extrabold">Galeria de Fotos</h2>
  <p className="mt-2 text-slate-600">
    Um pouquinho da diversão e do nosso espaço 
  </p>

  {/* FESTAS */}
  <div className="mt-8">
    <h3 className="mb-3 text-lg font-bold text-emerald-900">
      🎉 Festas
    </h3>

    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {[1, 2, 3].map((num) => (
        <img
          key={num}
          src={`/Galeria/festas/${num}.png`}
          alt={`Festa Level Kids ${num}`}
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow"
          loading="lazy"
        />
      ))}
    </div>
  </div>

  {/* ESPAÇO */}
  <div className="mt-10">
    <h3 className="mb-3 text-lg font-bold text-emerald-900">
      🏡 Nosso Espaço
    </h3>

    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {[1, 2, 3].map((num) => (
        <img
          key={num}
          src={`/Galeria/espaco/${num}.png`}
          alt={`Espaço Level Kids ${num}`}
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow"
          loading="lazy"
        />
      ))}
    </div>
  </div>

  {/* BOTÃO */}
  <div className="mt-10">
    <Link
      href="/Galeria"
      className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-6 py-3 font-extrabold text-emerald-950 shadow-sm transition hover:bg-emerald-200"
    >
      Ver Galeria Completa <span>→</span>
    </Link>
  </div>
</section>



      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-[34px] bg-white/85 px-6 py-3 shadow-xl backdrop-blur-md">
          {/* Logo */}
          <a href="#topo" className="relative block w-[180px]">
            <div className="h-10" />
            <StickyLogo
              src="/hero-logo.png"
              alt="Level Kids"
              showAfter={180}
              className="absolute -top-12 left20 h-32 w-auto drop-shadow-2xl"
            />
          </a>

          {/* Menu */}
          <nav className="hidden items-center gap-10 md:flex">
            <NavLinkTop href="/inclui">Pacotes</NavLinkTop>
            <NavLinkTop href="/Galeria">Galeria</NavLinkTop>
            <NavLinkTop href="/cardapio">Cardápio</NavLinkTop>
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/5547999328029"
            className="rounded-full bg-emerald-600 px-6 py-2 text-sm font-extrabold tracking-wide text-white shadow-md transition hover:scale-105 hover:bg-emerald-700"
          >
            AGENDE SUA FESTA
          </a>
        </div>
      </div>
    </header>
  );
}

function NavLinkTop({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-base font-extrabold tracking-widest text-emerald-900 hover:text-emerald-700"
    >
      {String(children).toUpperCase()}
    </Link>
  );
}

function CardLink({
  href,
  title,
  desc,
  topBar,
  buttonClass,
}: {
  href: string;
  title: string;
  desc: string;
  topBar: string;
  buttonClass: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className={`absolute inset-x-0 top-0 h-1 ${topBar}`} />

      <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>

      <span
        className={`mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2 font-extrabold shadow-sm transition ${buttonClass}`}
      >
        Ver mais <span className="transition group-hover:translate-x-0.5">→</span>
      </span>
    </Link>
  );
}

function Photo() {
  return <div className="aspect-[4/3] rounded-2xl bg-white/80 shadow" />;
}

function Footer() {
  return (
    <footer className="border-t bg-white/60">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Level Kids — Festas Infantis</p>
          <p>WhatsApp • Instagram • Endereço</p>
        </div>
      </div>
    </footer>
  );
}
