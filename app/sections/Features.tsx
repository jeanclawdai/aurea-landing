"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SectionPill } from "@/components/ui/section-pill";
import { useState, useRef, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import { Check, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

// Animated icons
import { BrainIcon, type BrainIconHandle } from "@/components/ui/brain";
import { SparklesIcon, type SparklesIconHandle } from "@/components/ui/sparkles";
import { CalendarDaysIcon, type CalendarDaysIconHandle } from "@/components/ui/calendar-days";
import { ChartScatterIcon, type ChartScatterIconHandle } from "@/components/ui/chart-scatter";
import { FrameIcon, type FrameIconHandle } from "@/components/ui/frame";
import { ScanTextIcon, type ScanTextIconHandle } from "@/components/ui/scan-text";
import { ClapIcon, type ClapIconHandle } from "@/components/ui/clap";

// ─── Feature definitions ────────────────────────────────────────────────────

const featuresEn = [
  {
    id: "pattern",
    label: "Pattern Intelligence",
    comingSoon: false,
    headline: "Know what goes viral before you post",
    description: "Our core engine is trained on 10,000+ viral posts across aesthetic clinics and beauty brands. It extracts the exact hooks, pacing, caption structures, and CTAs that make content explode — so every post you publish is built on data, not guesswork.",
    stats: [
      { value: "10K+", label: "Posts analyzed" },
      { value: "94%", label: "Hook accuracy" },
      { value: "3.2×", label: "Avg reach boost" },
    ],
    bento: "pattern",
  },
  {
    id: "content",
    label: "Auto Content Generation",
    comingSoon: false,
    headline: "From idea to published post in minutes",
    description: "Generate static posts, carousels, and Reels scripts automatically. Every piece is fully editable via our Canva integration — tweak fonts, colors, and layouts with full creative control. Approve, edit, or reject. You stay the creative director.",
    stats: [
      { value: "30+", label: "Posts/month" },
      { value: "100%", label: "Editable" },
      { value: "5min", label: "Avg creation time" },
    ],
    bento: "content",
  },
  {
    id: "scheduling",
    label: "Smart Scheduling",
    comingSoon: false,
    headline: "Post at the perfect moment, every time",
    description: "AI predicts the best days and times to post based on your audience's behaviour patterns. One click schedules and publishes simultaneously across Instagram, TikTok, and YouTube — with platform-optimised formats and metadata handled automatically.",
    stats: [
      { value: "3×", label: "Platforms at once" },
      { value: "AI", label: "Time prediction" },
      { value: "0", label: "Manual effort" },
    ],
    bento: "scheduling",
  },
  {
    id: "analytics",
    label: "Analytics & Insights",
    comingSoon: false,
    headline: "See what works. Double down on it",
    description: "Track reach, engagement, follower growth, and booking conversions across all platforms from one dashboard. Aurea learns from your top-performing posts and automatically feeds those patterns back into future content — a self-improving content loop.",
    stats: [
      { value: "All", label: "Platforms unified" },
      { value: "Live", label: "Data feed" },
      { value: "↑", label: "Self-improving AI" },
    ],
    bento: "analytics",
  },
  {
    id: "brand",
    label: "Brand Kit",
    comingSoon: false,
    headline: "Always on-brand. Zero effort",
    description: "Upload your logo, fonts, and brand colors once. Every piece of content Aurea generates — forever — is automatically styled to your brand. No more off-brand posts, no more manual formatting. Your identity, baked in at the foundation.",
    stats: [
      { value: "1×", label: "Setup" },
      { value: "∞", label: "On-brand posts" },
      { value: "0", label: "Rework needed" },
    ],
    bento: "brand",
  },
  {
    id: "caption",
    label: "Caption & Hashtags",
    comingSoon: false,
    headline: "Captions that sound like you",
    description: "Aurea writes captions in your unique brand voice — not generic AI copy. Each caption is paired with a data-driven hashtag set optimised per platform and niche, updated daily based on what's trending in aesthetic medicine right now.",
    stats: [
      { value: "Your", label: "Brand voice" },
      { value: "Daily", label: "Hashtag updates" },
      { value: "3×", label: "Platforms optimised" },
    ],
    bento: "caption",
  },
  {
    id: "voice",
    label: "Voice & Video AI",
    comingSoon: true,
    headline: "Your voice. Your face. Zero filming",
    description: "Coming soon: Clone your voice with a 5-minute recording. Generate talking-head videos with your likeness using AI. Publish Reels and TikToks featuring you — without ever picking up a camera. The future of personal brand content.",
    stats: [
      { value: "5min", label: "Voice clone setup" },
      { value: "AI", label: "Video generation" },
      { value: "Soon", label: "Launching 2026" },
    ],
    bento: "voice",
  },
];

const featuresPt = [
  {
    id: "pattern",
    label: "Inteligência de Padrões",
    comingSoon: false,
    headline: "Sabe o que fica viral antes de publicar",
    description: "O motor central da Aurea é treinado em mais de 10.000 publicações virais de clínicas estéticas e marcas de beleza. Extrai os hooks exactos, ritmos, estruturas de legenda e CTAs que fazem o conteúdo explodir.",
    stats: [
      { value: "10K+", label: "Posts analisados" },
      { value: "94%", label: "Precisão de hooks" },
      { value: "3.2×", label: "Aumento de alcance" },
    ],
    bento: "pattern",
  },
  {
    id: "content",
    label: "Geração de Conteúdo",
    comingSoon: false,
    headline: "De ideia a post publicado em minutos",
    description: "Gera posts estáticos, carrosséis e scripts de Reels automaticamente. Cada peça é totalmente editável via integração Canva — ajusta fontes, cores e layouts com controlo criativo total.",
    stats: [
      { value: "30+", label: "Posts/mês" },
      { value: "100%", label: "Editável" },
      { value: "5min", label: "Tempo de criação" },
    ],
    bento: "content",
  },
  {
    id: "scheduling",
    label: "Agendamento Inteligente",
    comingSoon: false,
    headline: "Publica no momento perfeito, sempre",
    description: "A IA prevê os melhores dias e horas para publicar com base nos padrões de comportamento da tua audiência. Um clique agenda e publica simultaneamente no Instagram, TikTok e YouTube.",
    stats: [
      { value: "3×", label: "Plataformas" },
      { value: "IA", label: "Previsão de horário" },
      { value: "0", label: "Esforço manual" },
    ],
    bento: "scheduling",
  },
  {
    id: "analytics",
    label: "Analytics & Insights",
    comingSoon: false,
    headline: "Vê o que funciona. Aposta nisso",
    description: "Acompanha alcance, engagement, crescimento de seguidores e conversões de reservas em todas as plataformas num único dashboard. A Aurea aprende com os teus melhores posts.",
    stats: [
      { value: "Tudo", label: "Plataformas unificadas" },
      { value: "Live", label: "Feed de dados" },
      { value: "↑", label: "IA auto-melhorável" },
    ],
    bento: "analytics",
  },
  {
    id: "brand",
    label: "Brand Kit",
    comingSoon: false,
    headline: "Sempre na identidade da marca",
    description: "Faz upload do teu logotipo, fontes e cores uma vez. Todo o conteúdo que a Aurea gerar — para sempre — será automaticamente estilizado com a tua marca.",
    stats: [
      { value: "1×", label: "Configuração" },
      { value: "∞", label: "Posts on-brand" },
      { value: "0", label: "Retrabalho" },
    ],
    bento: "brand",
  },
  {
    id: "caption",
    label: "Legendas & Hashtags",
    comingSoon: false,
    headline: "Legendas que soam a ti",
    description: "A Aurea escreve legendas na tua voz de marca única — não copy genérico de IA. Cada legenda é acompanhada de hashtags baseados em dados, optimizados por plataforma e nicho.",
    stats: [
      { value: "A tua", label: "Voz de marca" },
      { value: "Diário", label: "Actualização" },
      { value: "3×", label: "Plataformas" },
    ],
    bento: "caption",
  },
  {
    id: "voice",
    label: "Voz & Vídeo IA",
    comingSoon: true,
    headline: "A tua voz. A tua cara. Sem filmar",
    description: "Em breve: clona a tua voz com uma gravação de 5 minutos. Gera vídeos talking-head com a tua aparência usando IA. Publica Reels e TikToks com a tua presença — sem câmara.",
    stats: [
      { value: "5min", label: "Clone de voz" },
      { value: "IA", label: "Geração de vídeo" },
      { value: "Breve", label: "2026" },
    ],
    bento: "voice",
  },
];

// ─── Icon map ────────────────────────────────────────────────────────────────

interface IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconComponents: Record<string, React.ComponentType<any>> = {
  pattern: BrainIcon,
  content: SparklesIcon,
  scheduling: CalendarDaysIcon,
  analytics: ChartScatterIcon,
  brand: FrameIcon,
  caption: ScanTextIcon,
  voice: ClapIcon,
};

// ─── TikTok Icon ─────────────────────────────────────────────────────────────

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
    </svg>
  );
}

