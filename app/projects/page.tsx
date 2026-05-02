import { getRepos } from "@/lib/github"
import ProjectCard from "@/components/ProjectCard"
import ScrollReveal from "@/components/ScrollReveal"

export const revalidate = 3600 // revalidate every hour

export default async function ProjectsPage() {
  const repos = await getRepos()

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="mesh-bg py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Portfolio</p>
          <h1 className="font-display font-extrabold text-5xl text-slate-900 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            ผลงานที่ผ่านมา — ดึงข้อมูลจาก GitHub API อัตโนมัติ แต่ละโปรเจคแก้ปัญหาจริงด้วยโค้ดจริง
          </p>
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 mt-4 text-sm text-slate-500 shadow-sm">
            <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            {repos.length} repositories จาก GitHub
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            {repos.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">📭</div>
                <h3 className="font-display font-bold text-xl text-slate-700 mb-2">ไม่พบ Repository</h3>
                <p className="text-slate-500 text-sm">ตรวจสอบ GITHUB_USERNAME ใน .env.local</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {repos.map((repo, i) => (
                  <ProjectCard key={repo.id} repo={repo} index={i} />
                ))}
                {/* GitHub CTA card */}
                <div className="card-hover bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-sm flex flex-col items-center justify-center text-center p-8 space-y-4">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">More on GitHub</h3>
                    <p className="text-blue-100 text-sm mt-1">ดูโปรเจคทั้งหมดบน GitHub</p>
                  </div>
                  <a href="https://github.com/tanachotkub" target="_blank" rel="noopener noreferrer"
                    className="bg-white hover:bg-blue-50 text-blue-700 font-semibold text-sm px-6 py-2.5 rounded-full transition-all inline-flex items-center gap-2">
                    View All →
                  </a>
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
