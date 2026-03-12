"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, TrendingUp, Layers, Bot } from "lucide-react";
import { useRef, useState } from "react";

export default function Hero() {
  const ref = useRef(null);
  const [instagramHandle, setInstagramHandle] = useState("");
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Subtle parallax for floating cards
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [0, -70]);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to audit API
    console.log("Audit for:", instagramHandle);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      
      {/* Minimal gradient - very subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            
            {/* Sophisticated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              <span>Pattern Intelligence for Aesthetic Doctors</span>
            </motion.div>

            {/* Main Headline - Sophisticated & Results-Focused */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-slate-950">
                10,000 Viral Posts.<br />
                One System.
              </h1>
              <p className="text-2xl text-slate-500 leading-relaxed max-w-xl font-light">
                Content that follows proven viral patterns—not generic AI templates. Your profile grows with precision, not luck.
              </p>
            </motion.div>

            {/* Intelligence Stats - Emphasize Science */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-8 text-sm"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-cyan-600" />
                  <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Viral Patterns</div>
                </div>
                <div className="text-3xl font-bold text-slate-950">10,000+</div>
                <div className="text-sm text-slate-500">Analyzed posts</div>
              </div>
              
              <div className="w-px h-16 bg-slate-200" />
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Layers className="w-4 h-4 text-cyan-600" />
                  <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Learning System</div>
                </div>
                <div className="text-3xl font-bold text-slate-950">2-Layer</div>
                <div className="text-sm text-slate-500">Base + Personal</div>
              </div>

              <div className="w-px h-16 bg-slate-200" />

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Bot className="w-4 h-4 text-cyan-600" />
                  <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">Automation</div>
                </div>
                <div className="text-3xl font-bold text-slate-950">24/7</div>
                <div className="text-sm text-slate-500">Continuous</div>
              </div>
            </motion.div>

            {/* Clean CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-medium text-lg">
                    @
                  </div>
                  <input
                    type="text"
                    value={instagramHandle}
                    onChange={(e) => setInstagramHandle(e.target.value)}
                    placeholder="your_profile"
                    className="w-full pl-11 pr-5 py-5 rounded-2xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none text-lg font-medium transition-all bg-white text-slate-950 placeholder:text-slate-400"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-10 py-5 bg-slate-950 text-white rounded-2xl font-semibold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Analyze Profile</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
              
              <div className="flex items-center gap-4 text-sm">
                <p className="text-slate-500">
                  Free viral pattern audit · See what's missing from your content
                </p>
                <span className="text-slate-300">·</span>
                <button
                  onClick={scrollToPricing}
                  className="text-cyan-600 hover:text-cyan-700 transition-colors font-medium"
                >
                  Pricing →
                </button>
              </div>
            </motion.div>

          </div>

          {/* Right Side - Pattern Intelligence Visual */}
          <div className="relative h-[650px] hidden lg:block">
            
            {/* Subtle backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />

            {/* Main Dashboard Visual - Pattern Extraction */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[600px] rounded-3xl bg-white border-2 border-slate-200 shadow-xl shadow-slate-950/5 overflow-hidden z-30 p-8"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                  Pattern Analysis
                </div>
                <div className="text-2xl font-bold text-slate-950">
                  dr.yourprofile
                </div>
              </div>

              {/* Viral Pattern Breakdown */}
              <div className="space-y-5">
                
                {/* Hook Pattern */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-600 uppercase">Hook Pattern</span>
                    <motion.span 
                      className="text-xs font-bold text-cyan-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      Identified
                    </motion.span>
                  </div>
                  <div className="text-sm text-slate-700 font-medium">
                    Before/After Reveal
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    First 3 seconds · 847% avg. engagement
                  </div>
                </div>

                {/* Pacing */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-600 uppercase">Pacing Analysis</span>
                    <motion.span 
                      className="text-xs font-bold text-cyan-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      Optimized
                    </motion.span>
                  </div>
                  <div className="text-sm text-slate-700 font-medium">
                    6-8 cuts/minute
                  </div>
                  <div className="flex items-end gap-1 h-8 mt-2">
                    {[40, 55, 70, 85, 95, 75, 60, 50].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 1.4 + (i * 0.05) }}
                        className="flex-1 bg-cyan-500/60 rounded-sm"
                      />
                    ))}
                  </div>
                </div>

                {/* Format */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-600 uppercase">Content Format</span>
                    <motion.span 
                      className="text-xs font-bold text-cyan-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                    >
                      Matched
                    </motion.span>
                  </div>
                  <div className="text-sm text-slate-700 font-medium">
                    Transformation Story
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Top format in aesthetic medicine
                  </div>
                </div>

                {/* CTA Pattern */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-600 uppercase">CTA Strategy</span>
                    <motion.span 
                      className="text-xs font-bold text-cyan-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                    >
                      Applied
                    </motion.span>
                  </div>
                  <div className="text-sm text-slate-700 font-medium">
                    "Save for later"
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    2.3x higher save rate
                  </div>
                </div>

              </div>

              {/* Pattern Library Note */}
              <div className="mt-6 p-3 rounded-lg bg-cyan-50 border border-cyan-200">
                <div className="text-xs text-cyan-900 font-medium">
                  ✓ Based on 10,284 viral posts in your niche
                </div>
              </div>
            </motion.div>

            {/* Floating Card 1 - Learning Progress */}
            <motion.div
              style={{ y: card1Y }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-16 left-0 w-56 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-950/5 p-5 z-20"
            >
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-cyan-600" />
                <div className="text-sm font-semibold text-slate-950">Learning System</div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Base Patterns</span>
                  <span className="font-medium text-slate-950">10,000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Your Style</span>
                  <motion.span 
                    className="font-medium text-cyan-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    Learning...
                  </motion.span>
                </div>
              </div>
              <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-cyan-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "65%" }}
                  transition={{ delay: 1.2, duration: 1.5 }}
                />
              </div>
              <div className="mt-2 text-xs text-slate-500">
                65% personalized
              </div>
            </motion.div>

            {/* Floating Card 2 - Viral Score */}
            <motion.div
              style={{ y: card2Y }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute top-40 right-0 w-52 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-950/5 p-5 z-20"
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-cyan-600" />
                <div className="text-sm font-semibold text-slate-950">Viral Potential</div>
              </div>
              <div className="text-4xl font-bold text-slate-950 mb-2">8.7/10</div>
              <div className="text-xs text-slate-500 mb-3">
                Based on pattern alignment
              </div>
              <div className="flex items-end gap-[2px] h-12">
                {[50, 60, 75, 85, 95, 87].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 1.3 + (i * 0.08) }}
                    className="flex-1 bg-cyan-500/70 rounded-sm"
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Card 3 - Next Generation */}
            <motion.div
              style={{ y: card3Y }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-20 left-8 w-64 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-950/5 p-5 z-20"
            >
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-slate-950" />
                <div className="text-sm font-semibold text-slate-950">Scheduled Generation</div>
                <motion.div 
                  className="ml-auto w-2 h-2 rounded-full bg-cyan-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="text-xs text-slate-600 mb-2">
                Next content in 6 hours
              </div>
              <div className="flex items-center gap-2 text-xs">
                <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-cyan-500"
                    animate={{ width: ["0%", "75%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
                <span className="text-slate-500 font-medium">75%</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
