import Link from "next/link";

export default function Header() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-12 flex justify-center">
      <Link href="/" aria-label="Voltar ao início">
        <img
          src="/adesivo.png"
          alt="Level Kids"
          className="h-28 w-auto drop-shadow-xl md:h-36"
        />
      </Link>
    </div>
  );
}