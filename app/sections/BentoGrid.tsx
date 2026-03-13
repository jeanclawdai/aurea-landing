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
    clinic: "Clínica Bela Forma",
    location: "Lisboa, Portugal",
    metric: "+1,240% reach",
    period: "in 60 days",
    quote: "De 900 para 12.400 seguidores em 2 meses. Os nossos reels aparecem no Explorar toda a semana.",
    initials: "BF",
    color: "bg-blue-50 text-blue-600",
    stars: 5,
  },
  {
    clinic: "Instituto Evolua Estética",
    location: "Porto, Portugal",
    metric: "3× mais consultas",
    period: "via redes sociais",
    quote: "O TikTok tornou-se o nosso melhor canal de aquisição. Mais do que os anúncios pagos.",
    initials: "IE",
    color: "bg-violet-50 text-violet-600",
    stars: 5,
  },
  {
    clinic: "Skin Lab Cascais",
    location: "Cascais, Portugal",
    metric: "10× produção",
    period: "mesma equipa",
    quote: "Antes levávamos um mês a criar conteúdo para uma semana. Agora a Aurea faz isso em minutos.",
    initials: "SL",
    color: "bg-emerald-50 text-emerald-600",
    stars: 5,
  },
  {
    clinic: "Clínica Lumière",
    location: "Braga, Portugal",
    metric: "+847% seguidores",
    period: "em 90 dias",
    quote: "Passámos de 800 para 7.600 seguidores sem contratar ninguém. O ROI é incomparável.",
    initials: "CL",
    color: "bg-rose-50 text-rose-600",
    stars: 5,
  },
  {
    clinic: "Aesthetic Studio Almada",
    location: "Almada, Portugal",
    metric: "€42K receita adicional",
    period: "em 6 meses",
    quote: "Calculámos que a Aurea trouxe 34 novas clientes só através do Instagram nos primeiros 6 meses.",
    initials: "AS",
    color: "bg-amber-50 text-amber-600",
    stars: 5,
  },
  {
    clinic: "Nova Clínica Estética",
    location: "Setúbal, Portugal",
    metric: "87K views orgânicos",
    period: "no primeiro mês",
    quote: "O nosso primeiro vídeo gerado pela Aurea chegou aos 87 mil views. Nunca tínhamos chegado perto disso.",
    initials: "NC",
    color: "bg-cyan-50 text-cyan-600",
    stars: 5,
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
              whileHover={{ scale: 1.02, y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.clinic}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
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
              <div className="text-amber-400 text-sm mb-3">★★★★★</div>
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
