"use client"
import { useEffect, useRef } from "react"

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
  /** Custom IntersectionObserver threshold (default 0.1) */
  threshold?: number
  /** Animate once only — default true; pass false to re-animate on every entry */
  once?: boolean
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  threshold = 0.1,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect user's reduced-motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      el.classList.add("visible")
      return
    }

    el.style.transitionDelay = delay ? `${delay}ms` : ""

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible")
          if (once) obs.disconnect()
        } else if (!once) {
          el.classList.remove("visible")
        }
      },
      { threshold }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [delay, threshold, once])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}