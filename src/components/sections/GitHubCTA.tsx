import { motion } from "motion/react";
import { GlassPanel } from "@components/ui/GlassPanel";
import { Button } from "@components/ui/Button";
import { Github, GitFork, Star, GitCommit } from "lucide-react";
import { useLang } from "@context/LangContext";

export function GitHubCTA() {
  const { t } = useLang();

  return (
    <section className="relative py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <GlassPanel glow="purple" className="text-center py-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-glow-purple-dim text-accent-purple mb-4">
              <Github className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{t("Follow on GitHub", "ما را در گیت‌هاب دنبال کنید")}</h3>
            <p className="text-navy-400 text-sm mb-4 max-w-md mx-auto">{t("Explore the source code, contribute, and stay updated.", "کد منبع را کاوش کنید، مشارکت کنید و به‌روز بمانید.")}</p>
            <div className="flex items-center justify-center gap-5 mb-5 text-navy-500 text-xs">
              <div className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-amber-400" />150+ {t("Stars", "استار")}</div>
              <div className="flex items-center gap-1.5"><GitFork className="w-3.5 h-3.5 text-accent-cyan" />30+ {t("Forks", "فورک")}</div>
              <div className="flex items-center gap-1.5"><GitCommit className="w-3.5 h-3.5 text-emerald-400" />500+ {t("Commits", "کامیت")}</div>
            </div>
            <Button href="https://github.com/ILIV007" size="md" icon={<Github className="w-4 h-4" />}>
              {t("Visit GitHub", "مشاهده گیت‌هاب")}
            </Button>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
