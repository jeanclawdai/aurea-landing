"use client";

import React from "react";

interface SectionPillProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export function SectionPill({ children, variant = "light", className = "" }: SectionPillProps) {
  const baseClass = variant === "dark" ? "section-pill-iridescent-dark" : "section-pill-iridescent";
  
  return (
    <span className={`${baseClass} ${className}`}>
      {children}
    </span>
  );
}
