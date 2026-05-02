import TypedText from "@/components/TypedText"
import ScrollReveal from "@/components/ScrollReveal"
import Link from "next/link"

const STATS = [
  { value: "2", label: "Projects Done" },
  { value: "0",  label: "Years Experience" },
  { value: "5+",  label: "Tech Stacks" },
]
const TECH_FLOATS = [
  { icon: "⚡", label: "Next.js", style: { top:"2rem", right:"1rem", animationDelay:"0.5s" } },
  { icon: "🐹", label: "Golang",  style: { bottom:"3rem", left:"0",   animationDelay:"1s"   } },
  { icon: "🐬", label: "MySQL",   style: { bottom:"1rem", right:"2rem",animationDelay:"1.5s"} },
]

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section id="home" className="min-h-screen mesh-bg flex items-center pt-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6" style={{ animation:"fadeUp 0.7s ease forwards" }}>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
              <span className="text-sm font-medium text-blue-700">Available for work</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-extrabold leading-tight text-slate-900">
              Hi, I&apos;m<br/>
              <span className="text-blue-600">Fullstack</span><br/>
              <TypedText words={["Developer","Problem Solver","Builder"]}/>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-md">
              นักพัฒนา Fullstack ที่สนใจด้าน Web Application
              ชอบสร้างของที่ใช้งานได้จริงและดูดี
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full transition-all hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5 inline-flex items-center gap-2">
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
              <Link href="/contact" className="border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 font-semibold px-7 py-3 rounded-full transition-all hover:bg-blue-50">
                Contact Me
              </Link>
            </div>

            <div className="flex gap-8 pt-4 border-t border-slate-100">
              {STATS.map(s => (
                <div key={s.label}>
                  <div className="font-display font-bold text-2xl text-slate-900">{s.value}</div>
                  <div className="text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Avatar + floating chips */}
          <div className="relative flex justify-center items-center h-80">
            <div className="blob w-72 h-72 bg-gradient-to-br from-blue-400 to-indigo-500 opacity-20 absolute"/>
            <div className="relative z-10 w-60 h-60 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-200"
              style={{ animation:"floatAnim 4s ease-in-out infinite" }}>
              <svg className="w-28 h-28 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
            {TECH_FLOATS.map(t => (
              <div key={t.label} className="absolute bg-white rounded-2xl shadow-lg px-4 py-2 flex items-center gap-2 z-20"
                style={{ ...t.style, animation:`floatAnim 4s ease-in-out ${t.style.animationDelay} infinite` }}>
                <span className="text-lg">{t.icon}</span>
                <span className="text-sm font-semibold text-slate-700">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick info */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon:"🖥️", title:"Frontend",  desc:"Next.js, React, TypeScript, Tailwind" },
                { icon:"⚙️", title:"Backend",   desc:"Golang (Fiber), Node.js, REST API" },
                { icon:"🗄️", title:"Database",  desc:"MySQL, PostgreSQL" },
              ].map(c => (
                <div key={c.title} className="card-hover bg-white rounded-3xl border border-slate-100 p-6 text-center shadow-sm">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="font-display font-bold text-slate-800 mb-1">{c.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
