"use client";
import { motion } from "framer-motion";
import { Target, Cpu, Rocket, BarChart2 } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { SectionPill } from "@/components/ui/section-pill";

const steps = [
  {
    icon: Target,
    number: "01",
    title: "Define Your Vision",
    titlePt: "Defina a Sua Visão",
    desc: "Tell us your niche, voice, and brand standards. We learn what makes your clinic unique.",
    descPt: "Diz-nos o seu nicho, voz e padrões de marca. Aprendemos o que torna a sua clínica única.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "AI Takes Over",
    titlePt: "A IA Assume o Controlo",
    desc: "Our system monitors trends 24/7, generates videos with your voice, and plans your content calendar.",
    descPt: "O nosso sistema monitoriza tendências 24/7, gera vídeos com a sua voz e planeia o calendário de conteúdo.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Publish & Grow",
    titlePt: "Publica e Cresce",
    desc: "Review, approve, and watch as content publishes across Instagram, TikTok, and YouTube automatically.",
    descPt: "Revê, aprova e vê o conteúdo a ser publicado no Instagram, TikTok e YouTube automaticamente.",
  },
  {
    icon: BarChart2,
    number: "04",
    title: "Track & Optimise",
    titlePt: "Acompanha e Otimiza",
    desc: "Monitor performance across all platforms. Aurea learns from your top posts and doubles down on what works.",
    descPt: "Monitoriza o desempenho em todas as plataformas. A Aurea aprende com as tuas melhores publicações e aposta no que funciona.",
  },
];

export default function HowItWorks() {
  const { lang } = useLang();
  return (
    <section id="how-it-works" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <SectionPill className="mb-6">{lang === "pt" ? "COMO FUNCIONA" : "HOW IT WORKS"}</SectionPill>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-950 leading-tight">
            {lang === "pt"
              ? <>De Criador a <span className="font-serif-italic font-normal">Diretor Criativo</span></>
              : <>From Creator to <span className="font-serif-italic font-normal">Creative Director</span></>}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 iridescent-hover"
            >
              {/* Icon box */}
              <motion.div
                className="w-14 h-14 rounded-2xl border-2 border-gray-200 bg-white flex items-center justify-center mb-8"
                whileHover={{ rotate: 10, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <step.icon className="w-7 h-7 text-gray-700" strokeWidth={1.5} />
              </motion.div>
              <div className="text-7xl font-bold mb-4" style={{ color: '#e8e8e8' }}>{step.number}</div>
              <h3 className="text-2xl font-bold text-gray-950 mb-4">
                {lang === "pt" ? step.titlePt : step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {lang === "pt" ? step.descPt : step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Animated sparkle divider */}
        <div className="flex items-center justify-center gap-4 my-20">
          {["✦", "✦", "✦", "✦", "✦"].map((s, i) => (
            <motion.span
              key={i}
              className="text-gray-200 text-xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ type: "tween", duration: 1.2, delay: i * 0.15, repeat: Infinity, ease: "easeInOut" }}
            >
              {s}
            </motion.span>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-center text-3xl sm:text-4xl font-light text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {lang === "pt"
            ? <>&ldquo;Não é automação sem alma — é <span className="font-serif-italic">amplificação</span> da sua visão criativa.&rdquo;</>
            : <>&ldquo;This is not soulless automation — it&apos;s <span className="font-serif-italic">amplification</span> of your creative vision.&rdquo;</>}
        </blockquote>
      </div>
    </section>
  );
}
