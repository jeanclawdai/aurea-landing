"use client";

import { motion } from "framer-motion";

const platforms = [
  {
    name: "TikTok",
    color: "from-black to-gray-900",
    textColor: "text-white",
    icon: "🎵",
    stats: [
      { label: "Avg Views/Video", value: "47.2K", change: "+340%" },
      { label: "Followers Gained", value: "12.8K", change: "+890%" },
      { label: "Engagement Rate", value: "8.7%", change: "+320%" },
    ],
  },
  {
    name: "Instagram",
    color: "from-purple-600 to-pink-500",
    textColor: "text-white",
    icon: "📸",
    stats: [
      { label: "Reel Views", value: "28.4K", change: "+210%" },
      { label: "Profile Visits", value: "3.2K", change: "+180%" },
      { label: "Story Reach", value: "6.1K", change: "+150%" },
    ],
  },
  {
    name: "YouTube",
    color: "from-red-600 to-red-700",
    textColor: "text-white",
    icon: "▶️",
    stats: [
      { label: "Shorts Views", value: "91.3K", change: "+560%" },
      { label: "Subscribers", value: "4.7K", change: "+430%" },
      { label: "Watch Time", value: "2.4K hrs", change: "+280%" },
    ],
  },
];

const testimonials = [
  {
    clinic: "Clínica Estética Lisboa",
    location: "Lisboa, Portugal",
    metric: "+847% follower growth",
    period: "in 90 days",
    quote: "We went from 800 to 7,600 followers in 3 months without hiring anyone extra.",
    initials: "CL",
    color: "bg-blue-100 text-blue-700",
  },
  {
    clinic: "Aesthetic Studio Porto",
    location: "Porto, Portugal",
    metric: "3× more bookings",
    period: "from social media",
    quote: "Our TikTok now drives more consultations than our paid ads ever did.",
    initials: "AS",
    color: "bg-purple-100 text-purple-700",
  },
  {
    clinic: "MedSpa Barcelona",
    location: "Barcelona, Spain",
    metric: "10× content output",
    period: "same team size",
    quote: "Aurea produces in a week what used to take us a full month to create.",
    initials: "MB",
    color: "bg-pink-100 text-pink-700",
  },
];

export default function SocialProof() {
  return (
    <section id="results" className="py-24 px-4 sm:px-6 lg:px-8 section-off">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3 block">RESULTS</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Built for every platform.<br />Dominant on all of them.
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Aurea creates platform-native content that algorithms love — and audiences follow.
          </p>
        </motion.div>

        {/* Platform Performance Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl bg-gradient-to-br ${platform.color} p-6 ${platform.textColor}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{platform.icon}</span>
                <span className="text-lg font-bold">{platform.name}</span>
              </div>
              <div className="space-y-4">
                {platform.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-xs opacity-60">{stat.label}</div>
                    </div>
                    <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">
                      {stat.change}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.clinic}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-sm font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{t.clinic}</div>
                  <div className="text-xs text-gray-400">{t.location}</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="border-t border-gray-100 pt-4">
                <div className="text-lg font-bold text-gray-900">{t.metric}</div>
                <div className="text-xs text-gray-400">{t.period}</div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
