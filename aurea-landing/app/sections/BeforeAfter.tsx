"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { SectionPill } from "@/components/ui/section-pill";
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

// Instagram heart notification SVG component
function LikeNotification({ className }: { className?: string }) {
  return (
    <div className={`${className}`}>
      <svg viewBox="0 0 56 50" fill="none" className="w-full h-full drop-shadow-xl">
        {/* Bubble background - wide pill with pointer */}
        <path d="M4 4 h48 a4 4 0 0 1 4 4 v28 a4 4 0 0 1 -4 4 h-18 l-6 10 l-6 -10 h-18 a4 4 0 0 1 -4 -4 v-28 a4 4 0 0 1 4 -4 z" fill="#FE2D55"/>
        {/* Heart icon - smaller */}
        <path d="M28 28 l-1.2 -1.1 C22 22.6 18.5 19.5 18.5 15.8 c0 -3 2.4 -5.3 5.3 -5.3 c1.7 0 3.3 0.8 4.2 2 c0.9 -1.2 2.5 -2 4.2 -2 c2.9 0 5.3 2.3 5.3 5.3 c0 3.7 -3.5 6.8 -8.3 11.1 L28 28 z" fill="white"/>
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
              <LikeNotification className="w-14 h-12" />
            </div>
          </motion.div>
          <motion.div 
            className="absolute top-40 -right-16 z-20"
            initial={{ opacity: 0, y: 40, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="float-card-2">
              <LikeNotification className="w-12 h-10" />
            </div>
          </motion.div>
          <motion.div 
            className="absolute bottom-40 -left-12 z-20"
            initial={{ opacity: 0, y: 40, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="float-card-3">
              <LikeNotification className="w-11 h-9" />
            </div>
          </motion.div>
        </>
      )}
      
      {/* Label - top of phone */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
        {isAfter ? (
          <motion.div 
            className="px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap text-white relative overflow-hidden shadow-md"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
              backgroundSize: '200% 200%',
            }}
          >
            <motion.span
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F59E0B 100%)',
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span className="relative z-10">After Aurea ✨</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        ) : (
          <div className="px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap bg-gray-200 text-gray-600">
            Before Aurea
          </div>
        )}
      </div>

      {/* Phone frame */}
      <div className="relative bg-gray-950 rounded-[48px] p-[3px] shadow-2xl shadow-black/40">
        <div className="bg-white rounded-[46px] overflow-hidden" style={{ height: 650 }}>
          {/* Status bar with Dynamic Island */}
          <div className="bg-white h-12 flex items-center justify-between px-6 pt-2">
            {/* Left - Time */}
            <span className="text-sm font-semibold text-gray-950 w-12">9:41</span>
            
            {/* Center - Dynamic Island */}
            <div className="w-28 h-[34px] bg-gray-950 rounded-full flex items-center pl-3 gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-800 ring-1 ring-gray-700" />
            </div>
            
            {/* Right - Status icons */}
            <div className="flex items-center gap-1.5 w-12 justify-end">
              {/* Signal bars */}
              <svg width="18" height="12" viewBox="0 0 18 12" className="text-gray-950">
                <rect x="0" y="8" width="3" height="4" rx="0.5" fill="currentColor"/>
                <rect x="5" y="5" width="3" height="7" rx="0.5" fill="currentColor"/>
                <rect x="10" y="2" width="3" height="10" rx="0.5" fill="currentColor"/>
                <rect x="15" y="0" width="3" height="12" rx="0.5" fill="currentColor"/>
              </svg>
              {/* Battery */}
              <svg width="25" height="12" viewBox="0 0 25 12" className="text-gray-950">
                <rect x="0" y="1" width="21" height="10" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
                <rect x="2" y="3" width="17" height="6" rx="1" fill="currentColor"/>
                <rect x="22" y="4" width="2" height="4" rx="0.5" fill="currentColor"/>
              </svg>
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
                  <img 
                    src={`/images/feed/feed-${i + 1}.jpg`} 
                    alt="" 
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isAfter 
                        ? "grayscale-0 opacity-100 contrast-100" 
                        : "grayscale opacity-50 contrast-75 brightness-90"
                    }`}
                  />
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
    <section ref={containerRef} className="py-20 px-6 bg-white dark:bg-[#0a0a0f] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionPill className="mb-6">{lang === "pt" ? "RESULTADOS REAIS" : "REAL RESULTS"}</SectionPill>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-950 dark:text-white leading-tight mb-3">
            {lang === "pt"
              ? <>O Efeito <span className="font-serif-italic font-normal">Aurea.</span></>
              : <>The Aurea <span className="font-serif-italic font-normal">Effect.</span></>}
          </h2>
          <p className="text-lg text-gray-400 dark:text-gray-500 max-w-xl mx-auto">
            {lang === "pt"
              ? "Veja a transformação de uma conta real com a Aurea."
              : "See what a real account looks like with Aurea."}
          </p>
        </motion.div>

        {/* Toggle button — bigger */}
        <div className="flex justify-center mb-10">
          <button
            onClick={handleToggle}
            className="relative flex items-center gap-2 p-1.5 bg-gray-100 dark:bg-[#111118] rounded-full shadow-md"
          >
            <span className={`px-8 py-3.5 rounded-full text-base font-semibold transition-all ${!showAfter ? "bg-white dark:bg-white/10 shadow-sm text-gray-950 dark:text-white" : "text-gray-400 dark:text-gray-500"}`}>
              {lang === "pt" ? "Antes" : "Before"}
            </span>
            <span className={`px-8 py-3.5 rounded-full text-base font-semibold transition-all ${showAfter ? "bg-gray-950 text-white" : "text-gray-400 dark:text-gray-500"}`}>
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
                <div className="glass-stat-card rounded-xl px-4 py-3 cursor-pointer group dark:bg-[#111118] dark:border dark:border-white/10">
                  <div className="text-xl mb-0.5">{card.icon}</div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{card.value}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">{card.label}</div>
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
              
              {/* Iridescent radial glow behind phone - animated pulse */}
              <motion.div 
                className={`absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${showAfter ? "" : "opacity-0"}`}
                initial={{ opacity: 0 }}
                animate={showAfter ? { 
                  opacity: [0.6, 1, 0.6],
                } : { opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ 
                  width: '550px',
                  height: '700px',
                  background: 'radial-gradient(ellipse at center, rgba(180, 130, 255, 0.85) 0%, rgba(130, 180, 255, 0.65) 30%, rgba(255, 150, 200, 0.5) 55%, transparent 75%)',
                  filter: 'blur(80px)',
                  borderRadius: '50%',
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        <div className="sparkle-divider mt-16 text-xl">✦ ✦ ✦</div>
      </div>
    </section>
  );
}
