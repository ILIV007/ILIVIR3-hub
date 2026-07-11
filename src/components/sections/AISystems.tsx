import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { SectionTitle } from "@components/ui/SectionTitle";
import { Badge } from "@components/ui/Badge";
import { Button } from "@components/ui/Button";
import {
  Bot,
  Brain,
  Zap,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useLang } from "@context/LangContext";

interface AiBot {
  slug: string;
  name: string;
  nameFa: string;
  tagline: string;
  taglineFa: string;
  desc: string;
  descFa: string;
  icon: typeof Bot;
  accent: "cyan" | "purple";
  url: string;
}

const aiBots: AiBot[] = [
  {
    slug: "ivai-bot",
    name: "IVAI Bot",
    nameFa: "IVAI Bot",
    tagline: "Telegram AI · Gemini",
    taglineFa: "AI تلگرام · Gemini",
    desc: "Smart Telegram bot powered by Gemini AI. Multi-model support, prompt master system, and advanced user management.",
    descFa: "ربات هوشمند تلگرام با Gemini. پشتیبانی چند مدل، سیستم پرامپت مستر و مدیریت کاربر.",
    icon: Bot,
    accent: "cyan",
    url: "https://t.me/IVAI_bot",
  },
  {
    slug: "tradeagent-iv",
    name: "TradeAgent IV",
    nameFa: "TradeAgent IV",
    tagline: "Trading · AI Signals",
    taglineFa: "ترید · سیگنال AI",
    desc: "Intelligent trading analysis bot. AI market analysis, automated signals, and risk management.",
    descFa: "ربات تحلیل و ترید هوشمند. تحلیل AI بازار، سیگنال خودکار و مدیریت ریسک.",
    icon: Zap,
    accent: "purple",
    url: "https://t.me/TradeAgentIV_bot",
  },
];

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
    title: "Gemini Integration",
    titleFa: "اتصال Gemini",
    desc: "Direct connection to Gemini models with version switching.",
    descFa: "اتصال مستقیم به مدل‌های Gemini با سوئیچ نسخه.",
    accent: "cyan",
  },
  {
    icon: MessageSquare,
    title: "Prompt Master",
    titleFa: "پرامپت مستر",
    desc: "Advanced prompt management and optimization system.",
    descFa: "سیستم پیشرفته مدیریت و بهینه‌سازی پرامپت.",
    accent: "purple",
  },
  {
    icon: Zap,
    title: "Real-time Analysis",
    titleFa: "تحلیل لحظه‌ای",
    desc: "AI-powered real-time market and data analysis.",
    descFa: "تحلیل لحظه‌ای بازار و داده‌ها با AI.",
    accent: "cyan",
  },
  {
    icon: Sparkles,
    title: "Multi-Model Support",
    titleFa: "چند مدل",
    desc: "Support for multiple AI models with auto-update.",
    descFa: "پشتیبانی از چندین مدل AI با آپدیت خودکار.",
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

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={t("AI Systems", "سیستم‌های AI")}
          subtitle={t("Intelligent bots and AI-powered tools", "ربات‌های هوشمند و ابزارهای AI")}
        />

        {/* Two bot cards — stack on mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {aiBots.map((bot, i) => {
            const Icon = bot.icon;
            return (
              <motion.div
                key={bot.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative min-w-0 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 ${accentBorder[bot.accent]} transition-colors`}
              >
                <div className="flex items-start gap-4 min-w-0">
                  <div className={`shrink-0 p-3 rounded-xl ${accentBg[bot.accent]} ${accentText[bot.accent]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="text-lg font-bold text-white">{lang === "fa" ? bot.nameFa : bot.name}</h3>
                      <Badge variant="active">{t("Active", "فعال")}</Badge>
                    </div>
                    <p className={`text-xs font-mono mb-2 ${accentText[bot.accent]}`}>
                      {lang === "fa" ? bot.taglineFa : bot.tagline}
                    </p>
                    <p className="text-navy-300 text-sm leading-relaxed">
                      {lang === "fa" ? bot.descFa : bot.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 flex-wrap">
                  <Button
                    href={bot.url}
                    variant={bot.accent === "cyan" ? "primary" : "secondary"}
                    size="sm"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    {t("Open Bot", "باز کردن ربات")}
                  </Button>
                  <Link
                    to={`/project/${bot.slug}`}
                    className="text-xs text-navy-400 hover:text-accent-cyan transition-colors inline-flex items-center gap-1"
                  >
                    {t("Details", "جزئیات")} {arrow}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature grid — single column on mobile for compactness */}
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
