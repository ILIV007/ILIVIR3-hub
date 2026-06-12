import { motion } from "motion/react";
import { GlassPanel } from "@components/ui/GlassPanel";
import { Button } from "@components/ui/Button";
import { telegramLinks } from "@data/socials";
import { Send, Radio, MessageCircle, Users } from "lucide-react";
import { useLang } from "@context/LangContext";

export function Telegram() {
  const { t } = useLang();

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <GlassPanel glow="cyan" className="text-center py-12 md:py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-neon-cyan/10 text-neon-cyan mb-6">
              <Send className="w-8 h-8" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("Join Telegram", "به تلگرام بپیوندید")}
            </h2>
            <p className="text-space-400 max-w-xl mx-auto mb-8 leading-relaxed">
              {t("Get the latest news, updates and new projects first on ILIVIR3 Telegram.", "آخرین اخبار، آپدیت‌ها و پروژه‌های جدید را اول از همه در تلگرام ILIVIR3 دریافت کنید.")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button href={telegramLinks.channel} size="lg" icon={<Radio className="w-5 h-5" />}>
                {t("Telegram Channel", "کانال تلگرام")}
              </Button>
              <Button variant="outline" href={telegramLinks.support} size="lg" icon={<MessageCircle className="w-5 h-5" />}>
                {t("Support", "پشتیبانی")}
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-space-500 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>2000+ {t("Users", "کاربر")}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-space-600" />
              <span>{t("Daily Updates", "آپدیت روزانه")}</span>
              <div className="w-1 h-1 rounded-full bg-space-600" />
              <span>{t("Free", "رایگان")}</span>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
