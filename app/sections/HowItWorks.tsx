"use client";

import { motion } from "framer-motion";
import { Target, Cpu, Rocket } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const steps = [
  {
    icon: Target,
    number: "01",
    title: "Define Your Vision",
    description: "Tell us your niche, your voice, your brand standards. We learn what makes your clinic unique and who your ideal patients are.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "AI Takes Over",
    description: "Our system monitors trends 24/7, generates videos with your cloned voice, auto-edits with subtitles, and plans your content calendar.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Publish & Grow",
    description: "Review, approve, and watch as content automatically publishes across Instagram, TikTok, and YouTube—while you focus on your patients.",
  },
];

export default function HowItWorks() {
  const { t } = useLang();
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden section-off">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t.howItWorks.eyebrow}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            {t.howItWorks.headline}
          </h2>
          <p className="text-lg text-navy-light max-w-3xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(111,168,255,0.4)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card rounded-3xl p-8 h-full border border-gray-200 shadow-sm"
              >
                {/* Number */}
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6"
                >
                  <step.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-navy-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl sm:text-3xl font-light text-gray-700 italic max-w-4xl mx-auto">
            &ldquo;This is nothing like boring and soulless automation—it&apos;s amplification of your creative vision.&rdquo;
          </blockquote>
        </motion.div>

        {/* PLACEHOLDER: Process illustration or video */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="w-full h-[240px] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-dashed border-blue-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-3">🎬</div>
              <div className="text-blue-400 text-sm font-medium">[ PLACEHOLDER: Product demo video or walkthrough GIF ]</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
