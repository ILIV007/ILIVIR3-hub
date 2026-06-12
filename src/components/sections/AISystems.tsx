import { motion } from "motion/react";
import { SectionTitle } from "@components/ui/SectionTitle";
import { GlassPanel } from "@components/ui/GlassPanel";
import { Badge } from "@components/ui/Badge";
import { Bot, Brain, Zap, MessageSquare, Sparkles } from "lucide-react";
import { useLang } from "@context/LangContext";

const features = [
 { icon: Brain, title: "Gemini Integration", titleFa: "اتصال Gemini", desc: "Direct connection to Gemini models with version switching.", descFa: "اتصال مستقیم به مدل‌های Gemini با سوئیچ نسخه." },
 { icon: MessageSquare, title: "Prompt Master", titleFa: "پرامپت مستر", desc: "Advanced prompt management and optimization system.", descFa: "سیستم پیشرفته مدیریت و بهینه‌سازی پرامپت." },
 { icon: Zap, title: "Real-time Analysis", titleFa: "تحلیل لحظه‌ای", desc: "AI-powered real-time market and data analysis.", descFa: "تحلیل لحظه‌ای بازار و داده‌ها با AI." },
 { icon: Sparkles, title: "Multi-Model Support", titleFa: "چند مدل", desc: "Support for multiple AI models with auto-update.", descFa: "پشتیبانی از چندین مدل AI با آپدیت خودکار." },
];

export function AISystems() {
 const { t, lang } = useLang();

 return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={t("AI Systems", "سیستم‌های AI")}
          subtitle={t("Intelligent bots and AI-powered tools", "ربات‌های هوشمند و ابزارهای AI")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <GlassPanel glow="cyan">
            <div className="flex items-center gap-3 mb-3">
              <Bot className="w-6 h-6 text-accent-cyan" />
              <h3 className="text-lg font-bold text-white">IVAI Bot</h3>
            </div>
            <Badge variant="active" className="mb-3">{t("Active", "فعال")}</Badge>
            <p className="text-navy-300 text-sm leading-relaxed">
              {t("Smart Telegram bot powered by Gemini AI. Multi-model support, prompt master, and user management.", "ربات هوشمند تلگرام با Gemini. پشتیبانی چند مدل، پرامپت مستر و مدیریت کاربر.")}
            </p>
          </GlassPanel>

          <GlassPanel glow="purple">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-accent-purple" />
              <h3 className="text-lg font-bold text-white">TradeAgent IV</h3>
            </div>
            <Badge variant="active" className="mb-3">{t("Active", "فعال")}</Badge>
            <p className="text-navy-300 text-sm leading-relaxed">
              {t("Intelligent trading analysis bot. AI market analysis, automated signals, and risk management.", "ربات تحلیل ترید هوشمند. تحلیل AI بازار، سیگنال خودکار و مدیریت ریسک.")}
            </p>
          </GlassPanel>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent-cyan/30 transition-colors"
              >
                <Icon className="w-5 h-5 text-accent-cyan mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">
                  {lang === "fa" ? f.titleFa : f.title}
                </h4>
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
