"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SectionPill } from "@/components/ui/section-pill";
import { useState, useRef, useEffect } from "react";
import { useLang } from "../context/LanguageContext";
import { 
  Check, Instagram, Youtube, ChevronDown,
  Target, Brain, TrendingUp, Zap, Pencil, Palette,
  Bot, Smartphone, MousePointerClick, LayoutDashboard,
  RefreshCw, CalendarCheck, Infinity, Sparkles, PenTool,
  Calendar, Mic, Clapperboard, VideoOff,
  Eye, Heart, Users, ArrowUpRight, Clock, MessageCircle
} from "lucide-react";


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
    description: "Connect your account and we analyze thousands of top-performing posts in your niche. Our AI builds a custom algorithm tailored to your brand — extracting the hooks, formats, and strategies that actually work for accounts like yours.",
    badge: { title: "Custom Niche Analysis", subtitle: "Data-driven insights tailored to your brand" },
    benefits: [
      { icon: "Target", label: "Niche-specific" },
      { icon: "Brain", label: "Deep analysis" },
      { icon: "TrendingUp", label: "Custom strategy" },
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
      { icon: "Zap", label: "30+ posts/month" },
      { icon: "Pencil", label: "Fully editable" },
      { icon: "Palette", label: "Canva integration" },
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
      { icon: "Bot", label: "AI-optimized timing" },
      { icon: "Smartphone", label: "3 platforms" },
      { icon: "MousePointerClick", label: "1-click publish" },
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
      { icon: "LayoutDashboard", label: "Unified dashboard" },
      { icon: "RefreshCw", label: "Self-improving AI" },
      { icon: "CalendarCheck", label: "Booking tracking" },
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
      { icon: "Zap", label: "5 min setup" },
      { icon: "Infinity", label: "Infinite posts" },
      { icon: "Sparkles", label: "Always on-brand" },
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
      { icon: "PenTool", label: "Your brand voice" },
      { icon: "Calendar", label: "Daily updates" },
      { icon: "Target", label: "Niche-optimized" },
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
      { icon: "Mic", label: "5-min clone" },
      { icon: "Clapperboard", label: "AI videos" },
      { icon: "VideoOff", label: "Zero filming" },
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
    description: "Liga a tua conta e analisamos milhares de posts de sucesso no teu nicho. A nossa IA constrói um algoritmo personalizado para a tua marca — extraindo os hooks, formatos e estratégias que realmente funcionam para contas como a tua.",
    badge: { title: "Análise Personalizada", subtitle: "Insights baseados em dados para a tua marca" },
    benefits: [
      { icon: "Target", label: "Nicho específico" },
      { icon: "Brain", label: "Análise profunda" },
      { icon: "TrendingUp", label: "Estratégia custom" },
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
      { icon: "Zap", label: "30+ posts/mês" },
      { icon: "Pencil", label: "Editável" },
      { icon: "Palette", label: "Integração Canva" },
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
      { icon: "Bot", label: "Timing por IA" },
      { icon: "Smartphone", label: "3 plataformas" },
      { icon: "MousePointerClick", label: "1 clique" },
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
      { icon: "LayoutDashboard", label: "Dashboard único" },
      { icon: "RefreshCw", label: "IA auto-melhora" },
      { icon: "CalendarCheck", label: "Track reservas" },
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
      { icon: "Zap", label: "5 min setup" },
      { icon: "Infinity", label: "Posts infinitos" },
      { icon: "Sparkles", label: "Sempre on-brand" },
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
      { icon: "PenTool", label: "Tua voz" },
      { icon: "Calendar", label: "Updates diários" },
      { icon: "Target", label: "Nicho-optimizado" },
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
      { icon: "Mic", label: "Clone 5min" },
      { icon: "Clapperboard", label: "Vídeos IA" },
      { icon: "VideoOff", label: "Sem câmara" },
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
  const [step, setStep] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, [resetKey]);
  
  const goToStep = (i: number) => {
    setStep(i);
    setResetKey(k => k + 1); // Reset timer when user clicks
  };

  const steps = [
    { label: "Connect", desc: "Link your Instagram account" },
    { label: "Scanning", desc: "Analyzing 10K+ viral posts" },
    { label: "Extracting", desc: "Finding winning patterns" },
    { label: "Scoring", desc: "Rating your content potential" },
  ];

  // Heatmap data for different views
  const heatmapSets = [
    [0.2, 0.3, 0.4, 0.3, 0.5, 0.4, 0.3, 0.4, 0.5, 0.6, 0.5, 0.4, 0.6, 0.7, 0.6, 0.5, 0.7, 0.8, 0.7, 0.6, 0.8, 0.9, 0.85, 0.7, 0.9, 0.95, 0.9, 0.8],
    [0.9, 0.3, 0.7, 0.5, 0.8, 0.2, 0.6, 0.4, 0.85, 0.1, 0.75, 0.55, 0.95, 0.35, 0.65, 0.45, 0.8, 0.25, 0.7, 0.5, 0.9, 0.15, 0.6, 0.4, 0.85, 0.3, 0.75, 0.55],
    [0.95, 0.9, 0.85, 0.7, 0.6, 0.5, 0.4, 0.92, 0.88, 0.8, 0.65, 0.55, 0.45, 0.35, 0.9, 0.85, 0.75, 0.6, 0.5, 0.4, 0.3, 0.88, 0.8, 0.7, 0.55, 0.45, 0.35, 0.25],
  ];

  const hooks = [
    { text: "5 signs your skin needs hydration", score: 8.7, trend: "+2.1%" },
    { text: "POV: You found the right clinic", score: 6.2, trend: "+0.8%" },
    { text: "Before & after 30 days", score: 11.3, trend: "+4.2%" },
  ];

  // Typewriter for username
  const [typedUsername, setTypedUsername] = useState("");
  const username = "@aurea_agency";
  
  useEffect(() => {
    if (step === 0) {
      setTypedUsername("");
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < username.length) {
          setTypedUsername(username.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
        }
      }, 120);
      return () => clearInterval(typeInterval);
    }
  }, [step]);

  return (
    <div className="bg-white dark:bg-[#1a1a28] rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-white/10 h-full flex flex-col">
      {/* Visual area */}
      <div className="flex-1 relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-white/5 min-h-[260px]">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="connect"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col items-center justify-center"
            >
              {/* Account input simulation */}
              <div className="w-full max-w-[220px]">
                {/* Instagram-style input */}
                <div className="bg-white dark:bg-[#1a1a28] rounded-xl border-2 border-gray-200 dark:border-white/20 p-4 shadow-sm mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-0.5">
                      <div className="w-full h-full rounded-full bg-white dark:bg-[#1a1a28] flex items-center justify-center">
                        <Instagram className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Instagram Account</p>
                      <div className="flex items-center gap-1 bg-gray-50 dark:bg-white/5 rounded-lg px-3 py-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {typedUsername}
                        </span>
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: 9999 }}
                          className="w-0.5 h-4 bg-fuchsia-500"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Connect button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: typedUsername.length === username.length ? 1 : 0.5 }}
                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-fuchsia-500 to-pink-500 text-center"
                  >
                    <span className="text-xs font-semibold text-white">Analyze Account</span>
                  </motion.div>
                </div>
                {/* Loading indicator */}
                {typedUsername.length === username.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: 9999, ease: "linear" }}
                      className="w-4 h-4 border-2 border-fuchsia-500 border-t-transparent rounded-full"
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400">Connecting...</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col"
            >
              {/* Account badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mb-3 bg-white dark:bg-[#1a1a28] rounded-full px-3 py-1.5 shadow-sm border border-gray-100 dark:border-white/10 self-start"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">@aurea_agency</span>
                <Check className="w-3 h-3 text-green-500" />
              </motion.div>
              
              {/* Scanning animation - posts flying in */}
              <div className="flex-1 relative overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "-100%", opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2, delay: i * 0.3, repeat: 9999, repeatDelay: 1 }}
                    className="absolute flex items-center gap-3 bg-white dark:bg-[#1a1a28] rounded-xl px-3 py-2 shadow-sm border border-gray-100 dark:border-white/10"
                    style={{ top: `${10 + i * 18}%` }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-fuchsia-200 to-pink-200 dark:from-fuchsia-800/40 dark:to-pink-800/40" />
                    <div className="space-y-1">
                      <div className="w-20 h-1.5 rounded bg-gray-200 dark:bg-white/20" />
                      <div className="w-14 h-1.5 rounded bg-gray-100 dark:bg-white/10" />
                    </div>
                  </motion.div>
                ))}
                {/* Center scanner line */}
                <motion.div
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: 9999 }}
                  className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"
                />
              </div>
              <div className="text-center">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: 9999 }}
                  className="text-xs text-gray-500 dark:text-gray-400"
                >
                  Scanning 10,247 posts...
                </motion.span>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="extracting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5"
            >
              {/* Account badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mb-3 bg-white dark:bg-[#1a1a28] rounded-full px-3 py-1.5 shadow-sm border border-gray-100 dark:border-white/10 self-start"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">@aurea_agency</span>
                <Check className="w-3 h-3 text-green-500" />
              </motion.div>
              
              {/* Heatmap visualization */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Pattern Heatmap</span>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">Live</span>
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {heatmapSets[1].map((intensity, i) => {
                    const bg = intensity > 0.75 ? "bg-primary" : intensity > 0.5 ? "bg-primary/60" : intensity > 0.25 ? "bg-primary/30" : "bg-gray-200 dark:bg-white/10";
                    return (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.02 }}
                        className={`h-5 rounded-md ${bg}`}
                      />
                    );
                  })}
                </div>
              </div>
              {/* Extracted patterns */}
              <div className="space-y-2">
                {["Hook timing: 0-3s", "CTA placement: end", "Emotion: curiosity"].map((pattern, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="flex items-center gap-2 text-xs"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-400">{pattern}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="scoring"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-4 flex flex-col"
            >
              {/* Header with account */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400" />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">@aurea_agency</span>
                </div>
                <span className="text-[10px] font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">Complete ✓</span>
              </div>

              {/* Growth metrics grid */}
              <div className="grid grid-cols-2 gap-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white dark:bg-[#1a1a28] rounded-xl p-2.5 shadow-sm border border-gray-100 dark:border-white/10"
                >
                  <div className="w-5 h-5 rounded-md bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-500 mb-1">
                    <TrendingUp className="w-3 h-3" />
                  </div>
                  <span className="text-base font-bold text-gray-900 dark:text-white block">+340%</span>
                  <span className="text-[9px] text-gray-500 dark:text-gray-400">Growth Potential</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white dark:bg-[#1a1a28] rounded-xl p-2.5 shadow-sm border border-gray-100 dark:border-white/10"
                >
                  <div className="w-5 h-5 rounded-md bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-500 mb-1">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span className="text-base font-bold text-gray-900 dark:text-white block">94/100</span>
                  <span className="text-[9px] text-gray-500 dark:text-gray-400">Viral Score</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white dark:bg-[#1a1a28] rounded-xl p-2.5 shadow-sm border border-gray-100 dark:border-white/10"
                >
                  <div className="w-5 h-5 rounded-md bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-500 mb-1">
                    <Target className="w-3 h-3" />
                  </div>
                  <span className="text-base font-bold text-gray-900 dark:text-white block">98%</span>
                  <span className="text-[9px] text-gray-500 dark:text-gray-400">Niche Fit</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white dark:bg-[#1a1a28] rounded-xl p-2.5 shadow-sm border border-gray-100 dark:border-white/10"
                >
                  <div className="w-5 h-5 rounded-md bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-500 mb-1">
                    <Zap className="w-3 h-3" />
                  </div>
                  <span className="text-base font-bold text-gray-900 dark:text-white block">127</span>
                  <span className="text-[9px] text-gray-500 dark:text-gray-400">Content Ideas</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Step label */}
      <div className="text-center mt-4 mb-2">
        <motion.p key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-semibold text-gray-900 dark:text-white">
          {steps[step].label}
        </motion.p>
        <motion.p key={`desc-${step}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-gray-500 dark:text-gray-400">
          {steps[step].desc}
        </motion.p>
      </div>

      {/* Step indicator - minimal */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${step === i ? "w-6 bg-fuchsia-400 opacity-100" : step > i ? "w-2 bg-fuchsia-400 opacity-50" : "w-2 bg-gray-300 dark:bg-gray-600 opacity-30"}`}
              onClick={() => goToStep(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BentoContent() {
  const [step, setStep] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, [resetKey]);
  
  const goToStep = (i: number) => {
    setStep(i);
    setResetKey(k => k + 1);
  };

  const steps = [
    { label: "Choose Type", desc: "Post, carousel, or Reel" },
    { label: "Generate", desc: "AI creates your content" },
    { label: "Edit", desc: "Customize in Canva" },
    { label: "Approve", desc: "Ready to publish" },
  ];

  const contentTypes = [
    { type: "Post", icon: "📷", ratio: "1:1", selected: true },
    { type: "Carousel", icon: "📚", ratio: "4:5", selected: false },
    { type: "Reel", icon: "🎬", ratio: "9:16", selected: false },
  ];

  return (
    <div className="bg-white dark:bg-[#1a1a28] rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-white/10 h-full flex flex-col">
      {/* Visual area */}
      <div className="flex-1 relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-white/5 min-h-[260px]">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="choose"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col items-center justify-center"
            >
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">What would you like to create?</p>
              <div className="flex gap-4">
                {contentTypes.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`p-4 rounded-2xl cursor-pointer transition-all ${c.selected ? "bg-fuchsia-100 dark:bg-fuchsia-900/30 border-2 border-fuchsia-400" : "bg-white dark:bg-[#1a1a28] border border-gray-200 dark:border-white/10"}`}
                  >
                    <div className="text-3xl mb-2 text-center">{c.icon}</div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white text-center">{c.type}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{c.ratio}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="generate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col items-center justify-center"
            >
              {/* Generation animation */}
              <div className="relative w-32 h-32 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: 9999, ease: "linear" }}
                  className="absolute inset-0 rounded-2xl border-2 border-dashed border-fuchsia-300"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute inset-2 rounded-xl bg-gradient-to-br from-fuchsia-200 to-pink-200 dark:from-fuchsia-800/40 dark:to-pink-800/40 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: 9999 }}
                    className="text-4xl"
                  >
                    ✦
                  </motion.div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="space-y-2 text-center"
              >
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Generating your post...</p>
                <div className="flex items-center justify-center gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: 9999, delay: i * 0.2 }}
                      className="w-2 h-2 rounded-full bg-fuchsia-400"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="edit"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 overflow-hidden"
            >
              {/* Canva-like editor */}
              <div className="h-full flex flex-col">
                <div className="bg-gray-100 dark:bg-[#111118] border-b border-gray-200 dark:border-white/10 px-3 py-2 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 mx-auto">Aurea × Canva</span>
                </div>
                <div className="flex-1 flex">
                  {/* Sidebar */}
                  <div className="w-20 bg-white dark:bg-[#1a1a28] border-r border-gray-100 dark:border-white/10 p-2 space-y-1">
                    {["Text", "Media", "Brand", "Layout"].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`text-[10px] py-1.5 px-2 rounded-lg text-center ${i === 2 ? "bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400 font-medium" : "text-gray-500 dark:text-gray-400"}`}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                  {/* Canvas */}
                  <div className="flex-1 p-4 flex items-center justify-center bg-gray-50 dark:bg-white/5">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-28 h-28 rounded-xl bg-gradient-to-br from-fuchsia-300 to-pink-400 shadow-lg relative overflow-hidden"
                    >
                      <div className="absolute inset-3 flex flex-col justify-between">
                        <div className="w-6 h-6 rounded-md bg-white/30" />
                        <div className="space-y-1">
                          <div className="w-full h-1.5 rounded bg-white/50" />
                          <div className="w-2/3 h-1.5 rounded bg-white/30" />
                        </div>
                      </div>
                      {/* Selection handles */}
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: 9999 }}
                        className="absolute inset-0 border-2 border-blue-500 rounded-xl"
                      />
                      <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-500 rounded-full" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full" />
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-500 rounded-full" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="approve"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col"
            >
              {/* Final preview */}
              <div className="flex-1 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="relative"
                >
                  <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-pink-500 shadow-xl overflow-hidden">
                    <div className="absolute inset-3 flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-lg bg-white/30" />
                      <div className="space-y-1.5">
                        <div className="w-full h-2 rounded bg-white/60" />
                        <div className="w-3/4 h-2 rounded bg-white/40" />
                      </div>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
                  >
                    <Check className="w-5 h-5 text-white" />
                  </motion.div>
                </motion.div>
              </div>
              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex gap-2 justify-center"
              >
                <div className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-white/10 text-xs font-medium text-gray-600 dark:text-gray-400">
                  Edit more
                </div>
                <div className="px-4 py-2 rounded-xl bg-fuchsia-500 text-xs font-medium text-white">
                  Approve ✓
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Step label */}
      <div className="text-center mt-4 mb-2">
        <motion.p key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-semibold text-gray-900 dark:text-white">
          {steps[step].label}
        </motion.p>
        <motion.p key={`desc-${step}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-gray-500 dark:text-gray-400">
          {steps[step].desc}
        </motion.p>
      </div>

      {/* Step indicator - minimal */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${step === i ? "w-6 bg-fuchsia-400 opacity-100" : step > i ? "w-2 bg-fuchsia-400 opacity-50" : "w-2 bg-gray-300 dark:bg-gray-600 opacity-30"}`}
              onClick={() => goToStep(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BentoScheduling() {
  const [step, setStep] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, [resetKey]);
  
  const goToStep = (i: number) => {
    setStep(i);
    setResetKey(k => k + 1);
  };

  const steps = [
    { label: "Analyze", desc: "Learning your audience" },
    { label: "Optimize", desc: "Finding best times" },
    { label: "Schedule", desc: "Set your content calendar" },
    { label: "Publish", desc: "Auto-post everywhere" },
  ];

  const platformIcons: Record<string, React.ReactNode> = {
    ig: <Instagram className="w-4 h-4" />,
    tt: <TikTokIcon className="w-4 h-4" />,
    yt: <Youtube className="w-4 h-4" />,
  };
  
  const platformColors: Record<string, string> = {
    ig: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    tt: "bg-gray-900 dark:bg-white text-white dark:text-gray-900",
    yt: "bg-red-500 text-white",
  };

  const posts = [
    { time: "09:00", platform: "ig", title: "Before/After Reel" },
    { time: "12:00", platform: "tt", title: "Hook Series #4" },
    { time: "18:00", platform: "yt", title: "Treatment Guide" },
  ];

  return (
    <div className="bg-white dark:bg-[#1a1a28] rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-white/10 h-full flex flex-col">
      {/* Visual area */}
      <div className="flex-1 relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-white/5 min-h-[260px]">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="analyze"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col items-center justify-center"
            >
              {/* Audience activity heatmap */}
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Audience Activity</p>
              <div className="grid grid-cols-7 gap-1 mb-3">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <div key={i} className="text-[10px] text-center text-gray-400 dark:text-gray-500 font-medium">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {[0.8, 0.3, 0.6, 0.9, 0.4, 0.2, 0.5, 0.7, 0.4, 0.8, 0.3, 0.6, 0.9, 0.5, 0.2, 0.7, 0.5, 0.8, 0.3, 0.9, 0.6, 0.4, 0.7, 0.5, 0.8, 0.3, 0.6, 0.9].map((intensity, i) => {
                  const bg = intensity > 0.7 ? "bg-fuchsia-500" : intensity > 0.4 ? "bg-fuchsia-300" : "bg-fuchsia-100 dark:bg-fuchsia-900/30";
                  return (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.02 }}
                      className={`w-6 h-6 rounded-md ${bg}`}
                    />
                  );
                })}
              </div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-3">Darker = more active</p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="optimize"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5"
            >
              {/* Best times discovery */}
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-3">Optimal posting times</p>
              <div className="space-y-3">
                {[
                  { day: "Monday", time: "09:00 AM", score: 94 },
                  { day: "Wednesday", time: "12:00 PM", score: 87 },
                  { day: "Friday", time: "06:00 PM", score: 91 },
                ].map((slot, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white dark:bg-[#1a1a28] rounded-xl p-3 shadow-sm border border-gray-100 dark:border-white/10"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{slot.day}</span>
                      <span className="text-xs text-fuchsia-500 font-semibold">{slot.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${slot.score}%` }}
                          transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
                          className="h-full bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full"
                        />
                      </div>
                      <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">{slot.score}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="schedule"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5"
            >
              {/* Calendar view */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">This Week</span>
                <span className="text-[10px] font-medium text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-1 rounded-full">AI Optimized</span>
              </div>
              <div className="space-y-2">
                {posts.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-center gap-3 py-2.5 px-3 rounded-xl bg-white dark:bg-[#1a1a28] shadow-sm border border-gray-100 dark:border-white/10"
                  >
                    <span className="text-xs text-gray-400 dark:text-gray-500 w-12">{p.time}</span>
                    <span className={`p-1.5 rounded-lg ${platformColors[p.platform]}`}>
                      {platformIcons[p.platform]}
                    </span>
                    <span className="text-xs text-gray-700 dark:text-gray-300 flex-1">{p.title}</span>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                    >
                      <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="publish"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col items-center justify-center"
            >
              {/* Publishing animation */}
              <div className="relative mb-6">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: 9999 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-fuchsia-400 to-pink-500 flex items-center justify-center shadow-xl"
                >
                  <span className="text-3xl text-white">✦</span>
                </motion.div>
                {/* Platform icons orbiting */}
                {[
                  { icon: <Instagram className="w-4 h-4" />, color: "from-purple-500 to-pink-500", angle: 0 },
                  { icon: <TikTokIcon className="w-4 h-4" />, color: "from-gray-800 to-gray-900", angle: 120 },
                  { icon: <Youtube className="w-4 h-4" />, color: "from-red-500 to-red-600", angle: 240 },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: 1,
                      x: Math.cos((p.angle + i * 30) * Math.PI / 180) * 50,
                      y: Math.sin((p.angle + i * 30) * Math.PI / 180) * 50,
                    }}
                    transition={{ delay: 0.3 + i * 0.2 }}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {p.icon}
                  </motion.div>
                ))}
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Publishing to 3 platforms...
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="flex items-center gap-1 mt-2"
              >
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-xs text-green-600 dark:text-green-400 font-medium">All scheduled!</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Step label */}
      <div className="text-center mt-4 mb-2">
        <motion.p key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-semibold text-gray-900 dark:text-white">
          {steps[step].label}
        </motion.p>
        <motion.p key={`desc-${step}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-gray-500 dark:text-gray-400">
          {steps[step].desc}
        </motion.p>
      </div>

      {/* Step indicator - minimal */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${step === i ? "w-6 bg-fuchsia-400 opacity-100" : step > i ? "w-2 bg-fuchsia-400 opacity-50" : "w-2 bg-gray-300 dark:bg-gray-600 opacity-30"}`}
              onClick={() => goToStep(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BentoAnalytics() {
  const [step, setStep] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, [resetKey]);
  
  const goToStep = (i: number) => {
    setStep(i);
    setResetKey(k => k + 1);
  };

  const steps = [
    { label: "Collect", desc: "Gathering performance data" },
    { label: "Analyze", desc: "Finding patterns" },
    { label: "Learn", desc: "AI improves your strategy" },
    { label: "Report", desc: "See your results" },
  ];

  const weeks = [22, 31, 28, 45, 38, 67, 89, 72, 95, 88, 102, 118];
  const max = Math.max(...weeks);

  return (
    <div className="bg-white dark:bg-[#1a1a28] rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-white/10 h-full flex flex-col">
      {/* Visual area */}
      <div className="flex-1 relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-white/5 min-h-[260px]">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="collect"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col items-center justify-center"
            >
              {/* Data collection animation */}
              <div className="relative w-32 h-32 mb-4">
                {/* Center hub */}
                <div className="absolute inset-8 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: 9999 }}
                    className="w-8 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center"
                  >
                    <LayoutDashboard className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
                {/* Data points flying in */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 45) * Math.PI / 180;
                  return (
                    <motion.div
                      key={i}
                      initial={{ x: Math.cos(angle) * 80, y: Math.sin(angle) * 80, opacity: 0 }}
                      animate={{ x: 0, y: 0, opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: 9999, delay: i * 0.2 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-fuchsia-400"
                    />
                  );
                })}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Syncing from Instagram, TikTok, YouTube...</p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="analyze"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Performance Overview</span>
                <span className="text-[10px] text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-1 rounded-full font-medium">Live</span>
              </div>
              
              {/* Key metrics - cleaner layout */}
              <div className="grid grid-cols-2 gap-3 flex-1">
                {[
                  { label: "Total Reach", value: "124K", change: "+23%", icon: <Eye className="w-4 h-4" /> },
                  { label: "Engagement", value: "8.7%", change: "+1.2%", icon: <Heart className="w-4 h-4" /> },
                  { label: "New Followers", value: "+847", change: "+12%", icon: <Users className="w-4 h-4" /> },
                  { label: "Conversions", value: "34", change: "+18%", icon: <ArrowUpRight className="w-4 h-4" /> },
                ].map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white dark:bg-[#1a1a28] rounded-xl p-3 shadow-sm border border-gray-100 dark:border-white/10 flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center text-fuchsia-500">
                        {metric.icon}
                      </div>
                      <span className="text-[10px] text-gray-500 dark:text-gray-400">{metric.label}</span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-auto">
                      <span className="text-xl font-bold text-gray-900 dark:text-white">{metric.value}</span>
                      <span className="text-[10px] font-semibold text-green-500">{metric.change}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="learn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-fuchsia-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">AI Insights</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">Learning from your best content</p>
                </div>
              </div>
              
              {/* Insights cards */}
              <div className="flex-1 space-y-2.5">
                {[
                  { insight: "Before/after posts get 3× more engagement", icon: <TrendingUp className="w-4 h-4" /> },
                  { insight: "Best posting time: 9–11 AM", icon: <Clock className="w-4 h-4" /> },
                  { insight: "Questions boost comments by 47%", icon: <MessageCircle className="w-4 h-4" /> },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-3 bg-white dark:bg-[#1a1a28] rounded-xl p-3 shadow-sm border border-gray-100 dark:border-white/10"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-500">
                      {item.icon}
                    </div>
                    <span className="text-xs text-gray-700 dark:text-gray-300 flex-1 font-medium">{item.insight}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Applied badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex items-center justify-center gap-2 mt-3 py-2 bg-fuchsia-50 dark:bg-fuchsia-900/20 rounded-xl border border-fuchsia-200 dark:border-fuchsia-500/20"
              >
                <Sparkles className="w-3.5 h-3.5 text-fuchsia-500" />
                <span className="text-xs font-medium text-fuchsia-600 dark:text-fuchsia-400">Insights applied to your strategy</span>
              </motion.div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="report"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-fuchsia-500 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-gray-900 dark:text-white">Growth Report</span>
                </div>
                <span className="text-xs font-bold text-green-500 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">+847%</span>
              </div>
              
              {/* Chart */}
              <div className="bg-white dark:bg-[#1a1a28] rounded-xl p-4 flex-1 flex flex-col shadow-sm border border-gray-100 dark:border-white/10">
                <div className="flex items-end gap-1.5 flex-1 min-h-[100px]">
                  {weeks.map((v, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${(v / max) * 100}%` }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className={`flex-1 rounded-md ${i === weeks.length - 1 ? "bg-fuchsia-500" : "bg-fuchsia-200 dark:bg-fuchsia-500/30"}`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 dark:text-gray-500 mt-3 pt-3 border-t border-gray-100 dark:border-white/10">
                  <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Now</span>
                </div>
              </div>
              
              {/* Bottom stats */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                {[
                  { label: "Reach", value: "2.4M" },
                  { label: "Engagement", value: "8.7%" },
                  { label: "Followers", value: "12.4K" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-center py-2 bg-white dark:bg-[#1a1a28] rounded-lg shadow-sm border border-gray-100 dark:border-white/10"
                  >
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Step label */}
      <div className="text-center mt-4 mb-2">
        <motion.p key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-semibold text-gray-900 dark:text-white">
          {steps[step].label}
        </motion.p>
        <motion.p key={`desc-${step}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-gray-500 dark:text-gray-400">
          {steps[step].desc}
        </motion.p>
      </div>

      {/* Step indicator - minimal */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${step === i ? "w-6 bg-fuchsia-400 opacity-100" : step > i ? "w-2 bg-fuchsia-400 opacity-50" : "w-2 bg-gray-300 dark:bg-gray-600 opacity-30"}`}
              onClick={() => goToStep(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BentoBrand() {
  const [step, setStep] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  
  // Auto-advance steps
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 4500);
    return () => clearInterval(timer);
  }, [resetKey]);
  
  const goToStep = (i: number) => {
    setStep(i);
    setResetKey(k => k + 1);
  };

  const steps = [
    { num: 1, label: "Upload", desc: "Add your logo" },
    { num: 2, label: "Customize", desc: "Pick colors & fonts" },
    { num: 3, label: "Generate", desc: "Create layout variations" },
    { num: 4, label: "Apply", desc: "Brand kit saved" },
  ];

  return (
    <div className="bg-white dark:bg-[#1a1a28] rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-white/10 h-full flex flex-col">
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
                transition={{ duration: 2, repeat: 9999 }}
                className="w-full max-w-[200px] aspect-square rounded-2xl border-2 border-dashed flex flex-col items-center justify-center bg-white dark:bg-[#1a1a28]"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: 9999 }}
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
                        transition={{ duration: 1.5, repeat: 9999, delay: i * 0.2 }}
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

      {/* Step label */}
      <div className="text-center mt-4 mb-2">
        <motion.p key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-semibold text-gray-900 dark:text-white">
          {steps[step].label}
        </motion.p>
        <motion.p key={`desc-${step}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-gray-500 dark:text-gray-400">
          {steps[step].desc}
        </motion.p>
      </div>

      {/* Step indicator - minimal */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${step === i ? "w-6 bg-fuchsia-400 opacity-100" : step > i ? "w-2 bg-fuchsia-400 opacity-50" : "w-2 bg-gray-300 dark:bg-gray-600 opacity-30"}`}
              onClick={() => goToStep(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BentoCaption() {
  const [step, setStep] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, [resetKey]);
  
  const goToStep = (i: number) => {
    setStep(i);
    setResetKey(k => k + 1);
  };

  const steps = [
    { label: "Learn Voice", desc: "Analyzing your style" },
    { label: "Write", desc: "Generating in your voice" },
    { label: "Optimize", desc: "Adding trending hashtags" },
    { label: "Ready", desc: "Caption complete" },
  ];

  const voiceTraits = [
    { trait: "Warm & empathetic", match: 94 },
    { trait: "Professional but approachable", match: 89 },
    { trait: "Educational focus", match: 87 },
  ];

  const hashtags = [
    { tag: "#esteticaavancada", reach: "2.4M" },
    { tag: "#peleperfeita", reach: "890K" },
    { tag: "#tratamentofacial", reach: "1.2M" },
    { tag: "#clinicapremium", reach: "340K" },
    { tag: "#resultadosreais", reach: "560K" },
  ];

  return (
    <div className="bg-white dark:bg-[#1a1a28] rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-white/10 h-full flex flex-col">
      {/* Visual area */}
      <div className="flex-1 relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-white/5 min-h-[260px]">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="voice"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col items-center justify-center"
            >
              {/* Central scanning animation */}
              <div className="relative mb-6">
                {/* Outer ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: 9999, ease: "linear" }}
                  className="w-28 h-28 rounded-full border-2 border-dashed border-fuchsia-300 dark:border-fuchsia-500/40"
                />
                {/* Inner ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: 9999, ease: "linear" }}
                  className="absolute inset-3 rounded-full border-2 border-fuchsia-400/60"
                />
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: 9999 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center shadow-lg"
                  >
                    <PenTool className="w-7 h-7 text-white" />
                  </motion.div>
                </div>
                {/* Orbiting dots */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: 9999, ease: "linear", delay: i * 1 }}
                    className="absolute inset-0"
                    style={{ transformOrigin: "center" }}
                  >
                    <div 
                      className="absolute w-2.5 h-2.5 rounded-full bg-fuchsia-400"
                      style={{ top: 0, left: "50%", transform: "translateX(-50%)" }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Scanning your brand voice
              </motion.p>
              
              {/* Traits appearing */}
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {["Warm", "Professional", "Engaging", "Trustworthy"].map((trait, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.2 }}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="write"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col"
            >
              {/* AI Writing card with animated border */}
              <div className="relative flex-1">
                {/* Animated gradient border */}
                <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: 9999, ease: "linear" }}
                    className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0%,#E879F9_10%,#F0ABFC_20%,transparent_30%)]"
                  />
                </div>
                
                {/* Card content */}
                <div className="relative bg-white dark:bg-[#1a1a28] rounded-2xl p-4 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: 9999 }}
                        className="w-6 h-6 rounded-lg bg-fuchsia-500 flex items-center justify-center"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                      </motion.div>
                      <span className="text-xs font-semibold text-gray-900 dark:text-white">AI Writing</span>
                    </div>
                    <span className="text-[10px] font-medium text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30 px-2 py-0.5 rounded-full">Your voice</span>
                  </div>
                  
                  {/* Caption text */}
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      <TypewriterText text="Your skin tells a story of resilience. After years of searching, you finally found the right care. This is what transformation looks like when science meets artistry. ✨" />
                    </p>
                  </div>
                  
                  {/* Writing indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100 dark:border-white/10"
                  >
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.8, repeat: 9999, delay: i * 0.15 }}
                          className="w-1.5 h-1.5 rounded-full bg-fuchsia-500"
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400">Generating caption...</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="hashtags"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5"
            >
              {/* Hashtag optimization */}
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-3">Trending in Aesthetic Medicine</p>
              <div className="space-y-2">
                {hashtags.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between bg-white dark:bg-[#1a1a28] rounded-xl px-3 py-2.5 shadow-sm border border-gray-100 dark:border-white/10"
                  >
                    <span className="text-xs font-medium text-fuchsia-500">{h.tag}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-gray-400 dark:text-gray-500">{h.reach} reach</span>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                      >
                        <Check className="w-2.5 h-2.5 text-green-600 dark:text-green-400" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col"
            >
              {/* Final caption preview */}
              <div className="bg-white dark:bg-[#1a1a28] rounded-xl p-4 shadow-sm border border-gray-100 dark:border-white/10 flex-1">
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Your skin tells a story of resilience. After years of searching, you finally found the right care. ✨
                </p>
                <div className="flex flex-wrap gap-1">
                  {hashtags.slice(0, 4).map((h, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-[10px] px-2 py-0.5 rounded-full font-medium text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-900/30"
                    >
                      {h.tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              {/* Success badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-2 mt-3 bg-green-100 dark:bg-green-900/30 rounded-xl px-4 py-2"
              >
                <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-xs font-medium text-green-700 dark:text-green-400">Caption ready to use</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Step label */}
      <div className="text-center mt-4 mb-2">
        <motion.p key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-semibold text-gray-900 dark:text-white">
          {steps[step].label}
        </motion.p>
        <motion.p key={`desc-${step}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-gray-500 dark:text-gray-400">
          {steps[step].desc}
        </motion.p>
      </div>

      {/* Step indicator - minimal */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${step === i ? "w-6 bg-fuchsia-400 opacity-100" : step > i ? "w-2 bg-fuchsia-400 opacity-50" : "w-2 bg-gray-300 dark:bg-gray-600 opacity-30"}`}
              onClick={() => goToStep(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BentoVoice() {
  const [step, setStep] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, [resetKey]);
  
  const goToStep = (i: number) => {
    setStep(i);
    setResetKey(k => k + 1);
  };

  const steps = [
    { label: "Record", desc: "5 minutes of your voice" },
    { label: "Clone", desc: "AI learns your voice" },
    { label: "Generate", desc: "Create video content" },
    { label: "Publish", desc: "Your face, your voice" },
  ];

  return (
    <div className="bg-white dark:bg-[#1a1a28] rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-white/10 h-full flex flex-col relative overflow-hidden">
      {/* Coming soon overlay shimmer */}
      <motion.div
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 4, repeat: 9999, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none z-10"
      />
      
      {/* Coming soon badge */}
      <div className="absolute top-4 right-4 z-20">
        <span className="text-[10px] bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400 px-2.5 py-1 rounded-full font-semibold border border-fuchsia-200 dark:border-fuchsia-500/30">
          Coming 2026
        </span>
      </div>

      {/* Visual area */}
      <div className="flex-1 relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-white/5 min-h-[260px]">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="record"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col items-center justify-center"
            >
              {/* Microphone with recording animation */}
              <div className="relative mb-4">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: 9999 }}
                  className="w-20 h-20 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30 flex items-center justify-center"
                >
                  <Mic className="w-10 h-10 text-fuchsia-500" />
                </motion.div>
                {/* Recording rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                    transition={{ duration: 1.5, repeat: 9999, delay: ring * 0.3 }}
                    className="absolute inset-0 rounded-full border-2 border-fuchsia-400"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Recording your voice</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Just 5 minutes needed</p>
              {/* Progress */}
              <div className="mt-4 w-32">
                <div className="h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: 9999 }}
                    className="h-full bg-fuchsia-500 rounded-full"
                  />
                </div>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center mt-1">2:34 / 5:00</p>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="clone"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col items-center justify-center"
            >
              {/* AI processing animation */}
              <div className="relative w-32 h-32 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: 9999, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full bg-fuchsia-400"
                      style={{
                        top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 8)}%`,
                        left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 8)}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1, repeat: 9999, delay: i * 0.1 }}
                    />
                  ))}
                </motion.div>
                {/* Center */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center">
                  <span className="text-2xl text-white">✦</span>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Learning your voice</p>
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: 9999 }}
                className="text-xs text-fuchsia-500"
              >
                Analyzing speech patterns...
              </motion.p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="generate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5"
            >
              {/* Video generation preview */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl p-4 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-white">AI Video Studio</span>
                </div>
                {/* Waveform */}
                <div className="flex items-center gap-0.5 h-12 mb-3">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const h = Math.sin(i * 0.3) * 40 + 50;
                    return (
                      <motion.div
                        key={i}
                        animate={{ height: [`${h}%`, `${100 - h}%`, `${h}%`] }}
                        transition={{ duration: 1.5, repeat: 9999, delay: i * 0.03 }}
                        className="flex-1 rounded-full bg-fuchsia-500/60"
                      />
                    );
                  })}
                </div>
                {/* Avatar placeholder */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-300 to-pink-400 shadow-lg" />
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 0.5, repeat: 9999 }}
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-3 bg-fuchsia-400 rounded-full opacity-50"
                    />
                  </div>
                </div>
                <p className="text-white/60 text-[10px] text-center">Generating talking-head video...</p>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="publish"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 flex flex-col items-center justify-center"
            >
              {/* Final result */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="relative mb-4"
              >
                <div className="w-28 h-40 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 shadow-xl overflow-hidden">
                  {/* Phone frame */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full" />
                  {/* Video preview */}
                  <div className="absolute inset-3 top-5 rounded-xl bg-gradient-to-br from-fuchsia-400 to-pink-500 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/30" />
                  </div>
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-gray-800 ml-0.5" />
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
                >
                  <Check className="w-5 h-5 text-white" />
                </motion.div>
              </motion.div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your AI video is ready</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Zero filming required</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Step label */}
      <div className="text-center mt-4 mb-2">
        <motion.p key={step} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-semibold text-gray-900 dark:text-white">
          {steps[step].label}
        </motion.p>
        <motion.p key={`desc-${step}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs text-gray-500 dark:text-gray-400">
          {steps[step].desc}
        </motion.p>
      </div>

      {/* Step indicator - minimal */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1.5">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${step === i ? "w-6 bg-fuchsia-400 opacity-100" : step > i ? "w-2 bg-fuchsia-400 opacity-50" : "w-2 bg-gray-300 dark:bg-gray-600 opacity-30"}`}
              onClick={() => goToStep(i)}
            />
          ))}
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
    <section id="features" className="py-24 px-6 overflow-hidden bg-gray-50 dark:bg-[#0a0a0f] relative">
      {/* Grid background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(156, 163, 175, 0.08) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(156, 163, 175, 0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
        }}
      />
      <div className="max-w-6xl mx-auto relative z-10">

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
                    : "bg-white dark:bg-[#0a0a0f] border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:dark:text-white iridescent-hover"
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
                    transition={{ duration: 3, repeat: 9999, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {activeFeature.benefits.map((benefit, i) => {
                        const iconMap: Record<string, React.ReactNode> = {
                          Target: <Target className="w-4 h-4" />,
                          Brain: <Brain className="w-4 h-4" />,
                          TrendingUp: <TrendingUp className="w-4 h-4" />,
                          Zap: <Zap className="w-4 h-4" />,
                          Pencil: <Pencil className="w-4 h-4" />,
                          Palette: <Palette className="w-4 h-4" />,
                          Bot: <Bot className="w-4 h-4" />,
                          Smartphone: <Smartphone className="w-4 h-4" />,
                          MousePointerClick: <MousePointerClick className="w-4 h-4" />,
                          LayoutDashboard: <LayoutDashboard className="w-4 h-4" />,
                          RefreshCw: <RefreshCw className="w-4 h-4" />,
                          CalendarCheck: <CalendarCheck className="w-4 h-4" />,
                          Infinity: <Infinity className="w-4 h-4" />,
                          Sparkles: <Sparkles className="w-4 h-4" />,
                          PenTool: <PenTool className="w-4 h-4" />,
                          Calendar: <Calendar className="w-4 h-4" />,
                          Mic: <Mic className="w-4 h-4" />,
                          Clapperboard: <Clapperboard className="w-4 h-4" />,
                          VideoOff: <VideoOff className="w-4 h-4" />,
                        };
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-1.5"
                          >
                            <span className="text-fuchsia-500 dark:text-fuchsia-400">{iconMap[benefit.icon]}</span>
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{benefit.label}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                    {activeFeature.comingSoon && (
                      <span className="text-xs bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 px-2.5 py-1 rounded-full font-medium border border-gray-200 dark:border-white/10">Soon</span>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right: bento visual - shows below on mobile */}
            <motion.div 
              className="min-h-[280px] sm:min-h-[400px] order-last lg:order-none"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: 9999, ease: "easeInOut" }}
            >
              {bentoMap[activeFeature.bento]}
            </motion.div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
