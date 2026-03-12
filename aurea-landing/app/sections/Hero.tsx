"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Users } from "lucide-react";
import { useRef, useState } from "react";

export default function Hero() {
  const ref = useRef(null);
  const [instagramHandle, setInstagramHandle] = useState("");
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax for floating cards
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [0, -100]);

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
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Radial Gradient Background - Dramatic lighting */}
      <div className="absolute inset-0 bg-gradient-radial from-indigo-900/40 via-purple-900/20 to-slate-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-pink-600/30 blur-[120px] rounded-full" />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
      }} />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-sm font-medium text-slate-300 shadow-lg shadow-black/20"
            >
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 border-2 border-slate-900" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-slate-900" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-slate-900" />
              </div>
              <span>For Premium Aesthetic Clinics</span>
            </motion.div>

            {/* Main Headline - Clear Value Prop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-white">
                <span className="block">10x Your Social</span>
                <span className="block">Presence in 90 Days.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Fully Automated.
                </span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                AI agents that create, edit, and publish premium content for your clinic—24/7. 
                No manual work. Just exponential growth.
              </p>
            </motion.div>

            {/* Key Stats - Quick Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-500/20 border border-green-400/20 flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10x Growth</div>
                  <div className="text-sm text-slate-400">In 90 days</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-indigo-500/20 border border-blue-400/20 flex items-center justify-center backdrop-blur-sm">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-slate-400">Automated</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-500/20 border border-purple-400/20 flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-slate-400">AI working</div>
                </div>
              </div>
            </motion.div>

            {/* CTA - Instagram Audit + View Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium text-lg">
                    @
                  </div>
                  <input
                    type="text"
                    value={instagramHandle}
                    onChange={(e) => setInstagramHandle(e.target.value)}
                    placeholder="your_clinic"
                    className="w-full pl-10 pr-4 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl focus:border-purple-400/50 focus:bg-white/10 focus:outline-none text-lg font-medium transition-all text-white placeholder:text-slate-500"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Get Free Audit</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
              
              <div className="flex items-center gap-4">
                <p className="text-sm text-slate-400">
                  See exactly how we'll 10x your reach
                </p>
                <span className="text-slate-600">•</span>
                <button
                  onClick={scrollToPricing}
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors font-medium"
                >
                  View Pricing →
                </button>
              </div>
            </motion.div>

          </div>

          {/* Right Side - iPhone Mockup with Floating Cards */}
          <div className="relative h-[600px] hidden lg:block">
            
            {/* Background Glow for Phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-600/40 via-purple-600/40 to-pink-600/40 blur-[100px] rounded-full" />

            {/* Main iPhone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-[580px] rounded-[3rem] bg-slate-900 border-[6px] border-slate-800 shadow-2xl shadow-black/50 overflow-hidden z-30"
            >
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-3xl z-10" />
              
              {/* Instagram UI Mockup - Dark Mode */}
              <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-950 p-4 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 ring-2 ring-pink-500/30" />
                    <span className="font-semibold text-sm text-white">your_clinic</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="px-2 py-1 rounded-full bg-green-500/20 border border-green-500/30"
                  >
                    <span className="text-xs font-medium text-green-400">🔥 Trending</span>
                  </motion.div>
                </div>

                {/* Stats Row - Animated Growth */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <motion.div 
                      className="font-bold text-lg text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      247
                    </motion.div>
                    <div className="text-xs text-slate-500">posts</div>
                  </div>
                  <div>
                    <motion.div 
                      className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    >
                      124K
                    </motion.div>
                    <div className="text-xs text-slate-500">followers</div>
                  </div>
                  <div>
                    <motion.div 
                      className="font-bold text-lg text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      189
                    </motion.div>
                    <div className="text-xs text-slate-500">following</div>
                  </div>
                </div>

                {/* Grid of Posts - Premium Content */}
                <div className="grid grid-cols-3 gap-1">
                  {[
                    "from-purple-500/80 to-pink-500/80",
                    "from-blue-500/80 to-cyan-500/80",
                    "from-pink-500/80 to-rose-500/80",
                    "from-indigo-500/80 to-purple-500/80",
                    "from-cyan-500/80 to-blue-500/80",
                    "from-rose-500/80 to-pink-500/80",
                    "from-purple-500/80 to-indigo-500/80",
                    "from-pink-500/80 to-purple-500/80",
                    "from-blue-500/80 to-indigo-500/80",
                  ].map((gradient, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + (i * 0.05), type: "spring" }}
                      className={`aspect-square bg-gradient-to-br ${gradient} rounded relative overflow-hidden`}
                    >
                      {/* Shimmer effect on posts */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{ x: [-200, 200] }}
                        transition={{ duration: 2, delay: 1.5 + i * 0.1, repeat: Infinity, repeatDelay: 3 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Glassmorphism Card 1 - Growth Stats */}
            <motion.div
              style={{ y: card1Y }}
              initial={{ opacity: 0, x: -50, rotate: -6 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
              whileHover={{ rotate: -3, scale: 1.05 }}
              className="absolute top-8 -left-12 w-56 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/20 p-5 z-20"
            >
              <div className="text-xs text-slate-400 mb-1">Engagement Rate</div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-3">
                +847%
              </div>
              {/* Mini sparkline */}
              <div className="flex items-end gap-[2px] h-12">
                {[18, 22, 28, 42, 55, 68, 82, 95].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 1.2 + (i * 0.08), type: "spring" }}
                    className="flex-1 bg-gradient-to-t from-green-500/80 to-emerald-400/80 rounded-t"
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Glassmorphism Card 2 - AI Status */}
            <motion.div
              style={{ y: card2Y }}
              initial={{ opacity: 0, x: 50, rotate: 6 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
              whileHover={{ rotate: 3, scale: 1.05 }}
              className="absolute top-28 -right-16 w-60 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/20 p-4 z-20"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-semibold text-white">AI Agents Active</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Creating content</span>
                  <span className="text-purple-400 font-medium">Live</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Auto-editing</span>
                  <span className="text-blue-400 font-medium">Processing</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Trend analysis</span>
                  <span className="text-green-400 font-medium">24/7</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Glassmorphism Card 3 - Automation */}
            <motion.div
              style={{ y: card3Y }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
              whileHover={{ y: -5 }}
              className="absolute bottom-12 left-4 w-64 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/20 p-5 z-20"
            >
              <div className="text-xs text-slate-400 mb-2">Automation Score</div>
              <div className="flex items-end gap-3 mb-2">
                <div className="text-4xl font-bold text-white">100%</div>
                <div className="text-sm text-green-400 font-medium mb-2">Fully Autonomous</div>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.5, duration: 1.5, type: "spring" }}
                />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
