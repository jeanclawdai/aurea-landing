"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLang } from "../context/LanguageContext";
import { AtomIcon, type AtomIconHandle } from "@/components/ui/atom-icon";

export default function Hero() {
  const { lang } = useLang();
  const atomRef = useRef<AtomIconHandle>(null);

  // Auto-animate atom icon
  useEffect(() => {
    const interval = setInterval(() => {
      atomRef.current?.startAnimation();
    }, 2500);
    // Start immediately
    atomRef.current?.startAnimation();
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 hero-gradient-animated" />
      {/* Grid lines overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(111,168,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(111,168,255,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      {/* Floating metric cards — positioned around the title */}
      {[
        { label: "With Aurea", value: "+847%", sub: "follower growth", accent: "from-violet-100 to-blue-100", shadow: "shadow-violet-200/60", icon: "📈", x: "left-6 xl:left-20", y: "top-[38%]", rotate: -3, delay: 0, breathClass: "card-breathe-1" },
        { label: "AI-Optimized", value: "10K+", sub: "posts created", accent: "from-blue-100 to-cyan-100", shadow: "shadow-blue-200/60", icon: "✨", x: "left-3 xl:left-14", y: "top-[56%]", rotate: 2, delay: 0.15, breathClass: "card-breathe-2" },
        { label: "Time Saved", value: "10×", sub: "faster workflow", accent: "from-purple-100 to-pink-100", shadow: "shadow-purple-200/60", icon: "⚡", x: "right-6 xl:right-20", y: "top-[36%]", rotate: 3, delay: 0.3, breathClass: "card-breathe-3" },
        { label: "Avg Result", value: "8.7%", sub: "engagement rate", accent: "from-pink-100 to-rose-100", shadow: "shadow-pink-200/60", icon: "💎", x: "right-3 xl:right-14", y: "top-[54%]", rotate: -2, delay: 0.45, breathClass: "card-breathe-4" },
      ].map((card, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:block ${card.x} ${card.y} z-10 ${card.breathClass}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, rotate: card.rotate }}
          whileHover={{ 
            scale: 1.1, 
            rotate: 0, 
            y: -6,
            boxShadow: "0 16px 32px rgba(0,0,0,0.12)"
          }}
          transition={{ 
            default: { delay: card.delay + 0.6, duration: 0.7, ease: [0.22,1,0.36,1] },
            scale: { type: "spring", stiffness: 400, damping: 25 },
            y: { type: "spring", stiffness: 400, damping: 25 },
          }}
        >
          <div className={`bg-gradient-to-br ${card.accent} rounded-xl border border-white/60 px-4 py-3 w-36 shadow-lg ${card.shadow} backdrop-blur-sm cursor-pointer iridescent-hover`} style={{ borderRadius: 14 }}>
            <div className="text-lg mb-0.5">{card.icon}</div>
            <div className="text-xl font-bold text-gray-900 tracking-tight">{card.value}</div>
            <div className="text-[9px] text-gray-500 font-medium uppercase tracking-wide">{card.sub}</div>
            <div className="text-[8px] text-gray-400 mt-0.5">{card.label}</div>
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <div className="section-pill inline-flex items-center gap-2 px-4 py-2 text-sm font-medium mb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {lang === "pt" ? "Sistema de Inteligência de Padrões" : "Pattern Intelligence System"}
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-950 leading-[1.05] tracking-tight mb-5">
          {lang === "pt" ? (
            <>Preveja o que <span className="font-serif-italic font-normal">resulta</span><br />antes de publicar.</>
          ) : (
            <>Predict what <span className="font-serif-italic font-normal">works</span><br />before you post.</>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 font-normal max-w-2xl mx-auto mb-12 leading-relaxed">
          {lang === "pt"
            ? "IA treinada em +10.000 publicações virais. Para clínicas estéticas que querem crescer sem esforço."
            : "AI trained on 10,000+ viral posts. For aesthetic clinics that want to grow without the grind."}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="rotating-border-btn w-full sm:w-auto sm:min-w-[250px] px-8 py-4 text-white text-base font-semibold flex items-center justify-center gap-2.5 shadow-xl shadow-black/10"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {lang === "pt" ? "Começar" : "Get Started"}
            <ArrowRight size={18} className="text-white" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="iridescent-btn w-full sm:w-auto sm:min-w-[250px] px-8 py-4 text-gray-700 text-base font-semibold rounded-2xl flex items-center justify-center gap-2.5 shadow-md shadow-purple-200/40"
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          >
            <AtomIcon ref={atomRef} size={20} className="text-violet-500" />
            {lang === "pt" ? "Ver Como Funciona" : "See How It Works"}
          </motion.button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto border-t border-gray-100 pt-12">
          {[
            { value: "847%", label: lang === "pt" ? "Crescimento médio" : "Avg growth" },
            { value: "10K+", label: lang === "pt" ? "Publicações analisadas" : "Posts analyzed" },
            { value: "10×", label: lang === "pt" ? "Mais rápido" : "Faster creation" },
          ].map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1.5 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
      
      {/* Iridescent divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="iridescent-divider mx-auto" style={{ maxWidth: '80%' }} />
      </div>
    </section>
  );
}
