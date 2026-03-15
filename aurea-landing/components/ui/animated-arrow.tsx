"use client";

import React, { useEffect, useState } from "react";

export function AnimatedArrowRight({ className = "w-5 h-5" }: { className?: string }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Auto-animate every 2.5 seconds
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 600);
    }, 2500);

    // Initial animation
    setTimeout(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 600);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} text-emerald-500 flex-shrink-0 transition-transform duration-300 ${animate ? "translate-x-1" : ""}`}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
