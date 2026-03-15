"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionPill } from "@/components/ui/section-pill";
import { useLang } from "../context/LanguageContext";
import { AtomIcon, type AtomIconHandle } from "@/components/ui/atom-icon";

const DEV_VIDEOS = [
  { src: "/hero-bubbles.mp4", label: "bubbles", opacity: "opacity-50" },
  { src: "/hero-forest.mp4", label: "forest", opacity: "opacity-70" },
];

export default function Hero() {
  const { lang } = useLang();
  const atomRef = useRef<AtomIconHandle>(null);
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const cycleVideo = () => {
    const next = (videoIndex + 1) % DEV_VIDEOS.length;
    setVideoIndex(next);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [videoIndex]);

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
      
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover -z-10 transition-opacity duration-700 ${DEV_VIDEOS[videoIndex].opacity}`}
      >
        <source src={DEV_VIDEOS[videoIndex].src} type="video/mp4" />
      </video>

      {/* DEV: video cycle button */}
      <button
        onClick={cycleVideo}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-black/60 text-white border border-white/20 hover:bg-black/80 transition-colors backdrop-blur-sm"
        title="Cycle hero video"
      >
        ▶ {DEV_VIDEOS[videoIndex].label} ({videoIndex + 1}/{DEV_VIDEOS.length})
      </button>
      {/* Grid lines overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(111,168,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(111,168,255,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <SectionPill className="mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
          {lang === "pt" ? "Sistema de Inteligência de Padrões" : "Pattern Intelligence System"}
        </SectionPill>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-950 dark:text-white leading-[1.05] tracking-tight mb-5">
          {lang === "pt" ? (
            <>Preveja o que <span className="font-serif-italic font-normal">resulta</span><br />antes de publicar.</>
          ) : (
            <>Predict what <span className="font-serif-italic font-normal">works</span><br />before you post.</>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-normal max-w-2xl mx-auto mb-12 leading-relaxed">
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
            className="iridescent-btn w-full sm:w-auto sm:min-w-[250px] px-8 py-4 text-gray-700 dark:text-purple-200 text-base font-semibold rounded-2xl flex items-center justify-center gap-2.5 shadow-md shadow-purple-200/40 dark:shadow-purple-900/20"
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          >
            <AtomIcon ref={atomRef} size={20} className="text-violet-500" />
            {lang === "pt" ? "Ver Como Funciona" : "See How It Works"}
          </motion.button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto border-t border-gray-100 dark:border-white/10 pt-12">
          {[
            { value: "847%", label: lang === "pt" ? "Crescimento médio" : "Avg growth" },
            { value: "10K+", label: lang === "pt" ? "Publicações analisadas" : "Posts analyzed" },
            { value: "10×", label: lang === "pt" ? "Mais rápido" : "Faster creation" },
          ].map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white tracking-tight">{stat.value}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500 mt-1.5 font-medium">{stat.label}</div>
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
