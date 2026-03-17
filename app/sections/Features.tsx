"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SectionPill } from "@/components/ui/section-pill";
import { useState, useRef, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import { Check, Instagram, Youtube, ChevronDown } from "lucide-react";


// Animated icons
import { BrainIcon } from "@/components/ui/brain";
import { SparklesIcon } from "@/components/ui/sparkles";
import { CalendarDaysIcon } from "@/components/ui/calendar-days";
import { ChartScatterIcon } from "@/components/ui/chart-scatter";
import { FrameIcon } from "@/components/ui/frame";
import { ScanTextIcon } from "@/components/ui/scan-text";
import { ClapIcon } from "@/components/ui/clap";

// ─── Feature definitions ────────────────────────────────────────────────────

const featuresEn = [
  {
    id: "pattern",
    label: "Pattern Intelligence",
    comingSoon: false,
    headline: "Know what goes viral before you post",
    description: "Our core engine is trained on 10,000+ viral posts across aesthetic clinics and beauty brands. It extracts the exact hooks, pacing, caption structures, and CTAs that make content explode — so every post you publish is built on data, not guesswork.",
    badge: { title: "10,000+ Viral Posts Analyzed", subtitle: "Hooks, pacing & CTAs extracted from top performers" },
    benefits: [
      { icon: "🎯", label: "10K+ viral posts" },
      { icon: "🧠", label: "47 niches covered" },
      { icon: "📈", label: "94% accuracy" },
    ],
    bento: "pattern",
  },
  {
    id: "content",
    label: "Auto Content Generation",
    comingSoon: false,
    headline: "From idea to published post in minutes",
    description: "Generate static posts, carousels, and Reels scripts automatically. Every piece is fully editable via our Canva integration — tweak fonts, colors, and layouts with full creative control. Approve, edit, or reject. You stay the creative director.",
    badge: { title: "Posts, Carousels & Reels Scripts", subtitle: "30+ pieces/month, fully editable in Canva" },
    benefits: [
      { icon: "⚡", label: "30+ posts/month" },
      { icon: "✏️", label: "Fully editable" },
      { icon: "🎨", label: "Canva integration" },
    ],
    bento: "content",
  },
  {
    id: "scheduling",
    label: "Smart Scheduling",
    comingSoon: false,
    headline: "Post at the perfect moment, every time",
    description: "AI predicts the best days and times to post based on your audience's behaviour patterns. One click schedules and publishes simultaneously across Instagram, TikTok, and YouTube — with platform-optimised formats and metadata handled automatically.",
    badge: { title: "AI-Optimized Timing", subtitle: "Posts when your audience is most active" },
    benefits: [
      { icon: "🤖", label: "AI-optimized timing" },
      { icon: "📱", label: "3 platforms" },
      { icon: "⚡", label: "1-click publish" },
    ],
    bento: "scheduling",
  },
  {
    id: "analytics",
    label: "Analytics & Insights",
    comingSoon: false,
    headline: "See what works. Double down on it",
    description: "Track reach, engagement, follower growth, and booking conversions across all platforms from one dashboard. Aurea learns from your top-performing posts and automatically feeds those patterns back into future content — a self-improving content loop.",
    badge: { title: "Unified Dashboard", subtitle: "Reach, engagement & bookings across all platforms" },
    benefits: [
      { icon: "📊", label: "Unified dashboard" },
      { icon: "🔄", label: "Self-improving AI" },
      { icon: "📈", label: "Booking tracking" },
    ],
    bento: "analytics",
  },
  {
    id: "brand",
    label: "Brand Kit",
    comingSoon: false,
    headline: "Always on-brand. Zero effort",
    description: "Upload your logo, fonts, and brand colors once. Every piece of content Aurea generates — forever — is automatically styled to your brand. No more off-brand posts, no more manual formatting. Your identity, baked in at the foundation.",
    badge: { title: "Logo, Fonts & Colors", subtitle: "Upload once, applied forever — zero rework" },
    benefits: [
      { icon: "⚡", label: "5 min setup" },
      { icon: "∞", label: "Infinite posts" },
      { icon: "✨", label: "Always on-brand" },
    ],
    bento: "brand",
  },
  {
    id: "caption",
    label: "Caption & Hashtags",
    comingSoon: false,
    headline: "Captions that sound like you",
    description: "Aurea writes captions in your unique brand voice — not generic AI copy. Each caption is paired with a data-driven hashtag set optimised per platform and niche, updated daily based on what's trending in aesthetic medicine right now.",
    badge: { title: "Daily Trending Hashtags", subtitle: "Platform-optimized, niche-specific, auto-updated" },
    benefits: [
      { icon: "✍️", label: "Your brand voice" },
      { icon: "📅", label: "Daily updates" },
      { icon: "🎯", label: "Niche-optimized" },
    ],
    bento: "caption",
  },
  {
    id: "voice",
    label: "Voice & Video AI",
    comingSoon: true,
    headline: "Your voice. Your face. Zero filming",
    description: "Coming soon: Clone your voice with a 5-minute recording. Generate talking-head videos with your likeness using AI. Publish Reels and TikToks featuring you — without ever picking up a camera. The future of personal brand content.",
    badge: { title: "5-Min Voice Clone", subtitle: "Generate talking-head videos with your likeness" , soon: true },
    benefits: [
      { icon: "🎙️", label: "5-min clone" },
      { icon: "🎬", label: "AI videos" },
      { icon: "📹", label: "Zero filming" },
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
    badge: { title: "10.000+ Posts Virais Analisados", subtitle: "Hooks, ritmo e CTAs extraídos dos melhores" },
    benefits: [
      { icon: "🎯", label: "10K+ posts virais" },
      { icon: "🧠", label: "47 nichos" },
      { icon: "📈", label: "94% precisão" },
    ],
    bento: "pattern",
  },
  {
    id: "content",
    label: "Geração de Conteúdo",
    comingSoon: false,
    headline: "De ideia a post publicado em minutos",
    description: "Gera posts estáticos, carrosséis e scripts de Reels automaticamente. Cada peça é totalmente editável via integração Canva — ajusta fontes, cores e layouts com controlo criativo total.",
    badge: { title: "Posts, Carrosséis & Scripts", subtitle: "30+ peças/mês, totalmente editáveis no Canva" },
    benefits: [
      { icon: "⚡", label: "30+ posts/mês" },
      { icon: "✏️", label: "Editável" },
      { icon: "🎨", label: "Integração Canva" },
    ],
    bento: "content",
  },
  {
    id: "scheduling",
    label: "Agendamento Inteligente",
    comingSoon: false,
    headline: "Publica no momento perfeito, sempre",
    description: "A IA prevê os melhores dias e horas para publicar com base nos padrões de comportamento da tua audiência. Um clique agenda e publica simultaneamente no Instagram, TikTok e YouTube.",
    badge: { title: "Timing Optimizado por IA", subtitle: "Publica quando a tua audiência está mais activa" },
    benefits: [
      { icon: "🤖", label: "Timing por IA" },
      { icon: "📱", label: "3 plataformas" },
      { icon: "⚡", label: "1 clique" },
    ],
    bento: "scheduling",
  },
  {
    id: "analytics",
    label: "Analytics & Insights",
    comingSoon: false,
    headline: "Vê o que funciona. Aposta nisso",
    description: "Acompanha alcance, engagement, crescimento de seguidores e conversões de reservas em todas as plataformas num único dashboard. A Aurea aprende com os teus melhores posts.",
    badge: { title: "Dashboard Unificado", subtitle: "Alcance, engagement e reservas em todas as plataformas" },
    benefits: [
      { icon: "📊", label: "Dashboard único" },
      { icon: "🔄", label: "IA auto-melhora" },
      { icon: "📈", label: "Track reservas" },
    ],
    bento: "analytics",
  },
  {
    id: "brand",
    label: "Brand Kit",
    comingSoon: false,
    headline: "Sempre na identidade da marca",
    description: "Faz upload do teu logotipo, fontes e cores uma vez. Todo o conteúdo que a Aurea gerar — para sempre — será automaticamente estilizado com a tua marca.",
    badge: { title: "Logo, Fontes & Cores", subtitle: "Carrega uma vez, aplicado para sempre" },
    benefits: [
      { icon: "⚡", label: "5 min setup" },
      { icon: "∞", label: "Posts infinitos" },
      { icon: "✨", label: "Sempre on-brand" },
    ],
    bento: "brand",
  },
  {
    id: "caption",
    label: "Legendas & Hashtags",
    comingSoon: false,
    headline: "Legendas que soam a ti",
    description: "A Aurea escreve legendas na tua voz de marca única — não copy genérico de IA. Cada legenda é acompanhada de hashtags baseados em dados, optimizados por plataforma e nicho.",
    badge: { title: "Hashtags Trending Diários", subtitle: "Optimizados por plataforma, actualizados automaticamente" },
    benefits: [
      { icon: "✍️", label: "Tua voz" },
      { icon: "📅", label: "Updates diários" },
      { icon: "🎯", label: "Nicho-optimizado" },
    ],
    bento: "caption",
  },
  {
    id: "voice",
    label: "Voz & Vídeo IA",
    comingSoon: true,
    headline: "A tua voz. A tua cara. Sem filmar",
    description: "Em breve: clona a tua voz com uma gravação de 5 minutos. Gera vídeos talking-head com a tua aparência usando IA. Publica Reels e TikToks com a tua presença — sem câmara.",
    badge: { title: "Clone de Voz em 5min", subtitle: "Gera vídeos talking-head com a tua aparência", soon: true },
    benefits: [
      { icon: "🎙️", label: "Clone 5min" },
      { icon: "🎬", label: "Vídeos IA" },
      { icon: "📹", label: "Sem câmara" },
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
  const [cycle, setCycle] = useState(0);
  
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
        // Restart after pause by triggering a new cycle
        setTimeout(() => {
          setCycle(c => c + 1);
        }, 3000);
      }
    }, 40);
    
    return () => clearInterval(typeTimer);
  }, [text, cycle]);
  
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
      <div className="col-span-2 row-span-2 bg-white dark:bg-[#1a1a28] rounded-2xl p-5 shadow-md border border-gray-100 dark:border-white/10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">Viral Score Heatmap</span>
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">Live</span>
        </div>
        <div className="grid grid-cols-7 gap-1.5 mb-4">
          {heatmapValues.map((intensity, i) => {
            const bg = intensity > 0.75 ? "bg-primary" : intensity > 0.5 ? "bg-primary/60" : intensity > 0.25 ? "bg-primary/30" : "bg-gray-100 dark:bg-white/10";
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
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-primary" />High</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-primary/60" />Medium</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-gray-100 dark:bg-white/10" />Low</span>
        </div>
      </div>

      {/* Stat card 1 - Niches */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-[#1a1a28] rounded-2xl p-4 shadow-md border border-gray-100 dark:border-white/10 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Niches</span>
        <div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white"><AnimatedCounter value={47} /></span>
          <p className="text-xs text-gray-500 dark:text-gray-400">industries covered</p>
        </div>
      </motion.div>

      {/* Stat card 2 - Accuracy */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-[#1a1a28] rounded-2xl p-4 shadow-md border border-gray-100 dark:border-white/10 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Accuracy</span>
        <div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white"><AnimatedCounter value={94} suffix="%" /></span>
          <p className="text-xs text-gray-500 dark:text-gray-400">hook detection</p>
        </div>
      </motion.div>

      {/* Top hooks */}
      <div className="col-span-3 bg-white dark:bg-[#1a1a28] rounded-2xl p-5 shadow-md border border-gray-100 dark:border-white/10">
        <span className="text-sm font-semibold text-gray-900 dark:text-white block mb-3">Top Performing Hooks</span>
        <div className="space-y-2.5">
          {hooks.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center justify-between"
            >
              <span className="text-sm text-gray-600 dark:text-gray-400 truncate flex-1">{h.text}</span>
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
      <div className="col-span-2 row-span-2 bg-white dark:bg-[#1a1a28] rounded-2xl shadow-md border border-gray-100 dark:border-white/10 overflow-hidden">
        <div className="bg-gray-50 dark:bg-[#111118] border-b border-gray-100 dark:border-white/10 px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 mx-auto font-medium">Aurea × Canva Editor</span>
        </div>
        <div className="p-4 flex gap-4">
          <div className="flex flex-col gap-2 w-24 flex-shrink-0">
            {["Media", "Text", "Brand", "Layout"].map((item, i) => (
              <div key={i} className={`text-xs py-2 px-3 rounded-lg transition-colors ${i === 2 ? "bg-primary/10 text-primary font-semibold" : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5"}`}>
                {item}
              </div>
            ))}
          </div>
          <div className="flex-1 bg-gradient-to-br from-primary/10 via-purple-50 to-rose-100 dark:from-primary/10 dark:via-purple-950/30 dark:to-rose-950/30 rounded-xl flex items-center justify-center min-h-[180px]">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-white/80 dark:bg-white/10 shadow-sm flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">✦</span>
              </div>
              <div className="text-sm font-bold text-gray-800 dark:text-gray-200">Your Brand</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Visual here</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-[#1a1a28] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/10 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Generated</span>
        <div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">30+</span>
          <p className="text-xs text-gray-500 dark:text-gray-400">posts/month</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-[#1a1a28] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/10 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Control</span>
        <div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">100%</span>
          <p className="text-xs text-gray-500 dark:text-gray-400">editable</p>
        </div>
      </motion.div>

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
      <div className="col-span-2 row-span-2 bg-white dark:bg-[#1a1a28] rounded-2xl p-5 shadow-md border border-gray-100 dark:border-white/10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">This Week</span>
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">AI Optimised</span>
        </div>
        
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-2 mb-3">
          {days.map((d, i) => (
            <div key={i} className={`text-center text-xs font-medium py-1.5 rounded-lg ${[0, 3].includes(i) ? "bg-primary/10 text-primary" : "text-gray-400 dark:text-gray-500"}`}>
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
              className="flex items-center gap-3 py-2 px-3 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <span className="text-xs text-gray-400 dark:text-gray-500 w-10">{p.time}</span>
              <span className={`p-1.5 rounded-lg ${platformColors[p.platform]}`}>
                {platformIcons[p.platform]}
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{p.title}</span>
              {p.ai && <span className="text-xs text-primary font-medium">✦ AI</span>}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-[#1a1a28] rounded-2xl p-4 shadow-md border border-gray-100 dark:border-white/10 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Platforms</span>
        <div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">3</span>
          <p className="text-xs text-gray-500 dark:text-gray-400">simultaneous</p>
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
        className="bg-white dark:bg-[#1a1a28] rounded-2xl p-4 shadow-md border border-gray-100 dark:border-white/10 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Effort</span>
        <div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">Zero</span>
          <p className="text-xs text-gray-500 dark:text-gray-400">manual work</p>
        </div>
      </motion.div>

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

      {/* Metric cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-[#1a1a28] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/10 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Engagement</span>
        <span className="text-2xl font-bold text-gray-900 dark:text-white"><AnimatedCounter value={8} suffix=".7%" /></span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-[#1a1a28] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/10 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Views/Day</span>
        <span className="text-2xl font-bold text-gray-900 dark:text-white">47K</span>
      </motion.div>

    </div>
  );
}

function BentoBrand() {
  const [step, setStep] = useState(0);
  
  // Auto-advance steps
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { num: 1, label: "Upload", desc: "Add your logo" },
    { num: 2, label: "Customize", desc: "Pick colors & fonts" },
    { num: 3, label: "Generate", desc: "Create layout variations" },
    { num: 4, label: "Apply", desc: "Brand kit saved" },
  ];

  return (
    <div className="bg-white dark:bg-[#1a1a28] rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-white/10 h-full flex flex-col">
      {/* Step indicators */}
      <div className="flex items-center justify-between mb-6">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center">
            <motion.div
              animate={{
                scale: step === i ? 1.1 : 1,
                backgroundColor: step >= i ? "#E879F9" : "#E5E7EB",
              }}
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
              style={{ color: step >= i ? "#fff" : "#9CA3AF" }}
            >
              {step > i ? <Check className="w-4 h-4" /> : s.num}
            </motion.div>
            {i < 3 && (
              <motion.div
                animate={{ backgroundColor: step > i ? "#E879F9" : "#E5E7EB" }}
                className="w-12 sm:w-16 h-0.5 mx-2"
              />
            )}
          </div>
        ))}
      </div>

      {/* Step label */}
      <div className="text-center mb-5">
        <motion.p
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-semibold text-gray-900 dark:text-white"
        >
          {steps[step].label}
        </motion.p>
        <motion.p
          key={`desc-${step}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-gray-500 dark:text-gray-400"
        >
          {steps[step].desc}
        </motion.p>
      </div>

      {/* Visual area */}
      <div className="flex-1 relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-white/5 min-h-[280px]">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6"
            >
              {/* Upload zone */}
              <motion.div
                animate={{ borderColor: ["#D1D5DB", "#E879F9", "#D1D5DB"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-full max-w-[200px] aspect-square rounded-2xl border-2 border-dashed flex flex-col items-center justify-center bg-white dark:bg-[#1a1a28]"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-300 to-pink-400 flex items-center justify-center text-white text-2xl font-bold mb-3 shadow-lg"
                >
                  A
                </motion.div>
                <p className="text-xs text-gray-500 dark:text-gray-400">logo.png</p>
              </motion.div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">Drag your logo here</p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="customize"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute inset-0 p-6"
            >
              <div className="bg-white dark:bg-[#1a1a28] rounded-xl p-4 shadow-sm mb-4">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Brand Colors</p>
                <div className="flex gap-2">
                  {["#E879F9", "#F0ABFC", "#D4A8FF", "#FFA8D4", "#FFFFFF"].map((c, i) => (
                    <motion.div
                      key={c}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                      className={`w-10 h-10 rounded-xl shadow-sm cursor-pointer transition-transform hover:scale-110 ${i === 0 ? "ring-2 ring-fuchsia-400 ring-offset-2" : ""}`}
                      style={{ background: c, border: c === "#FFFFFF" ? "1px solid #E5E7EB" : "none" }}
                    />
                  ))}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-10 h-10 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 text-lg"
                  >
                    +
                  </motion.div>
                </div>
              </div>

              <div className="bg-white dark:bg-[#1a1a28] rounded-xl p-4 shadow-sm">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Typography</p>
                <div className="flex gap-2">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex-1 px-4 py-3 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-xl border-2 border-fuchsia-300"
                  >
                    <p className="font-semibold text-gray-900 dark:text-white">Inter</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Modern & Clean</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex-1 px-4 py-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10"
                  >
                    <p className="font-semibold text-gray-900 dark:text-white italic" style={{ fontFamily: "serif" }}>Playfair</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Elegant Accent</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="generate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 gap-4"
            >
              {/* Layout variation previews */}
              <div className="flex gap-3 items-end">
                {[
                  { label: "Square", w: "w-20", h: "h-20", ratio: "1:1" },
                  { label: "Story", w: "w-14", h: "h-24", ratio: "9:16" },
                  { label: "Carousel", w: "w-24", h: "h-20", ratio: "4:5" },
                ].map((layout, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className={`${layout.w} ${layout.h} rounded-xl bg-gradient-to-br from-fuchsia-200 to-pink-200 dark:from-fuchsia-800/40 dark:to-pink-800/40 relative overflow-hidden border-2 border-white dark:border-white/20 shadow-lg`}>
                      {/* Mini content preview */}
                      <div className="absolute inset-2 flex flex-col justify-between">
                        <div className="w-5 h-5 rounded-md bg-white/60 dark:bg-white/20" />
                        <div className="space-y-1">
                          <div className="w-full h-1.5 rounded bg-white/40" />
                          <div className="w-2/3 h-1.5 rounded bg-white/30" />
                        </div>
                      </div>
                      {/* Shimmer */}
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                      {/* Checkmark */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 + i * 0.2, type: "spring" }}
                        className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center"
                      >
                        <Check className="w-3 h-3 text-white" />
                      </motion.div>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{layout.label}</span>
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                3 formats ready for approval
              </motion.p>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="publish"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-4"
            >
              {/* Final content cards */}
              <div className="grid grid-cols-3 gap-2 h-full">
                {[
                  { bg: "from-rose-400 to-pink-500", label: "Post 1" },
                  { bg: "from-fuchsia-400 to-purple-500", label: "Story" },
                  { bg: "from-pink-400 to-rose-500", label: "Reel" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className={`rounded-xl bg-gradient-to-br ${item.bg} p-3 flex flex-col justify-between relative overflow-hidden`}
                  >
                    {/* Logo watermark */}
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white text-xs font-bold">
                      A
                    </div>
                    
                    <div>
                      <p className="text-white/80 text-[10px] uppercase tracking-wide">{item.label}</p>
                      <p className="text-white text-xs font-semibold">Ready ✓</p>
                    </div>

                    {/* Brand colors dot */}
                    <div className="absolute top-3 right-3 flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-white/40" />
                      <div className="w-2 h-2 rounded-full bg-white/60" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Result badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-4 left-4 right-4 bg-white dark:bg-[#1a1a28] rounded-xl px-4 py-3 shadow-lg flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Brand kit saved</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Applied to all future posts</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Manual step navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`w-2 h-2 rounded-full transition-all ${step === i ? "bg-fuchsia-400 w-6" : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}

function BentoCaption() {
  const captionText = "Your skin tells a story of resilience. After years of searching, you finally found the right care. This is what transformation looks like when science meets artistry.";
  
  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      {/* Caption preview */}
      <div className="col-span-2 row-span-2 bg-white dark:bg-[#1a1a28] rounded-2xl p-5 shadow-md border border-gray-100 dark:border-white/10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">Generated Caption</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Your voice</span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 min-h-[80px]">
          <TypewriterText text={captionText} />
        </p>

        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Optimised Hashtags</p>
        <div className="flex flex-wrap gap-1.5">
          {[
            { tag: "#esteticaavancada", color: "text-[#E879F9] bg-[#E879F9]/10" },
            { tag: "#peleperfeita", color: "text-[#F0ABFC] bg-[#F0ABFC]/10" },
            { tag: "#tratamentofacial", color: "text-[#D4A8FF] bg-[#D4A8FF]/10" },
            { tag: "#clinicapremium", color: "text-[#FFA8D4] bg-[#FFA8D4]/10" },
            { tag: "#resultadosreais", color: "text-[#F9A8D4] bg-[#F9A8D4]/10" },
          ].map((item, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className={`text-xs px-2.5 py-1 rounded-full font-medium ${item.color}`}
            >
              {item.tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-[#1a1a28] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/10 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Updated</span>
        <div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">Daily</span>
          <p className="text-xs text-gray-500 dark:text-gray-400">hashtags</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-[#1a1a28] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/10 flex flex-col justify-between"
      >
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Platforms</span>
        <div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">3×</span>
          <p className="text-xs text-gray-500 dark:text-gray-400">optimised</p>
        </div>
      </motion.div>

    </div>
  );
}

function BentoVoice() {
  return (
    <div className="grid grid-cols-3 gap-4 h-full opacity-90">
      {/* AI Video demo */}
      <div className="col-span-2 rounded-2xl shadow-lg overflow-hidden relative h-32">
        <video
          src="/ai-video-demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        
        {/* Label overlay */}
        <div className="absolute bottom-2 left-3 right-3">
          <p className="text-white font-medium text-xs drop-shadow-md">AI Video Preview</p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white dark:bg-[#1a1a28] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/10 flex flex-col justify-between">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Setup</span>
        <div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">5min</span>
          <p className="text-xs text-gray-500 dark:text-gray-400">recording</p>
        </div>
      </div>

      {/* Voice waveform */}
      <div className="col-span-2 bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-5 shadow-md relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-rose-900/30" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold text-white">Voice Synthesis</span>
            <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-full font-medium border border-white/20">Coming Soon</span>
          </div>
          
          {/* Waveform */}
          <div className="flex items-center gap-0.5 h-16 mb-3">
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
          
          <p className="text-white/60 text-xs">5-minute recording → unlimited content</p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1a1a28] rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-white/10 flex flex-col justify-between">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Launch</span>
        <div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">2026</span>
          <p className="text-xs text-gray-500 dark:text-gray-400">coming soon</p>
        </div>
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
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
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
    // Start title icon animation and keep it looping
    if (titleIconRef.current) {
      titleIconRef.current.startAnimation();
    }
    
    // Loop the title icon animation
    const interval = setInterval(() => {
      if (titleIconRef.current) {
        titleIconRef.current.startAnimation();
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, [active]);

  return (
    <section id="features" className="py-24 px-6 overflow-hidden bg-gray-50 dark:bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <SectionPill className="mb-6">{lang === "pt" ? "O QUE FAZEMOS" : "WHAT WE DO"}</SectionPill>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-950 dark:text-white leading-tight mb-5">
            Viral <span className="font-serif-italic font-normal">Science.</span>
            <br />
            Not Generic AI.
          </h2>
          <p className="text-xl text-gray-400 dark:text-gray-500 max-w-xl mx-auto">
            {lang === "pt"
              ? "Tecnologia que aprende o que funciona e executa melhor do que qualquer equipa humana."
              : "Technology that learns what works and executes better than any human team."}
          </p>
        </motion.div>

        {/* Mobile dropdown */}
        <div className="md:hidden mb-12 relative">
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-2xl bg-white dark:bg-[#1a1a28] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-medium shadow-sm"
          >
            <div className="flex items-center gap-3">
              {(() => {
                const IconComponent = iconComponents[active];
                return IconComponent ? <IconComponent size={20} className="text-pink-400" /> : null;
              })()}
              <span>{activeFeature.label}</span>
            </div>
            <ChevronDown size={20} className={`text-gray-400 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {mobileDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#1a1a28] border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl z-50 overflow-hidden"
              >
                {features.map((f) => {
                  const IconComponent = iconComponents[f.id];
                  const isActive = active === f.id;
                  return (
                    <button
                      key={f.id}
                      onClick={() => {
                        setActive(f.id);
                        setMobileDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-5 py-3.5 text-left transition-colors ${
                        isActive 
                          ? 'iridescent-pill-active text-gray-800 dark:text-white' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                      }`}
                    >
                      {IconComponent && <IconComponent size={18} className={isActive ? 'text-pink-400' : 'text-gray-400'} />}
                      <span className="font-medium">{f.label}</span>
                      {f.comingSoon && (
                        <span className="ml-auto text-xs bg-gray-100 dark:bg-white/10 text-gray-500 px-2 py-0.5 rounded-full">Soon</span>
                      )}
                      {isActive && <Check size={16} className="ml-auto text-pink-400" />}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop filter pills */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-20">
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
                    ? "iridescent-pill-active border-2 border-white/40 dark:border-white/20 text-gray-800 dark:text-white shadow-lg"
                    : "bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-transparent hover:shadow-md"
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
                  <Check className="w-4 h-4 text-pink-400 flex-shrink-0" />
                )}
                
                {/* Icon */}
                {IconComponent && (
                  <IconComponent
                    ref={(el: IconHandle | null) => { iconRefs.current[f.id] = el; }}
                    size={18}
                    className={isActive ? "text-pink-400" : "text-gray-500 dark:text-gray-400"}
                  />
                )}
                
                <span>{f.label}</span>
                
                {f.comingSoon && (
                  <span className="text-[10px] bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 px-1.5 py-0.5 rounded-full font-medium border border-gray-200 dark:border-white/10">Soon</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-start"
          >
            {/* Left: copy */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <div>
                {/* Icon + Title inline on mobile */}
                <div className="flex items-center gap-3 sm:block mb-3 sm:mb-0">
                  {(() => {
                    const TitleIcon = iconComponents[activeFeature.id];
                    return TitleIcon ? (
                      <TitleIcon
                        ref={(el: IconHandle | null) => { titleIconRef.current = el; }}
                        size={28}
                        className="text-gray-900 dark:text-white sm:mb-4 flex-shrink-0"
                      />
                    ) : null;
                  })()}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950 dark:text-white leading-tight sm:hidden">
                    {activeFeature.headline}
                  </h3>
                </div>
                {activeFeature.comingSoon && (
                  <span className="inline-block text-xs bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 px-2.5 py-1 rounded-full font-medium border border-gray-200 dark:border-white/10 mb-3">Coming Soon</span>
                )}
                <h3 className="hidden sm:block text-3xl sm:text-4xl font-bold text-gray-950 dark:text-white leading-tight mb-4">
                  {activeFeature.headline}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                  {activeFeature.description}
                </p>
              </div>

              {/* Badge card - animated benefits */}
              {activeFeature.benefits && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-fuchsia-900/20 dark:to-pink-900/20 rounded-2xl p-4 shadow-sm border border-fuchsia-100/60 dark:border-fuchsia-500/20 overflow-hidden relative"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {activeFeature.benefits.map((benefit, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-1.5"
                        >
                          <span className="text-base">{benefit.icon}</span>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{benefit.label}</span>
                        </motion.div>
                      ))}
                    </div>
                    {activeFeature.comingSoon ? (
                      <span className="text-xs bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 px-2.5 py-1 rounded-full font-medium border border-gray-200 dark:border-white/10">Soon</span>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right: bento visual - shows below on mobile */}
            <motion.div 
              className="min-h-[280px] sm:min-h-[400px] order-last lg:order-none"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {bentoMap[activeFeature.bento]}
            </motion.div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
