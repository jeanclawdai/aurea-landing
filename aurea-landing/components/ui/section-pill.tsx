"use client";

import React from "react";

interface SectionPillProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export function SectionPill({ children, variant = "light", className = "" }: SectionPillProps) {
  return (
    <span className={`section-pill-component section-pill-${variant} ${className}`}>
      {variant === "light" && <span className="section-pill-glow" aria-hidden="true" />}
      <span className="section-pill-inner">{children}</span>
    </span>
  );
}
