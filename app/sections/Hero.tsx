"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { lang } = useLang();

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center"
      style={{ background: 'linear-gradient(135deg, #fafafa 0%, #f0f4ff 40%, #faf0ff 70%, #fff0f8 100%)' }}
    >
      {/* Grid lines overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(111,168,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(111,168,255,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      {/* Floating metric cards */}
      {[
        { label: "Avg Growth", value: "847%", color: "text-gray-900", accent: "from-violet-100 to-blue-100", shadow: "shadow-violet-200/60", icon: "↑", delay: 0 },
        { label: "Posts Analyzed", value: "10K+", color: "text-gray-900", accent: "from-blue-100 to-cyan-100", shadow: "shadow-blue-200/60", icon: "◉", delay: 0.2 },
        { label: "Faster Creation", value: "10×", color: "text-gray-900", accent: "from-purple-100 to-pink-100", shadow: "shadow-purple-200/60", icon: "⚡", delay: 0.4 },
        { label: "Engagement", value: "8.7%", color: "text-gray-900", accent: "from-pink-100 to-rose-100", shadow: "shadow-pink-200/60", icon: "♡", delay: 0.6 },
      ].map((card, i) => (
        <motion.div
          key={i}
          className={`absolute hidden xl:block ${i < 2 ? 'left-12' : 'right-12'} ${i % 2 === 0 ? 'top-1/3' : 'bottom-1/3'} iridescent-hover`}
          style={{ borderRadius: 20 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: card.delay + 0.8, duration: 0.6, ease: [0.22,1,0.36,1] }}
        >
          <div className={`bg-gradient-to-br ${card.accent} rounded-2xl border border-white/80 px-5 py-4 w-40 shadow-lg ${card.shadow}`}>
            <div className="text-2xl mb-1">{card.icon}</div>
            <div className="text-2xl font-bold text-gray-900 tracking-tight">{card.value}</div>
            <div className="text-xs text-gray-500 font-medium mt-0.5">{card.label}</div>
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-500 text-sm font-medium mb-10">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {lang === "pt" ? "Sistema de Inteligência de Padrões" : "Pattern Intelligence System"}
        </div>

        {/* Main headline — HUGE */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-950 leading-[1.05] tracking-tight mb-6">
          {lang === "pt" ? (
            <>Preveja o que <span className="font-serif-italic font-normal">resulta</span><br />antes de publicar.</>
          ) : (
            <>Predict what <span className="font-serif-italic font-normal">works</span><br />before you post.</>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-400 font-normal max-w-2xl mx-auto mb-14 leading-relaxed">
          {lang === "pt"
            ? "IA treinada em +10.000 publicações virais. Para clínicas estéticas que querem crescer sem esforço."
            : "AI trained on 10,000+ viral posts. For aesthetic clinics that want to grow without the grind."}
        </p>

        {/* CTA Buttons — BIG */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="btn-shimmer w-full sm:w-auto px-10 py-5 bg-gray-950 text-white text-lg font-semibold rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-black/10"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            {lang === "pt" ? "Começar Gratuitamente" : "Start Free Trial"}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="w-full sm:w-auto px-10 py-5 bg-gray-100 text-gray-900 text-lg font-semibold rounded-2xl hover:bg-gray-200 transition-colors"
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          >
            {lang === "pt" ? "Ver Como Funciona" : "See How It Works"}
          </motion.button>
        </div>

        {/* Stats — BIG NUMBERS */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-gray-100 pt-14">
          {[
            { value: "847%", label: lang === "pt" ? "Crescimento médio" : "Avg growth" },
            { value: "10K+", label: lang === "pt" ? "Publicações analisadas" : "Posts analyzed" },
            { value: "10×", label: lang === "pt" ? "Mais rápido" : "Faster creation" },
          ].map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-gray-950 tracking-tight">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