// ─── Animated Counter ────────────────────────────────────────────────────────

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 1500;
    const steps = 30;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return <span>{count}{suffix}</span>;
}

// ─── Typewriter Effect ───────────────────────────────────────────────────────

function TypewriterText({ text, className }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    let index = 0;
    setDisplayText("");
    setIsTyping(true);
    
    const typeTimer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeTimer);
        // Restart after pause
        setTimeout(() => {
          index = 0;
          setDisplayText("");
          setIsTyping(true);
        }, 3000);
      }
    }, 40);
    
    return () => clearInterval(typeTimer);
  }, [text]);
  
  return (
    <span className={className}>
      {displayText}
      {isTyping && <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />}
    </span>
  );
}

// ─── Bento Visuals ───────────────────────────────────────────────────────────

function BentoPattern() {
  const hooks = [
    { text: "5 signs your skin needs hydration", score: "8.7%" },
    { text: "POV: You found the right clinic", score: "6.2%" },
    { text: "Before & after 30 days", score: "11.3%" },
  ];
  
  // Deterministic heatmap values
  const heatmapValues = [0.9, 0.3, 0.7, 0.5, 0.8, 0.2, 0.6, 0.4, 0.85, 0.1, 0.75, 0.55, 0.95, 0.35, 0.65, 0.45, 0.8, 0.25, 0.7, 0.5, 0.9, 0.15, 0.6, 0.4, 0.85, 0.3, 0.75, 0.55, 0.92, 0.2, 0.68, 0.48, 0.88, 0.28, 0.72];
  
  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {/* Main heatmap card */}
      <div className="col-span-2 row-span-2 bg-white rounded-2xl p-5 shadow-md border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-gray-900">Viral Score Heatmap</span>
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">Live</span>
        </div>
        <div className="grid grid-cols-7 gap-1.5 mb-4">
          {heatmapValues.map((intensity, i) => {
            const bg = intensity > 0.75 ? "bg-primary" : intensity > 0.5 ? "bg-primary/60" : intensity > 0.25 ? "bg-primary/30" : "bg-gray-100";
            return (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
                className={`h-5 rounded-md ${bg}`}
              />
            );
          })}
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-primary" />High</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-primary/60" />Medium</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-gray-100" />Low</span>
        </div>
      </div>

      {/* Stat card 1 - Niches */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-4 shadow-md border border-primary/20 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-primary uppercase tracking-wide">Niches</span>
        <div>
          <span className="text-2xl font-bold text-gray-900"><AnimatedCounter value={47} /></span>
          <p className="text-xs text-gray-500">industries covered</p>
        </div>
      </motion.div>

      {/* Stat card 2 - Accuracy */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-4 shadow-md border border-purple-100 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-purple-600 uppercase tracking-wide">Accuracy</span>
        <div>
          <span className="text-2xl font-bold text-purple-700"><AnimatedCounter value={94} suffix="%" /></span>
          <p className="text-xs text-purple-500">hook detection</p>
        </div>
      </motion.div>

      {/* Top hooks */}
      <div className="col-span-3 bg-white rounded-2xl p-5 shadow-md border border-gray-100">
        <span className="text-sm font-semibold text-gray-900 block mb-3">Top Performing Hooks</span>
        <div className="space-y-2.5">
          {hooks.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center justify-between"
            >
              <span className="text-sm text-gray-600 truncate flex-1">{h.text}</span>
              <span className="text-sm font-semibold text-primary ml-3">{h.score}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BentoContent() {
  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {/* Editor mockup */}
      <div className="col-span-2 row-span-2 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-100 px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-xs text-gray-500 mx-auto font-medium">Aurea × Canva Editor</span>
        </div>
        <div className="p-4 flex gap-4">
          <div className="flex flex-col gap-2 w-24 flex-shrink-0">
            {["Media", "Text", "Brand", "Layout"].map((item, i) => (
              <div key={i} className={`text-xs py-2 px-3 rounded-lg transition-colors ${i === 2 ? "bg-primary/10 text-primary font-semibold" : "text-gray-500 hover:bg-gray-50"}`}>
                {item}
              </div>
            ))}
          </div>
          <div className="flex-1 bg-gradient-to-br from-primary/10 via-purple-50 to-violet-100 rounded-xl flex items-center justify-center min-h-[180px]">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-white/80 shadow-sm flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">✦</span>
              </div>
              <div className="text-sm font-bold text-gray-800">Your Brand</div>
              <div className="text-xs text-gray-500">Visual here</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats - updated colors */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-primary/5 to-primary/15 rounded-2xl p-4 shadow-sm border border-primary/20 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-primary uppercase tracking-wide">Generated</span>
        <div>
          <span className="text-2xl font-bold text-gray-900">30+</span>
          <p className="text-xs text-gray-500">posts/month</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-4 shadow-sm border border-purple-200 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-purple-600 uppercase tracking-wide">Control</span>
        <div>
          <span className="text-2xl font-bold text-purple-700">100%</span>
          <p className="text-xs text-purple-500">editable</p>
        </div>
      </motion.div>

      {/* Feature badge */}
      <div className="col-span-3 bg-gradient-to-r from-primary/5 to-violet-50 rounded-2xl p-4 shadow-sm border border-primary/20 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">Full Canva Integration</p>
          <p className="text-xs text-gray-500">Edit any generated content with your existing tools</p>
        </div>
        <Check className="w-5 h-5 text-primary" />
      </div>
    </div>
  );
}

function BentoScheduling() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const posts = [
    { day: "Mon", time: "09:00", platform: "ig", title: "Before/After Reel", ai: true },
    { day: "Tue", time: "18:00", platform: "tt", title: "Hook Series #4", ai: true },
    { day: "Wed", time: "12:00", platform: "yt", title: "Treatment Guide", ai: false },
    { day: "Thu", time: "09:00", platform: "ig", title: "Client Story", ai: true },
    { day: "Fri", time: "17:00", platform: "tt", title: "POV Content", ai: true },
  ];

  const platformIcons: Record<string, React.ReactNode> = {
    ig: <Instagram className="w-4 h-4" />,
    tt: <TikTokIcon className="w-4 h-4" />,
    yt: <Youtube className="w-4 h-4" />,
  };
  
  const platformColors: Record<string, string> = {
    ig: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    tt: "bg-gray-900 text-white",
    yt: "bg-red-500 text-white",
  };

  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {/* Calendar card */}
      <div className="col-span-2 row-span-2 bg-white rounded-2xl p-5 shadow-md border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-gray-900">This Week</span>
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">AI Optimised</span>
        </div>
        
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-2 mb-3">
          {days.map((d, i) => (
            <div key={i} className={`text-center text-xs font-medium py-1.5 rounded-lg ${[0, 3].includes(i) ? "bg-primary/10 text-primary" : "text-gray-400"}`}>
              {d}
            </div>
          ))}
        </div>

        {/* Posts list - animated rows */}
        <div className="space-y-2">
          {posts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: i * 0.15,
                duration: 0.4,
                repeat: Infinity,
                repeatDelay: 5,
              }}
              className="flex items-center gap-3 py-2 px-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <span className="text-xs text-gray-400 w-10">{p.time}</span>
              <span className={`p-1.5 rounded-lg ${platformColors[p.platform]}`}>
                {platformIcons[p.platform]}
              </span>
              <span className="text-sm text-gray-700 flex-1">{p.title}</span>
              {p.ai && <span className="text-xs text-primary font-medium">✦ AI</span>}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats - updated colors */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-primary/5 to-primary/15 rounded-2xl p-4 shadow-md border border-primary/20 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-primary uppercase tracking-wide">Platforms</span>
        <div>
          <span className="text-2xl font-bold text-gray-900">3</span>
          <p className="text-xs text-gray-500">simultaneous</p>
        </div>
      </motion.div>

      {/* Effort card - animated grow/rotate */}
      <motion.div
        animate={{ 
          scale: [1, 1.02, 1],
          rotate: [0, 1, 0, -1, 0],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-4 shadow-md border border-purple-200 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-purple-600 uppercase tracking-wide">Effort</span>
        <div>
          <span className="text-2xl font-bold text-purple-700">Zero</span>
          <p className="text-xs text-purple-500">manual work</p>
        </div>
      </motion.div>

      {/* One-click badge */}
      <div className="col-span-3 bg-gradient-to-r from-primary/5 to-violet-50 rounded-2xl p-4 shadow-sm border border-primary/20 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">One-Click Multi-Platform Publish</p>
          <p className="text-xs text-gray-500">IG, TikTok & YouTube in a single action</p>
        </div>
        <Check className="w-5 h-5 text-primary" />
      </div>
    </div>
  );
}

function BentoAnalytics() {
  const weeks = [22, 31, 28, 45, 38, 67, 89, 72, 95, 88, 102, 118];
  const max = Math.max(...weeks);
  const [animationKey, setAnimationKey] = useState(0);

  // Restart animation periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {/* Growth chart - updated colors */}
      <div className="col-span-2 row-span-2 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-5 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-white">Follower Growth</span>
          <span className="text-sm font-bold text-primary">+847%</span>
        </div>
        <div className="flex items-end gap-1.5 h-24 mb-3">
          {weeks.map((v, i) => (
            <motion.div
              key={`${animationKey}-${i}`}
              initial={{ height: 0 }}
              animate={{ height: `${(v / max) * 100}%` }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`flex-1 rounded-sm ${i === weeks.length - 1 ? "bg-primary" : "bg-primary/30"}`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-white/40">
          <span>Jan</span><span>Jun</span><span>Now</span>
        </div>
      </div>

      {/* Metric cards - updated colors */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-primary/5 to-primary/15 rounded-2xl p-4 shadow-sm border border-primary/20 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-primary uppercase tracking-wide">Engagement</span>
        <span className="text-2xl font-bold text-gray-900"><AnimatedCounter value={8} suffix=".7%" /></span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-4 shadow-sm border border-purple-200 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-purple-600 uppercase tracking-wide">Views/Day</span>
        <span className="text-2xl font-bold text-purple-700">47K</span>
      </motion.div>

      {/* Self-improving badge */}
      <div className="col-span-3 bg-gradient-to-r from-primary/5 to-violet-50 rounded-2xl p-4 shadow-sm border border-primary/20 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">Self-Improving AI</p>
          <p className="text-xs text-gray-500">Learns from your top posts automatically</p>
        </div>
        <Check className="w-5 h-5 text-primary" />
      </div>
    </div>
  );
}

function BentoBrand() {
  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {/* Brand preview */}
      <div className="col-span-2 row-span-2 bg-white rounded-2xl p-5 shadow-md border border-gray-100">
        <span className="text-sm font-semibold text-gray-900 block mb-4">Brand Kit Preview</span>
        
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center text-white font-bold text-xl shadow-md">A</div>
          <div>
            <p className="font-semibold text-gray-900">Clínica Aurora</p>
            <p className="text-xs text-primary font-medium">Brand identity loaded ✓</p>
          </div>
        </div>

        {/* Colors */}
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Colors</p>
        <div className="flex gap-2 mb-5">
          {["#6FA8FF","#A8B8FF","#D4A8FF","#1A2A4A","#FFFFFF"].map((c, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="w-9 h-9 rounded-xl border border-gray-100 shadow-sm"
              style={{ background: c }}
            />
          ))}
        </div>

        {/* Fonts */}
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Typography</p>
        <div className="flex gap-2">
          <span className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-700 font-medium">Inter</span>
          <span className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm text-gray-700 italic" style={{ fontFamily: "serif" }}>Playfair</span>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/15 rounded-2xl p-4 shadow-md border border-primary/20 flex flex-col justify-between">
        <span className="text-xs font-medium text-primary uppercase tracking-wide">Setup</span>
        <div>
          <span className="text-2xl font-bold text-gray-900">1×</span>
          <p className="text-xs text-gray-500">one time</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-4 shadow-md border border-purple-200 flex flex-col justify-between">
        <span className="text-xs font-medium text-purple-600 uppercase tracking-wide">Result</span>
        <div>
          <span className="text-2xl font-bold text-purple-700">∞</span>
          <p className="text-xs text-purple-500">on-brand posts</p>
        </div>
      </div>

      {/* Badge with AI Brand Creator mention */}
      <div className="col-span-3 bg-gradient-to-r from-primary/5 to-violet-50 rounded-2xl p-4 shadow-sm border border-primary/20 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">AI Brand Kit Creator Coming Soon</p>
          <p className="text-xs text-gray-500">Auto-generate your brand identity with AI</p>
        </div>
        <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full font-semibold">Soon</span>
      </div>
    </div>
  );
}

function BentoCaption() {
  const captionText = "Your skin tells a story of resilience. After years of searching, you finally found the right care. This is what transformation looks like when science meets artistry.";
  
  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {/* Caption preview */}
      <div className="col-span-2 row-span-2 bg-white rounded-2xl p-5 shadow-md border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-semibold text-gray-900">Generated Caption</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Your voice</span>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-4 min-h-[80px]">
          <TypewriterText text={captionText} />
        </p>

        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Optimised Hashtags</p>
        <div className="flex flex-wrap gap-1.5">
          {["#esteticaavancada", "#peleperfeita", "#tratamentofacial", "#clinicapremium", "#resultadosreais"].map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Stats - updated colors */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-primary/5 to-primary/15 rounded-2xl p-4 shadow-sm border border-primary/20 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-primary uppercase tracking-wide">Updated</span>
        <div>
          <span className="text-2xl font-bold text-gray-900">Daily</span>
          <p className="text-xs text-gray-500">hashtags</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-4 shadow-sm border border-purple-200 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-purple-600 uppercase tracking-wide">Platforms</span>
        <div>
          <span className="text-2xl font-bold text-purple-700">3×</span>
          <p className="text-xs text-purple-500">optimised</p>
        </div>
      </motion.div>

      {/* Badge */}
      <div className="col-span-3 bg-gradient-to-r from-primary/5 to-violet-50 rounded-2xl p-4 shadow-sm border border-primary/20 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">Brand Voice Matching</p>
          <p className="text-xs text-gray-500">Captions that sound authentically you</p>
        </div>
        <Check className="w-5 h-5 text-primary" />
      </div>
    </div>
  );
}

function BentoVoice() {
  return (
    <div className="grid grid-cols-3 gap-4 h-full opacity-90">
      {/* Voice waveform */}
      <div className="col-span-2 row-span-2 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-5 shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-violet-900/30" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-white">Voice Synthesis</span>
            <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-full font-medium border border-white/20">Coming Soon</span>
          </div>
          
          {/* Waveform */}
          <div className="flex items-center gap-0.5 h-20 mb-4">
            {Array.from({length: 50}).map((_, i) => {
              const h = Math.sin(i * 0.4) * 50 + 50;
              return (
                <motion.div
                  key={i}
                  animate={{ height: [`${h}%`, `${100 - h}%`, `${h}%`] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.05 }}
                  className="flex-1 rounded-full bg-primary/60"
                />
              );
            })}
          </div>
          
          <p className="text-white/60 text-sm">5-minute recording → unlimited content in your voice</p>
        </div>
      </div>

      {/* Stats - matching brand colors */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/15 rounded-2xl p-4 shadow-sm border border-primary/20 flex flex-col justify-between">
        <span className="text-xs font-medium text-primary uppercase tracking-wide">Setup</span>
        <div>
          <span className="text-2xl font-bold text-gray-900">5min</span>
          <p className="text-xs text-gray-500">recording</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-violet-50 to-purple-100 rounded-2xl p-4 shadow-sm border border-purple-200 flex flex-col justify-between">
        <span className="text-xs font-medium text-purple-600 uppercase tracking-wide">Launch</span>
        <div>
          <span className="text-2xl font-bold text-purple-700">2026</span>
          <p className="text-xs text-purple-500">coming soon</p>
        </div>
      </div>

      {/* Badge - cleaner coming soon */}
      <div className="col-span-3 bg-gradient-to-r from-primary/5 to-violet-50 rounded-2xl p-4 shadow-sm border border-primary/20 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900">AI Video Generation</p>
          <p className="text-xs text-gray-500">Your face, your voice — zero filming required</p>
        </div>
        <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full font-medium border border-gray-200">Soon</span>
      </div>
    </div>
  );
}

const bentoMap: Record<string, React.ReactNode> = {
  pattern: <BentoPattern />,
  content: <BentoContent />,
  scheduling: <BentoScheduling />,
  analytics: <BentoAnalytics />,
  brand: <BentoBrand />,
  caption: <BentoCaption />,
  voice: <BentoVoice />,
};

// ─── Main Component ──────────────────────────────────────────────────────────

export default function Features() {
  const { lang } = useLang();
  const features = lang === "pt" ? featuresPt : featuresEn;
  const [active, setActive] = useState(features[0].id);
  const activeFeature = features.find(f => f.id === active)!;

  // Icon refs for controlled animations (pills)
  const iconRefs = useRef<Record<string, IconHandle | null>>({});
  // Icon ref for the detail panel title
  const titleIconRef = useRef<IconHandle | null>(null);

  // Animate active icon on change
  useEffect(() => {
    Object.entries(iconRefs.current).forEach(([id, ref]) => {
      if (ref) {
        if (id === active) {
          ref.startAnimation();
        } else {
          ref.stopAnimation();
        }
      }
    });
    // Start title icon animation
    if (titleIconRef.current) {
      titleIconRef.current.startAnimation();
    }
  }, [active]);

  return (
    <section id="features" className="py-24 px-6 overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
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

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {features.map((f) => {
            const isActive = active === f.id;
            const IconComponent = iconComponents[f.id];
            
            return (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`
                  relative inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${isActive
                    ? "bg-pink-50 border-2 border-pink-300 text-gray-900 shadow-lg shadow-pink-100/50"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-transparent hover:shadow-md"
                  }
                `}
                onMouseEnter={() => {
                  if (!isActive && iconRefs.current[f.id]) {
                    iconRefs.current[f.id]?.startAnimation();
                  }
                }}
                onMouseLeave={() => {
                  if (!isActive && iconRefs.current[f.id]) {
                    iconRefs.current[f.id]?.stopAnimation();
                  }
                }}
              >
                {/* Iridescent hover glow - only on non-active */}
                {!isActive && (
                  <span className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none pill-glow-hover" />
                )}
                
                {/* Checkmark for active */}
                {isActive && (
                  <Check className="w-4 h-4 text-pink-500 flex-shrink-0" />
                )}
                
                {/* Icon */}
                {IconComponent && (
                  <IconComponent
                    ref={(el: IconHandle | null) => { iconRefs.current[f.id] = el; }}
                    size={18}
                    className={isActive ? "text-pink-500" : "text-gray-500"}
                  />
                )}
                
                <span>{f.label}</span>
                
                {f.comingSoon && (
                  <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full font-medium border border-gray-200">Soon</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
          >
            {/* Left: copy */}
            <div className="flex flex-col gap-6">
              <div>
                {(() => {
                  const TitleIcon = iconComponents[activeFeature.id];
                  return TitleIcon ? (
                    <TitleIcon
                      ref={(el: IconHandle | null) => { titleIconRef.current = el; }}
                      size={36}
                      className="text-gray-900 mb-4"
                    />
                  ) : null;
                })()}
                {activeFeature.comingSoon && (
                  <span className="inline-block text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full font-medium border border-gray-200 mb-3">Coming Soon</span>
                )}
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-950 leading-tight mb-4">
                  {activeFeature.headline}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {activeFeature.description}
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {activeFeature.stats.map((s, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
                    <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: bento visual */}
            <div className="min-h-[400px]">
              {bentoMap[activeFeature.bento]}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
