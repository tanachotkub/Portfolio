"use client"
import TypedText from "@/components/TypedText"
import ScrollReveal from "@/components/ScrollReveal"
import Link from "next/link"

const STATS = [
  { value: "2",  label: "Projects Done" },
  { value: "0",  label: "Years Experience" },
  { value: "5+", label: "Tech Stacks" },
]

const TECH_FLOATS = [
  {
    icon: "⚡",
    label: "Next.js",
    className:
      "top-4 right-0 sm:top-6 sm:right-2 md:top-8 md:right-4",
    delay: "0.5s",
  },
  {
    icon: "🐹",
    label: "Golang",
    className:
      "bottom-8 left-0 sm:bottom-10 sm:left-2 md:bottom-12 md:left-0",
    delay: "1s",
  },
  {
    icon: "🐬",
    label: "MySQL",
    className:
      "bottom-2 right-4 sm:bottom-4 sm:right-6 md:bottom-6 md:right-8",
    delay: "1.5s",
  },
]

const SKILLS = [
  { icon: "🖥️", title: "Frontend",  desc: "Next.js, React, TypeScript, Tailwind" },
  { icon: "⚙️", title: "Backend",   desc: "Golang (Fiber), Node.js, REST API" },
  { icon: "🗄️", title: "Database",  desc: "MySQL, PostgreSQL" },
]

export default function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* ───────────── HERO ───────────── */}
      <section
        id="home"
        className="
          min-h-screen mesh-bg flex items-center pt-16
          overflow-hidden
        "
      >
        <div
          className="
            w-full max-w-6xl mx-auto
            px-4 sm:px-6 lg:px-8
            py-12 sm:py-16 md:py-20
            grid grid-cols-1 md:grid-cols-2
            gap-10 md:gap-12
            items-center
          "
        >
          {/* ── Left copy ── */}
          <div
            className="space-y-5 sm:space-y-6 text-center md:text-left"
            style={{ animation: "fadeUp 0.7s ease forwards" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-blue-700">
                Available for work
              </span>
            </div>

            {/* Headline */}
            <h1
              className="
                text-4xl sm:text-5xl md:text-5xl lg:text-6xl
                font-display font-extrabold leading-tight text-slate-900
              "
            >
              Hi, I&apos;m
              <br />
              <span className="text-blue-600">Fullstack</span>
              <br />
              <TypedText words={["Developer", "Problem Solver", "Builder"]} />
            </h1>

            {/* Sub-copy */}
            <p
              className="
                text-base sm:text-lg text-slate-500 leading-relaxed
                max-w-md mx-auto md:mx-0
              "
            >
              นักพัฒนา Fullstack ที่สนใจด้าน Web Application
              ชอบสร้างของที่ใช้งานได้จริงและดูดี
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              <Link
                href="/projects"
                className="
                  bg-blue-600 hover:bg-blue-700 text-white font-semibold
                  px-6 sm:px-7 py-3 rounded-full
                  transition-all hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5
                  inline-flex items-center gap-2
                  text-sm sm:text-base
                "
              >
                View Projects
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="
                  border border-slate-200 hover:border-blue-300
                  text-slate-700 hover:text-blue-600 font-semibold
                  px-6 sm:px-7 py-3 rounded-full
                  transition-all hover:bg-blue-50
                  text-sm sm:text-base
                "
              >
                Contact Me
              </Link>
            </div>

            {/* Stats */}
            <div
              className="
                flex justify-center md:justify-start
                gap-6 sm:gap-8
                pt-4 border-t border-slate-100
              "
            >
              {STATS.map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <div className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                    {s.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — Avatar + floating chips ── */}
          <div className="relative flex justify-center items-center h-64 sm:h-72 md:h-80 mt-4 md:mt-0">
            {/* Blob */}
            <div className="blob w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-gradient-to-br from-blue-400 to-indigo-500 opacity-20 absolute" />

            {/* Avatar circle */}
            <div
              className="
                relative z-10
                w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60
                rounded-full
                bg-gradient-to-br from-blue-500 to-indigo-600
                flex items-center justify-center
                shadow-2xl shadow-blue-200
              "
              style={{ animation: "floatAnim 4s ease-in-out infinite" }}
            >
              <svg
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-white/80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
            </div>

            {/* Floating chips */}
            {TECH_FLOATS.map((t) => (
              <div
                key={t.label}
                className={`
                  absolute z-20
                  bg-white rounded-2xl shadow-lg
                  px-3 py-1.5 sm:px-4 sm:py-2
                  flex items-center gap-1.5 sm:gap-2
                  ${t.className}
                `}
                style={{
                  animation: `floatAnim 4s ease-in-out ${t.delay} infinite`,
                }}
              >
                <span className="text-base sm:text-lg">{t.icon}</span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Quick Info ───────────── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div
              className="
                grid
                grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                gap-4 sm:gap-5 md:gap-6
              "
            >
              {SKILLS.map((c) => (
                <div
                  key={c.title}
                  className="
                    card-hover bg-white rounded-3xl border border-slate-100
                    p-5 sm:p-6 text-center shadow-sm
                  "
                >
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="font-display font-bold text-slate-800 mb-1">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}