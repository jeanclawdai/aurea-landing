"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SectionPill } from "@/components/ui/section-pill";
import { useState } from "react";
import { useLang } from "../context/LanguageContext";

// ─── Feature definitions ────────────────────────────────────────────────────

const featuresEn = [
  {
    id: "pattern",
    icon: "🔬",
    label: "Pattern Intelligence",
    comingSoon: false,
    headline: "Know what goes viral. Before you post.",
    description: "Aurea's core engine is trained on 10,000+ viral posts across aesthetic clinics and beauty brands. It extracts the exact hooks, pacing, caption structures, and CTAs that make content explode — so every post you publish is built on data, not guesswork.",
    stats: [
      { value: "10K+", label: "Posts analyzed" },
      { value: "94%", label: "Hook accuracy" },
      { value: "3.2×", label: "Avg reach boost" },
    ],
    bento: "pattern",
  },
  {
    id: "content",
    icon: "✨",
    label: "Auto Content Generation",
    comingSoon: false,
    headline: "From idea to published post in minutes.",
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
    icon: "📅",
    label: "Smart Scheduling",
    comingSoon: false,
    headline: "Post at the perfect moment. Every time.",
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
    icon: "📊",
    label: "Analytics & Insights",
    comingSoon: false,
    headline: "See what works. Double down on it.",
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
    icon: "🎨",
    label: "Brand Kit",
    comingSoon: false,
    headline: "Always on-brand. Zero effort.",
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
    icon: "🏷️",
    label: "Caption & Hashtag Engine",
    comingSoon: false,
    headline: "Captions that sound like you. Hashtags that work.",
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
    icon: "🎙️",
    label: "Voice & Video AI",
    comingSoon: true,
    headline: "Your voice. Your face. Zero filming.",
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
    icon: "🔬",
    label: "Inteligência de Padrões",
    comingSoon: false,
    headline: "Sabe o que fica viral. Antes de publicar.",
    description: "O motor central da Aurea é treinado em mais de 10.000 publicações virais de clínicas estéticas e marcas de beleza. Extrai os hooks exactos, ritmos, estruturas de legenda e CTAs que fazem o conteúdo explodir — para que cada post que publiques seja baseado em dados, não em intuição.",
    stats: [
      { value: "10K+", label: "Posts analisados" },
      { value: "94%", label: "Precisão de hooks" },
      { value: "3.2×", label: "Aumento médio de alcance" },
    ],
    bento: "pattern",
  },
  {
    id: "content",
    icon: "✨",
    label: "Geração de Conteúdo Auto",
    comingSoon: false,
    headline: "De ideia a post publicado em minutos.",
    description: "Gera posts estáticos, carrosséis e scripts de Reels automaticamente. Cada peça é totalmente editável via integração Canva — ajusta fontes, cores e layouts com controlo criativo total. Aprova, edita ou rejeita. Tu és sempre o diretor criativo.",
    stats: [
      { value: "30+", label: "Posts/mês" },
      { value: "100%", label: "Editável" },
      { value: "5min", label: "Tempo médio de criação" },
    ],
    bento: "content",
  },
  {
    id: "scheduling",
    icon: "📅",
    label: "Agendamento Inteligente",
    comingSoon: false,
    headline: "Publica no momento perfeito. Sempre.",
    description: "A IA prevê os melhores dias e horas para publicar com base nos padrões de comportamento da tua audiência. Um clique agenda e publica simultaneamente no Instagram, TikTok e YouTube — com formatos e metadados optimizados por plataforma.",
    stats: [
      { value: "3×", label: "Plataformas em simultâneo" },
      { value: "IA", label: "Previsão de horário" },
      { value: "0", label: "Esforço manual" },
    ],
    bento: "scheduling",
  },
  {
    id: "analytics",
    icon: "📊",
    label: "Analytics & Insights",
    comingSoon: false,
    headline: "Vê o que funciona. Aposta nisso.",
    description: "Acompanha alcance, engagement, crescimento de seguidores e conversões de reservas em todas as plataformas num único dashboard. A Aurea aprende com os teus melhores posts e alimenta automaticamente esses padrões no conteúdo futuro.",
    stats: [
      { value: "Tudo", label: "Plataformas unificadas" },
      { value: "Live", label: "Feed de dados" },
      { value: "↑", label: "IA auto-melhorável" },
    ],
    bento: "analytics",
  },
  {
    id: "brand",
    icon: "🎨",
    label: "Brand Kit",
    comingSoon: false,
    headline: "Sempre na identidade da marca. Sem esforço.",
    description: "Faz upload do teu logotipo, fontes e cores uma vez. Todo o conteúdo que a Aurea gerar — para sempre — será automaticamente estilizado com a tua marca. Sem posts fora de contexto, sem formatação manual.",
    stats: [
      { value: "1×", label: "Configuração" },
      { value: "∞", label: "Posts on-brand" },
      { value: "0", label: "Retrabalho necessário" },
    ],
    bento: "brand",
  },
  {
    id: "caption",
    icon: "🏷️",
    label: "Motor de Legendas & Hashtags",
    comingSoon: false,
    headline: "Legendas que soam a ti. Hashtags que funcionam.",
    description: "A Aurea escreve legendas na tua voz de marca única — não copy genérico de IA. Cada legenda é acompanhada de hashtags baseados em dados, optimizados por plataforma e nicho, actualizados diariamente.",
    stats: [
      { value: "A tua", label: "Voz de marca" },
      { value: "Diário", label: "Actualização de hashtags" },
      { value: "3×", label: "Plataformas optimizadas" },
    ],
    bento: "caption",
  },
  {
    id: "voice",
    icon: "🎙️",
    label: "Voz & Vídeo IA",
    comingSoon: true,
    headline: "A tua voz. A tua cara. Sem filmar.",
    description: "Em breve: clona a tua voz com uma gravação de 5 minutos. Gera vídeos talking-head com a tua aparência usando IA. Publica Reels e TikToks com a tua presença — sem pegar numa câmara. O futuro do conteúdo de marca pessoal.",
    stats: [
      { value: "5min", label: "Configuração de voz" },
      { value: "IA", label: "Geração de vídeo" },
      { value: "Breve", label: "Lançamento 2026" },
    ],
    bento: "voice",
  },
];

