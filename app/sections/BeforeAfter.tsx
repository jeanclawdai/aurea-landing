"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLang } from "../context/LanguageContext";
// lucide-animated icons disabled - causing hydration issues
// import { RocketIcon, EyeIcon, SparklesIcon, InstagramIcon } from "lucide-animated";

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

// Instagram notification SVG component
function LikeNotification({ count, className }: { count: string; className?: string }) {
  return (
    <div className={`${className}`}>
      <svg viewBox="0 0 130 85" fill="none" className="w-full h-full drop-shadow-xl">
        {/* Bubble background - wider for spacing */}
        <path d="M 110 8 H 16 C 8 8 2 14 2 22 v 36 c 0 8 6 14 14 14 h 20 L 50 85 l 14 -13 h 46 c 8 0 14 -6 14 -14 V 22 C 124 14 118 8 110 8 z" fill="#EE5162"/>
        {/* Heart icon - left side */}
        <path d="M 42 28 c -3.6 -3.6 -9.5 -3.6 -13 0 L 26 31 l -3 -3 c -3.6 -3.6 -9.5 -3.6 -13 0 c -3.6 3.6 -3.6 9.5 0 13 l 3 3 L 26 57 L 39 44 l 3 -3 c 3.6 -3.6 3.6 -9.5 0 -13 z" fill="white"/>
        {/* Number text - more spacing */}
        <text x="82" y="48" fill="white" fontSize="28" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" textAnchor="middle">{count}</text>
      </svg>
    </div>
  );
}

function IPhoneMockup({ isAfter, triggered }: { isAfter: boolean; triggered: boolean }) {
  const target = isAfter ? afterProfile : beforeProfile;

  return (
    <div className="relative w-[340px] mx-auto">
      {/* Floating notification icons - only on After state */}
      {isAfter && (
        <>
          <motion.div 
            className="absolute top-14 -left-16 z-20"
            initial={{ opacity: 0, y: 40, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="float-card-1">
              <LikeNotification count="128" className="w-16 h-12" />
            </div>
          </motion.div>
          <motion.div 
            className="absolute top-40 -right-16 z-20"
            initial={{ opacity: 0, y: 40, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="float-card-2">
              <LikeNotification count="47" className="w-14 h-11" />
            </div>
          </motion.div>
          <motion.div 
            className="absolute bottom-40 -left-12 z-20"
            initial={{ opacity: 0, y: 40, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="float-card-3">
              <LikeNotification count="89" className="w-12 h-10" />
            </div>
          </motion.div>
        </>
      )}
      
      {/* Label */}
      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-semibold z-10 whitespace-nowrap ${isAfter ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-600"}`}>
        {isAfter ? "After Aurea ✨" : "Before Aurea"}
      </div>

      {/* Phone frame */}
      <div className="relative bg-gray-950 rounded-[48px] p-[3px] shadow-2xl shadow-black/40">
        <div className="bg-white rounded-[46px] overflow-hidden" style={{ height: 650 }}>
          {/* Notch */}
          <div className="bg-gray-950 h-8 flex items-center justify-center">
            <div className="w-20 h-4 bg-gray-950 rounded-full" />
          </div>

          {/* Instagram header */}
          <div className="bg-white px-4 pt-3 pb-2 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">9:41</span>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/960px-Instagram_logo_2022.svg.png" 
                alt="Instagram" 
                className="w-6 h-6 object-contain"
              />
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

            {/* Grid posts */}
            <div className="grid grid-cols-3 gap-0.5">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-sm overflow-hidden bg-gray-100">
                  {isAfter ? (
                    <img 
                      src={`/images/feed/feed-${i + 1}.jpg`} 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100" />
                  )}
                </div>
              ))}
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
    <section ref={containerRef} className="py-20 px-6 bg-white overflow-hidden">
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-950 leading-tight mb-3">
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
              { value: "+2,200%", label: "Growth", icon: "🚀", x: "-left-28 lg:-left-44", y: "top-10", rotate: -4, floatClass: "float-card-1" },
              { value: "47.2K", label: "Views/day", icon: "👁️", x: "-left-24 lg:-left-40", y: "bottom-16", rotate: 3, floatClass: "float-card-2" },
              { value: "8.7%", label: "Engagement", icon: "💎", x: "-right-28 lg:-right-44", y: "top-14", rotate: 4, floatClass: "float-card-3" },
              { value: "+184", label: "Posts/mo", icon: "📸", x: "-right-24 lg:-right-40", y: "bottom-20", rotate: -3, floatClass: "float-card-4" },
            ].map((card, i) => (
              <motion.div
                key={i}
                className={`absolute hidden md:block ${card.x} ${card.y} ${showAfter ? card.floatClass : ""}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ 
                  opacity: showAfter ? 1 : 0, 
                  scale: showAfter ? 1 : 0.8, 
                  y: showAfter ? 0 : 20,
                  rotate: card.rotate 
                }}
                transition={{ delay: showAfter ? 0.1 + i * 0.1 : 0, duration: 0.5, ease: [0.22,1,0.36,1] }}
              >
                <div className="glass-stat-card rounded-xl px-4 py-3 cursor-pointer group">
                  <div className="text-xl mb-0.5">{card.icon}</div>
                  <div className="text-xl font-bold text-gray-900">{card.value}</div>
                  <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">{card.label}</div>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              key={showAfter ? "after" : "before"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`relative will-change-transform ${showAfter ? "phone-pop-shadow" : ""}`}
              style={{ willChange: 'transform, opacity' }}
            >
              <IPhoneMockup isAfter={showAfter} triggered={triggered} />
              
              {/* Iridescent radial glow behind phone - optimized for Safari */}
              <div 
                className={`absolute inset-0 -z-20 transition-opacity duration-500 ${showAfter ? "opacity-100" : "opacity-0"}`}
                style={{ willChange: 'opacity' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[580px] iridescent-glow-optimized rounded-full" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="sparkle-divider mt-16 text-xl">✦ ✦ ✦</div>
      </div>
    </section>
  );
}
