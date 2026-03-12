"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, TrendingUp, Target, Zap, Brain } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Neural Network Mesh Component
const NeuralMesh = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes
    const nodes: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const nodeCount = 50;
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i === j) return;
          
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3;
            ctx.strokeStyle = `rgba(3, 167, 202, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });

        // Draw node
        ctx.fillStyle = 'rgba(3, 167, 202, 0.6)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />;
};

export default function Hero() {
  const [instagramHandle, setInstagramHandle] = useState("");
  const sectionRef = useRef(null);

  // Parallax scroll tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Different parallax speeds for each element
  const cardParallax1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const cardParallax2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const cardParallax3 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const cardParallax4 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const contentParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const meshParallax = useTransform(scrollYProgress, [0, 1], [0, -50]);

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
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Smooth Water-Like Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#073653] via-[#03A7CA] to-[#E2E7EA]" />

      {/* Neural Network Mesh with Parallax */}
      <motion.div style={{ y: meshParallax }} className="absolute inset-0">
        <NeuralMesh />
      </motion.div>

      {/* Floating Claim Cards */}
      {/* Top Left */}
      <motion.div
        style={{ y: cardParallax1 }}
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 left-8 lg:left-24 z-10"
      >
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/95 backdrop-blur-lg border border-cyan/20 rounded-2xl px-6 py-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-ocean" />
            </div>
            <div>
              <div className="text-2xl font-bold text-ocean">10x</div>
              <div className="text-xs text-ocean/70">Growth Rate</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Top Right */}
      <motion.div
        style={{ y: cardParallax2 }}
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-40 right-8 lg:right-24 z-10"
      >
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/95 backdrop-blur-lg border border-cyan/20 rounded-2xl px-6 py-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan/20 flex items-center justify-center">
              <Target className="w-5 h-5 text-ocean" />
            </div>
            <div>
              <div className="text-sm font-semibold text-ocean">Pattern Recognition</div>
              <div className="text-xs text-ocean/70">AI-Powered</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        style={{ y: cardParallax3 }}
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-32 left-8 lg:left-32 z-10"
      >
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/95 backdrop-blur-lg border border-cyan/20 rounded-2xl px-6 py-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-ocean" />
            </div>
            <div>
              <div className="text-2xl font-bold text-ocean">847%</div>
              <div className="text-xs text-ocean/70">Avg. Engagement</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        style={{ y: cardParallax4 }}
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-40 right-8 lg:right-32 z-10"
      >
        <motion.div
          animate={{ y: [12, -12, 12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/95 backdrop-blur-lg border border-cyan/20 rounded-2xl px-6 py-4 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan/20 flex items-center justify-center">
              <Brain className="w-5 h-5 text-ocean" />
            </div>
            <div>
              <div className="text-sm font-semibold text-ocean">10,000+</div>
              <div className="text-xs text-ocean/70">Posts Analyzed</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content - Centered with Parallax */}
      <motion.div 
        style={{ y: contentParallax }}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-ocean/20 text-sm font-medium text-ocean mb-8 shadow-lg"
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
            <span className="block text-ocean mb-2">
              Predict What Works
            </span>
            <span 
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-ocean via-cyan to-sky animate-gradient"
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
          className="text-xl sm:text-2xl text-ocean/80 leading-relaxed max-w-3xl mx-auto mb-12 font-light"
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
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-ocean/40 font-medium text-lg">
                @
              </div>
              <input
                type="text"
                value={instagramHandle}
                onChange={(e) => setInstagramHandle(e.target.value)}
                placeholder="your_profile"
                className="w-full pl-11 pr-5 py-5 rounded-2xl border-2 border-ocean/20 bg-white/90 backdrop-blur-md focus:border-cyan focus:bg-white focus:outline-none text-lg font-medium transition-all text-ocean placeholder:text-ocean/40 shadow-lg"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 bg-gradient-to-r from-ocean to-cyan text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Analyze Profile</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>
          
          <div className="flex items-center justify-center gap-4 text-sm">
            <p className="text-ocean/60">
              Free pattern analysis · Predict your viral potential
            </p>
            <span className="text-ocean/30">·</span>
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
            <div className="text-3xl sm:text-4xl font-bold text-ocean mb-1">10,000+</div>
            <div className="text-sm text-ocean/60">Posts Analyzed</div>
          </div>
          
          <div className="w-px h-12 bg-ocean/20" />
          
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-ocean mb-1">847%</div>
            <div className="text-sm text-ocean/60">Avg. Engagement</div>
          </div>

          <div className="w-px h-12 bg-ocean/20" />

          <div>
            <div className="text-3xl sm:text-4xl font-bold text-ocean mb-1">10x</div>
            <div className="text-sm text-ocean/60">Growth Rate</div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
