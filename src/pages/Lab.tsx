import { motion } from "motion/react";
import { SectionTitle } from "@components/ui/SectionTitle";
import { GlassPanel } from "@components/ui/GlassPanel";
import { FlaskConical } from "lucide-react";
import { useLang } from "@context/useLang";

export function Lab() {
  const { lang } = useLang();

  return (
    <section className="relative py-24 px-4 pt-28 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title={lang === "fa" ? "آزمایشگاه" : "Experimental Zone"}
          subtitle={lang === "fa" ? "ایده‌ها و پروژه‌های در حال توسعه" : "Ideas and projects in development"}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GlassPanel glow="purple" className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-purple/10 text-accent-purple mb-4">
              <FlaskConical className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {lang === "fa" ? "به زودی..." : "Coming Soon..."}
            </h3>
            <p className="text-navy-400 text-sm max-w-md mx-auto">
              {lang === "fa"
                ? "پروژه‌های آزمایشی و ایده‌های جدید در این بخش قرار خواهند گرفت."
                : "Experimental projects and new ideas will be featured here."}
            </p>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
