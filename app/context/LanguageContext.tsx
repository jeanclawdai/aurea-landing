"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "pt";

const translations = {
  en: {
    nav: { features: "Features", howItWorks: "How it Works", pricing: "Pricing", contact: "Contact", cta: "Login" },
    hero: {
      headline1: "Predict What Works",
      headline2: "Before You Post.",
      subtitle: "Powered by the world's best AI. Trained on your niche. Outperforming every human creative team.",
      cta1: "Get Started",
      cta2: "See How It Works →",
      stat1Label: "Avg Follower Growth",
      stat2Label: "Posts Analyzed",
      stat3Label: "Faster Creation",
    },
    features: {
      eyebrow: "WHAT WE DO",
      headline: "Viral Science. Not Generic AI.",
      subtitle: "We don't generate generic AI content. We analyze what actually works in your market and build a custom strategy around your brand.",
    },
    beforeAfter: {
      eyebrow: "REAL RESULTS",
      headline: "The Aurea Effect",
      subtitle: "See what happens when AI takes over your content strategy.",
      before: "Before Aurea",
      after: "After Aurea",
      dragLabel: "Drag to compare",
    },
    howItWorks: {
      eyebrow: "HOW IT WORKS",
      headline: "From Creator to Creative Director",
      subtitle: "Stop doing it all yourself. Let AI handle strategy, production, and optimization while you focus on patients.",
    },
    pricing: {
      eyebrow: "PRICING",
      headline: "Simple, Transparent Pricing",
    },
    contact: {
      eyebrow: "CONTACT",
      headline: "Get in Touch",
    },
  },
  pt: {
    nav: { features: "Funcionalidades", howItWorks: "Como Funciona", pricing: "Preços", contact: "Contacto", cta: "Entrar" },
    hero: {
      headline1: "Preveja o Que Resulta",
      headline2: "Antes de Publicar.",
      subtitle: "Alimentado pela melhor IA do mundo. Treinado no teu nicho. A superar qualquer equipa criativa humana.",
      cta1: "Começar",
      cta2: "Ver Como Funciona →",
      stat1Label: "Crescimento Médio de Seguidores",
      stat2Label: "Publicações Analisadas",
      stat3Label: "Criação Mais Rápida",
    },
    features: {
      eyebrow: "O QUE FAZEMOS",
      headline: "Ciência Viral. Não IA Genérica.",
      subtitle: "Não geramos conteúdo genérico. Analisamos o que funciona no teu mercado e construímos uma estratégia à medida da tua marca.",
    },
    beforeAfter: {
      eyebrow: "RESULTADOS REAIS",
      headline: "O Efeito Aurea",
      subtitle: "Veja o que acontece quando a IA assume a sua estratégia de conteúdo.",
      before: "Antes da Aurea",
      after: "Depois da Aurea",
      dragLabel: "Arraste para comparar",
    },
    howItWorks: {
      eyebrow: "COMO FUNCIONA",
      headline: "De Criador a Diretor Criativo",
      subtitle: "Pare de fazer tudo sozinho. Deixe a IA tratar da estratégia, produção e otimização enquanto se foca nos seus pacientes.",
    },
    pricing: {
      eyebrow: "PREÇOS",
      headline: "Preços Simples e Transparentes",
    },
    contact: {
      eyebrow: "CONTACTO",
      headline: "Entre em Contacto",
    },
  },
};

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.en;
}>({ lang: "en", setLang: () => {}, t: translations.en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
export { translations };
