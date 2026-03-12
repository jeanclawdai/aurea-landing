"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Bot } from "lucide-react";
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
            
            {/* Minimal Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              <span>For Aesthetic Doctors</span>
            </motion.div>

            {/* Main Headline - Bold & Minimal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-slate-950">
                10x Your Social<br />
                in 90 Days.
              </h1>
              <p className="text-2xl text-slate-500 leading-relaxed max-w-xl font-light">
                AI automation that creates, edits, and publishes content for your profile—24/7.
              </p>
            </motion.div>

            {/* Minimal Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-8 text-sm"
            >
              <div>
                <div className="text-3xl font-bold text-slate-950">10x</div>
                <div className="text-slate-500">Growth in 90 days</div>
              </div>
              
              <div className="w-px h-12 bg-slate-200" />
              
              <div>
                <div className="text-3xl font-bold text-slate-950">100%</div>
                <div className="text-slate-500">Automated</div>
              </div>

              <div className="w-px h-12 bg-slate-200" />

              <div>
                <div className="text-3xl font-bold text-slate-950">24/7</div>
                <div className="text-slate-500">AI working</div>
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
                  <span>Get Free Audit</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
              
              <div className="flex items-center gap-4 text-sm">
                <p className="text-slate-500">
                  See exactly how we'll grow your reach
                </p>
                <span className="text-slate-300">•</span>
                <button
                  onClick={scrollToPricing}
                  className="text-cyan-600 hover:text-cyan-700 transition-colors font-medium"
                >
                  View Pricing →
                </button>
              </div>
            </motion.div>

          </div>

          {/* Right Side - Minimal iPhone Mockup + Cards */}
          <div className="relative h-[650px] hidden lg:block">
            
            {/* Subtle backdrop glow - very minimal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />

            {/* Main iPhone Mockup - Minimal Shadow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] rounded-[3rem] bg-slate-950 border border-slate-800 shadow-2xl shadow-slate-950/10 overflow-hidden z-30"
            >
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-950 rounded-b-3xl z-10" />
              
              {/* Instagram UI - Clean */}
              <div className="w-full h-full bg-white p-4 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-5 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
                    <span className="font-semibold text-sm text-slate-950">dr.yourprofile</span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="flex items-center gap-1.5"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    <span className="text-xs font-medium text-cyan-600">Growing</span>
                  </motion.div>
                </div>

                {/* Stats - Clean numbers */}
                <div className="grid grid-cols-3 gap-6 mb-5 text-center">
                  <div>
                    <motion.div 
                      className="font-bold text-lg text-slate-950"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      347
                    </motion.div>
                    <div className="text-xs text-slate-500">posts</div>
                  </div>
                  <div>
                    <motion.div 
                      className="font-bold text-xl text-cyan-600"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                    >
                      142K
                    </motion.div>
                    <div className="text-xs text-slate-500">followers</div>
                  </div>
                  <div>
                    <motion.div 
                      className="font-bold text-lg text-slate-950"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      284
                    </motion.div>
                    <div className="text-xs text-slate-500">following</div>
                  </div>
                </div>

                {/* Grid of Posts - Minimal */}
                <div className="grid grid-cols-3 gap-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + (i * 0.05) }}
                      className="aspect-square bg-slate-100 rounded"
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Card 1 - Growth Chart (Ultra Minimal) */}
            <motion.div
              style={{ y: card1Y }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-16 left-0 w-52 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-950/5 p-5 z-20"
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-cyan-600" />
                <div className="text-sm font-semibold text-slate-950">Engagement</div>
              </div>
              <div className="text-3xl font-bold text-slate-950 mb-3">+847%</div>
              {/* Minimal bar chart */}
              <div className="flex items-end gap-1 h-16">
                {[20, 25, 35, 50, 65, 80, 90, 100].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 1.2 + (i * 0.08) }}
                    className="flex-1 bg-cyan-500/80 rounded-sm"
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Card 2 - AI Status (Ultra Minimal) */}
            <motion.div
              style={{ y: card2Y }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute top-40 right-0 w-56 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-950/5 p-5 z-20"
            >
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-5 h-5 text-slate-950" />
                <div className="text-sm font-semibold text-slate-950">AI Working</div>
                <motion.div 
                  className="ml-auto w-2 h-2 rounded-full bg-cyan-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Creating</span>
                  <span className="text-xs font-medium text-slate-950">Active</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Editing</span>
                  <span className="text-xs font-medium text-slate-950">Active</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Publishing</span>
                  <span className="text-xs font-medium text-slate-950">Active</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 3 - Automation (Ultra Minimal) */}
            <motion.div
              style={{ y: card3Y }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-20 left-8 w-60 rounded-2xl bg-white border border-slate-200 shadow-lg shadow-slate-950/5 p-5 z-20"
            >
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-cyan-600" />
                <div className="text-sm font-semibold text-slate-950">Fully Automated</div>
              </div>
              <div className="text-3xl font-bold text-slate-950 mb-3">100%</div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-cyan-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.5, duration: 1.2 }}
                />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
