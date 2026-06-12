import { motion } from "motion/react";
import { GlassPanel } from "@components/ui/GlassPanel";
import { Button } from "@components/ui/Button";
import { telegramLinks } from "@data/socials";
import { Send, Radio, MessageCircle, Users } from "lucide-react";
import { useLang } from "@context/LangContext";

export function TelegramCTA() {
  const { t } = useLang();

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <GlassPanel glow="cyan" className="text-center py-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-cyan-dim text-accent-cyan mb-5">
              <Send className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{t("Join Telegram", "به تلگرام بپیوندید")}</h2>
            <p className="text-navy-400 text-sm max-w-sm mx-auto mb-6">{t("Get the latest news, updates and new projects first.", "آخرین اخبار، آپدیت‌ها و پروژه‌های جدید را اولین نفر دریافت کنید.")}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <Button href={telegramLinks.channel} size="md" icon={<Radio className="w-4 h-4" />}>
                {t("Channel", "چنل")}
              </Button>
              <Button variant="outline" href={telegramLinks.support} size="md" icon={<MessageCircle className="w-4 h-4" />}>
                {t("Support", "پشتیبانی")}
              </Button>
            </div>
            <div className="flex items-center justify-center gap-5 text-navy-500 text-xs">
              <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /><span>2000+ {t("Users", "کاربر")}</span></div>
              <div className="w-1 h-1 rounded-full bg-navy-700" />
              <span>{t("Daily Updates", "آپدیت روزانه")}</span>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
