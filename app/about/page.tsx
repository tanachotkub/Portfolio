import { SkillBar, TechChip } from "@/components/SkillBadge"
import ScrollReveal from "@/components/ScrollReveal"
import Link from "next/link"

const SKILLS = [
  { label: "Next.js / React", pct: 90 },
  { label: "TypeScript",      pct: 80 },
  { label: "Golang (Fiber)",  pct: 75 },
  { label: "MySQL / Database",pct: 85 },
  { label: "Tailwind CSS",    pct: 88 },
]
const TECH_GROUPS = [
  { icon:"🖥️", title:"Frontend",         tags:["Next.js","React","TypeScript","Tailwind CSS","Framer Motion"] },
  { icon:"⚙️", title:"Backend",          tags:["Golang","Fiber","Node.js","REST API","JWT Auth"] },
  { icon:"🛠️", title:"Tools & Database", tags:["MySQL","PostgreSQL","Git","Vercel","Docker","Linux"] },
]
const INFO = [
  { label:"Location", value:"Chiang Rai, TH",   green:false },
  { label:"Focus",    value:"Web Dev",        green:false },
  { label:"Email",    value:"tanachot2004@gmail.com", green:false },
  { label:"Status",   value:"Available",      green:true  },
]

export default function AboutPage() {
  return (
    <main className="pt-16">
      <section className="mesh-bg py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">About Me</p>
          <h1 className="font-display font-extrabold text-5xl text-slate-900 mb-4">
            Building things that <span className="text-blue-600">matter</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            นักพัฒนา Fullstack ที่ชอบสร้าง Web Application ตั้งแต่ Frontend ไปจนถึง Backend 
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 flex items-center justify-center border border-blue-100 relative">
                  <div className="text-center space-y-3">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-blue-200 rotate-6">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                      </svg>
                    </div>
                    <p className="font-display font-bold text-xl text-slate-800">Fullstack Developer</p>
                    <p className="text-slate-500 text-sm">Bangkok, Thailand</p>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-2xl p-4 shadow-xl">
                    <div className="font-display font-bold text-2xl">2+</div>
                    <div className="text-xs text-blue-100">Years Exp.</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {INFO.map(i => (
                    <div key={i.label} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                      <div className="text-slate-400 text-xs mb-1">{i.label}</div>
                      <div className={`font-semibold text-sm flex items-center gap-1 ${i.green?"text-green-600":"text-slate-800"}`}>
                        {i.green && <span className="w-1.5 h-1.5 bg-green-400 rounded-full"/>}
                        {i.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">My Story</p>
                  <h2 className="font-display font-bold text-3xl text-slate-900 mb-4">ผมคือใคร?</h2>
                  <p className="text-slate-500 leading-relaxed mb-4">
                    ผมเป็นนักพัฒนา Fullstack ที่ชอบสร้าง Web Application ที่ใช้งานได้จริง
                    ตั้งแต่ Frontend ที่สวยงาม ไปจนถึง Backend ที่แข็งแกร่ง และ Database ที่มีประสิทธิภาพ
                  </p>
                  <p className="text-slate-500 leading-relaxed">
                    มีประสบการณ์ทำงานกับ Next.js, Golang (Fiber), และ MySQL
                    ชื่นชอบการแก้ปัญหาที่ซับซ้อนและเรียนรู้เทคโนโลยีใหม่อยู่เสมอ
                  </p>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all hover:shadow-lg">
                  {"Let's Talk →"}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 mesh-bg">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Expertise</p>
              <h2 className="font-display font-bold text-4xl text-slate-900">Tech Stack &amp; Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
                <h3 className="font-display font-bold text-xl text-slate-800">Proficiency</h3>
                {SKILLS.map(s => <SkillBar key={s.label} label={s.label} pct={s.pct}/>)}
              </div>
              <div className="space-y-5">
                {TECH_GROUPS.map(g => (
                  <div key={g.title} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-lg">{g.icon}</div>
                      <h3 className="font-display font-bold text-lg text-slate-800">{g.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {g.tags.map(t => <TechChip key={t} label={t}/>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
