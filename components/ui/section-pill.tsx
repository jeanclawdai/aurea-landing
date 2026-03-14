"use client";

import React from "react";

interface SectionPillProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export function SectionPill({ children, variant = "light", className = "" }: SectionPillProps) {
  const base = `
    relative inline-flex items-center gap-2
    px-4 py-1.5 rounded-full
    text-xs font-semibold tracking-widest uppercase
    overflow-hidden
  `;

  const light = `
    text-[#4A5A7A]
    border border-transparent
    [background-image:linear-gradient(white,white),linear-gradient(135deg,#6FA8FF,#A8B8FF,#D4A8FF,#FFA8D4,#6FA8FF)]
    [background-origin:border-box]
    [background-clip:padding-box,border-box]
    shadow-[0_2px_8px_rgba(111,168,255,0.2)]
  `;

  const dark = `
    text-white
    border border-transparent
    [background-image:linear-gradient(transparent,transparent),linear-gradient(135deg,#6FA8FF,#A8B8FF,#D4A8FF,#FFA8D4,#6FA8FF)]
    [background-origin:border-box]
    [background-clip:padding-box,border-box]
    shadow-[0_2px_8px_rgba(111,168,255,0.15)]
  `;

  return (
    <span className={`${base} ${variant === "dark" ? dark : light} ${className}`}>
      {/* Animated shine sweep */}
      <span
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
          backgroundSize: "200% 100%",
          animation: "pill-shine 3s ease-in-out infinite",
        }}
      />
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </span>
  );
}
