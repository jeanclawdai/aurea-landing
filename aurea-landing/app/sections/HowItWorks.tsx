"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Cpu, Rocket, BarChart2, X, Check } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import { SectionPill } from "@/components/ui/section-pill";
import { useState } from "react";

const steps = [
  {
    icon: Target,
    number: "01",
    title: "Define Your Vision",
    titlePt: "Defina a Sua Visão",
    desc: "Tell us your niche, voice, and brand standards. We learn what makes your clinic unique.",
    descPt: "Diz-nos o seu nicho, voz e padrões de marca. Aprendemos o que torna a sua clínica única.",
    steps: [
      "Upload your logo, brand colors, and fonts",
      "Define your clinic's unique value proposition",
      "Set your tone of voice (professional, friendly, luxurious)",
      "Choose your target audience demographics",
      "Select your main services to highlight",
    ],
    stepsPt: [
      "Carrega o logotipo, cores e fontes da marca",
      "Define a proposta de valor única da clínica",
      "Define o tom de voz (profissional, amigável, luxuoso)",
      "Escolhe a demografia do público-alvo",
      "Seleciona os serviços principais a destacar",
    ],
  },
  {
    icon: Cpu,
    number: "02",
    title: "AI Takes Over",
    titlePt: "A IA Assume o Controlo",
    desc: "Our system monitors trends 24/7, generates videos with your voice, and plans your content calendar.",
    descPt: "O nosso sistema monitoriza tendências 24/7, gera vídeos com a sua voz e planeia o calendário de conteúdo.",
    steps: [
      "AI scans 10,000+ viral posts for patterns",
      "Content calendar is auto-generated weekly",
      "Scripts are written in your brand voice",
      "Visuals are created matching your brand kit",
      "Optimal posting times are calculated",
    ],
    stepsPt: [
      "IA analisa +10.000 posts virais por padrões",
      "Calendário de conteúdo gerado semanalmente",
      "Scripts escritos na voz da tua marca",
      "Visuais criados com o teu brand kit",
      "Horários ideais de publicação calculados",
    ],
  },
  {
    icon: Rocket,
    number: "03",
    title: "Publish & Grow",
    titlePt: "Publica e Cresce",
    desc: "Review, approve, and watch as content publishes across Instagram, TikTok, and YouTube automatically.",
    descPt: "Revê, aprova e vê o conteúdo a ser publicado no Instagram, TikTok e YouTube automaticamente.",
    steps: [
      "Preview all content before it goes live",
      "Approve, edit, or reject with one click",
      "Auto-publish to IG, TikTok & YouTube",
      "Captions and hashtags added automatically",
      "Stories and Reels scheduled together",
    ],
    stepsPt: [
      "Pré-visualiza todo o conteúdo antes de publicar",
      "Aprova, edita ou rejeita com um clique",
      "Publica automaticamente no IG, TikTok e YouTube",
      "Legendas e hashtags adicionados automaticamente",
      "Stories e Reels agendados em conjunto",
    ],
  },
  {
    icon: BarChart2,
    number: "04",
    title: "Track & Optimise",
    titlePt: "Acompanha e Otimiza",
    desc: "Monitor performance across all platforms. Aurea learns from your top posts and doubles down on what works.",
    descPt: "Monitoriza o desempenho em todas as plataformas. A Aurea aprende com as tuas melhores publicações e aposta no que funciona.",
    steps: [
      "Unified dashboard for all platforms",
      "Track followers, reach, and engagement",
      "See which content drives bookings",
      "AI identifies your top-performing patterns",
      "Future content auto-optimised based on data",
    ],
    stepsPt: [
      "Dashboard unificado para todas as plataformas",
      "Acompanha seguidores, alcance e engagement",
      "Vê que conteúdo gera reservas",
      "IA identifica os padrões de melhor desempenho",
      "Conteúdo futuro auto-optimizado com dados",
    ],
  },
];

export default function HowItWorks() {
  const { lang } = useLang();
  const [activeStep, setActiveStep] = useState<number | null>(null);

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
              onClick={() => setActiveStep(i)}
              className="group bg-gray-50 rounded-3xl p-8 border border-gray-100 iridescent-hover cursor-pointer"
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
              <p className="text-gray-300 text-xs mt-4 group-hover:text-gray-400 transition-colors">
                {lang === "pt" ? "Saber mais →" : "Learn more →"}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeStep !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setActiveStep(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl iridescent-always"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setActiveStep(null)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl border-2 border-gray-200 bg-white flex items-center justify-center"
                    animate={{ rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {(() => {
                      const StepIcon = steps[activeStep].icon;
                      return <StepIcon className="w-7 h-7 text-gray-700" strokeWidth={1.5} />;
                    })()}
                  </motion.div>
                  <div>
                    <div className="text-sm font-medium text-gray-400">{lang === "pt" ? "Passo" : "Step"} {steps[activeStep].number}</div>
                    <h3 className="text-2xl font-bold text-gray-950">
                      {lang === "pt" ? steps[activeStep].titlePt : steps[activeStep].title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-500 mb-6">
                  {lang === "pt" ? steps[activeStep].descPt : steps[activeStep].desc}
                </p>

                {/* Steps list */}
                <div className="space-y-2">
                  {(lang === "pt" ? steps[activeStep].stepsPt : steps[activeStep].steps).map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div 
                        className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <Check size={12} className="text-gray-600" />
                      </motion.div>
                      <span className="text-gray-600">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA - same as hero */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActiveStep(null);
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rotating-border-btn w-full mt-8 py-4 text-white font-semibold"
                >
                  {lang === "pt" ? "Começar Agora →" : "Get Started →"}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
