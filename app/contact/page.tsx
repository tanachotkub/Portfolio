"use client"
import ScrollReveal from "@/components/ScrollReveal"
import { useState } from "react"

const CONTACT_INFO = [
  { icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ), bg:"bg-blue-50", label:"Email", value:"tanachot2004@gmail.com", href:"tanachot2004@gmail.com" },
  { icon: (
      <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ), bg:"bg-slate-50", label:"GitHub", value:"@tanachotkub", href:"https://github.com/tanachotkub" },
  { icon: (
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ), bg:"bg-blue-50", label:"Location", value:"Chiang Rai, Thailand", href:null },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="pt-16">
      <section className="mesh-bg py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="font-display font-extrabold text-5xl text-slate-900 mb-4">
            {"Let's Work "}<span className="text-blue-600">Together</span>
          </h1>
          <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
            มีโปรเจคในใจ? พูดคุยกันได้เลยครับ ยินดีร่วมงานทุกประเภท
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid md:grid-cols-5 gap-8">
              {/* Contact info */}
              <div className="md:col-span-2 space-y-4">
                {CONTACT_INFO.map(c => (
                  <div key={c.label} className="card-hover bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className={`w-12 h-12 ${c.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">{c.label}</div>
                      {c.href ? (
                        <a href={c.href} target={c.href.startsWith("http")?"_blank":"_self"} rel="noopener noreferrer"
                          className="font-semibold text-slate-800 text-sm hover:text-blue-600 transition-colors">
                          {c.value}
                        </a>
                      ) : (
                        <div className="font-semibold text-slate-800 text-sm">{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white">
                  <h3 className="font-display font-bold text-lg mb-2">Response Time</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    ปกติจะตอบกลับภายใน 24 ชั่วโมงครับ
                    ถ้าเร่งด่วนสามารถติดต่อผ่าน Email ได้เลย
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-3 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                {sent ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-8 space-y-4">
                    <div className="text-5xl">🎉</div>
                    <h3 className="font-display font-bold text-xl text-slate-800">ส่งข้อความสำเร็จ!</h3>
                    <p className="text-slate-500 text-sm">จะติดต่อกลับโดยเร็วที่สุดครับ</p>
                    <button onClick={() => { setSent(false); setForm({ name:"",email:"",subject:"",message:"" }) }}
                      className="text-blue-600 hover:text-blue-700 text-sm font-semibold">
                      ส่งข้อความใหม่
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">ชื่อ *</label>
                        <input required type="text" placeholder="Your Name" value={form.name}
                          onChange={e => setForm(f => ({...f, name:e.target.value}))}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"/>
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">Email *</label>
                        <input required type="email" placeholder="your@email.com" value={form.email}
                          onChange={e => setForm(f => ({...f, email:e.target.value}))}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"/>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">หัวข้อ</label>
                      <input type="text" placeholder="Project Inquiry" value={form.subject}
                        onChange={e => setForm(f => ({...f, subject:e.target.value}))}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"/>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">ข้อความ *</label>
                      <textarea required rows={5} placeholder="Tell me about your project..." value={form.message}
                        onChange={e => setForm(f => ({...f, message:e.target.value}))}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all resize-none"/>
                    </div>
                    <button type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-200 flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
