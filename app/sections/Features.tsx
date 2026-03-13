"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLang } from "../context/LanguageContext";

const features = [
  {
    id: 1,
    title: "Pattern Intelligence",
    description: "Built on 10,000+ analyzed viral posts. Extracts proven hooks, pacing, and CTAs from top-performing content in your niche.",
    image: "/images/feature-ai-video.jpg",
  },
  {
    id: 2,
    title: "Voice Synthesis",
    description: "Clone your voice once, scale infinitely. Professional-grade audio that sounds authentically you across every piece of content.",
    image: "/images/feature-voice-clone.jpg",
  },
  {
    id: 3,
    title: "Intelligent Editing",
    description: "AI recognizes optimal cut points, pacing rhythms, and subtitle placement. Edits like a seasoned video professional.",
    image: "/images/feature-auto-edit.jpg",
  },
  {
    id: 4,
    title: "Viral Analysis",
    description: "Daily pattern extraction from trending content. Identifies what's working now—hooks, formats, music, engagement tactics.",
    image: "/images/feature-trend-intelligence.jpg",
  },
  {
    id: 5,
    title: "Strategic Planning",
    description: "AI curates your content calendar based on trend cycles and your audience's engagement patterns. Always timely, never random.",
    image: "/images/feature-content-planner.jpg",
  },
  {
    id: 6,
    title: "Multi-Platform Distribution",
    description: "Optimized publishing across Instagram, TikTok, and YouTube. Platform-specific formats, timing, and metadata—handled automatically.",
    image: "/images/feature-auto-publish.jpg",
  },
];

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 440;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="features" className="py-32 overflow-hidden bg-gray-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - Title & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 lg:sticky lg:top-32"
          >
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4 block">WHAT WE DO</span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-950 mb-6 leading-tight">
              Viral <span className="font-serif-italic font-normal">Science.</span><br />Not Generic AI.
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {t.features.subtitle}
            </p>
            
            <motion.button
              onClick={scrollToPricing}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className="hidden lg:flex items-center gap-3 mt-12">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-slate-950" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-slate-950" />
              </button>
              <span className="text-sm text-slate-500 ml-2">Scroll</span>
            </div>
          </motion.div>

          {/* Right Side - Full Width Scroll */}
          <div className="lg:col-span-9">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide py-4 -mx-4 px-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-[420px] snap-start"
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-950/5 transition-all duration-300 cursor-pointer"
                  >
                    {/* Image Container */}
                    <div className="relative h-[280px] bg-slate-950 overflow-hidden">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      />
                      
                      {/* Gradient overlay for better text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />

                      {/* Number badge */}
                      <div className="absolute top-5 left-5">
                        <span className="text-4xl font-bold text-white/20">
                          {String(feature.id).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-cyan-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-[15px]">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div className="lg:hidden flex items-center justify-center gap-2 mt-4 text-slate-500 text-sm">
              <span>Swipe to explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
