"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "pt";

const translations = {
  en: {
    nav: { features: "Features", howItWorks: "How it Works", pricing: "Pricing", contact: "Contact", cta: "Get Started" },
    hero: {
      headline1: "Predict What Works",
      headline2: "Before You Post.",
      subtitle: "A pattern intelligence system trained on 10,000+ top-performing posts from top creators.",
      cta1: "Start Free Trial",
      cta2: "Analyze Profile →",
      stat1Label: "Avg Follower Growth",
      stat2Label: "Posts Analyzed",
      stat3Label: "Faster Creation",
    },
    features: {
      eyebrow: "WHAT WE DO",
      headline: "Viral Science. Not Generic AI.",
      subtitle: "We analyze what actually goes viral in aesthetic medicine — and give your clinic the same unfair advantage.",
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
    nav: { features: "Funcionalidades", howItWorks: "Como Funciona", pricing: "Preços", contact: "Contacto", cta: "Começar Grátis" },
    hero: {
      headline1: "Preveja o Que Resulta",
      headline2: "Antes de Publicar.",
      subtitle: "Um sistema de inteligência de padrões treinado em mais de 10.000 publicações de topo de criadores de sucesso.",
      cta1: "Começar Grátis",
      cta2: "Analisar Perfil →",
      stat1Label: "Crescimento Médio de Seguidores",
      stat2Label: "Publicações Analisadas",
      stat3Label: "Criação Mais Rápida",
    },
    features: {
      eyebrow: "O QUE FAZEMOS",
      headline: "Ciência Viral. Não IA Genérica.",
      subtitle: "Analisamos o que realmente se torna viral na medicina estética — e damos à sua clínica a mesma vantagem.",
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
