import "./globals.css";
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Level Kids — Universo Encantado",
  description: "Festas infantis inesquecíveis na selva!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${fredoka.variable} font-sans bg-[#FAF7F0] text-slate-800`}>
        {children}
      </body>
    </html>
  );
}