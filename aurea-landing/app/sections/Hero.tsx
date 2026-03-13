"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { useLang } from "../context/LanguageContext";

const featureCards = [
  {
    emoji: "✍️",
    title: "AI Content Creation",
    desc: "Scripts, captions, and ideas tailored to your brand voice.",
    accent: "from-blue-400/20 to-cyan-400/10",
  },
  {
    emoji: "🎙️",
    title: "Voice Cloning",
    desc: "Your voice, infinite content — without recording every time.",
    accent: "from-violet-400/20 to-purple-400/10",
  },
  {
    emoji: "✂️",
    title: "Auto Editing",
    desc: "Subtitles, cuts, and transitions applied automatically.",
    accent: "from-pink-400/20 to-rose-400/10",
  },
  {
    emoji: "📅",
    title: "Smart Posting",
    desc: "Publish to Instagram & TikTok at peak engagement times.",
    accent: "from-amber-400/20 to-orange-400/10",
  },
];

export default function Hero() {
  const [instagramHandle, setInstagramHandle] = useState("");
  const sectionRef = useRef(null);
  const { t } = useLang();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Audit for:", instagramHandle);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="mesh-bg relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      <motion.div
        style={{ y: contentParallax }}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/60 backdrop-blur-sm text-sm font-medium text-gray-600 mb-10 shadow-sm"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Pattern Intelligence System
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-6"
        >
          {t.hero.headline1}
          <br />
          {t.hero.headline2}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6"
        >
          <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">@</span>
              <input
                type="text"
                value={instagramHandle}
                onChange={(e) => setInstagramHandle(e.target.value)}
                placeholder="your_profile"
                className="w-full pl-9 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-gray-400 focus:outline-none text-gray-900 placeholder:text-gray-400 shadow-sm transition-all text-base"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-gray-900 text-white rounded-xl font-semibold text-base shadow-lg hover:bg-gray-800 transition-all whitespace-nowrap"
            >
              {t.hero.cta2.replace(" →", "")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </form>
        </motion.div>

        {/* Secondary link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-3 text-sm text-gray-400 mb-16"
        >
          <span>Free pattern analysis · Predict your viral potential</span>
          <span>·</span>
          <button
            onClick={scrollToPricing}
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            View Pricing →
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-12 mb-20"
        >
          {[
            { value: "847%", label: t.hero.stat1Label },
            { value: "10,000+", label: t.hero.stat2Label },
            { value: "10x", label: t.hero.stat3Label },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-gray-900 tracking-tight">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Feature Preview Cards — Liquid Glass 2x2 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="grid grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {featureCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
              className="liquid-glass p-5 text-left"
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br ${card.accent} mb-3 text-xl`}>
                {card.emoji}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">{card.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
