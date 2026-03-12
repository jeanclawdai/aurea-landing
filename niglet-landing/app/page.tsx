'use client'

import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { ChartLine, ArrowRight, Target, Robot, Gift, Warning, ArrowsClockwise, ChartBar, Users, Lightning, Star, Lock } from '@phosphor-icons/react'
import StarBorder from '@/components/StarBorder'
import LogoLoop from '@/components/LogoLoop'
import SpotlightCard from '@/components/SpotlightCard'
import GradientText from '@/components/GradientText'
import { RiskBar } from '@/components/RiskBar'
import JackpotSection from '@/components/JackpotSection'
import AIPrediction from '@/components/AIPrediction'

// Modal Component
function Modal({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!isOpen) return null
  
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-[#0F172A] border border-silver/20 rounded-2xl p-6 max-w-lg w-full mx-4 shadow-2xl max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-holo-cyan scrollbar-track-transparent"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-silver hover:text-white text-xl">✕</button>
        {children}
      </motion.div>
    </div>,
    document.body
  )
}

// Dynamic imports for reactbits components
const LightRays = dynamic(
  () => import('reactbits-installer/components/LightRays').then(mod => mod.default),
  { ssr: false, loading: () => null }
)

const Magnet = dynamic(
  () => import('reactbits-installer/components/Magnet').then(mod => mod.default),
  { ssr: false, loading: () => null }
)

const TiltedCard = dynamic(
  () => import('reactbits-installer/components/TiltedCard').then(mod => mod.default),
  { ssr: false, loading: () => null }
)

// Custom components
import ShinyText from '../components/ShinyText'
import MetallicText from '../components/MetallicText'

// ============ COMPONENTS ============

