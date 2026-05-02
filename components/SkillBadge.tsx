"use client"
import { useEffect, useRef, useState } from "react"

interface SkillBarProps { label: string; pct: number }

export function SkillBar({ label, pct }: SkillBarProps) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTimeout(() => setWidth(pct), 200); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [pct])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span className="text-slate-700">{label}</span>
        <span className="text-blue-600">{pct}%</span>
      </div>
      <div className="skill-bar h-2 bg-slate-100 w-full">
        <div className="skill-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

export function TechChip({ label }: { label: string }) {
  return <span className="tech-chip">{label}</span>
}
