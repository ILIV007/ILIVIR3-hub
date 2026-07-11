import { motion } from "motion/react";
import { GlassPanel } from "@components/ui/GlassPanel";
import { Button } from "@components/ui/Button";
import { Heart, ExternalLink } from "lucide-react";
import { useLang } from "@context/useLang";

export function DonateCTA() {
  const { t } = useLang();

  return (
    <section className="relative py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <GlassPanel className="text-center py-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{t("Support the Project", "از پروژه حمایت کنید")}</h3>
            <p className="text-navy-400 text-sm mb-4 max-w-md mx-auto">{t("Your support helps keep these projects free and open source.", "حمایت شما به حفظ رایگان و متن‌باز بودن این پروژه‌ها کمک می‌کند.")}</p>
            <Button variant="outline" href="https://donate-iv.pages.dev/" size="md" icon={<ExternalLink className="w-4 h-4" />}>
              {t("Donate", "حمایت")}
            </Button>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
