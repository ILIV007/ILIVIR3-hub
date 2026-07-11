import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { getProjectBySlug } from "@data/projects";
import { Badge } from "@components/ui/Badge";
import { Button } from "@components/ui/Button";
import { GlassPanel } from "@components/ui/GlassPanel";
import { Github, ExternalLink, ArrowLeft, ArrowRight, Bot, Tag } from "lucide-react";
import { useLang } from "@context/LangContext";

export function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, dir } = useLang();
  const project = getProjectBySlug(slug || "");

  // Render NotFound directly instead of redirecting to /404
  if (!project) return <Navigate to="/404" replace />;

  const backIcon = dir === "rtl" ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />;
  const breadcrumbSep = dir === "rtl" ? <ArrowRight className="w-3 h-3" /> : <ArrowLeft className="w-3 h-3" />;

  return (
    <main className="pt-20 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className="flex items-center gap-2 text-xs text-navy-600 mb-4">
            <Link to="/" className="hover:text-accent-cyan transition-colors">{lang === "fa" ? "خانه" : "Home"}</Link>
            {breadcrumbSep}
            <Link to="/projects" className="hover:text-accent-cyan transition-colors">{lang === "fa" ? "پروژه‌ها" : "Projects"}</Link>
            {breadcrumbSep}
            <span className="text-navy-400">{lang === "fa" ? project.titleFa : project.title}</span>
          </div>

          <GlassPanel glow="cyan">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant={project.status === "Active" ? "active" : "beta"}>{project.status}</Badge>
              <Badge variant="info">{project.category}</Badge>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">{lang === "fa" ? project.titleFa : project.title}</h1>
            <p className="text-navy-300 text-base leading-relaxed mb-4">{lang === "fa" ? project.descriptionFa : project.description}</p>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Tag className="w-3.5 h-3.5 text-navy-600" />
              {project.tags.map((tag: string) => <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-navy-400 border border-white/5">{tag}</span>)}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.github && <Button href={project.github} icon={<Github className="w-3.5 h-3.5" />} size="sm">{lang === "fa" ? "گیت‌هاب" : "GitHub"}</Button>}
              {project.demo && <Button variant="outline" href={project.demo} icon={<ExternalLink className="w-3.5 h-3.5" />} size="sm">{lang === "fa" ? "دمو" : "Demo"}</Button>}
              {project.telegram && <Button variant="secondary" href={project.telegram} icon={<Bot className="w-3.5 h-3.5" />} size="sm">{lang === "fa" ? "تلگرام" : "Telegram"}</Button>}
            </div>
          </GlassPanel>

          <div className="mt-6">
            <Button to="/projects" variant="ghost" icon={backIcon} size="sm">{lang === "fa" ? "بازگشت" : "Back"}</Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
