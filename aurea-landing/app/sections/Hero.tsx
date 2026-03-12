"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Target, Zap, Brain } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [instagramHandle, setInstagramHandle] = useState("");

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Audit for:", instagramHandle);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-ocean via-ocean/80 to-mist">
      
      {/* Neural Network Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(3, 167, 202, 0.2) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(3, 167, 202, 0.2) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Animated dots/nodes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-ocean/50 to-ocean" />
      </div>

      {/* Floating Claim Cards */}
      {/* Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 left-8 lg:left-24 z-10"
      >
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-cyan" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">10x</div>
              <div className="text-xs text-white/70">Growth Rate</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-40 right-8 lg:right-24 z-10"
      >
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan/20 flex items-center justify-center">
              <Target className="w-5 h-5 text-cyan" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Pattern Recognition</div>
              <div className="text-xs text-white/70">AI-Powered</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-32 left-8 lg:left-32 z-10"
      >
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-cyan" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">847%</div>
              <div className="text-xs text-white/70">Avg. Engagement</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-40 right-8 lg:right-32 z-10"
      >
        <motion.div
          animate={{ y: [12, -12, 12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-6 py-4 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan/20 flex items-center justify-center">
              <Brain className="w-5 h-5 text-cyan" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">10,000+</div>
              <div className="text-xs text-white/70">Posts Analyzed</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content - Centered */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white/90 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          <span>Pattern Intelligence System</span>
        </motion.div>

        {/* Animated Gradient Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="block text-white mb-2">
              Predict What Works
            </span>
            <span 
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan via-sky to-white animate-gradient"
              style={{
                backgroundSize: '200% auto',
              }}
            >
              Before You Post.
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-12 font-light"
        >
          A pattern intelligence system trained on 10,000+ top-performing posts from top creators.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-5"
        >
          <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/40 font-medium text-lg">
                @
              </div>
              <input
                type="text"
                value={instagramHandle}
                onChange={(e) => setInstagramHandle(e.target.value)}
                placeholder="your_profile"
                className="w-full pl-11 pr-5 py-5 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md focus:border-cyan focus:bg-white/15 focus:outline-none text-lg font-medium transition-all text-white placeholder:text-white/40"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 bg-gradient-to-r from-cyan to-cyan/80 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:from-cyan/90 hover:to-cyan/70 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Analyze Profile</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>
          
          <div className="flex items-center justify-center gap-4 text-sm">
            <p className="text-white/60">
              Free pattern analysis · Predict your viral potential
            </p>
            <span className="text-white/30">·</span>
            <button
              onClick={scrollToPricing}
              className="text-cyan hover:text-cyan/80 transition-colors font-medium"
            >
              View Pricing →
            </button>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-8 sm:gap-12"
        >
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">10,000+</div>
            <div className="text-sm text-white/60">Posts Analyzed</div>
          </div>
          
          <div className="w-px h-12 bg-white/20" />
          
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">847%</div>
            <div className="text-sm text-white/60">Avg. Engagement</div>
          </div>

          <div className="w-px h-12 bg-white/20" />

          <div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-1">10x</div>
            <div className="text-sm text-white/60">Growth Rate</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
