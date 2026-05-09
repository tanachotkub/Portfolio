import { Repo } from "@/lib/github"

const LANG_COLORS: Record<string, string> = {
  TypeScript: "bg-blue-100 text-blue-700",
  JavaScript: "bg-yellow-100 text-yellow-700",
  Go:         "bg-cyan-100 text-cyan-700",
  Python:     "bg-green-100 text-green-700",
  Rust:       "bg-orange-100 text-orange-700",
}

const GRADIENT_MAP: Record<number, string> = {
  0: "from-blue-500 to-indigo-600",
  1: "from-violet-500 to-purple-700",
  2: "from-cyan-500 to-teal-600",
  3: "from-rose-500 to-orange-500",
  4: "from-amber-400 to-yellow-600",
  5: "from-emerald-500 to-green-600",
}

interface Props { repo: Repo; index: number }

export default function ProjectCard({ repo, index }: Props) {
  const gradient  = GRADIENT_MAP[index % 6]
  const langColor = LANG_COLORS[repo.language || ""] || "bg-slate-100 text-slate-700"

  return (
    <div className="card-hover bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm group flex flex-col h-full">

      {/* ── Header gradient ── */}
      <div className={`h-36 sm:h-40 bg-gradient-to-br ${gradient} relative flex items-center justify-center flex-shrink-0`}>
        <svg className="w-14 h-14 sm:w-16 sm:h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>

        {/* Language badge */}
        {repo.language && (
          <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${langColor}`}>
            {repo.language}
          </span>
        )}

        {/* Stars */}
        {repo.stargazers_count > 0 && (
          <span className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
            ⭐ {repo.stargazers_count}
          </span>
        )}
      </div>

      {/* ── Body ── */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 gap-3 sm:gap-4">

        {/* Title + description */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-blue-600 transition-colors capitalize truncate">
            {repo.name.replace(/-/g, " ")}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed line-clamp-3">
            {repo.description || "ไม่มีคำอธิบาย"}
          </p>
        </div>

        {/* Topics */}
        {repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {repo.topics.slice(0, 4).map(t => (
              <span key={t} className="tech-chip text-xs">{t}</span>
            ))}
          </div>
        )}

        {/* Actions — always pinned to bottom */}
        <div className="flex items-center gap-2 sm:gap-3 pt-1 mt-auto">
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold py-2 sm:py-2.5 rounded-xl transition-colors"
            >
              Live Demo
            </a>
          )}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${repo.homepage ? "flex-1" : "w-full"} text-center border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 text-xs sm:text-sm font-semibold py-2 sm:py-2.5 rounded-xl transition-colors`}
          >
            GitHub →
          </a>
        </div>
      </div>
    </div>
  )
}