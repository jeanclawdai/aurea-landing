"use client";

import { motion } from "framer-motion";
import { Search, Wand2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description: "We analyze your clinic's unique brand, target audience, and competitive landscape to create a tailored strategy.",
  },
  {
    icon: Wand2,
    number: "02",
    title: "Creation",
    description: "Our AI generates high-quality content, from social posts to video scripts, all matching your clinic's voice.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Growth",
    description: "Continuous optimization based on performance data ensures your marketing keeps improving and converting.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Simple Process, Powerful Results
          </h2>
          <p className="text-lg text-navy-light max-w-2xl mx-auto">
            Get started in minutes and watch your clinic's digital presence transform.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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
              
              <div className="glass-card rounded-3xl p-8 h-full">
                {/* Number */}
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-semibold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-navy-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
