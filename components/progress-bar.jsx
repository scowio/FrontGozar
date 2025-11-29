import { useState, useEffect } from 'react'

export default function ProgressBar({ duration , size = 120, stroke = 10 }) {
    const [percent, setPercent] = useState(0)

  useEffect(() => {
    let start = null

    const animate = ts => {
      if (!start) start = ts
      const progress = ts - start
      const current = Math.min((progress / duration) * 100, 100)
      setPercent(current)

      if (current < 100) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [duration])

  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  const getColor = p => {
    if (p < 25) return '#ef4444' 
    if (p < 50) return '#f59e0b' 
    if (p < 75) return '#3b82f6' 
    return '#10b981'       
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <circle
          stroke="#2a2f3a"
          fill="transparent"
          strokeWidth={stroke}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />

        <circle
          stroke={getColor(percent)}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-150"
        />
      </svg>

      <span className="text-white text-xl font-semibold mt-2">
        {Math.round(percent)}%
      </span>
    </div>
  )
}