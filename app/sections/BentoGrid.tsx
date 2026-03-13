"use client";
import { motion } from "framer-motion";

const tweets = [
  {
    handle: "@clinica_bela_forma",
    name: "Clínica Bela Forma",
    avatar: "BF",
    avatarColor: "bg-blue-500",
    date: "Feb 14, 2026",
    text: "Usámos a @AureaAI durante 60 dias. Passámos de 900 para 12.400 seguidores 🚀 Os nossos reels aparecem no Explorar toda a semana. Isto é incrível.",
    metric: "+1,240% reach",
    likes: 47,
    replies: 12,
  },
  {
    handle: "@institutoevolua",
    name: "Instituto Evolua Estética",
    avatar: "IE",
    avatarColor: "bg-violet-500",
    date: "Jan 28, 2026",
    text: "O TikTok tornou-se o nosso melhor canal de aquisição. Mais do que os anúncios pagos. A @AureaAI simplesmente funciona.",
    metric: "3× mais consultas",
    likes: 83,
    replies: 19,
  },
  {
    handle: "@skinlabcascais",
    name: "Skin Lab Cascais",
    avatar: "SL",
    avatarColor: "bg-emerald-500",
    date: "Feb 2, 2026",
    text: "Antes demorávamos 1 mês a criar conteúdo para 1 semana. Com a @AureaAI fazemos isso em minutos. A equipa não acredita.",
    metric: "10× produção",
    likes: 61,
    replies: 8,
  },
  {
    handle: "@clinica_lumiere",
    name: "Clínica Lumière",
    avatar: "CL",
    avatarColor: "bg-rose-500",
    date: "Mar 1, 2026",
    text: "847% de crescimento em seguidores em 90 dias. Sem contratar ninguém. A @AureaAI é literalmente o melhor investimento que fizemos este ano.",
    metric: "+847% seguidores",
    likes: 124,
    replies: 31,
  },
  {
    handle: "@aestheticalmada",
    name: "Aesthetic Studio Almada",
    avatar: "AS",
    avatarColor: "bg-amber-500",
    date: "Feb 22, 2026",
    text: "Calculámos que a @AureaAI trouxe 34 novas clientes só via Instagram nos primeiros 6 meses. €42.000 em receita adicional. Sim.",
    metric: "€42K receita extra",
    likes: 198,
    replies: 44,
  },
  {
    handle: "@novaclinica_pt",
    name: "Nova Clínica Estética",
    avatar: "NC",
    avatarColor: "bg-cyan-500",
    date: "Mar 5, 2026",
    text: "O primeiro vídeo gerado pela @AureaAI chegou a 87K views orgânicos. Nunca tínhamos chegado perto disso em 3 anos de tentativas.",
    metric: "87K views orgânicos",
    likes: 76,
    replies: 23,
  },
];

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-gray-400" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
);

const ReplyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></svg>
);

export default function SocialProof() {
  return (
    <section id="results" className="py-32 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Outros adoraram.<br /><span className="font-serif-italic font-normal text-gray-400">E você também vai.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-xl mx-auto">
            Resultados reais de clínicas portuguesas.
          </p>
        </motion.div>

        {/* Tweet grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-0">
          {tweets.map((tweet, i) => (
            <motion.div
              key={tweet.handle}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="break-inside-avoid mb-6 bg-gray-900 rounded-2xl p-6 border border-gray-800 cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${tweet.avatarColor} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                    {tweet.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm leading-tight">{tweet.name}</div>
                    <div className="text-gray-500 text-xs">{tweet.handle}</div>
                  </div>
                </div>
                <XIcon />
              </div>

              {/* Tweet text */}
              <p className="text-gray-200 text-[15px] leading-relaxed mb-4">{tweet.text}</p>

              {/* Metric badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-emerald-400 mb-4">
                {tweet.metric}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                <span className="text-gray-600 text-xs">{tweet.date}</span>
                <div className="flex items-center gap-4 text-gray-600 text-xs">
                  <span className="flex items-center gap-1"><ReplyIcon />{tweet.replies}</span>
                  <span className="flex items-center gap-1"><HeartIcon />{tweet.likes}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="btn-shimmer px-12 py-5 bg-white text-gray-950 text-lg font-semibold rounded-2xl"
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Planos e Preços →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
