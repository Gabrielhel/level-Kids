// components/MenuCards.tsx
import React from "react";

type Section = { title: string; items: string[] };

function SectionBlock({ title, items }: Section) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/80 p-5 shadow-[0_1px_0_rgba(0,0,0,0.03)] backdrop-blur">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h4 className="text-sm font-extrabold tracking-tight text-zinc-900 sm:text-base">
          {title}
        </h4>
      </div>

      <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2 font-medium">

        {items.map((item) => (
          <li key={item} className="flex gap-2 leading-snug">
            <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-zinc-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuPrettyCard({
  title,
  subtitle,
  theme,
  sections,
}: {
  title: string;
  subtitle: string;
  theme: "celebration" | "supreme";
  sections: Section[];
}) {
  const themeStyles =
    theme === "celebration"
      ? {
          ring: "ring-amber-200/60",
          blob1: "bg-amber-200/35",
          blob2: "bg-emerald-200/30",
          accent: "text-amber-700",
          line: "from-amber-200/60 via-emerald-200/40 to-transparent",
        }
      : {
          ring: "ring-emerald-200/70",
          blob1: "bg-emerald-200/35",
          blob2: "bg-sky-200/30",
          accent: "text-emerald-700",
          line: "from-emerald-200/70 via-sky-200/35 to-transparent",
        };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm ring-1">
      {/* fundo suave com “blobs” */}
      <div className="pointer-events-none absolute -top-20 -left-16 h-64 w-64 rounded-full blur-3xl" />
      <div
        className={[
          "pointer-events-none absolute -top-20 -left-16 h-64 w-64 rounded-full blur-3xl",
          themeStyles.blob1,
        ].join(" ")}
      />
      <div
        className={[
          "pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full blur-3xl",
          themeStyles.blob2,
        ].join(" ")}
      />

      <div className={["relative p-6 sm:p-8", themeStyles.ring].join(" ")}>
        {/* header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className={["text-2xl font-extrabold tracking-tight", themeStyles.accent].join(" ")}>
              {title}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 sm:text-base">{subtitle}</p>
          </div>

        </div>

        {/* linha decorativa */}
        <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        <div className={["mt-1 h-1 w-40 rounded-full bg-gradient-to-r", themeStyles.line].join(" ")} />

        {/* seções */}
        <div className="mt-6 grid gap-4 sm:gap-5">
          {sections.map((sec) => (
            <SectionBlock key={sec.title} title={sec.title} items={sec.items} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MenuCards() {
  const celebration: Section[] = [
    {
      title: "SALGADOS E PRATOS QUENTES",
      items: [
        "Hambúrguer no pão brioche",
        "Pizzas variadas (calabresa, mussarela, milho)",
        "Nuggets com molhinhos (ketchup, maionese, molho verde)",
        "Coxinhas crocantes e bolinhas de queijo",
        "Empadão de frango",
        "Pastel de carne e mini quiche de queijo",
        "Sanduíche natural de frango com maionese leve",
        "Pão de queijo mineirinho",
        "Palitos de cenoura e pepino com patês coloridos",
      ],
    },
    {
      title: "BUFFET DE CACHORRO QUENTE",
      items: [
        "Pão",
        "Salsicha com molho artesanal",
        "Batata palha",
        "Milho",
        "Vinagrete",
        "Maionese",
        "Ketchup",
        "Mostarda",
      ],
    },
    {
      title: "DOCES E SOBREMESAS",
      items: [
        "Brigadeiro, ninho e beijinho",
        "Mini churros com doce de leite",
        "Copinho de mousse de maracujá",
        "Mini donuts coloridos",
        "Cupcake decorado com toppers",
        "Brownie com calda de chocolate",
        "Salada de frutas com calda leve",
        "Cookie recheado com Nutella",
        "Torta de bombom de uva",
        "Torta banoffee",
      ],
    },
    {
      title: "BEBIDAS",
      items: [
        "Água mineral",
        "Suco de laranja integral",
        "Suco de uva integral",
        "Refrigerantes variados",
        "Leite",
        "Chá gelado",
        "Café",
        "Água saborizada com frutas frescas",
      ],
    },
  ];

  const supreme: Section[] = [
    {
      title: "FINGER FOODS E ENTRADAS",
      items: [
        "Sliders de mignon, brioche na manteiga e queijo Brie",
        "Tartar de salmão com ovas e creme de limão siciliano",
        "Bruschettas de cogumelos trufados e parmesão curado",
        "Vol-au-vent de frango cremoso com crosta dourada de parmesão",
        "Gnocchi artesanal mini com molho de queijos nobres",
        "Empadão com molho de camarão, brócolis e alho poró",
        "Tacos de filé confit com molho agridoce levemente picante",
        "Pastel de carne",
        "Quiche de queijo",
        "Sanduíche natural de peito de peru com maionese leve",
      ],
    },
    {
      title: "BUFFET DE CACHORRO QUENTE",
      items: [
        "Pão",
        "Salsicha com molho artesanal",
        "Batata palha",
        "Milho",
        "Vinagrete",
        "Maionese",
        "Ketchup",
        "Mostarda",
      ],
    },
    {
      title: "DOCES E SOBREMESAS",
      items: [
        "Brigadeiros gourmet com ouro comestível",
        "Beijinhos com coco queimado e praliné de castanhas",
        "Brigadeiro de ninho com Nutella",
        "Macarons de framboesa com folhas douradas",
        "Mini entremets de chocolate ruby e frutas vermelhas",
        "Tartelette de limão siciliano com merengue maçaricado",
        "Bombom de morango na taça com cereja e KitKat",
        "Mini donuts coloridos",
        "Cupcake decorado com toppers",
        "Cookie recheado com chocolate",
        "Torta Chocomousse",
        "Torta Oreo com Laka",
        "Torta alemã",
      ],
    },
    {
      title: "BEBIDAS",
      items: [
        "Água mineral",
        "Suco de laranja integral",
        "Suco de uva integral",
        "Refrigerantes variados",
        "Leite",
        "Chá gelado",
        "Café",
        "Água saborizada com frutas frescas",
      ],
    },
  ];

  return (
    <section className="mx-auto w-full max-w-6xl">
      <div className="grid gap-6 lg:grid-cols-2">
        <MenuPrettyCard
          theme="celebration"
          title="Celebration"
          subtitle="O clássico completo, perfeito para todas as idades."
          sections={celebration}
        />

        <MenuPrettyCard
          theme="supreme"
          title="Supreme Experience"
          subtitle="Seleção premium com entradas e doces sofisticados."
          sections={supreme}
        />
      </div>

      <div className="mt-8 rounded-2xl border border-black/5 bg-white p-5 text-sm text-zinc-600">
        <span className="font-semibold text-zinc-800">Observação:</span> Cardápios podem
        ser adaptados conforme necessidade, mantendo o padrão gastronômico Level Kids.
      </div>
    </section>
  );
}
