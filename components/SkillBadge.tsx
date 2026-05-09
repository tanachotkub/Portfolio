"use client"
import { useEffect, useRef, useState } from "react"

interface SkillBarProps { label: string; pct: number }

export function SkillBar({ label, pct }: SkillBarProps) {
  const [width, setWidth] = useState(0)
  const ref   = useRef<HTMLDivElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced-motion — show final value immediately, no animation
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setWidth(pct)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer.current = setTimeout(() => setWidth(pct), 200)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)

    return () => {
      obs.disconnect()
      if (timer.current) clearTimeout(timer.current)
    }
  }, [pct])

  // Clamp pct to valid range so the bar never overflows or goes negative
  const safePct = Math.min(100, Math.max(0, pct))

  return (
    <div ref={ref} className="space-y-1.5 sm:space-y-2">
      <div className="flex justify-between items-center text-xs sm:text-sm font-medium">
        <span className="text-slate-700">{label}</span>
        <span className="text-blue-600 tabular-nums">{safePct}%</span>
      </div>
      <div
        className="skill-bar h-1.5 sm:h-2 bg-slate-100 w-full rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={width}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div className="skill-fill h-full rounded-full" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

export function TechChip({ label }: { label: string }) {
  return (
    <span className="tech-chip text-xs sm:text-sm px-2.5 sm:px-3 py-0.5 sm:py-1">
      {label}
    </span>
  )
}