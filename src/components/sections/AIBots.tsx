import { motion } from "motion/react";
import { SectionTitle } from "@components/ui/SectionTitle";
import { GlassPanel } from "@components/ui/GlassPanel";
import { Badge } from "@components/ui/Badge";
import { Button } from "@components/ui/Button";
import { Bot, Brain, Zap, MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@context/LangContext";

const aiFeatures = [
  {
    icon: Brain,
    title: "Gemini Integration",
    titleFa: "اتصال Gemini",
    desc: "Direct connection to Gemini models with version switching.",
    descFa: "اتصال مستقیم به مدل‌های Gemini با قابلیت سوئیچ نسخه.",
  },
  {
    icon: MessageSquare,
    title: "Prompt Master",
    titleFa: "پرامپت مستر",
    desc: "Advanced prompt management and optimization system.",
    descFa: "سیستم پیشرفته مدیریت و بهینه‌سازی پرامپت.",
  },
  {
    icon: Zap,
    title: "Real-time Analysis",
    titleFa: "تحلیل لحظه‌ای",
    desc: "AI-powered real-time market and data analysis.",
    descFa: "تحلیل لحظه‌ای بازار و داده‌ها با AI.",
  },
  {
    icon: Sparkles,
    title: "Multi-Model Support",
    titleFa: "پشتیبانی چند مدل",
    desc: "Support for multiple AI models with auto-update.",
    descFa: "پشتیبانی از چندین مدل AI با آپدیت خودکار.",
  },
];

export function AIBots() {
  const { t, lang } = useLang();

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="relative max-w-6xl mx-auto">
        <SectionTitle
          title={t("AI & Bots", "AI و ربات‌ها")}
          subtitle={t("Smart bots powered by AI for Telegram and market analysis", "ربات‌های هوشمند با قدرت AI برای تلگرام و تحلیل بازار")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <GlassPanel glow="cyan" className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-neon-cyan/10 text-neon-cyan shrink-0">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white">IVAI Bot</h3>
                    <Badge variant="active">{t("Active", "فعال")}</Badge>
                  </div>
                  <p className="text-space-400 text-sm leading-relaxed">
                    {t("Smart Telegram bot powered by Gemini AI. Multi-model support, prompt master system, and advanced user management.", "ربات هوشمند تلگرام با قدرت Gemini. پشتیبانی چند مدل، سیستم پرامپت مستر و مدیریت کاربر.")}
                  </p>
                </div>
              </GlassPanel>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <GlassPanel glow="purple" className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-neon-purple/10 text-neon-purple shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white">TradeAgent IV</h3>
                    <Badge variant="active">{t("Active", "فعال")}</Badge>
                  </div>
                  <p className="text-space-400 text-sm leading-relaxed">
                    {t("Intelligent trading analysis bot. AI market analysis, automated signals, and risk management.", "ربات تحلیل و ترید هوشمند. تحلیل AI بازار، سیگنال خودکار و مدیریت ریسک.")}
                  </p>
                </div>
              </GlassPanel>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass-card p-5">
                  <Icon className="w-5 h-5 text-neon-cyan mb-3" />
                  <h4 className="text-white font-semibold text-sm mb-1">{lang === "fa" ? feature.titleFa : feature.title}</h4>
                  <p className="text-space-400 text-xs leading-relaxed">{lang === "fa" ? feature.descFa : feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div className="mt-10 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Link to="/projects">
            <Button variant="outline" icon={<ArrowRight className="w-4 h-4" />}>
              {t("More Details", "جزئیات بیشتر")}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