// Navigation
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [modalOpen, setModalOpen] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-panel py-3' : 'py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Left - Logo + Brand Name */}
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/niglet-card.png" 
            alt="NIGGLETT Logo" 
            className="w-9 h-9 rounded-lg object-contain logo-hover"
          />
          <span className="font-display text-xl tracking-wider text-silver-light font-bold">
            NIGGLETT
          </span>
        </a>

        {/* Right - Nav Links + Buy Button */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-0">
            <span className="text-[8px] text-holo-magenta font-bold">COMING SOON</span>
            <button onClick={() => setModalOpen('staking')} className="text-silver/80 hover:text-white text-sm font-medium bg-transparent border-none cursor-pointer flex items-center gap-1">
              <Lock size={14} /> Staking
            </button>
          </div>
          
          <div className="flex flex-col items-center gap-0">
            <span className="text-[8px] text-holo-magenta font-bold">COMING SOON</span>
            <button onClick={() => setModalOpen('fusion')} className="text-silver/80 hover:text-white text-sm font-medium bg-transparent border-none cursor-pointer flex items-center gap-1">
              <Lock size={14} /> Fusion Rebase
            </button>
          </div>
          
          <div className="flex flex-col items-center gap-0">
            <span className="text-[8px] text-holo-cyan font-bold animate-pulse">1M PRIZE</span>
            <a href="#jackpot" className="text-silver/80 hover:text-white text-sm font-medium flex items-center gap-1">
              <span className="bg-gradient-to-r from-holo-cyan via-holo-violet to-holo-magenta bg-clip-text text-transparent font-bold">JACKPOT</span>
            </a>
          </div>
          
          <a href="#chart" className="text-silver/80 hover:text-white text-sm font-medium flex items-center gap-2">
            <ChartLine size={18} weight="regular" />
            Chart
          </a>
          
          <a 
            href="#buy"
            className="nav-buy-button text-sm"
          >
            <span>Buy $NIGLET</span>
          </a>
        </div>
      </div>
      
      {/* Holo border line */}
      <div className="absolute bottom-0 left-0 right-0 h-px holographic-border" />
      
      {/* Staking Modal */}
      <Modal isOpen={modalOpen === 'staking'} onClose={() => setModalOpen(null)} title="STAKING">
        <div className="text-center">
          <h2 className="font-display text-3xl mb-2"><GradientText>STAKING</GradientText></h2>
          <p className="text-holo-magenta text-sm font-bold mb-6">COMING SOON</p>
          
          <div className="space-y-4 text-left">
            <p className="text-silver text-sm">
              <span className="text-white font-bold">NIGGLETT Prediction Arena</span> — Stake $NIGGLETT to predict crypto trends. Compete in daily & weekly arenas.
            </p>
            
            <RiskBar level={1} className="mt-4" />
            
            <div className="bg-silver/5 rounded-lg p-4">
              <p className="text-white font-bold mb-2 flex items-center gap-2"><Target size={20} className="gradient-icon" /> How it Works</p>
              <ul className="text-silver text-sm space-y-1">
                <li>• Join daily or weekly prediction pools</li>
                <li>• Predict crypto trends (YES/NO)</li>
                <li>• Win rewards from the pool</li>
                <li>• Clawbot Sentiment Scanner gives you intel</li>
              </ul>
            </div>
            
            <div className="bg-silver/5 rounded-lg p-4">
              <p className="text-white font-bold mb-2"><Robot size={20} className="gradient-icon" /> Clawbot Sentiment Scanner</p>
              <p className="text-silver text-sm">Pay a small $NIGGLETT fee to see what Clawbot thinks about any token. AI-powered sentiment analysis.</p>
            </div>
            
            <div className="bg-silver/5 rounded-lg p-4">
              <p className="text-white font-bold mb-2"><Gift size={20} className="gradient-icon" /> Edge & Bonuses</p>
              <p className="text-silver text-sm">Top predictors get bonus rewards. Some pools give edge to early participants!</p>
            </div>
          </div>
        </div>
      </Modal>

      {/* Fusion Rebase Modal */}
      <Modal isOpen={modalOpen === 'fusion'} onClose={() => setModalOpen(null)} title="FUSION REBASE">
        <div className="text-center">
          <h2 className="font-display text-3xl mb-2"><GradientText>FUSION REBASE</GradientText></h2>
          <p className="text-holo-magenta text-sm font-bold mb-6">COMING SOON</p>
          
          <div className="space-y-4 text-left">
            <p className="text-silver text-sm">
              <span className="text-white font-bold">Automatic Token Fusion</span> — Stake $NIGGLETT to automatically compound rewards through rebasing mechanics.
            </p>
            
            <RiskBar level={2} className="mt-4" />
            
            <div className="bg-silver/5 rounded-lg p-4">
              <p className="text-white font-bold mb-2"><ArrowsClockwise size={20} className="gradient-icon" /> How it Works</p>
              <ul className="text-silver text-sm space-y-1">
                <li>• Join daily or weekly prediction pools</li>
                <li>• Predict crypto trends (YES/NO)</li>
                <li>• Win rewards from the pool</li>
                <li>• Clawbot Sentiment Scanner gives you intel</li>
              </ul>
            </div>
            
            <div className="bg-silver/5 rounded-lg p-4">
              <p className="text-white font-bold mb-2"><Robot size={20} className="gradient-icon" /> Clawbot Sentiment Scanner</p>
              <p className="text-silver text-sm">Pay a small $NIGGLETT fee to see what Clawbot thinks about any token. AI-powered sentiment analysis.</p>
            </div>
            
            <div className="bg-silver/5 rounded-lg p-4">
              <p className="text-white font-bold mb-2"><Gift size={20} className="gradient-icon" /> Edge & Bonuses</p>
              <p className="text-silver text-sm">Top predictors get bonus rewards. Some pools give edge to early participants!</p>
            </div>
          </div>
        </div>
      </Modal>
    </nav>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Light Rays Background - Full Hero Section */}
      <div className="absolute inset-0 z-0">
        <LightRays color="#47E7FF" opacity={0.15} />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left - Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Rarity pill */}
          <div className="rarity-pill mb-4">
            <span className="hyper">Hyper Rare</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl mb-8 leading-tight font-bold">
            <MetallicText>
              $Nigglet
            </MetallicText>
          </h1>
          
          <p className="text-xl text-silver mb-8 max-w-md">
            A shiny trench-born meme with collector-grade energy.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Magnet strength={0.4}>
              <a href="#buy" className="primary-cta-button text-lg px-8 py-4 inline-block flex items-center gap-2">
                Buy $NIGLET
              </a>
            </Magnet>
            <StarBorder as="a" href="#lore" color="#47E7FF" speed="3s">
              Read the Lore
            </StarBorder>
          </div>
        </motion.div>

        {/* Right - Hologram Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <HoloCard />
        </motion.div>
      </div>
    </section>
  )
}

// Interactive Hologram Card
function HoloCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePos({ x, y })
  }

  const rotateX = mousePos.y * 90
  const rotateY = -mousePos.x * 90

  return (
    <div 
      ref={cardRef}
      className="holo-square w-full max-w-md aspect-square cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      <motion.div 
        className="holo-square-inner w-full h-full relative"
        animate={{ 
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Square Image */}
        <div className="absolute inset-[10px] rounded-xl overflow-hidden">
          <img 
            src="/niglet-card.png" 
            alt="NIGLET Square" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Subtle Hologram Shine */}
        <div 
          className="holo-square-shine"
          style={{
            backgroundPosition: `${mousePos.x * 100 + 50}% ${mousePos.y * 100 + 50}%`,
            opacity: isHovered ? 0.7 : 0.4,
          }}
        />

        {/* Gentle flare effect on hover */}
        <div 
          className="absolute overflow-hidden pointer-events-none"
          style={{
            inset: '10px',
            borderRadius: '8px',
            background: `radial-gradient(circle at ${(mousePos.x + 1) * 50}% ${(mousePos.y + 1) * 50}%, 
              rgba(255,255,255,0.15) 0%, 
              rgba(71, 231, 255, 0.1) 30%, 
              transparent 50%)`,
            opacity: isHovered ? 0.6 : 0,
            transition: 'opacity 0.3s ease-out',
          }}
        />

        {/* Subtle shimmer band */}
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{
            background: 'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.08) 48%, rgba(71, 231, 255, 0.06) 50%, rgba(255,255,255,0.08) 52%, transparent 100%)',
            transform: `translateX(${-50 + mousePos.x * 100}%)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </motion.div>

      {/* Mobile floating animation fallback */}
      <div className="lg:hidden absolute -inset-4 rounded-2xl bg-gradient-to-br from-holo-cyan/10 via-holo-violet/10 to-holo-magenta/10 -z-10 animate-float" />
    </div>
  )
}

// Partners Section with LogoLoop
function PartnersSection() {
  // Using placeholder images - replace with actual logos
  const partnerLogos = [
    { src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='25' fill='%2347E7FF'/%3E%3Ctext x='30' y='38' font-size='16' fill='%23000' text-anchor='middle' font-weight='bold'%3E1%3C/text%3E%3C/svg%3E", alt: "Partner 1" },
    { src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='25' fill='%23B06CFF'/%3E%3Ctext x='30' y='38' font-size='16' fill='%23000' text-anchor='middle' font-weight='bold'%3E2%3C/text%3E%3C/svg%3E", alt: "Partner 2" },
    { src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='25' fill='%23FF5CC8'/%3E%3Ctext x='30' y='38' font-size='16' fill='%23000' text-anchor='middle' font-weight='bold'%3E3%3C/text%3E%3C/svg%3E", alt: "Partner 3" },
    { src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='25' fill='%23FFE07A'/%3E%3Ctext x='30' y='38' font-size='16' fill='%23000' text-anchor='middle' font-weight='bold'%3E4%3C/text%3E%3C/svg%3E", alt: "Partner 4" },
    { src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='25' fill='%2347E7FF'/%3E%3Ctext x='30' y='38' font-size='16' fill='%23000' text-anchor='middle' font-weight='bold'%3E5%3C/text%3E%3C/svg%3E", alt: "Partner 5" },
    { src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='25' fill='%23B06CFF'/%3E%3Ctext x='30' y='38' font-size='16' fill='%23000' text-anchor='middle' font-weight='bold'%3E6%3C/text%3E%3C/svg%3E", alt: "Partner 6" },
  ]

  return (
    <div className="py-8 relative z-10">
      <LogoLoop 
        logos={partnerLogos}
        speed={50}
        direction="left"
        logoHeight={80}
        gap={400}
        fadeOut={true}
        fadeOutColor="#060010"
        ariaLabel="Partners"
        pauseOnHover={true}
        style={{ '--logoloop-gap': '150px', '--logoloop-logoHeight': '100px', padding: '0 60px' }}
      />
    </div>
  )
}

// Section Wrapper
function Section({ id, children, className = '' }: { id: string, children: React.ReactNode, className?: string }) {
  return (
    <section id={id} className={`py-24 relative ${className}`}>
      <div className="max-w-4xl mx-auto px-6">
        {children}
      </div>
    </section>
  )
}

// Lore Section
function LoreSection() {
  return (
    <Section id="lore">
      <motion.div 
        className=""
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl md:text-5xl text-center mb-8">
          <GradientText>THE LORE</GradientText>
        </h2>
        
        <div className="space-y-4 text-silver leading-relaxed text-lg max-w-2xl mx-auto text-center">
          <p>
            NIGGLETT is an experimental meme coin built with agentic technology.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {[
            { label: 'ORIGIN', value: 'OpenClaw agentic tech gave life to this experiment' },
            { label: 'POWER', value: 'AI meets Web3. Making the impossible possible' },
            { label: 'WEAKNESS', value: 'Those who lack vision. Only risk takers earn the prize.' },
            { label: 'GOAL', value: 'AI powered DeFi experiments and remastered legends' },
          ].map((item, i) => (
            <SpotlightCard key={item.label} spotlightColor="rgba(255, 92, 200, 0.4)" className="p-6 rounded-xl">
              <span className="text-holo-gold text-sm font-bold">{item.label}</span>
              <p className="text-silver-light mt-2 text-sm">{item.value}</p>
            </SpotlightCard>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}

// How to Buy Section
function HowToBuySection() {
  const steps = [
    { icon: '🔗', title: 'Connect Wallet', desc: 'Link your wallet to Base network' },
    { icon: '💱', title: 'Get ETH', desc: 'Bridge or transfer ETH to Base' },
    { icon: '📈', title: 'Swap', desc: 'Exchange ETH for $NIGLET on DEX' },
    { icon: '💎', title: 'HODL', desc: 'Store safely and flex your rare gem' },
  ]

  return (
    <Section id="buy">
      <motion.div 
        className="max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl md:text-5xl text-center mb-8">
          <GradientText>HOW TO BUY</GradientText>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full glass-panel flex items-center justify-center text-3xl">
                {step.icon}
              </div>
              <h3 className="font-bold text-silver-light mb-2">{step.title}</h3>
              <p className="text-silver text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="holo-button text-lg inline-block px-10 py-4"
          >
            <span>Buy $NIGLET on DEX</span>
          </a>
        </div>
      </motion.div>
    </Section>
  )
}

// Chart Section
function ChartSection() {
  const metrics = [
    { label: 'Market Cap', value: '$2.4M', color: 'text-holo-cyan' },
    { label: '24h Volume', value: '$180K', color: 'text-holo-violet' },
    { label: 'Holders', value: '1,247', color: 'text-holo-magenta' },
  ]

  return (
    <Section id="chart">
      <motion.div 
        className="max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl md:text-5xl text-center mb-6">
          <GradientText>CHART</GradientText>
        </h2>

        {/* Metrics Cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {metrics.map((m) => (
            <div key={m.label} className="glass-panel p-3 rounded-xl text-center">
              <p className="text-silver/60 text-xs">{m.label}</p>
              <p className={`font-bold text-lg ${m.color}`}>{m.value}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="aspect-[16/10] glass-panel overflow-hidden rounded-xl mb-4">
          <iframe 
            src="https://dexscreener.com/base/0x74f22a01da78294f8df640c98a414fe209e33f60?embed=1&trades=0&info=0" 
            className="w-full h-full"
            frameBorder="0"
            title="DexScreener Chart"
          />
        </div>

        <div className="text-center">
          <a 
            href="https://dexscreener.com/base/0x74f22a01da78294f8df640c98a414fe209e33f60" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-silver/60 text-sm hover:text-white transition"
          >
            Open in DexScreener →
          </a>
        </div>
      </motion.div>
    </Section>
  )
}

// Roadmap Section
function RoadmapSection() {
  const phases = [
    { 
      phase: 'Phase 1', 
      title: 'Launch & Expansion', 
      items: ['Token launch', 'Community building', 'DEX listings', 'Initial traction'] 
    },
    { 
      phase: 'Phase 2', 
      title: 'Social Growth', 
      items: ['Social media expansion', 'Community campaigns', 'Viral content', 'Partnerships'] 
    },
    { 
      phase: 'Phase 3', 
      title: 'Prediction Markets', 
      items: ['Launch Prediction Arena', 'Clawbot Sentiment Scanner', 'Daily & weekly pools', 'User rewards'] 
    },
    { 
      phase: 'Phase 4', 
      title: 'Fusion Rebase', 
      items: ['Token fusion mechanics', 'rNIGGLETT token', 'Revenue sharing', 'Sustainable rewards'] 
    },
  ]

  return (
    <Section id="roadmap">
      <motion.div 
        className="max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl md:text-5xl text-center mb-10">
          <GradientText>ROADMAP</GradientText>
        </h2>

        <div className="grid gap-4">
          {phases.map((p, i) => (
            <motion.div 
              key={p.phase}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-4 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-holo-cyan text-xs font-bold px-2 py-1 rounded-full bg-holo-cyan/10">{p.phase}</span>
                <span className="font-display text-lg text-white">{p.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.items.map((item) => (
                  <span key={item} className="text-silver/60 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}

// FAQ Section
function FAQSection() {
  const faqs = [
    { q: 'Is this a security?', a: 'No. NIGLET is a community meme token. No team tokens, no presale, no promises.' },
    { q: 'Is it traded on CEX?', a: 'Not yet. Currently available on DEX only. Phase 3目标是 major CEX listing.' },
    { q: 'What makes NIGLET rare?', a: 'Only 1/1 exists. It is hyper rare by design. No more will ever be minted.' },
    { q: 'How do I store NIGLET?', a: 'Any ERC-20 compatible wallet on Base. Metamask, Rabby, Frame, etc.' },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section id="faq">
      <motion.div 
        className="section-frame"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12">
          <GradientText>FAQ</GradientText>
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              className="faq-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                className="faq-question w-full text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className="text-holo-cyan text-2xl">{openIndex === i ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    className="faq-answer text-silver pb-4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-silver/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {['𝕏', '✈', '💬'].map((icon, i) => (
            <a 
              key={i}
              href="#"
              className="w-12 h-12 glass-panel flex items-center justify-center text-xl hover:text-holo-cyan hover:border-holo-cyan/50 transition-all"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-silver-dark text-sm mb-4">
          Community meme token. No promises. DYOR.
        </p>
        
        <p className="text-silver text-xs">
          © 2026 NIGLET. All vibes reserved.
        </p>
      </div>
    </footer>
  )
}

// ============ MAIN PAGE ============

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PartnersSection />
      <LoreSection />
      <JackpotSection jackpotTokens={1250000} />
      <AIPrediction />
      <HowToBuySection />
      <ChartSection />
      <RoadmapSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
