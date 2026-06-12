import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { SectionTitle } from "@components/ui/SectionTitle";
import { Card } from "@components/ui/Card";
import { Badge } from "@components/ui/Badge";
import { Button } from "@components/ui/Button";
import { getFeatured } from "@data/projects";
import type { Project } from "@data/projects";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { useLang } from "@context/LangContext";

export function Projects() {
  const { t, lang } = useLang();
  const featured = getFeatured();

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={t("Featured Projects", "پروژه‌های برتر")}
          subtitle={t("Top active projects with the most feedback and users", "برترین پروژه‌های فعال با بیشترین بازخورد و کاربر")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant={project.status === "Active" ? "active" : "default"}>
                    {project.status === "Active" ? t("Active", "فعال") : project.status}
                  </Badge>
                  <Badge variant="info">{project.category}</Badge>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                   {lang === "fa" ? project.titleFa : project.title}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed mb-4 flex-grow">
                   {lang === "fa" ? project.shortDescFa : project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                   {project.tags.map((tag: string) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-navy-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  {project.github && (
                     <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-white transition-colors" title="GitHub">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-accent-cyan transition-colors" title="Demo">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Link to="/projects">
            <Button variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
              {t("View All Projects", "مشاهده همه پروژه‌ها")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
