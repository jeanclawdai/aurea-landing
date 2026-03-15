import { useState } from 'react'
import SpotlightCard from './SpotlightCard'
import GradientText from './GradientText'

interface JackpotSectionProps {
  jackpotTokens?: number
}

export default function JackpotSection({ jackpotTokens = 1000000 }: JackpotSectionProps) {
  const [contributeOpen, setContributeOpen] = useState(false)
  const [contribution, setContribution] = useState(0)
  
  const mainTarget = 1000000 // 1M target
  const contributorsJackpot = 100000 // 100k for contributors
  const contributorsTarget = 500000 
  
  const daysUntilPop = 2
  
  const progress = (jackpotTokens / mainTarget) * 100
  const contributorsProgress = (contribution / contributorsTarget) * 100

  const requirements = [
    { id: 'prediction', label: 'Prediction Pro', requirement: 'Spend $100+ on predictions', icon: '🎯' },
    { id: 'fusion', label: 'Fusion Staker', requirement: 'Stake $500+ on Fusion', icon: '🔄' },
    { id: 'holder', label: 'NIGGLETT Holder', requirement: 'Hold $2.5k+ in NIGGLET', icon: '💎' },
  ]

  const mockQualifications = {
    prediction: false,
    fusion: false,
    holder: true,
  }

  return (
    <section id="jackpot" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Container */}
        <div className="glass-panel p-6 md:p-10 rounded-2xl">
        
        {/* Main Jackpot Title */}
        <h2 className="font-display text-3xl md:text-4xl text-center mb-2">
          <GradientText>JACKPOT</GradientText>
        </h2>
        
        <p className="text-silver text-center text-sm mb-6">
          Fills from protocol revenue. Pops at 1M or end of month!
        </p>
        
        {/* Main Jackpot Display */}
        <div className="text-center mb-4">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl opacity-40" />
            <div className="relative bg-[#0F172A] border border-white/20 rounded-2xl px-10 py-5">
              <p className="text-silver/60 text-xs mb-1">Main Prize Pool</p>
              <p className="font-display text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                1M $NIGGLETT
              </p>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-silver">Progress</span>
            <span className="text-white">{Math.min(Math.round(progress), 100)}%</span>
          </div>
          <div className="h-3 bg-silver/10 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-white/80 via-white to-white/80 transition-all duration-1000"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-silver/50 text-[10px] text-center mt-1">
            {progress >= 100 ? '🎉 JACKPOT READY!' : 'Fills from protocol fees each month'}
          </p>
        </div>
        
        {/* ===== CONTRIBUTORS JACKPOT ===== */}
        <div className="mt-8 pt-6 border-t border-silver/10">
          <div className="text-center mb-4">
            <h3 className="font-display text-xl md:text-2xl mb-1">
              <span className="text-holo-gold">CONTRIBUTORS JACKPOT</span>
            </h3>
            <p className="text-silver/60 text-xs">Pops every 3 days • Contributors only</p>
          </div>
          
          {/* Contributors Jackpot Display */}
          <div className="text-center mb-3">
            <div className="inline-block">
              <div className="relative bg-[#0F172A] border border-holo-gold/20 rounded-lg px-6 py-3">
                <p className="text-holo-gold text-2xl md:text-3xl font-bold">
                  {contributorsJackpot.toLocaleString()} $NIGGLETT
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-3">
            <span className="text-holo-magenta text-sm font-bold">{daysUntilPop}</span>
            <span className="text-silver/60 text-xs ml-2">days until pop</span>
          </div>
          
          {/* Contributors Progress */}
          <div className="mb-4">
            <div className="h-2 bg-silver/10 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-holo-gold to-holo-cyan"
                style={{ width: `${Math.min(contributorsProgress, 100)}%` }}
              />
            </div>
          </div>
          
          {/* Contribute Button */}
          <div className="text-center">
            <button 
              onClick={() => setContributeOpen(!contributeOpen)}
              className="bg-gradient-to-r from-holo-gold to-holo-cyan text-black font-bold py-2 px-5 rounded-full text-sm hover:opacity-90 transition"
            >
              {contributeOpen ? 'Close' : 'Contribute + Get Multiplier'}
            </button>
          </div>
          
          {/* Contribute Input */}
          {contributeOpen && (
            <div className="mt-3 p-3 bg-silver/5 rounded-lg">
              <p className="text-silver/60 text-xs text-center mb-2">
                Contribute and earn 2x predictions multiplier!
              </p>
              <div className="flex gap-2 justify-center">
                <input 
                  type="number" 
                  placeholder="Amount"
                  className="bg-[#0F172A] border border-silver/30 rounded-lg px-4 py-2 text-white w-40 text-sm focus:border-holo-cyan outline-none"
                />
                <button className="bg-holo-cyan text-black font-bold px-4 py-2 rounded-lg text-sm">
                  Contribute
                </button>
              </div>
            </div>
          )}
          
          {contribution > 0 && (
            <p className="text-holo-gold text-center text-xs mt-2">
              You contributed: {contribution.toLocaleString()} $NIGGLETT
            </p>
          )}
        </div>
        
        {/* Requirements */}
        <p className="text-white text-sm font-bold text-center mt-6 mb-3">Qualification</p>
        <div className="grid grid-cols-3 gap-2">
          {requirements.map((req) => (
            <SpotlightCard 
              key={req.id}
              spotlightColor="rgba(71, 231, 255, 0.2)"
              className="p-3 text-center"
            >
              <div className="text-xl mb-1">{req.icon}</div>
              <p className="text-white text-xs font-bold">{req.label}</p>
              <p className="text-silver/60 text-[10px]">{req.requirement}</p>
              <div className={`mt-2 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                mockQualifications[req.id as keyof typeof mockQualifications] 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-silver/10 text-silver/50'
              }`}>
                {mockQualifications[req.id as keyof typeof mockQualifications] ? '✓' : '✗'}
              </div>
            </SpotlightCard>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-6">
          <button className="bg-gradient-to-r from-holo-cyan via-holo-violet to-holo-magenta text-black font-bold py-2 px-6 rounded-full text-sm">
            Connect Wallet
          </button>
        </div>
        
        </div>{/* End container */}
      </div>
    </section>
  )
}
