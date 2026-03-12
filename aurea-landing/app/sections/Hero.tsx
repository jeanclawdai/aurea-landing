"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-40 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-primary" 
              />
              <span className="text-sm font-medium text-navy">Fully Automated Social Media</span>
            </motion.div>

            {/* Main Heading with character animation */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-[1.1] tracking-tight"
            >
              {"Your AI".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.03 }}
                >
                  {char}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="gradient-text"
              >
                Content Team
              </motion.span>
            </motion.h1>

            {/* Subheading with fade up */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl sm:text-2xl text-navy-light mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Automated social media for aesthetic clinics. 
              AI videos, voice cloning, auto-editing, and hands-free posting.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-5 bg-primary text-white rounded-2xl font-semibold text-lg shadow-2xl shadow-primary/30 overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-5 glass-card text-navy rounded-2xl font-semibold text-lg hover:bg-white/80 transition-all flex items-center justify-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Play className="w-4 h-4 text-primary ml-0.5" />
                </div>
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-navy-light"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-white" />
                  ))}
                </div>
                <span>500+ clinics</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★★★★★</span>
                <span>4.9/5</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Cool Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[40px] blur-3xl" />
              
              {/* Main Card */}
              <div className="relative glass-card rounded-[32px] p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-white font-bold">A</span>
                    </div>
                    <div>
                      <div className="font-semibold text-navy">Aurea Studio</div>
                      <div className="text-xs text-navy-light">Live Production</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.span 
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-green-500" 
                    />
                    <span className="text-xs text-navy-light">AI Active</span>
                  </div>
                </div>

                {/* Video Preview Area */}
                <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-pink-500/20 mb-6 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
                    >
                      <Play className="w-6 h-6 text-navy ml-1" fill="currentColor" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-card rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-xs">🎬</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-navy">Generating Video...</div>
                          <div className="w-full h-1.5 bg-primary/20 rounded-full mt-2 overflow-hidden">
                            <motion.div 
                              animate={{ width: ["0%", "100%"] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="h-full bg-primary rounded-full" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Videos", value: "24", change: "+12%" },
                    { label: "Views", value: "8.4K", change: "+28%" },
                    { label: "Leads", value: "156", change: "+45%" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/50 rounded-xl p-4">
                      <div className="text-2xl font-bold text-navy">{stat.value}</div>
                      <div className="text-xs text-navy-light">{stat.label}</div>
                      <div className="text-xs text-green-600 font-medium">{stat.change}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center text-white text-lg">
                    🚀
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">Viral!</div>
                    <div className="text-xs text-navy-light">50K+ views</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg">🎙️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">Voice Ready</div>
                    <div className="text-xs text-navy-light">Cloned & synced</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
