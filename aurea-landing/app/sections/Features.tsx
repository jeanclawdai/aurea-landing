"use client";

import { motion } from "framer-motion";
import { Sparkles, Video, MessageSquare, BarChart3, Calendar, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Content Creation",
    description: "Generate engaging social media content, blog posts, and marketing materials tailored for aesthetic clinics.",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Create professional video content and reels showcasing your treatments and results automatically.",
  },
  {
    icon: MessageSquare,
    title: "Smart Engagement",
    description: "AI-powered responses to comments and messages, maintaining your clinic's voice 24/7.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track performance metrics, patient engagement, and ROI with intuitive visual reports.",
  },
  {
    icon: Calendar,
    title: "Scheduling Automation",
    description: "Streamline appointment booking and reminders, reducing no-shows by up to 40%.",
  },
  {
    icon: Users,
    title: "Patient Journey",
    description: "Personalized communication flows that nurture leads from first contact to loyal patient.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-navy-light max-w-2xl mx-auto">
            A complete AI-powered marketing suite designed specifically for aesthetic medicine practices.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full glass-card rounded-3xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-navy-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
