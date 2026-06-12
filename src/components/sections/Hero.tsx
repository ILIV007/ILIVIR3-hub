import { motion } from "motion/react";
import { AICore } from "@components/three/AICore";
import { Void } from "@components/three/Void";
import { Button } from "@components/ui/Button";
import { ArrowRight, Github } from "lucide-react";
import { useLang } from "@context/LangContext";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950 to-navy-900" />

      {/* Void Model - Left Background (Positioned with safe bounds) */}
      <div className="hidden lg:block absolute left-[-5%] top-0 w-[40vw] h-screen z-0 pointer-events-none overflow-hidden">
        <div className="w-full h-full transform scale-110 origin-center">
          <Void />
        </div>
      </div>

      {/* AICore Model - Right Background (Positioned with safe bounds) */}
      <div className="hidden lg:block absolute right-[-5%] top-0 w-[40vw] h-screen z-0 pointer-events-none overflow-hidden">
        <div className="w-full h-full transform scale-110 origin-center">
          <AICore />
        </div>
      </div>

      {/* Center Content - Top layer */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-20 z-10">
        <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-cyan bg-clip-text text-transparent animate-gradient">
                ILIVIR3
              </h1>
              <p className="text-lg sm:text-xl text-accent-cyan font-mono mb-2">
                {t("Tech Command Center", "مرکز فرماندهی تکنولوژی")}
              </p>
              <p className="text-navy-400 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
                {t(
                  "AI Systems, Open Source & Experimental Tech",
                  "سیستم‌های AI، متن‌باز و تکنولوژی آزمایشی"
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Button href="#projects" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                {t("Explore Projects", "مشاهده پروژه‌ها")}
              </Button>
              <Button variant="outline" href="https://github.com/ILIV007" size="lg" icon={<Github className="w-5 h-5" />}>
                {t("GitHub", "گیت‌هاب")}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12 text-navy-600 text-xs font-mono"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-accent-cyan mr-2 animate-pulse" />
              {t("Built by ILIV007", "ساخته‌شده توسط ILIV007")}
            </motion.div>
        </div>
      </div>
    </section>
  );
}
