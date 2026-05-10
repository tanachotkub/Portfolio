"use client"
import Link from "next/link"
import { useEffect, useState, useCallback } from "react"
import { usePathname } from "next/navigation"

const links = [
  { href: "/",        label: "Home"     },
  { href: "/about",   label: "About"    },
  { href: "/projects",label: "Projects" },
  { href: "/contact", label: "Contact"  },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const pathname = usePathname()

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close on Escape key
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const toggle = useCallback(() => setMenuOpen(v => !v), [])

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 nav-blur transition-all duration-300
          ${scrolled ? "bg-white/90 shadow-sm border-b border-slate-100" : "bg-transparent"}
        `}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="font-display font-bold text-lg sm:text-xl text-blue-600 tracking-tight shrink-0"
          >
            tanachot<span className="text-slate-800">.vercel.app</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
            >
              Hire Me
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={toggle}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}
            bg-white border-t border-slate-100 shadow-lg
          `}
        >
          <div className="px-4 sm:px-6 py-4 flex flex-col gap-1">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium px-3 py-2.5 rounded-xl transition-colors ${
                  pathname === l.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center transition-colors"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </nav>

      {/* Backdrop (mobile) */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}