// ─── Bento Visuals ───────────────────────────────────────────────────────────

function BentoPattern() {
  const posts = [
    { hook: "5 signs your skin is begging for hydration", engagement: "8.7%", views: "47.2K", hot: true },
    { hook: "POV: You finally found the right clinic", engagement: "6.2%", views: "23.1K", hot: false },
    { hook: "Before & after 30 days of treatment", engagement: "11.3%", views: "89.4K", hot: true },
    { hook: "3 things aestheticians won't tell you", engagement: "9.1%", views: "61.8K", hot: true },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      {/* Heatmap card */}
      <div className="col-span-2 bg-gray-950 rounded-2xl p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-white/60 text-xs font-medium">Viral Score Heatmap</span>
          <span className="text-emerald-400 text-xs font-bold">LIVE</span>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({length: 28}).map((_, i) => {
            const intensity = Math.random();
            const bg = intensity > 0.8 ? "bg-emerald-400" : intensity > 0.6 ? "bg-emerald-600/70" : intensity > 0.4 ? "bg-blue-500/50" : intensity > 0.2 ? "bg-purple-500/30" : "bg-white/5";
            return <div key={i} className={`h-6 rounded ${bg}`} />;
          })}
        </div>
        <div className="flex items-center gap-3 text-[10px] text-white/40">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-emerald-400 inline-block" />High viral</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-blue-500/50 inline-block" />Medium</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-white/10 inline-block" />Low</span>
        </div>
      </div>
      {/* Top hooks */}
      <div className="col-span-2 bg-white rounded-2xl p-4 border border-gray-100 flex flex-col gap-2.5">
        <span className="text-gray-500 text-xs font-medium mb-1">🔥 Top Performing Hooks</span>
        {posts.slice(0, 3).map((p, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <span className="text-gray-800 text-xs flex-1 truncate">{p.hook}</span>
            <span className={`text-xs font-bold flex-shrink-0 ${p.hot ? "text-emerald-500" : "text-gray-400"}`}>{p.engagement}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BentoContent() {
  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      {/* Canva editor mockup */}
      <div className="col-span-2 bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 border-b border-gray-100 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-400" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><div className="w-2.5 h-2.5 rounded-full bg-green-400" /></div>
          <span className="text-gray-500 text-xs mx-auto">Aurea × Canva Editor</span>
        </div>
        <div className="p-4 flex gap-3">
          {/* Sidebar */}
          <div className="flex flex-col gap-2 w-20">
            {["🖼️ Media", "✍️ Text", "🎨 Brand", "📐 Layout"].map((item, i) => (
              <div key={i} className={`text-[10px] py-1.5 px-2 rounded-lg cursor-pointer ${i === 2 ? "bg-purple-100 text-purple-700 font-semibold" : "text-gray-500 hover:bg-gray-100"}`}>{item}</div>
            ))}
          </div>
          {/* Canvas */}
          <div className="flex-1 bg-gradient-to-br from-violet-200 via-purple-100 to-blue-200 rounded-xl flex items-center justify-center aspect-square">
            <div className="text-center">
              <div className="text-2xl mb-1">✨</div>
              <div className="text-[10px] font-bold text-purple-800">Clínica Aurora</div>
              <div className="text-[9px] text-purple-600">Medicina Estética</div>
            </div>
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="bg-emerald-50 rounded-2xl p-3 flex flex-col justify-between border border-emerald-100">
        <span className="text-emerald-600 text-[10px] font-semibold">GENERATED</span>
        <div>
          <div className="text-2xl font-black text-emerald-700">30+</div>
          <div className="text-[10px] text-emerald-600">posts this month</div>
        </div>
      </div>
      <div className="bg-blue-50 rounded-2xl p-3 flex flex-col justify-between border border-blue-100">
        <span className="text-blue-600 text-[10px] font-semibold">EDITABLE</span>
        <div>
          <div className="text-2xl font-black text-blue-700">100%</div>
          <div className="text-[10px] text-blue-600">creative control</div>
        </div>
      </div>
    </div>
  );
}

function BentoScheduling() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const schedule = [
    { day: 0, time: "09:00", platform: "IG", label: "Before/After Reel", ai: true },
    { day: 1, time: "18:00", platform: "TT", label: "Trending Hook Post", ai: true },
    { day: 2, time: "12:00", platform: "YT", label: "Treatment Explainer", ai: false },
    { day: 3, time: "09:00", platform: "IG", label: "Client Testimonial", ai: true },
    { day: 4, time: "17:00", platform: "TT", label: "POV Series Ep.3", ai: true },
    { day: 5, time: "11:00", platform: "IG", label: "Weekend Promo", ai: false },
  ];
  const platformColors: Record<string, string> = { IG: "bg-pink-500", TT: "bg-gray-900", YT: "bg-red-500" };

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Week header */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => (
          <div key={i} className={`text-center text-[10px] font-semibold rounded-lg py-1 ${i === 0 || i === 3 ? "bg-primary/10 text-primary" : "text-gray-400"}`}>{d}</div>
        ))}
      </div>
      {/* Schedule slots */}
      <div className="bg-white rounded-2xl border border-gray-100 p-3 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-gray-700 text-xs font-semibold">This Week</span>
          <span className="text-[10px] text-purple-600 font-medium bg-purple-50 px-2 py-0.5 rounded-full">AI Optimised</span>
        </div>
        {schedule.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-2"
          >
            <span className="text-[10px] text-gray-400 w-9 flex-shrink-0">{s.time}</span>
            <span className={`text-[9px] text-white font-bold px-1.5 py-0.5 rounded-md flex-shrink-0 ${platformColors[s.platform]}`}>{s.platform}</span>
            <span className="text-[11px] text-gray-700 flex-1 truncate">{s.label}</span>
            {s.ai && <span className="text-[9px] text-emerald-600 font-medium flex-shrink-0">✦ AI</span>}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BentoAnalytics() {
  const weeks = [22, 31, 28, 45, 38, 67, 89, 72, 95, 88, 102, 118];
  const max = Math.max(...weeks);
  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      {/* Growth chart */}
      <div className="col-span-2 bg-gray-950 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white/60 text-xs">Follower Growth</span>
          <span className="text-emerald-400 text-xs font-bold">+847%</span>
        </div>
        <div className="flex items-end gap-1 h-16">
          {weeks.map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${(v / max) * 100}%` }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`flex-1 rounded-sm ${i === weeks.length - 1 ? "bg-emerald-400" : "bg-white/20"}`}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1 text-[9px] text-white/30">
          <span>Jan</span><span>Jun</span><span>Now</span>
        </div>
      </div>
      {/* Metric cards */}
      {[
        { label: "Avg Engagement", value: "8.7%", color: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
        { label: "Views/Day", value: "47.2K", color: "text-purple-600", bg: "bg-purple-50 border-purple-100" },
        { label: "Posts/Mo", value: "+184", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
        { label: "Bookings", value: "+34", color: "text-pink-600", bg: "bg-pink-50 border-pink-100" },
      ].map((m, i) => (
        <div key={i} className={`rounded-2xl p-3 border flex flex-col justify-between ${m.bg}`}>
          <span className="text-[9px] text-gray-500 font-medium uppercase tracking-wide">{m.label}</span>
          <span className={`text-xl font-black ${m.color}`}>{m.value}</span>
        </div>
      ))}
    </div>
  );
}

function BentoBrand() {
  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      {/* Brand preview */}
      <div className="col-span-2 bg-white rounded-2xl border border-gray-100 p-4">
        <div className="text-xs text-gray-500 font-medium mb-3">Brand Kit Preview</div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-blue-400 flex items-center justify-center text-white font-black text-lg">A</div>
          <div>
            <div className="font-bold text-gray-900 text-sm">Clínica Aurora</div>
            <div className="text-[10px] text-gray-400">Brand identity loaded ✓</div>
          </div>
        </div>
        {/* Colors */}
        <div className="flex gap-1.5 mb-3">
          {["#6FA8FF","#A8B8FF","#D4A8FF","#1A2A4A","#FFFFFF"].map((c, i) => (
            <div key={i} className="w-7 h-7 rounded-lg border border-gray-100 shadow-sm" style={{ background: c }} />
          ))}
        </div>
        {/* Fonts */}
        <div className="flex gap-2 text-[10px]">
          <span className="px-2 py-1 bg-gray-50 rounded-lg text-gray-600 font-mono">Inter</span>
          <span className="px-2 py-1 bg-gray-50 rounded-lg text-gray-600 italic" style={{ fontFamily: "serif" }}>Playfair</span>
        </div>
      </div>
      <div className="col-span-2 bg-gradient-to-r from-violet-50 to-blue-50 rounded-2xl border border-purple-100 p-4 flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold text-purple-800">Auto-applied to every post</div>
          <div className="text-[10px] text-purple-500 mt-0.5">No manual formatting ever</div>
        </div>
        <div className="text-2xl">✦</div>
      </div>
    </div>
  );
}

function BentoCaption() {
  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      <div className="col-span-2 bg-white rounded-2xl border border-gray-100 p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Generated Caption</span>
          <span className="text-[9px] bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full font-medium">Your voice</span>
        </div>
        <p className="text-sm text-gray-800 leading-relaxed mb-3">
          "Your skin has been through a lot this winter. Time to give it the reset it deserves. ✨ Booking link in bio — spaces filling fast."
        </p>
        <div className="flex flex-wrap gap-1">
          {["#clinicaestética", "#skincare", "#médicinaestética", "#lisboa", "#beleza"].map((tag, i) => (
            <span key={i} className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{tag}</span>
          ))}
        </div>
      </div>
      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3">
        <div className="text-[10px] text-emerald-600 font-semibold mb-1">UPDATED</div>
        <div className="text-lg font-black text-emerald-700">Daily</div>
        <div className="text-[10px] text-emerald-600">hashtag refresh</div>
      </div>
      <div className="bg-pink-50 border border-pink-100 rounded-2xl p-3">
        <div className="text-[10px] text-pink-600 font-semibold mb-1">PLATFORMS</div>
        <div className="text-lg font-black text-pink-700">3×</div>
        <div className="text-[10px] text-pink-600">optimised sets</div>
      </div>
    </div>
  );
}

function BentoVoice() {
  return (
    <div className="grid grid-cols-2 gap-3 h-full opacity-80">
      <div className="col-span-2 bg-gray-950 rounded-2xl p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-white/70 text-xs">Voice Synthesis</span>
            <span className="text-[9px] bg-amber-400/20 text-amber-400 px-2 py-0.5 rounded-full font-semibold">COMING SOON</span>
          </div>
          {/* Waveform */}
          <div className="flex items-center gap-0.5 h-12 mb-3">
            {Array.from({length: 40}).map((_, i) => {
              const h = Math.sin(i * 0.5) * 50 + 50;
              return <div key={i} className="flex-1 rounded-full bg-purple-400/50" style={{ height: `${h}%` }} />;
            })}
          </div>
          <div className="text-white/50 text-[10px]">5-minute recording → infinite content in your voice</div>
        </div>
      </div>
      <div className="col-span-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100 p-4 flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold text-purple-800">Video AI generation</div>
          <div className="text-[10px] text-purple-500 mt-0.5">Your face. Your voice. Zero filming.</div>
        </div>
        <span className="text-[9px] bg-amber-100 text-amber-600 px-2 py-1 rounded-full font-semibold">2026</span>
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

  return (
    <section id="features" className="py-24 px-6 overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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

        {/* Tab pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {features.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${active === f.id
                  ? "bg-white text-gray-900 shadow-md shadow-gray-200/80 scale-105"
                  : "bg-white/60 text-gray-500 hover:bg-white hover:text-gray-700 hover:scale-102 hover:shadow-sm"
                }`}
            >
              {/* Active indicator dot */}
              {active === f.id && (
                <motion.span
                  layoutId="active-dot"
                  className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                />
              )}
              <span>{f.icon}</span>
              <span>{f.label}</span>
              {f.comingSoon && (
                <span className="text-[9px] bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded-full font-semibold">Soon</span>
              )}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            {/* Left: copy + stats */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-3xl">{activeFeature.icon}</span>
                  {activeFeature.comingSoon && (
                    <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded-full font-semibold">Coming Soon</span>
                  )}
                </div>
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
                  <div key={i} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm text-center">
                    <div className="text-2xl font-black text-gray-950">{s.value}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: bento visual */}
            <div className="h-[360px]">
              {bentoMap[activeFeature.bento]}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
