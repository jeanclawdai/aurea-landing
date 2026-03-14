"use client";

import { motion } from "framer-motion";
import { SectionPill } from "@/components/ui/section-pill";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const featuresEn = [
  {
    id: 1,
    title: "Pattern Intelligence",
    description: "Built on 10,000+ analyzed viral posts. Extracts proven hooks, pacing, and CTAs from top-performing content in your niche.",
    image: "/images/feature-ai-video.svg",
  },
  {
    id: 2,
    title: "Voice Synthesis",
    description: "Clone your voice once, scale infinitely. Professional-grade audio that sounds authentically you across every piece of content.",
    image: "/images/feature-voice-clone.svg",
  },
  {
    id: 3,
    title: "Intelligent Editing",
    description: "AI recognizes optimal cut points, pacing rhythms, and subtitle placement. Edits like a seasoned video professional.",
    image: "/images/feature-auto-edit.svg",
  },
  {
    id: 4,
    title: "Viral Analysis",
    description: "Daily pattern extraction from trending content. Identifies what's working now—hooks, formats, music, engagement tactics.",
    image: "/images/feature-trend-intelligence.svg",
  },
  {
    id: 5,
    title: "Strategic Planning",
    description: "AI curates your content calendar based on trend cycles and your audience's engagement patterns. Always timely, never random.",
    image: "/images/feature-content-planner.svg",
  },
  {
    id: 6,
    title: "Multi-Platform Distribution",
    description: "Optimized publishing across Instagram, TikTok, and YouTube. Platform-specific formats, timing, and metadata—handled automatically.",
    image: "/images/feature-auto-publish.svg",
  },
];

const featuresPt = [
  {
    id: 1,
    title: "Inteligência de Padrões",
    description: "Baseado em mais de 10.000 publicações virais analisadas. Extrai hooks, ritmo e CTAs comprovados do conteúdo mais eficaz no teu nicho.",
    image: "/images/feature-ai-video.svg",
  },
  {
    id: 2,
    title: "Síntese de Voz",
    description: "Clona a tua voz uma vez, escala infinitamente. Áudio profissional que soa autenticamente a ti em cada conteúdo.",
    image: "/images/feature-voice-clone.svg",
  },
  {
    id: 3,
    title: "Edição Inteligente",
    description: "A IA reconhece os melhores pontos de corte, ritmos de pacing e posicionamento de legendas. Edita como um profissional experiente.",
    image: "/images/feature-auto-edit.svg",
  },
  {
    id: 4,
    title: "Análise Viral",
    description: "Extração diária de padrões de conteúdo em tendência. Identifica o que está a funcionar agora — hooks, formatos, música, táticas de engagement.",
    image: "/images/feature-trend-intelligence.svg",
  },
  {
    id: 5,
    title: "Planeamento Estratégico",
    description: "A IA organiza o teu calendário de conteúdo com base em ciclos de tendências e padrões de engagement da tua audiência. Sempre oportuno.",
    image: "/images/feature-content-planner.svg",
  },
  {
    id: 6,
    title: "Distribuição Multi-Plataforma",
    description: "Publicação otimizada no Instagram, TikTok e YouTube. Formatos, timings e metadados específicos de cada plataforma — tudo automático.",
    image: "/images/feature-auto-publish.svg",
  },
];

const gradients = [
  "bg-gradient-to-br from-violet-200 via-purple-100 to-blue-200",
  "bg-gradient-to-br from-blue-200 via-cyan-100 to-teal-200",
  "bg-gradient-to-br from-pink-200 via-rose-100 to-orange-200",
  "bg-gradient-to-br from-emerald-200 via-teal-100 to-cyan-200",
  "bg-gradient-to-br from-amber-200 via-yellow-100 to-orange-200",
  "bg-gradient-to-br from-purple-200 via-pink-100 to-rose-200",
];
const featureIcons = ["🔬", "🎙️", "✂️", "📊", "📅", "🚀"];

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { lang } = useLang();

  const features = lang === "pt" ? featuresPt : featuresEn;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -370 : 370,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="features" className="py-24 px-6 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <SectionPill className="mb-6">{lang === "pt" ? "O QUE FAZEMOS" : "WHAT WE DO"}</SectionPill>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-950 leading-tight mb-5">
            Viral <span className="font-serif-italic font-normal">Science.</span>
            <br />
            Not Generic AI.
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            {lang === "pt"
              ? "Tecnologia que aprende o que funciona e executa melhor do que qualquer equipa humana."
              : "Technology that learns what works and executes better than any human team."}
          </p>
        </motion.div>

        {/* Scroll nav */}
        <div className="flex items-center justify-end gap-3 mb-6 hidden lg:flex">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>

        {/* Horizontal scroll cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 pt-4 pb-6 -mx-6 px-6"
          style={{ 
            overflowX: "auto",
            overflowY: "visible",
            scrollbarWidth: "none", 
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex-shrink-0 w-[340px] snap-start"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg shadow-gray-900/8 cursor-pointer"
              >
                {/* Image */}
                <div className={`relative h-[190px] rounded-xl overflow-hidden m-2.5 ${gradients[feature.id - 1] || gradients[0]}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl opacity-40">{featureIcons[feature.id - 1] || '✦'}</span>
                  </div>
                  <span className="absolute top-3 left-3 text-5xl font-black text-white/20 leading-none">0{feature.id}</span>
                </div>

                {/* Content */}
                <div className="p-5 pt-3">
                  <h3 className="text-lg font-bold text-gray-950 mb-1.5 hover:text-gray-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
