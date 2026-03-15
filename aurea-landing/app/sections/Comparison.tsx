"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import { SectionPill } from "@/components/ui/section-pill";
import { AnimatedArrowRight } from "@/components/ui/animated-arrow";

const comparisonDataEn = [
  {
    feature: "Monthly Cost",
    aurea: "$299 - $599",
    solo: "Your sanity + tools",
    agency: "$2,500 - $5,000+",
  },
  {
    feature: "Posts/Month",
    aurea: "30+ (daily+)",
    solo: "6-12 (when motivated)",
    agency: "12-16 (3-4/week)",
  },
  {
    feature: "Time Investment",
    aurea: "Few mins/day (seriously)",
    solo: "Full-time side hustle",
    agency: "Monthly meetings + approvals",
  },
  {
    feature: "Quality",
    aurea: "Built on proven patterns",
    solo: "Depends on your energy",
    agency: "Varies (expensive either way)",
  },
  {
    feature: "Time Per Post",
    aurea: "Minutes",
    solo: "3-5 hours",
    agency: "1-2 days",
  },
  {
    feature: "Authenticity",
    aurea: "100% you, scaled infinitely",
    solo: "100% you (when it hits)",
    agency: "Mix of you & them",
  },
  {
    feature: "Burnout Risk",
    aurea: "What burnout?",
    solo: "The reason you're here",
    agency: "They burn out, you burn $$",
  },
];

const comparisonDataPt = [
  {
    feature: "Custo Mensal",
    aurea: "$299 - $599",
    solo: "A tua sanidade + ferramentas",
    agency: "$2,500 - $5,000+",
  },
  {
    feature: "Posts/Mês",
    aurea: "30+ (diário+)",
    solo: "6-12 (quando motivado)",
    agency: "12-16 (3-4/semana)",
  },
  {
    feature: "Investimento de Tempo",
    aurea: "Poucos mins/dia (a sério)",
    solo: "Trabalho a tempo inteiro",
    agency: "Reuniões mensais + aprovações",
  },
  {
    feature: "Qualidade",
    aurea: "Baseado em padrões comprovados",
    solo: "Depende da tua energia",
    agency: "Varia (caro de qualquer forma)",
  },
  {
    feature: "Tempo Por Post",
    aurea: "Minutos",
    solo: "3-5 horas",
    agency: "1-2 dias",
  },
  {
    feature: "Autenticidade",
    aurea: "100% tu, escalado infinitamente",
    solo: "100% tu (quando acertas)",
    agency: "Mix de ti e deles",
  },
  {
    feature: "Risco de Burnout",
    aurea: "Que burnout?",
    solo: "A razão de estares aqui",
    agency: "Eles esgotam, tu pagas $$",
  },
];

function CrossIcon() {
  return (
    <svg className="w-5 h-5 text-red-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

export default function Comparison() {
  const { lang } = useLang();
  const comparisonData = lang === "pt" ? comparisonDataPt : comparisonDataEn;

  return (
    <section className="py-12 sm:py-20 px-3 sm:px-6 bg-white dark:bg-[#0a0a0f] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          {/* Section pill */}
          <SectionPill className="mb-6">{lang === "pt" ? "COMPARAÇÃO" : "COMPARISON"}</SectionPill>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-950 dark:text-white leading-tight mb-5">
            {lang === "pt" ? "Porquê " : "Why "}
            <span className="font-serif-italic font-normal">Aurea?</span>
          </h2>
          <p className="text-xl text-gray-400 dark:text-gray-500 max-w-xl mx-auto">
            {lang === "pt" 
              ? "Veja como a Aurea se compara a fazer sozinho ou contratar uma agência."
              : "See how Aurea stacks up against doing it yourself or hiring an agency."}
          </p>
        </div>

        {/* Comparison table - horizontal scroll on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-x-auto -mx-6 px-6 py-4"
        >
          <div className="min-w-[640px]">
            {/* Column headers */}
            <div className="grid grid-cols-4 mb-6 px-2">
              <div /> {/* Empty for feature column */}
              <div className="flex justify-center items-end">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Aurea Flow
                </span>
              </div>
              <div className="flex justify-center items-end">
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  Solo Grind
                </span>
              </div>
              <div className="flex justify-center items-end">
                <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                  {lang === "pt" ? "Agência Clássica" : "Classic Agency"}
                </span>
              </div>
            </div>

            {/* Table content */}
            <div
              className="bg-white dark:bg-[#111118] rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 p-1.5 sm:p-3"
              style={{
                boxShadow: "0 4px 40px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)"
              }}
            >
              <div className="grid grid-cols-4 relative">
            {/* Gray background for first column */}
            <div className="absolute top-0 bottom-0 left-0 w-1/4 bg-gray-100 dark:bg-white/5 rounded-2xl" />
            
            {/* Gradient background for Aurea column */}
            <div 
              className="absolute top-0 bottom-0 rounded-2xl"
              style={{
                left: "25%",
                width: "25%",
                background: "linear-gradient(180deg, rgba(168, 130, 255, 0) 0%, rgba(200, 150, 255, 0.06) 15%, rgba(180, 140, 255, 0.05) 50%, rgba(220, 170, 255, 0.06) 85%, rgba(168, 130, 255, 0) 100%)",
              }}
            />
            
            {/* Table rows */}
            {comparisonData.map((row, index) => (
              <React.Fragment key={row.feature}>
                {/* Feature cell */}
                <div className={`relative z-10 px-2.5 py-2.5 sm:px-5 sm:py-5 ${index !== comparisonData.length - 1 ? "border-b border-gray-200/50 dark:border-white/10" : ""}`}>
                  <span className="font-medium text-gray-900 dark:text-white">{row.feature}</span>
                </div>

                {/* Aurea cell */}
                <div className={`relative z-10 px-2.5 py-2.5 sm:px-5 sm:py-5 flex items-center gap-3 ${index !== comparisonData.length - 1 ? "border-b border-gray-100 dark:border-white/10" : ""}`}>
                  <AnimatedArrowRight className="w-5 h-5" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{row.aurea}</span>
                </div>

                {/* Solo cell */}
                <div className={`px-2.5 py-2.5 sm:px-5 sm:py-5 flex items-center gap-3 border-l border-gray-100 dark:border-white/10 ${index !== comparisonData.length - 1 ? "border-b border-gray-100 dark:border-white/10" : ""}`}>
                  <CrossIcon />
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{row.solo}</span>
                </div>

                {/* Agency cell */}
                <div className={`px-2.5 py-2.5 sm:px-5 sm:py-5 flex items-center gap-3 border-l border-gray-100 dark:border-white/10 ${index !== comparisonData.length - 1 ? "border-b border-gray-100 dark:border-white/10" : ""}`}>
                  <CrossIcon />
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{row.agency}</span>
                </div>
              </React.Fragment>
            ))}
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
