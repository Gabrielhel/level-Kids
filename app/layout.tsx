import "./globals.css";
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Level Kids — Universo Encantado",
  description: "Festas infantis inesquecíveis na selva!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fredoka.variable} font-sans bg-[#FAF7F0] text-slate-800`}
      >
        {/* GA4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-G1NR9SJGTE"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G1NR9SJGTE');
          `}
        </Script>

        {children}

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
