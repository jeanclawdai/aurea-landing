"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const images = [
  { id: 1, height: "h-[400px]", gradient: "from-violet-400/60 via-purple-400/40 to-pink-400/60", creator: "Dr. Sarah Chen", pfp: "SC" },
  { id: 2, height: "h-[300px]", gradient: "from-blue-400/60 via-cyan-400/40 to-teal-400/60", creator: "MedSpa NYC", pfp: "MN" },
  { id: 3, height: "h-[350px]", gradient: "from-pink-400/60 via-rose-400/40 to-orange-400/60", creator: "Aesthetic Plus", pfp: "AP" },
  { id: 4, height: "h-[450px]", gradient: "from-amber-400/60 via-orange-400/40 to-red-400/60", creator: "Beauty Clinic LA", pfp: "BL" },
  { id: 5, height: "h-[320px]", gradient: "from-emerald-400/60 via-teal-400/40 to-cyan-400/60", creator: "Skin Experts", pfp: "SE" },
  { id: 6, height: "h-[380px]", gradient: "from-indigo-400/60 via-violet-400/40 to-purple-400/60", creator: "Glow Aesthetics", pfp: "GA" },
  { id: 7, height: "h-[280px]", gradient: "from-rose-400/60 via-pink-400/40 to-fuchsia-400/60", creator: "Luxe Med Spa", pfp: "LM" },
  { id: 8, height: "h-[420px]", gradient: "from-cyan-400/60 via-blue-400/40 to-indigo-400/60", creator: "Youth Clinic", pfp: "YC" },
  { id: 9, height: "h-[340px]", gradient: "from-teal-400/60 via-emerald-400/40 to-green-400/60", creator: "Radiance MD", pfp: "RM" },
  { id: 10, height: "h-[360px]", gradient: "from-orange-400/60 via-amber-400/40 to-yellow-400/60", creator: "Elite Aesthetics", pfp: "EA" },
  { id: 11, height: "h-[310px]", gradient: "from-purple-400/60 via-violet-400/40 to-indigo-400/60", creator: "Pure Beauty", pfp: "PB" },
  { id: 12, height: "h-[390px]", gradient: "from-red-400/60 via-rose-400/40 to-pink-400/60", creator: "Viva Clinic", pfp: "VC" },
];

export default function BentoGrid() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase mb-4 block">
            AI Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-4">
            Content Previews
          </h2>
          <p className="text-navy-light text-lg max-w-2xl mx-auto">
            Examples of AI-generated content Aurea creates for aesthetic clinics
          </p>
        </motion.div>
      </div>

      {/* Masonry Grid */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid"
            >
              <div
                className={`group relative ${image.height} rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-shadow`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${image.gradient} transition-all duration-300 group-hover:brightness-75`}>
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }} />
                  </div>
                </div>

                {/* Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/40">
                    <span className="text-xl opacity-60">🖼️</span>
                  </div>
                </div>

                {/* Creator Info - Shows on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    {/* Circular PFP */}
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-navy font-semibold text-sm shadow-lg">
                      {image.pfp}
                    </div>
                    <div className="glass-card rounded-xl px-4 py-2">
                      <span className="text-navy text-sm font-medium">{image.creator}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Gradient Fade to Background */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#F3F7FF] via-[#F3F7FF]/95 to-transparent pointer-events-none" />
        
        {/* CTA Button - Centered */}
        <div className="relative mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <motion.button
              onClick={scrollToPricing}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-semibold text-lg shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all"
            >
              <span>Create Yours</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
