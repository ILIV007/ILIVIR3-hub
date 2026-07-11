import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { SectionTitle } from "@components/ui/SectionTitle";
import { Badge } from "@components/ui/Badge";
import { statusToBadgeVariant } from "@components/ui/badge-variants";
import { Button } from "@components/ui/Button";
import { projects } from "@data/projects";
import type { Project } from "@data/projects";
import {
  Bot,
  Brain,
  Zap,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { TelegramIcon } from "@components/ui/TelegramIcon";
import { useLang } from "@context/useLang";

interface AiFeature {
  icon: typeof Brain;
  title: string;
  titleFa: string;
  desc: string;
  descFa: string;
  accent: "cyan" | "purple";
}

const features: AiFeature[] = [
  {
    icon: Brain,
    title: "Multi-Model AI",
    titleFa: "چند مدل AI",
    desc: "Gemini + OpenRouter with automatic failover and parallel provider race.",
    descFa: "Gemini + OpenRouter با فیل‌اور خودکار و ریس موازی provider‌ها.",
    accent: "cyan",
  },
  {
    icon: MessageSquare,
    title: "Content Engines",
    titleFa: "موتورهای محتوا",
    desc: "AI Admin and Fredy: collect, clean, rewrite and publish to Telegram channels.",
    descFa: "AI Admin و Fredy: جمع‌آوری، پاکسازی، بازنویسی و انتشار در کانال‌های تلگرام.",
    accent: "purple",
  },
  {
    icon: Zap,
    title: "Emotion Engine",
    titleFa: "موتور احساسات",
    desc: "Real-time market psychology from BTC/ETH action, Fear & Greed Index, BTC dominance.",
    descFa: "روانشناسی لحظه‌ای بازار از روی قیمت BTC/ETH، شاخص Fear & Greed و سلطه BTC.",
    accent: "cyan",
  },
  {
    icon: Sparkles,
    title: "Prompt Engineering",
    titleFa: "مهندسی پرامپت",
    desc: "Lyra: 4-D methodology to turn raw ideas into precision-crafted prompts.",
    descFa: "Lyra: روش ۴ مرحله‌ای برای تبدیل ایده خام به پرامپت حرفه‌ای.",
    accent: "purple",
  },
];

const accentText: Record<"cyan" | "purple", string> = {
  cyan: "text-accent-cyan",
  purple: "text-accent-purple",
};

const accentBg: Record<"cyan" | "purple", string> = {
  cyan: "bg-accent-cyan/10",
  purple: "bg-accent-purple/10",
};

const accentBorder: Record<"cyan" | "purple", string> = {
  cyan: "hover:border-accent-cyan/30",
  purple: "hover:border-accent-purple/30",
};

export function AISystems() {
  const { t, lang, dir } = useLang();
  const arrow = dir === "rtl" ? <ArrowRight className="w-3.5 h-3.5 rotate-180" /> : <ArrowRight className="w-3.5 h-3.5" />;

  // Pick the AI-bots we want to spotlight (excluding the more "infra" ones like Hades-Army)
  const spotlightSlugs = ["ai-admin", "tradeagent-iv", "lyra", "fredy-admin"];
  const spotlight: Project[] = spotlightSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={t("AI Systems", "سیستم‌های AI")}
          subtitle={t("Intelligent bots and AI-powered tools for Telegram and beyond", "ربات‌های هوشمند و ابزارهای AI برای تلگرام و فراتر از آن")}
        />

        {/* Spotlight bot cards — 2-col on md, single col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {spotlight.map((bot, i) => {
            const Icon = bot.category === "Finance" ? Zap : Bot;
            const accent = bot.category === "Finance" ? "purple" : "cyan";
            return (
              <motion.div
                key={bot.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
                className={`relative min-w-0 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 ${accentBorder[accent]} transition-colors`}
              >
                <div className="flex items-start gap-4 min-w-0">
                  <div className={`shrink-0 p-3 rounded-xl ${accentBg[accent]} ${accentText[accent]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="text-lg font-bold text-white">{lang === "fa" ? bot.titleFa : bot.title}</h3>
                      <Badge variant={statusToBadgeVariant(bot.status)}>{bot.status}</Badge>
                    </div>
                    {bot.version && (
                      <p className={`text-xs font-mono mb-2 ${accentText[accent]}`}>
                        v{bot.version}
                        {bot.telegram && <span className="text-navy-500"> · {bot.telegram.replace("https://t.me/", "@")}</span>}
                      </p>
                    )}
                    <p className="text-navy-300 text-sm leading-relaxed line-clamp-3">
                      {lang === "fa" ? bot.shortDescFa : bot.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 flex-wrap">
                  {bot.telegram && (
                    <Button
                      href={bot.telegram}
                      variant={accent === "cyan" ? "primary" : "secondary"}
                      size="sm"
                      icon={<TelegramIcon className="w-3.5 h-3.5" />}
                    >
                      {t("Open Bot", "باز کردن ربات")}
                    </Button>
                  )}
                  {bot.github && (
                    <Button href={bot.github} variant="ghost" size="sm" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                      {t("Source", "سورس کد")}
                    </Button>
                  )}
                  <Link
                    to={`/project/${bot.slug}`}
                    className="text-xs text-navy-400 hover:text-accent-cyan transition-colors inline-flex items-center gap-1 ms-auto"
                  >
                    {t("Details", "جزئیات")} {arrow}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className={`min-w-0 p-4 rounded-xl bg-white/5 border border-white/5 ${accentBorder[f.accent]} transition-colors`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-4 h-4 ${accentText[f.accent]}`} />
                  <h4 className="text-sm font-semibold text-white">
                    {lang === "fa" ? f.titleFa : f.title}
                  </h4>
                </div>
                <p className="text-xs text-navy-400 leading-relaxed">
                  {lang === "fa" ? f.descFa : f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
