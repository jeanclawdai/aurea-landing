"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const beforeProfile = {
  username: "clinica_aurora",
  displayName: "Clínica Aurora",
  followers: 1240,
  following: 891,
  posts: 47,
  bio: "Medicina Estética ✨ Lisboa",
};

const afterProfile = {
  username: "clinica_aurora",
  displayName: "Clínica Aurora",
  followers: 28400,
  following: 891,
  posts: 184,
  bio: "Medicina Estética ✨ Lisboa 🏆 Top Creator",
};

function AnimCount({ from, to, triggered }: { from: number; to: number; triggered: boolean }) {
  const [val, setVal] = useState(from);
  const ran = useRef(false);

  useEffect(() => {
    if (!triggered || ran.current) return;
    ran.current = true;
    const start = Date.now();
    const duration = 1600;
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [triggered, from, to]);

  const display = val >= 1000 ? `${(val / 1000).toFixed(val >= 10000 ? 0 : 1)}K` : val.toString();
  return <span>{display}</span>;
}

function IPhoneMockup({ isAfter, triggered }: { isAfter: boolean; triggered: boolean }) {
  const target = isAfter ? afterProfile : beforeProfile;

  return (
    <div className="relative w-[380px] mx-auto">
      {/* Label */}
      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-semibold z-10 whitespace-nowrap ${isAfter ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-600"}`}>
        {isAfter ? "After Aurea ✨" : "Before Aurea"}
      </div>

      {/* Phone frame */}
      <div className="relative bg-gray-950 rounded-[52px] p-[3px] shadow-2xl shadow-black/40">
        <div className="bg-white rounded-[50px] overflow-hidden" style={{ height: 720 }}>
          {/* Notch */}
          <div className="bg-gray-950 h-8 flex items-center justify-center">
            <div className="w-20 h-4 bg-gray-950 rounded-full" />
          </div>

          {/* Instagram header */}
          <div className="bg-white px-4 pt-3 pb-2 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">9:41</span>
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">IG</span>
              </div>
            </div>
          </div>

          {/* Profile area */}
          <div className="px-4 pt-4">
            {/* Avatar + stats row */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-[2px] flex-shrink-0">
                <div className={`w-full h-full rounded-full flex items-center justify-center text-lg ${isAfter ? "bg-gradient-to-br from-purple-400 to-pink-500" : "bg-gray-200"}`}>
                  {isAfter ? "✨" : "🏥"}
                </div>
              </div>
              <div className="flex gap-3 flex-1">
                <div className="text-center flex-1">
                  <div className="text-sm font-bold text-gray-950">
                    {isAfter ? <AnimCount from={47} to={184} triggered={triggered} /> : <span>47</span>}
                  </div>
                  <div className="text-[9px] text-gray-400">posts</div>
                </div>
                <div className="text-center flex-1">
                  <div className={`text-sm font-bold ${isAfter ? "text-emerald-600" : "text-gray-950"}`}>
                    {isAfter ? <AnimCount from={1240} to={28400} triggered={triggered} /> : <span>1.2K</span>}
                  </div>
                  <div className="text-[9px] text-gray-400">followers</div>
                </div>
                <div className="text-center flex-1">
                  <div className="text-sm font-bold text-gray-950">891</div>
                  <div className="text-[9px] text-gray-400">following</div>
                </div>
              </div>
            </div>

            {/* Name + bio */}
            <div className="mb-3">
              <div className="text-xs font-bold text-gray-950">{target.displayName}</div>
              <div className="text-[10px] text-gray-500">{target.bio}</div>
            </div>

            {/* Follow button */}
            <button className={`w-full py-1.5 rounded-lg text-xs font-semibold mb-4 ${isAfter ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"}`}>
              {isAfter ? "Following ✓" : "Follow"}
            </button>

            {/* Stats pills */}
            <div className="grid grid-cols-3 gap-1.5 mb-3">
              {[
                { label: "Engagement", before: "1.8%", after: "8.7%" },
                { label: "Avg Views", before: "890", after: "47.2K" },
                { label: "Posts/wk", before: "2", after: "7" },
              ].map((stat) => (
                <div key={stat.label} className={`rounded-xl p-2 text-center ${isAfter ? "bg-emerald-50 border border-emerald-100" : "bg-gray-50 border border-gray-100"}`}>
                  <div className={`text-[11px] font-bold ${isAfter ? "text-emerald-600" : "text-gray-700"}`}>
                    {isAfter ? stat.after : stat.before}
                  </div>
                  <div className="text-[8px] text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Grid placeholder posts */}
            <div className="grid grid-cols-3 gap-0.5">
              {(() => {
                const afterColors = [
                  "bg-gradient-to-br from-pink-200 to-rose-300",
                  "bg-gradient-to-br from-purple-200 to-violet-300",
                  "bg-gradient-to-br from-blue-200 to-cyan-300",
                  "bg-gradient-to-br from-orange-200 to-amber-300",
                  "bg-gradient-to-br from-emerald-200 to-teal-300",
                  "bg-gradient-to-br from-pink-300 to-purple-400",
                  "bg-gradient-to-br from-yellow-200 to-orange-300",
                  "bg-gradient-to-br from-cyan-200 to-blue-300",
                  "bg-gradient-to-br from-rose-200 to-pink-300",
                ];
                return Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className={`aspect-square rounded-sm ${isAfter ? afterColors[i] : "bg-gray-100"} flex items-center justify-center`}>
                    {isAfter && i < 3 && <span className="text-[8px]">🔥</span>}
                    {isAfter && i >= 3 && <span className="text-[8px]">✨</span>}
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const { lang } = useLang();
  const [showAfter, setShowAfter] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });
  
  // Simple scale: grows as you scroll into view
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useSpring(rawScale, { stiffness: 120, damping: 20 });

  const handleToggle = useCallback(() => {
    setShowAfter(prev => {
      if (!prev) setTriggered(true);
      return !prev;
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold tracking-widest uppercase mb-6">
            {lang === "pt" ? "RESULTADOS REAIS" : "REAL RESULTS"}
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-950 leading-tight mb-4">
            {lang === "pt"
              ? <>O Efeito <span className="font-serif-italic font-normal">Aurea.</span></>
              : <>The Aurea <span className="font-serif-italic font-normal">Effect.</span></>}
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            {lang === "pt"
              ? "Veja a transformação de uma conta real com a Aurea."
              : "See what a real account looks like with Aurea."}
          </p>
        </motion.div>

        {/* Toggle button — bigger */}
        <div className="flex justify-center mb-10">
          <button
            onClick={handleToggle}
            className="relative flex items-center gap-2 p-1.5 bg-gray-100 rounded-full shadow-md"
          >
            <span className={`px-8 py-3.5 rounded-full text-base font-semibold transition-all ${!showAfter ? "bg-white shadow-sm text-gray-950" : "text-gray-400"}`}>
              {lang === "pt" ? "Antes" : "Before"}
            </span>
            <span className={`px-8 py-3.5 rounded-full text-base font-semibold transition-all ${showAfter ? "bg-gray-950 text-white" : "text-gray-400"}`}>
              {lang === "pt" ? "Depois ✨" : "After ✨"}
            </span>
          </button>
        </div>

        {/* Phone mockup — scales smoothly as you scroll in */}
        <motion.div style={{ scale }} className="flex justify-center">
          <div className="relative">
            {/* Floating stat cards — appear on After */}
            {[
              { value: "+2,200%", label: "Growth", icon: "🚀", x: "-left-32 lg:-left-44", y: "top-16", rotate: -4, breathClass: "card-breathe-1" },
              { value: "47.2K", label: "Views/day", icon: "👁️", x: "-left-28 lg:-left-40", y: "bottom-24", rotate: 3, breathClass: "card-breathe-2" },
              { value: "8.7%", label: "Engagement", icon: "💎", x: "-right-32 lg:-right-44", y: "top-20", rotate: 4, breathClass: "card-breathe-3" },
              { value: "+184", label: "Posts/mo", icon: "📸", x: "-right-28 lg:-right-40", y: "bottom-28", rotate: -3, breathClass: "card-breathe-4" },
            ].map((card, i) => (
              <motion.div
                key={i}
                className={`absolute hidden md:block ${card.x} ${card.y} ${card.breathClass}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ 
                  opacity: showAfter ? 1 : 0, 
                  scale: showAfter ? 1 : 0.8, 
                  y: showAfter ? 0 : 20,
                  rotate: card.rotate 
                }}
                transition={{ delay: showAfter ? 0.1 + i * 0.1 : 0, duration: 0.5, ease: [0.22,1,0.36,1] }}
              >
                <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl border border-white/60 px-4 py-3 shadow-lg shadow-emerald-200/40 backdrop-blur-sm">
                  <div className="text-lg mb-0.5">{card.icon}</div>
                  <div className="text-xl font-bold text-gray-900">{card.value}</div>
                  <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">{card.label}</div>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              key={showAfter ? "after" : "before"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`relative transition-all duration-700 ${showAfter ? "phone-pop-shadow" : ""}`}
            >
              <IPhoneMockup isAfter={showAfter} triggered={triggered} />
              
              {/* Iridescent radial glow behind phone */}
              <div className={`absolute inset-0 -z-10 transition-opacity duration-700 ${showAfter ? "opacity-100" : "opacity-0"}`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] iridescent-glow blur-3xl" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="sparkle-divider mt-16 text-xl">✦ ✦ ✦</div>
      </div>
    </section>
  );
}
