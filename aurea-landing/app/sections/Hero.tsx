"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Users, BarChart3 } from "lucide-react";
import { useRef, useState } from "react";

export default function Hero() {
  const ref = useRef(null);
  const [instagramHandle, setInstagramHandle] = useState("");
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for floating cards
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to audit API
    console.log("Audit for:", instagramHandle);
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      
      {/* Grid Pattern Overlay - Premium feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            
            {/* Modest Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-200/50 text-sm font-medium text-slate-700 shadow-sm"
            >
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-white" />
              </div>
              <span>Trusted by aesthetic clinics worldwide</span>
            </motion.div>

            {/* Main Headline - Bold & Results-Focused */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-900">
                Turn Your Instagram Into a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Patient Magnet
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                AI-powered automation that creates, edits, and posts premium content for your clinic—while you sleep.
              </p>
            </motion.div>

            {/* Key Stats - Quick Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2 text-slate-700">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">470%</div>
                  <div className="text-sm text-slate-600">Avg. reach growth</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-slate-700">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-600">Automated</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-700">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">24/7</div>
                  <div className="text-sm text-slate-600">AI agents working</div>
                </div>
              </div>
            </motion.div>

            {/* CTA - Instagram Audit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                    @
                  </div>
                  <input
                    type="text"
                    value={instagramHandle}
                    onChange={(e) => setInstagramHandle(e.target.value)}
                    placeholder="yourusername"
                    className="w-full pl-10 pr-4 py-4 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 focus:outline-none text-lg font-medium transition-all bg-white/80 backdrop-blur-sm"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Get Free Audit</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
              <p className="text-sm text-slate-500">
                ✨ We'll analyze your profile and show you exactly how to 10x your reach in 90 days
              </p>
            </motion.div>

          </div>

          {/* Right Side - Visual Cards with Analytics */}
          <div className="relative h-[600px] hidden lg:block">
            
            {/* Main Phone Mockup - Instagram Growth */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-[600px] rounded-[3rem] bg-slate-900 border-8 border-slate-800 shadow-2xl overflow-hidden z-30"
            >
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-3xl z-10" />
              
              {/* Instagram UI Mockup */}
              <div className="w-full h-full bg-white p-4 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
                    <span className="font-semibold text-sm">your_clinic</span>
                  </div>
                  <div className="text-xs font-medium text-slate-600">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      🔥 Growing
                    </motion.span>
                  </div>
                </div>

                {/* Stats Row - Animated */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <motion.div 
                      className="font-bold text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      127K
                    </motion.div>
                    <div className="text-xs text-slate-600">posts</div>
                  </div>
                  <div>
                    <motion.div 
                      className="font-bold text-lg text-green-600"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, type: "spring" }}
                    >
                      84.2K
                    </motion.div>
                    <div className="text-xs text-slate-600">followers</div>
                  </div>
                  <div>
                    <motion.div 
                      className="font-bold text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      312
                    </motion.div>
                    <div className="text-xs text-slate-600">following</div>
                  </div>
                </div>

                {/* Grid of Posts */}
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + (i * 0.05) }}
                      className="aspect-square bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 rounded"
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Card 1 - Analytics Growth Chart */}
            <motion.div
              style={{ y: card1Y }}
              initial={{ opacity: 0, x: -50, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: -8 }}
              transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
              className="absolute top-12 -left-8 w-64 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl p-5 z-20"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-600">Engagement Rate</div>
                  <div className="text-lg font-bold text-green-600">+312%</div>
                </div>
              </div>
              {/* Mini chart visualization */}
              <div className="flex items-end gap-1 h-20">
                {[20, 25, 30, 45, 55, 70, 85, 95].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 1.2 + (i * 0.1), type: "spring" }}
                    className="flex-1 bg-gradient-to-t from-green-400 to-emerald-500 rounded-t"
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Card 2 - Before/After */}
            <motion.div
              style={{ y: card2Y }}
              initial={{ opacity: 0, x: 50, rotate: 8 }}
              animate={{ opacity: 1, x: 0, rotate: 8 }}
              transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
              className="absolute top-32 -right-12 w-56 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl p-4 z-20"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">Before</span>
                  <span className="text-lg font-bold text-slate-400">342</span>
                </div>
                <div className="h-1 bg-slate-200 rounded-full">
                  <motion.div 
                    className="h-full bg-slate-400 rounded-full"
                    initial={{ width: "15%" }}
                    animate={{ width: "15%" }}
                    transition={{ delay: 1.5 }}
                  />
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs font-medium text-indigo-600">With Aurea</span>
                  <span className="text-lg font-bold text-indigo-600">14.8K</span>
                </div>
                <div className="h-1 bg-slate-200 rounded-full">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "92%" }}
                    transition={{ delay: 1.7, duration: 1, type: "spring" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Card 3 - AI Agent Status */}
            <motion.div
              style={{ y: card3Y }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
              className="absolute bottom-16 left-8 w-64 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl p-4 z-20"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-semibold text-slate-700">AI Agents Active</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">📹 Creating video</span>
                  <span className="text-indigo-600 font-medium">2 min left</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">✂️ Auto-editing</span>
                  <span className="text-green-600 font-medium">In progress</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">📊 Analyzing trends</span>
                  <span className="text-purple-600 font-medium">24/7</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
