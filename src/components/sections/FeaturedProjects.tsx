import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { SectionTitle } from "@components/ui/SectionTitle";
import { Card } from "@components/ui/Card";
import { Badge } from "@components/ui/Badge";
import { getFeatured } from "@data/projects";
import { Github, ExternalLink, ArrowRight, Bot, TrendingUp, Gamepad2 } from "lucide-react";
import { useLang } from "@context/LangContext";

const iconMap: Record<string, React.ReactNode> = {
  AI: <Bot className="w-5 h-5" />,
  Finance: <TrendingUp className="w-5 h-5" />,
  Game: <Gamepad2 className="w-5 h-5" />,
};

export function FeaturedProjects() {
  const { lang } = useLang();
  const featured = getFeatured();

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={lang === "fa" ? "پروژه‌های برتر" : "Featured Projects"}
          subtitle={lang === "fa" ? "برترین پروژه‌های فعال با بیشترین تأثیر" : "Top active projects with the most impact"}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link to={`/project/${project.slug}`}>
                <Card className="h-full flex flex-col group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-accent-cyan-dim text-accent-cyan">
                        {iconMap[project.category] || <Bot className="w-5 h-5" />}
                      </div>
                      <Badge variant={project.status === "Active" ? "active" : "beta"}>
                        {project.status}
                      </Badge>
                    </div>
                    <span className="text-xs text-navy-500 font-mono">{project.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-accent-cyan transition-colors">
                    {lang === "fa" ? project.titleFa : project.title}
                  </h3>
                  <p className="text-navy-400 text-sm leading-relaxed mb-4 flex-grow">
                    {lang === "fa" ? project.shortDescFa : project.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded bg-white/5 text-navy-400 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-navy-500 hover:text-white transition-colors" title="GitHub">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-navy-500 hover:text-accent-cyan transition-colors" title="Demo">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <span className="ml-auto text-accent-cyan text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {lang === "fa" ? "جزئیات" : "Details"} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
