"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroLogoOnScroll() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        // quando o "sentinel" sai da tela, significa que rolou um pouco
        setShow(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* esse marcador fica no topo do hero */}
      <div ref={sentinelRef} className="h-1 w-full" />

      <div
        className={[
          "pointer-events-none absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2",
          "transition-all duration-500 ease-out",
          show ? "opacity-100 scale-100" : "opacity-0 scale-95",
        ].join(" ")}
      >
        <img
          src="/hero-logo.png"
          alt="Level Kids — Universo encantado"
          className="w-[720px] max-w-[85vw] drop-shadow-2xl"
        />
      </div>
    </>
  );
}
