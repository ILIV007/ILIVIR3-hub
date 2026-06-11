import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Github, ExternalLink, ArrowLeft, Send, Bot, TrendingUp } from 'lucide-react'

export function ProjectDetails() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="pt-24 pb-12 text-center">
        <h1 className="text-2xl text-white/60">پروژه یافت نشد</h1>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="/projects" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          بازگشت به پروژه‌ها
        </a>

        <Card className="space-y-6">
          <div className="flex items-start justify-between">
            <h1 className="text-3xl font-bold text-gradient">{project.title}</h1>
            <div className="flex items-center gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
              )}
              {project.telegram && (
                <a href={project.telegram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-iliv-cyan transition-colors">
                  <Send className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          <p className="text-white/70 text-lg">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          {project.telegram && (
            <a
              href={project.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-base font-medium bg-iliv-cyan/10 text-iliv-cyan border border-iliv-cyan/30 hover:bg-iliv-cyan/20 transition-all duration-300"
            >
              {project.id === 'ivai' ? <Bot className="w-5 h-5" /> : <TrendingUp className="w-5 h-5" />}
              <div className="flex flex-col items-start">
                <span className="text-xs text-iliv-cyan/60">ربات تلگرام</span>
                <span className="font-semibold">{project.id === 'ivai' ? '@ivai_llm_bot' : '@tradeagentiv'}</span>
              </div>
            </a>
          )}
        </Card>
      </div>
    </div>
  )
}
