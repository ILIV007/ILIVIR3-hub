import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { SectionTitle } from "@components/ui/SectionTitle";
import { Card } from "@components/ui/Card";
import { Badge } from "@components/ui/Badge";
import { statusToBadgeVariant } from "@components/ui/badge-variants";
import { projects } from "@data/projects";
import type { Project, ProjectCategory, ProjectStatus } from "@data/projects";
import { Github, ExternalLink, ArrowRight, Bot, TrendingUp, Gamepad2, Globe, Wrench, CandlestickChart, Send } from "lucide-react";
import { useLang } from "@context/useLang";

const iconMap: Record<string, React.ReactNode> = {
  AI: <Bot className="w-5 h-5" />,
  Finance: <TrendingUp className="w-5 h-5" />,
  Game: <Gamepad2 className="w-5 h-5" />,
  Web: <Globe className="w-5 h-5" />,
  Tool: <Wrench className="w-5 h-5" />,
  Trading: <CandlestickChart className="w-5 h-5" />,
};

const statusFilters: Array<{ value: "All" | ProjectStatus; labelEn: string; labelFa: string }> = [
  { value: "All", labelEn: "All", labelFa: "همه" },
  { value: "Active", labelEn: "Active", labelFa: "فعال" },
  { value: "In Development", labelEn: "In Dev", labelFa: "در حال ساخت" },
  { value: "Beta", labelEn: "Beta", labelFa: "بتا" },
  { value: "Archived", labelEn: "Archived", labelFa: "آرشیو" },
];

const categoryFilters: Array<{ value: "All" | ProjectCategory; labelEn: string; labelFa: string }> = [
  { value: "All", labelEn: "All", labelFa: "همه" },
  { value: "AI", labelEn: "AI", labelFa: "AI" },
  { value: "Finance", labelEn: "Finance", labelFa: "مالی" },
  { value: "Game", labelEn: "Game", labelFa: "بازی" },
  { value: "Web", labelEn: "Web", labelFa: "وب" },
  { value: "Trading", labelEn: "Trading", labelFa: "ترید" },
  { value: "Tool", labelEn: "Tool", labelFa: "ابزار" },
];

export function Projects() {
  const { lang, dir } = useLang();
  const [statusFilter, setStatusFilter] = useState<"All" | ProjectStatus>("All");
  const [categoryFilter, setCategoryFilter] = useState<"All" | ProjectCategory>("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (statusFilter !== "All" && p.status !== statusFilter) return false;
      if (categoryFilter !== "All" && p.category !== categoryFilter) return false;
      return true;
    });
  }, [statusFilter, categoryFilter]);

  const arrow = dir === "rtl" ? <ArrowRight className="w-3 h-3 rotate-180" /> : <ArrowRight className="w-3 h-3" />;

  return (
    <section className="relative py-24 px-4 pt-28">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={lang === "fa" ? "همه پروژه‌ها" : "All Projects"}
          subtitle={lang === "fa" ? "پروژه‌های فعال، آزمایشی و در حال توسعه" : "Active, experimental and in-development projects"}
        />

        {/* Filters */}
        <div className="mb-8 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-navy-500 font-mono me-1">
              {lang === "fa" ? "وضعیت:" : "Status:"}
            </span>
            {statusFilters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setStatusFilter(f.value)}
                className={`text-xs px-3 py-1 rounded-md border transition-colors ${
                  statusFilter === f.value
                    ? "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30"
                    : "bg-white/[0.02] text-navy-400 border-white/5 hover:border-white/10 hover:text-white"
                }`}
              >
                {lang === "fa" ? f.labelFa : f.labelEn}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-navy-500 font-mono me-1">
              {lang === "fa" ? "دسته:" : "Category:"}
            </span>
            {categoryFilters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setCategoryFilter(f.value)}
                className={`text-xs px-3 py-1 rounded-md border transition-colors ${
                  categoryFilter === f.value
                    ? "bg-accent-purple/10 text-accent-purple border-accent-purple/30"
                    : "bg-white/[0.02] text-navy-400 border-white/5 hover:border-white/10 hover:text-white"
                }`}
              >
                {lang === "fa" ? f.labelFa : f.labelEn}
              </button>
            ))}
          </div>
          <div className="text-xs text-navy-500">
            {lang === "fa"
              ? `${filtered.length} پروژه یافت شد`
              : `${filtered.length} project${filtered.length === 1 ? "" : "s"} found`}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
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

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {lang === "fa" ? project.titleFa : project.title}
                </h3>
                <p className="text-navy-400 text-sm leading-relaxed mb-4 flex-grow">
                  {lang === "fa" ? project.shortDescFa : project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag: string) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-navy-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-[2] text-navy-400 hover:text-white transition-colors"
                      title="GitHub"
                      aria-label="GitHub repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.telegram && (
                    <a
                      href={project.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-[2] text-navy-400 hover:text-accent-cyan transition-colors"
                      title="Telegram"
                      aria-label="Telegram bot or channel"
                    >
                      <Send className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-[2] text-navy-400 hover:text-accent-cyan transition-colors"
                      title="Demo"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
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

        {filtered.length === 0 && (
          <div className="text-center py-20 text-navy-500">
            {lang === "fa" ? "پروژه‌ای با این فیلتر یافت نشد" : "No projects match these filters"}
          </div>
        )}
      </div>
    </section>
  );
}
