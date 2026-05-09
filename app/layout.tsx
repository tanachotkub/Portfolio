import type { Metadata, Viewport } from "next"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Portfolio — Fullstack Developer",
  description: "Fullstack Developer — Next.js, Golang, MySQL",
  openGraph: {
    title: "Portfolio",
    description: "Fullstack Developer Portfolio",
    type: "website",
  },
}

// viewport config ควรอยู่แยกต่างหาก ไม่ใช่ใน metadata
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,500;0,600;0,700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="bg-white text-slate-800 font-sans">
        <Navbar />

        {children}

        {/* ───────────── Footer ───────────── */}
        <footer className="bg-slate-900 text-slate-400 py-8 sm:py-10">
          <div
            className="
              max-w-6xl mx-auto
              px-4 sm:px-6 lg:px-8
              flex flex-col md:flex-row
              items-center justify-between
              gap-4 sm:gap-5
              text-center md:text-left
            "
          >
            {/* Logo */}
            <div className="font-display font-bold text-white text-base sm:text-lg shrink-0">
              dev<span className="text-blue-400">.portfolio</span>
            </div>

            {/* Copyright */}
            <p className="text-xs sm:text-sm order-last md:order-none">
              © {new Date().getFullYear()} Kennys. Built with Next.js &amp; Tailwind CSS.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 shrink-0">
              <a
                href="https://github.com/tanachotkub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:tanachot2004@gmail.com"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}