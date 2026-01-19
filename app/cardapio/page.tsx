import MenuCards from "../components/MenuCards";
import Link from "next/link";

export default function CardapioPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-cardapio.png')" }}
    >
      {/* Overlay escuro leve */}
      <div className="min-h-screen bg-white/10 backdrop-blur-sm">


        
        {/* LOGO CENTRAL */}
        <div className="mx-auto max-w-6xl px-6 pt-10 flex justify-center">
          <Link href="/">
            <img
              src="/adesivo.png"
              alt="Level Kids"
              className="h-32 w-auto drop-shadow-xl hover:scale-105 transition md:h-40"

            />
          </Link>
        </div>

        {/* CONTEÚDO */}
        <main className="mx-auto max-w-6xl px-6 py-10">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-emerald-800">
              Cardápio
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-700">
              Opções completas e cuidadosamente preparadas para tornar a festa
              ainda mais especial — do clássico ao premium.
            </p>
          </header>

          <MenuCards />
        </main>
      </div>
    </div>
  );
}
