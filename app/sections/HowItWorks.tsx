"use client";
import { motion } from "framer-motion";
import { Target, Cpu, Rocket } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const steps = [
  { icon: Target, number: "01", title: "Define Your Vision", titlePt: "Defina a Sua Visão", desc: "Tell us your niche, voice, and brand standards. We learn what makes your clinic unique.", descPt: "Diz-nos o seu nicho, voz e padrões de marca. Aprendemos o que torna a sua clínica única." },
  { icon: Cpu, number: "02", title: "AI Takes Over", titlePt: "A IA Assume o Controlo", desc: "Our system monitors trends 24/7, generates videos with your voice, and plans your content calendar.", descPt: "O nosso sistema monitoriza tendências 24/7, gera vídeos com a sua voz e planeia o calendário de conteúdo." },
  { icon: Rocket, number: "03", title: "Publish & Grow", titlePt: "Publica e Cresce", desc: "Review, approve, and watch as content publishes across Instagram, TikTok, and YouTube automatically.", descPt: "Revê, aprova e vê o conteúdo a ser publicado no Instagram, TikTok e YouTube automaticamente." },
];

export default function HowItWorks() {
  const { lang } = useLang();
  return (
    <section id="how-it-works" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4 block">
            {lang === "pt" ? "COMO FUNCIONA" : "HOW IT WORKS"}
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-950 leading-tight">
            {lang === "pt" ? <>De Criador a <span className="font-serif-italic font-normal">Diretor Criativo</span></> : <>From Creator to <span className="font-serif-italic font-normal">Creative Director</span></>}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-gray-50 rounded-3xl p-10 border border-gray-100"
            >
              {/* Icon box */}
              <div className="w-14 h-14 rounded-2xl border-2 border-gray-200 bg-white flex items-center justify-center mb-8">
                <step.icon className="w-7 h-7 text-gray-700" strokeWidth={1.5} />
              </div>
              <div className="text-5xl font-bold text-gray-100 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold text-gray-950 mb-4">
                {lang === "pt" ? step.titlePt : step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {lang === "pt" ? step.descPt : step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sparkle divider */}
        <div className="sparkle-divider my-20 text-2xl">✦ ✦ ✦ ✦ ✦</div>

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
