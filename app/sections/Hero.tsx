"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function Hero() {
  const { lang } = useLang();

  return (
    <section className="relative min-h-screen ai-grid-bg flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center overflow-hidden">
      {/* Floating metric cards */}
      {[
        { label: "Avg Growth", value: "847%", color: "text-emerald-600", icon: "📈", x: "-left-4 lg:-left-16", y: "top-32", delay: 0 },
        { label: "Posts Analyzed", value: "10K+", color: "text-blue-600", icon: "🔬", x: "left-2 lg:left-4", y: "bottom-40", delay: 0.2 },
        { label: "Faster Creation", value: "10×", color: "text-violet-600", icon: "⚡", x: "-right-4 lg:-right-16", y: "top-32", delay: 0.4 },
        { label: "Engagement Rate", value: "8.7%", color: "text-rose-500", icon: "💡", x: "right-2 lg:right-4", y: "bottom-40", delay: 0.6 },
      ].map((card, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:flex ${card.x} ${card.y} flex-col items-start bg-white rounded-2xl border border-gray-100 shadow-lg shadow-black/5 px-4 py-3 w-36 z-10`}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { delay: card.delay + 0.5, duration: 0.5 },
            scale: { delay: card.delay + 0.5, duration: 0.5 },
            y: { type: "tween", delay: card.delay + 1, duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <span className="text-lg mb-1">{card.icon}</span>
          <div className={`text-xl font-bold ${card.color}`}>{card.value}</div>
          <div className="text-xs text-gray-400 font-medium">{card.label}</div>
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
