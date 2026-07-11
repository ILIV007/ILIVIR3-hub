import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { SectionTitle } from "@components/ui/SectionTitle";
import { Card } from "@components/ui/Card";
import { Badge } from "@components/ui/Badge";
import { statusToBadgeVariant } from "@components/ui/badge-variants";
import { getFeatured } from "@data/projects";
import { Github, ExternalLink, ArrowRight, Bot, TrendingUp, Gamepad2, Globe, Wrench, CandlestickChart } from "lucide-react";
import { TelegramIcon } from "@components/ui/TelegramIcon";
import { useLang } from "@context/useLang";

const iconMap: Record<string, React.ReactNode> = {
  AI: <Bot className="w-5 h-5" />,
  Finance: <TrendingUp className="w-5 h-5" />,
  Game: <Gamepad2 className="w-5 h-5" />,
  Web: <Globe className="w-5 h-5" />,
  Tool: <Wrench className="w-5 h-5" />,
  Trading: <CandlestickChart className="w-5 h-5" />,
};

export function FeaturedProjects() {
  const { lang, dir } = useLang();
  const featured = getFeatured();
  const arrow = dir === "rtl" ? <ArrowRight className="w-3 h-3 rotate-180" /> : <ArrowRight className="w-3 h-3" />;

  return (
    <section id="projects" className="relative py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={lang === "fa" ? "پروژه‌های برتر" : "Featured Projects"}
          subtitle={lang === "fa" ? "برترین پروژه‌های فعال با بیشترین تأثیر" : "Top active projects with the most impact"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
            >
              <Card className="relative h-full flex flex-col group">
                <Link
                  to={`/project/${project.slug}`}
                  aria-label={lang === "fa" ? project.titleFa : project.title}
                  className="absolute inset-0 z-[1] rounded-xl"
                />

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-accent-cyan-dim text-accent-cyan">
                      {iconMap[project.category] || <Bot className="w-5 h-5" />}
                    </div>
                    <Badge variant={statusToBadgeVariant(project.status)}>{project.status}</Badge>
                  </div>
                  {project.version && (
                    <span className="text-xs text-navy-500 font-mono">v{project.version}</span>
                  )}
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
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-[2] text-navy-500 hover:text-white transition-colors"
                      title="GitHub"
                      aria-label="GitHub repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.telegram && (
                    <a
                      href={project.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-[2] text-navy-500 hover:text-accent-cyan transition-colors"
                      title="Telegram"
                      aria-label="Telegram bot or channel"
                    >
                      <TelegramIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-[2] text-navy-500 hover:text-accent-cyan transition-colors"
                      title="Demo"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <span className="ms-auto text-accent-cyan text-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {lang === "fa" ? "جزئیات" : "Details"} {arrow}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
