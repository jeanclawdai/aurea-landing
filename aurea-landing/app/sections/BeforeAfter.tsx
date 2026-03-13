"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { useLang } from "../context/LanguageContext";

const beforeStats = [
  { label: "Followers", value: "1,240", raw: 1240 },
  { label: "Avg Views", value: "890", raw: 890 },
  { label: "Engagement", value: "1.8%", raw: 1.8, isPercent: true },
  { label: "Posts/week", value: "2", raw: 2 },
  { label: "Monthly Reach", value: "4,200", raw: 4200 },
];

const afterStats = [
  { label: "Followers", value: "28,400", raw: 28400 },
  { label: "Avg Views", value: "47,200", raw: 47200 },
  { label: "Engagement", value: "8.7%", raw: 8.7, isPercent: true },
  { label: "Posts/week", value: "7", raw: 7 },
  { label: "Monthly Reach", value: "312,000", raw: 312000 },
];

function AnimatedNumber({ raw, isPercent, triggered }: { raw: number; isPercent?: boolean; triggered: boolean }) {
  const [display, setDisplay] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!triggered || hasRun.current) return;
    hasRun.current = true;
    const controls = animate(0, raw, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [triggered, raw]);

  const formatted = isPercent
    ? `${display.toFixed(1)}%`
    : display >= 1000
    ? display >= 100000
      ? `${Math.round(display / 1000)}K`
      : display >= 10000
      ? `${(display / 1000).toFixed(1)}K`
      : `${Math.round(display).toLocaleString()}`
    : `${Math.round(display)}`;

  return <span>{formatted}</span>;
}

export default function BeforeAfter() {
  const { t } = useLang();
  const [dividerX, setDividerX] = useState(50); // percent
  const cardRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // animate after numbers when after panel is sufficiently visible
  const afterVisible = dividerX > 20;

  const getPercent = useCallback((clientX: number) => {
    if (!cardRef.current) return dividerX;
    const rect = cardRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    return Math.max(5, Math.min(95, (x / rect.width) * 100));
  }, [dividerX]);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    e.preventDefault();
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      setDividerX(getPercent(e.clientX));
    };
    const onMouseUp = () => { isDragging.current = false; };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      setDividerX(getPercent(e.touches[0].clientX));
    };
    const onTouchEnd = () => { isDragging.current = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [getPercent]);

  const onTouchStart = () => {
    isDragging.current = true;
  };

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold tracking-widest uppercase mb-4">
            {t.beforeAfter.eyebrow}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {t.beforeAfter.headline}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.beforeAfter.subtitle}
          </p>
        </motion.div>

        {/* Comparison Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div
            ref={cardRef}
            className="relative h-[420px] sm:h-[380px] rounded-2xl overflow-hidden select-none cursor-col-resize shadow-2xl shadow-gray-900/10"
            style={{ userSelect: "none" }}
          >
            {/* BEFORE panel — full width, clipped by after panel */}
            <div className="absolute inset-0 bg-slate-900 flex flex-col justify-center px-8 sm:px-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="text-white/60 text-sm font-medium">{t.beforeAfter.before}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {beforeStats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl sm:text-3xl font-bold text-white/40">{s.value}</div>
                    <div className="text-xs text-white/30 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AFTER panel — clipped to right of divider */}
            <div
              className="absolute inset-y-0 right-0 flex flex-col justify-center px-8 sm:px-12 overflow-hidden"
              style={{ left: `${dividerX}%`, background: "linear-gradient(135deg, #0f172a 0%, #1e1b0e 60%, #1a1200 100%)" }}
            >
              {/* Amber glow */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(245,158,11,0.18) 0%, transparent 70%)" }} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-white/80 text-sm font-medium">{t.beforeAfter.after}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                  {afterStats.map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl sm:text-3xl font-bold text-amber-300">
                        {afterVisible && isInView ? (
                          <AnimatedNumber raw={s.raw} isPercent={s.isPercent} triggered={afterVisible && isInView} />
                        ) : (
                          <span>0{s.isPercent ? "%" : ""}</span>
                        )}
                      </div>
                      <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider handle */}
            <div
              className="absolute inset-y-0 z-10 flex items-center justify-center"
              style={{ left: `${dividerX}%`, transform: "translateX(-50%)" }}
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
            >
              {/* line */}
              <div className="absolute inset-y-0 w-px bg-white/30" />
              {/* handle circle */}
              <div className="relative w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-col-resize z-10 border border-gray-100">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5 8L2 8M2 8L4 6M2 8L4 10" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 8L14 8M14 8L12 6M14 8L12 10" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Drag hint */}
          <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="opacity-60">
              <path d="M5 8L2 8M2 8L4 6M2 8L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 8L14 8M14 8L12 6M14 8L12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t.beforeAfter.dragLabel}
          </p>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Results from real Aurea clients. Individual results may vary.
        </p>
      </div>
    </section>
  );
}
