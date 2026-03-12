"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for floating cards
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const card4Y = useTransform(scrollYProgress, [0, 1], [0, -180]);
  
  const card1Rotate = useTransform(scrollYProgress, [0, 1], [-15, -25]);
  const card2Rotate = useTransform(scrollYProgress, [0, 1], [-25, -35]);
  const card3Rotate = useTransform(scrollYProgress, [0, 1], [15, 25]);
  const card4Rotate = useTransform(scrollYProgress, [0, 1], [25, 35]);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background Gradient - More vibrant like reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-purple-200 to-indigo-400" />
      


      {/* Floating Feature Cards - Larger and Better Positioned */}
      {/* Top Left Card - AI Content Creation */}
      <motion.div
        style={{ y: card1Y, rotate: card1Rotate }}
        initial={{ opacity: 0, x: -100, rotate: -15 }}
        animate={{ opacity: 1, x: 0, rotate: -15 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-32 left-24 w-64 h-64 z-20 hidden lg:block"
      >
        <motion.div 
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full rounded-3xl backdrop-blur-md bg-gradient-to-br from-pink-200/90 via-purple-200/90 to-pink-300/90 border border-white/40 shadow-2xl shadow-purple-500/30 p-6"
        >
          {/* AI Content Image */}
          <div className="w-full h-40 rounded-2xl overflow-hidden mb-4">
            <img 
              src="/images/hero-ai-content.svg" 
              alt="AI Content Creation"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center border border-white/40">
            <h3 className="text-navy font-semibold text-sm">AI Content Creation</h3>
            <p className="text-navy/70 text-xs mt-1">Automated posts & videos</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Left Card - Voice Cloning */}
      <motion.div
        style={{ y: card2Y, rotate: card2Rotate }}
        initial={{ opacity: 0, x: -100, rotate: -25 }}
        animate={{ opacity: 1, x: 0, rotate: -25 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute top-[420px] left-16 w-56 h-56 z-20 hidden lg:block"
      >
        <motion.div 
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full rounded-3xl backdrop-blur-md bg-gradient-to-br from-purple-300/90 via-pink-200/90 to-purple-400/90 border border-white/40 shadow-2xl shadow-pink-500/30 p-6"
        >
          {/* Voice Cloning Image */}
          <div className="w-full h-36 rounded-2xl overflow-hidden mb-4">
            <img 
              src="/images/hero-voice-clone.svg" 
              alt="Voice Cloning"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center border border-white/40">
            <h3 className="text-navy font-semibold text-sm">Voice Cloning</h3>
            <p className="text-navy/70 text-xs mt-1">Your voice in every video</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Top Right Card - Auto Editing */}
      <motion.div
        style={{ y: card3Y, rotate: card3Rotate }}
        initial={{ opacity: 0, x: 100, rotate: 15 }}
        animate={{ opacity: 1, x: 0, rotate: 15 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute top-40 right-24 w-60 h-60 z-20 hidden lg:block"
      >
        <motion.div 
          animate={{ y: [-3, 7, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full rounded-3xl backdrop-blur-md bg-gradient-to-br from-orange-200/90 via-pink-200/90 to-orange-300/90 border border-white/40 shadow-2xl shadow-orange-500/30 p-6"
        >
          {/* Auto Editing Image */}
          <div className="w-full h-36 rounded-2xl overflow-hidden mb-4">
            <img 
              src="/images/hero-auto-edit.svg" 
              alt="Auto Editing"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center border border-white/40">
            <h3 className="text-navy font-semibold text-sm">Auto Editing</h3>
            <p className="text-navy/70 text-xs mt-1">Professional cuts & transitions</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Right Card - Smart Posting */}
      <motion.div
        style={{ y: card4Y, rotate: card4Rotate }}
        initial={{ opacity: 0, x: 100, rotate: 25 }}
        animate={{ opacity: 1, x: 0, rotate: 25 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute top-[380px] right-16 w-52 h-52 z-20 hidden lg:block"
      >
        <motion.div 
          animate={{ y: [7, -3, 7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full rounded-3xl backdrop-blur-md bg-gradient-to-br from-pink-300/90 via-purple-200/90 to-indigo-300/90 border border-white/40 shadow-2xl shadow-purple-500/30 p-6"
        >
          {/* Smart Posting Image */}
          <div className="w-full h-32 rounded-2xl overflow-hidden mb-4">
            <img 
              src="/images/hero-smart-post.svg" 
              alt="Smart Posting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center border border-white/40">
            <h3 className="text-navy font-semibold text-sm">Smart Posting</h3>
            <p className="text-navy/70 text-xs mt-1">Schedule & optimize timing</p>
          </div>
        </motion.div>
      </motion.div>

      {/* AI Clone Profile Pictures */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-48 left-1/4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-3 border-white flex items-center justify-center z-10 hidden lg:flex shadow-lg overflow-hidden"
      >
        <span className="text-lg">👩‍⚕️</span>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-56 right-1/4 w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 border-3 border-white flex items-center justify-center z-10 hidden lg:flex shadow-lg overflow-hidden"
      >
        <span className="text-xl">👨‍⚕️</span>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3.5,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-72 left-20 w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 border-2 border-white flex items-center justify-center z-10 hidden lg:flex shadow-lg overflow-hidden"
      >
        <span className="text-base">💁‍♀️</span>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4.5,
          delay: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-40 right-20 w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-white flex items-center justify-center z-10 hidden lg:flex shadow-lg overflow-hidden"
      >
        <span className="text-lg">🧑‍⚕️</span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md bg-white/30 border border-white/40 text-navy font-medium text-sm mb-8 shadow-lg"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
            G
          </div>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span>4.9/5 Rating</span>
          <span className="text-navy/70">•</span>
          <span>4800+ Reviews</span>
        </motion.div>

        {/* Main Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6 mb-8"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-navy block">Smarter Strategies Build</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Stronger Brands
            </span>
          </h1>
          <p className="text-navy/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            A creative-first team building bold brands, driving awareness, & scaling growth 
            through design and data for aesthetic clinics worldwide.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToFeatures}
            className="group flex items-center gap-3 px-10 py-5 bg-indigo-600 text-white rounded-full font-semibold text-lg shadow-2xl shadow-indigo-600/40 hover:shadow-indigo-600/60 transition-all mx-auto"
          >
            <span>Free Brand Plan</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}