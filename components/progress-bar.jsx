import { useEffect, useRef, useState } from 'react'

export default function ProgressCircle({
  duration = 3000,
  size = 80,
  stroke = 10
}) {
  const [percent, setPercent] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    let start = null
    cancelAnimationFrame(rafRef.current)

    const step = ts => {
      if (!start) start = ts
      const elapsed = ts - start
      const p = Math.min((elapsed / duration) * 100, 100)
      setPercent(p)
      if (p < 100) rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [duration])

  const half = size / 2
  const radius = half - stroke / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - percent / 100)

  const getColor = p => {
    if (p < 25) return '#22BB9C'
    if (p < 50) return '#FACC15'
    if (p < 60) return '#FB9400'
    if (p < 75) return '#FF4D67'
    return '#335EF7'
  }

  return (
    <div className="relative flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={`Progress ${Math.round(percent)} percent`}
      >
        <g transform={`rotate(-90 ${half} ${half})`}>
          <circle
            cx={half}
            cy={half}
            r={radius}
            stroke="#1f2937"
            strokeWidth={stroke}
            fill="none"
          />
          <circle
            cx={half}
            cy={half}
            r={radius}
            stroke={getColor(percent)}
            strokeWidth={stroke}
            strokeLinecap="butt"                
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
            fill="none"
            style={{ transition: 'stroke-dashoffset 120ms linear, stroke 200ms linear' }}
          />
        </g>
      </svg>

      <span className="absolute text-white text-xl font-semibold mt-2 select-none">
        {Math.round(percent)}%
      </span>
    </div>
  )
}

