"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react";

const features = [
  {
    id: 1,
    title: "AI Video Generation",
    description: "Create professional videos with AI-generated visuals",
    gradient: "from-violet-500/40 via-purple-500/30 to-pink-500/40",
  },
  {
    id: 2,
    title: "Voice Cloning",
    description: "Your voice, infinitely scalable across all content",
    gradient: "from-blue-500/40 via-cyan-500/30 to-teal-500/40",
  },
  {
    id: 3,
    title: "Auto Editing",
    description: "Automatic editing with subtitles and transitions",
    gradient: "from-pink-500/40 via-rose-500/30 to-orange-500/40",
  },
  {
    id: 4,
    title: "Trend Intelligence",
    description: "Scan viral posts daily in your niche",
    gradient: "from-amber-500/40 via-orange-500/30 to-red-500/40",
  },
  {
    id: 5,
    title: "Content Planner",
    description: "AI plans your calendar based on trends",
    gradient: "from-emerald-500/40 via-teal-500/30 to-cyan-500/40",
  },
  {
    id: 6,
    title: "Auto Publishing",
    description: "Hands-free across all platforms",
    gradient: "from-indigo-500/40 via-violet-500/30 to-purple-500/40",
  },
];

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section id="features" className="py-32 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - Title & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 lg:sticky lg:top-32"
          >
            <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
              Core Features
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6 leading-tight">
              Your AI
              <br />
              <span className="gradient-text">Studio</span>
            </h2>
            <p className="text-navy-light text-lg mb-8 leading-relaxed">
              Everything you need to create, edit, and publish content—completely automated.
            </p>
            
            <motion.button
              onClick={scrollToPricing}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className="hidden lg:flex items-center gap-3 mt-12">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/80 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-navy" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/80 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-navy" />
              </button>
              <span className="text-sm text-navy-light ml-2">Scroll</span>
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
                  className="flex-shrink-0 w-[400px] snap-start"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.03,
                      y: -8,
                    }}
                    transition={{ duration: 0.3 }}
                    className="group h-full glass-card rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-shadow duration-500 cursor-pointer"
                  >
                    <div className={`relative h-[300px] bg-gradient-to-br ${feature.gradient} overflow-hidden`}>
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      />
                      
                      <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full" style={{
                          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                                           linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                          backgroundSize: '30px 30px'
                        }} />
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                        >
                          <Play className="w-6 h-6 text-navy ml-0.5" fill="currentColor" />
                        </motion.div>
                      </div>

                      <div className="absolute top-4 left-4">
                        <span className="text-4xl font-bold text-white/30">
                          {String(feature.id).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-navy-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div className="lg:hidden flex items-center justify-center gap-2 mt-4 text-navy-light text-sm">
              <span>Swipe to explore</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
