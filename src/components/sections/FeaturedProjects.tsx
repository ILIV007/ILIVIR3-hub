import { useLang } from '../../context/LangContext'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { projects } from '../../data/projects'
import { ExternalLink, Github, Send, Bot, TrendingUp } from 'lucide-react'

export function FeaturedProjects() {
  const { t } = useLang()

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">پروژه‌های برجسته</h2>
          <p className="text-white/60 text-lg">آخرین پروژه‌های توسعه‌یافته</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:border-iliv-purple/50 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-iliv-purple transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.telegram && (
                      <a href={project.telegram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-iliv-cyan transition-colors">
                        <Send className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-white/60">{project.description}</p>
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
                    className="inline-flex items-center gap-2 text-sm text-iliv-cyan hover:text-iliv-cyan/80 transition-colors"
                  >
                    {project.id === 'ivai' ? <Bot className="w-4 h-4" /> : <TrendingUp className="w-4 h-4" />}
                    {project.id === 'ivai' ? '@ivai_llm_bot' : '@tradeagentiv'}
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
