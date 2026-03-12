import { useState, useEffect } from 'react'
import GradientText from './GradientText'

export default function AIPrediction() {
  const [prediction, setPrediction] = useState('')
  const [loading, setLoading] = useState(true)

  const predictions = [
    { emoji: '🚀', text: 'Base TVL will surpass $5B this month. AI confidence: 73%' },
    { emoji: '📊', text: 'Meme coins will see 40% volume increase. AI confidence: 68%' },
    { emoji: '💎', text: 'DeFi summer returns with new momentum. AI confidence: 81%' },
    { emoji: '🎯', text: 'AI agents will drive next crypto narrative. AI confidence: 77%' },
    { emoji: '🔥', text: 'SocialFi platforms gain major traction. AI confidence: 71%' },
    { emoji: '⚡', text: 'Fastest blocktimes become competitive advantage. AI confidence: 65%' },
  ]

  useEffect(() => {
    const random = predictions[Math.floor(Math.random() * predictions.length)]
    setPrediction(random)
    setLoading(false)
  }, [])

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="glass-panel p-8 rounded-2xl text-center">
          <div className="text-xs text-silver/50 mb-2">
            ✨ Made by a live AI agent
          </div>
          
          <h3 className="font-display text-2xl mb-4">
            <GradientText>AI Prediction of the Day</GradientText>
          </h3>
          
          {loading ? (
            <div className="text-silver/60">Analyzing markets...</div>
          ) : (
            <div className="space-y-4">
              <div className="text-5xl mb-2">{prediction.emoji}</div>
              <p className="text-white text-lg">{prediction.text}</p>
            </div>
          )}
          
          <div className="mt-6 pt-4 border-t border-silver/10">
            <p className="text-silver/40 text-xs">
              This is an experiment. Not financial advice. Built by an AI agent exploring crypto.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
