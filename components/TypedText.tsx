"use client"
import { useEffect, useRef, useState } from "react"

interface Props {
  words: string[]
  /** Typing speed in ms per character (default 110) */
  typeSpeed?: number
  /** Deleting speed in ms per character (default 60) */
  deleteSpeed?: number
  /** Pause duration after finishing a word in ms (default 1800) */
  pauseAfter?: number
}

export default function TypedText({
  words,
  typeSpeed = 110,
  deleteSpeed = 60,
  pauseAfter = 1800,
}: Props) {
  const [display,  setDisplay]  = useState("")
  const [wIdx,     setWIdx]     = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Stable ref so effect doesn't need words in its dep array
  const wordsRef = useRef(words)
  useEffect(() => { wordsRef.current = words }, [words])

  // Respect reduced-motion — skip animation, just show the first word
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    if (prefersReduced) {
      setDisplay(wordsRef.current[0] ?? "")
      return
    }

    const word = wordsRef.current[wIdx] ?? ""

    // Finished typing — pause then start deleting
    if (!deleting && display === word) {
      const t = setTimeout(() => setDeleting(true), pauseAfter)
      return () => clearTimeout(t)
    }

    // Finished deleting — move to next word
    if (deleting && display === "") {
      setDeleting(false)
      setWIdx(i => (i + 1) % wordsRef.current.length)
      return
    }

    // Type or delete one character
    const speed = deleting ? deleteSpeed : typeSpeed
    const next  = deleting
      ? word.slice(0, display.length - 1)
      : word.slice(0, display.length + 1)

    const t = setTimeout(() => setDisplay(next), speed)
    return () => clearTimeout(t)
  }, [display, deleting, wIdx, typeSpeed, deleteSpeed, pauseAfter, prefersReduced])

  return (
    <span
      className="cursor"
      aria-label={wordsRef.current[wIdx]}   // screen readers see the full word
      aria-live="polite"
    >
      {display}
    </span>
  )
}