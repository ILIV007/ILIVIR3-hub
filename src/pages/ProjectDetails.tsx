import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { getProjectBySlug, projects } from "@data/projects";
import { Badge } from "@components/ui/Badge";
import { statusToBadgeVariant } from "@components/ui/badge-variants";
import { Button } from "@components/ui/Button";
import { GlassPanel } from "@components/ui/GlassPanel";
import { Seo } from "@components/Seo";
import { Github, ExternalLink, ArrowLeft, ArrowRight, Bot, Tag, Calendar, Send } from "lucide-react";
import { useLang } from "@context/useLang";

export function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, dir } = useLang();
  const location = useLocation();
  const project = getProjectBySlug(slug || "");

  if (!project) return <Navigate to="/404" replace />;

  // Per-project SEO overrides the homepage defaults
  const seoTitle = lang === "fa" ? project.titleFa : project.title;
  const seoDesc = lang === "fa" ? project.shortDescFa : project.shortDesc;

  const backIcon = dir === "rtl" ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />;
  const breadcrumbSep = dir === "rtl" ? <ArrowRight className="w-3 h-3" /> : <ArrowLeft className="w-3 h-3" />;

  const formatDate = (yyyymm: string) => {
    if (!yyyymm) return "";
    const [y, m] = yyyymm.split("-");
    const monthIdx = parseInt(m, 10) - 1;
    const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthsFa = ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"];
    return lang === "fa" ? `${monthsFa[monthIdx]} ${y}` : `${monthsEn[monthIdx]} ${y}`;
  };

  return (
    <main className="pt-20 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Seo title={seoTitle} description={seoDesc} path={location.pathname} />
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-navy-600 mb-4 flex-wrap">
            <Link to="/" className="hover:text-accent-cyan transition-colors">{lang === "fa" ? "خانه" : "Home"}</Link>
            {breadcrumbSep}
            <Link to="/projects" className="hover:text-accent-cyan transition-colors">{lang === "fa" ? "پروژه‌ها" : "Projects"}</Link>
            {breadcrumbSep}
            <span className="text-navy-400">{lang === "fa" ? project.titleFa : project.title}</span>
          </div>

          <GlassPanel glow="cyan">
            {/* Header row: badges + version */}
            <div className="flex flex-wrap items-center gap-2 mb-3 justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={statusToBadgeVariant(project.status)}>{project.status}</Badge>
                <Badge variant="info">{project.category}</Badge>
              </div>
              <div className="flex items-center gap-3 text-xs text-navy-500 font-mono">
                {project.version && <span>v{project.version}</span>}
                {project.released && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(project.released)}
                  </span>
                )}
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {lang === "fa" ? project.titleFa : project.title}
            </h1>
            <p className="text-navy-300 text-base leading-relaxed mb-4">
              {lang === "fa" ? project.descriptionFa : project.description}
            </p>

            {/* Tags */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Tag className="w-3.5 h-3.5 text-navy-600" />
              {project.tags.map((tag: string) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-navy-400 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-2">
              {project.github && (
                <Button href={project.github} icon={<Github className="w-3.5 h-3.5" />} size="sm">
                  {lang === "fa" ? "گیت‌هاب" : "GitHub"}
                </Button>
              )}
              {project.demo && (
                <Button variant="outline" href={project.demo} icon={<ExternalLink className="w-3.5 h-3.5" />} size="sm">
                  {lang === "fa" ? "دمو" : "Demo"}
                </Button>
              )}
              {project.telegram && (
                <Button variant="secondary" href={project.telegram} icon={<Send className="w-3.5 h-3.5" />} size="sm">
                  {lang === "fa" ? "تلگرام" : "Telegram"}
                </Button>
              )}
            </div>
          </GlassPanel>

          {/* Back button */}
          <div className="mt-6">
            <Button to="/projects" variant="ghost" icon={backIcon} size="sm">
              {lang === "fa" ? "بازگشت به پروژه‌ها" : "Back to Projects"}
            </Button>
          </div>

          {/* Related projects (same category, excluding current) */}
          <RelatedProjects currentSlug={project.slug} category={project.category} />
        </motion.div>
      </div>
    </main>
  );
}

function RelatedProjects({ currentSlug, category }: { currentSlug: string; category: string }) {
  const { lang } = useLang();
  const related = projects.filter((p) => p.category === category && p.slug !== currentSlug).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
        <Bot className="w-4 h-4 text-accent-cyan" />
        {lang === "fa" ? "پروژه‌های مرتبط" : "Related Projects"}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {related.map((p) => (
          <Link
            key={p.id}
            to={`/project/${p.slug}`}
            className="block p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:border-accent-cyan/20 hover:bg-white/[0.04] transition-all group"
          >
            <div className="flex items-center justify-between mb-1">
              <Badge variant={statusToBadgeVariant(p.status)}>{p.status}</Badge>
              {p.version && <span className="text-[10px] text-navy-500 font-mono">v{p.version}</span>}
            </div>
            <h4 className="text-sm font-semibold text-white group-hover:text-accent-cyan transition-colors mb-1">
              {lang === "fa" ? p.titleFa : p.title}
            </h4>
            <p className="text-xs text-navy-500 line-clamp-2">
              {lang === "fa" ? p.shortDescFa : p.shortDesc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
