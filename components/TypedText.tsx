"use client"
import { useEffect, useState } from "react"

export default function TypedText({ words }: { words: string[] }) {
  const [display, setDisplay] = useState("")
  const [wIdx, setWIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wIdx]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && display === word) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && display === "") {
      setDeleting(false)
      setWIdx(i => (i + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setDisplay(deleting ? word.slice(0, display.length - 1) : word.slice(0, display.length + 1))
      }, deleting ? 60 : 110)
    }
    return () => clearTimeout(timeout)
  }, [display, deleting, wIdx, words])

  return <span className="cursor">{display}</span>
}
