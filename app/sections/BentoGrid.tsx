"use client";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { SectionPill } from "@/components/ui/section-pill";

const tweetsEn = [
  { handle: "@clinica_bela_forma", name: "Clínica Bela Forma", avatar: "BF", avatarColor: "bg-blue-500", date: "Feb 14, 2026", text: "Used @AureaAI for 60 days. Went from 900 to 12,400 followers 🚀 Our reels hit Explore every week. Absolutely incredible.", metric: "+1,240% reach", likes: 47, replies: 12 },
  { handle: "@institutoevolua", name: "Instituto Evolua", avatar: "IE", avatarColor: "bg-violet-500", date: "Jan 28, 2026", text: "TikTok is now our best acquisition channel. More than paid ads. @AureaAI just works.", metric: "3× more bookings", likes: 83, replies: 19 },
  { handle: "@skinlabcascais", name: "Skin Lab Cascais", avatar: "SL", avatarColor: "bg-emerald-500", date: "Feb 2, 2026", text: "We used to spend a month creating one week of content. With @AureaAI it takes minutes. The team can't believe it.", metric: "10× content output", likes: 61, replies: 8 },
  { handle: "@clinica_lumiere", name: "Clínica Lumière", avatar: "CL", avatarColor: "bg-rose-500", date: "Mar 1, 2026", text: "847% follower growth in 90 days. No new hires. @AureaAI is literally the best investment we made this year.", metric: "+847% followers", likes: 124, replies: 31 },
  { handle: "@aestheticalmada", name: "Aesthetic Studio Almada", avatar: "AS", avatarColor: "bg-amber-500", date: "Feb 22, 2026", text: "We calculated @AureaAI brought 34 new clients through Instagram in the first 6 months. €42,000 in extra revenue. Yes.", metric: "€42K extra revenue", likes: 198, replies: 44 },
  { handle: "@novaclinica_pt", name: "Nova Clínica Estética", avatar: "NC", avatarColor: "bg-cyan-500", date: "Mar 5, 2026", text: "Our first @AureaAI video hit 87K organic views. We had never come close to that in 3 years of trying.", metric: "87K organic views", likes: 76, replies: 23 },
];

const tweetsPt = [
  { handle: "@clinica_bela_forma", name: "Clínica Bela Forma", avatar: "BF", avatarColor: "bg-blue-500", date: "14 Fev, 2026", text: "Usámos a @AureaAI durante 60 dias. Passámos de 900 para 12.400 seguidores 🚀 Os nossos reels aparecem no Explorar toda a semana.", metric: "+1.240% alcance", likes: 47, replies: 12 },
  { handle: "@institutoevolua", name: "Instituto Evolua", avatar: "IE", avatarColor: "bg-violet-500", date: "28 Jan, 2026", text: "O TikTok tornou-se o nosso melhor canal. Mais do que os anúncios pagos. A @AureaAI simplesmente funciona.", metric: "3× mais consultas", likes: 83, replies: 19 },
  { handle: "@skinlabcascais", name: "Skin Lab Cascais", avatar: "SL", avatarColor: "bg-emerald-500", date: "2 Fev, 2026", text: "Antes levávamos 1 mês a criar conteúdo para 1 semana. Com a @AureaAI fazemos isso em minutos. A equipa não acredita.", metric: "10× produção", likes: 61, replies: 8 },
  { handle: "@clinica_lumiere", name: "Clínica Lumière", avatar: "CL", avatarColor: "bg-rose-500", date: "1 Mar, 2026", text: "847% de crescimento em 90 dias. Sem contratar ninguém. A @AureaAI é o melhor investimento que fizemos este ano.", metric: "+847% seguidores", likes: 124, replies: 31 },
  { handle: "@aestheticalmada", name: "Aesthetic Studio Almada", avatar: "AS", avatarColor: "bg-amber-500", date: "22 Fev, 2026", text: "Calculámos que a @AureaAI trouxe 34 novas clientes via Instagram nos primeiros 6 meses. €42.000 em receita adicional.", metric: "€42K receita extra", likes: 198, replies: 44 },
  { handle: "@novaclinica_pt", name: "Nova Clínica Estética", avatar: "NC", avatarColor: "bg-cyan-500", date: "5 Mar, 2026", text: "O primeiro vídeo da @AureaAI chegou a 87K views orgânicos. Nunca tínhamos chegado perto disso em 3 anos.", metric: "87K views orgânicos", likes: 76, replies: 23 },
];

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-gray-300"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/></svg>
);

type Tweet = typeof tweetsEn[0];

function TweetCard({ tweet }: { tweet: Tweet }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex-shrink-0 w-[280px] bg-white dark:bg-[#111118] dark:border dark:border-white/10 rounded-2xl p-5 mx-3 shadow-lg shadow-black/5 cursor-pointer iridescent-hover iridescent-glow-hover"
      style={{ borderRadius: 20 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-full ${tweet.avatarColor} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>
            {tweet.avatar}
          </div>
          <div>
            <div className="text-gray-900 dark:text-gray-100 font-semibold text-xs leading-tight">{tweet.name}</div>
            <div className="text-gray-400 text-[10px]">{tweet.handle}</div>
          </div>
        </div>
        <XIcon />
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed mb-3">{tweet.text}</p>
      <div className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold text-gray-700 mb-3 iridescent-pill">
        {tweet.metric}
      </div>
      <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-2.5">
        <span className="text-gray-300 text-[10px]">{tweet.date}</span>
        <div className="flex items-center gap-3 text-gray-300 text-[10px]">
          <span className="flex items-center gap-1 hover:text-rose-400 transition-colors cursor-pointer"><HeartIcon />{tweet.likes}</span>
        </div>
      </div>
    </motion.div>
  );
}

function Marquee({ tweets }: { tweets: Tweet[] }) {
  const doubled = [...tweets, ...tweets];
  return (
    <div className="overflow-visible py-4 sm:py-8">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((tweet, i) => (
          <TweetCard key={i} tweet={tweet} />
        ))}
      </motion.div>
    </div>
  );
}

export default function SocialProof() {
  const { lang } = useLang();
  const tweets = lang === "pt" ? tweetsPt : tweetsEn;

  return (
    <section id="results" className="py-20 bg-[#0a0a0f] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionPill variant="dark" className="mb-6">{lang === "pt" ? "PROVA SOCIAL" : "SOCIAL PROOF"}</SectionPill>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            {lang === "pt"
              ? <>Outros <span className="font-serif-italic font-normal">adoraram.</span><br />E você também vai.</>
              : <>Others <span className="font-serif-italic font-normal">loved</span> it.<br />You will too.</>}
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            {lang === "pt" ? "Resultados reais de clínicas portuguesas." : "Real results from aesthetic clinics."}
          </p>
        </motion.div>
      </div>

      {/* Marquee — edge to edge */}
      <div className="relative overflow-x-clip">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-950 to-transparent z-10" />
        <Marquee tweets={tweets} />
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 text-center">
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="btn-shimmer px-12 py-5 bg-gray-950 text-white text-lg font-semibold rounded-2xl"
          onClick={() => typeof document !== "undefined" && document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
        >
          {lang === "pt" ? "Ver Planos →" : "View Plans →"}
        </motion.button>
      </div>
    </section>
  );
}
