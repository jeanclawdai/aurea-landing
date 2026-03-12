interface RiskBarProps {
  level: 1 | 2 | 3 | 4 | 5
  className?: string
}

const riskLabels = {
  1: 'Low Risk',
  2: 'Medium Risk',
  3: 'Elevated Risk',
  4: 'High Risk',
  5: 'Extreme Risk'
}

export function RiskBar({ level, className = '' }: RiskBarProps) {
  return (
    <div className={`${className}`}>
      <div className="flex items-center justify-between bg-holo-magenta/10 border border-holo-magenta/30 rounded-lg p-3">
        <span className="text-white font-bold flex items-center gap-2">
          Risk Management
        </span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i}
              className={`w-6 h-2 rounded-full ${i <= level ? 'bg-holo-magenta' : 'bg-silver/20'}`}
            />
          ))}
        </div>
      </div>
      <p className="text-silver-dark text-xs text-center -mt-1">
        Level {level}/5 — {riskLabels[level]}
      </p>
    </div>
  )
}
