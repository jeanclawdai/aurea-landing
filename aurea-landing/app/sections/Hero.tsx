"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* AI Circle Visual */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-48 h-48 mx-auto mb-12"
        >
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-primary/20 blur-2xl animate-pulse" />
          
          {/* Main circle */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl border border-white/50 shadow-glass flex items-center justify-center">
            {/* Inner ring */}
            <div className="absolute inset-4 rounded-full border border-primary/20" />
            <div className="absolute inset-8 rounded-full border border-accent/20" />
            
            {/* Digital pattern */}
            <svg className="w-20 h-20 text-primary/60" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="15" fill="currentColor" fillOpacity="0.3" />
              <path d="M50 5 L50 20 M50 80 L50 95 M5 50 L20 50 M80 50 L95 50" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
          
          {/* Floating dots */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-primary/60"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 w-2 h-2 rounded-full bg-accent/60"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy mb-6 tracking-tight"
        >
          Aurea
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl text-navy-light mb-4 font-light"
        >
          AI Marketing Systems for Aesthetic Clinics
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg text-navy-light/80 mb-12 leading-relaxed"
        >
          Transform your clinic&apos;s digital presence with intelligent automation. 
          From content creation to patient engagement, Aurea handles it all.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-primary text-white rounded-2xl font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
            Get Started
          </button>
          <button className="px-8 py-4 glass-card text-navy rounded-2xl font-medium hover:bg-white/80 transition-all hover:-translate-y-0.5">
            View Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "500+", label: "Clinics" },
            { value: "10M+", label: "Patients Reached" },
            { value: "98%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-navy mb-1">{stat.value}</div>
              <div className="text-sm text-navy-light">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
