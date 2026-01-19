"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type StickyLogoProps = {
  src: string;
  alt: string;
  className?: string;
  showAfter?: number; // px de scroll
};

export default function StickyLogo({
  src,
  alt,
  className,
  showAfter = 120,
}: StickyLogoProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  return (
    <Image
      src={src}
      alt={alt}
      width={300}
      height={300}
      priority
      className={`
        transition-all duration-300
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        ${className ?? ""}
      `}
    />
  );
}
