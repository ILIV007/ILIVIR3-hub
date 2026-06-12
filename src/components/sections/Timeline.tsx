import { motion } from "motion/react";
import { SectionTitle } from "@components/ui/SectionTitle";
import { timelineEvents } from "@data/timeline";
import { Rocket, Bot, TrendingUp, Gamepad2, Orbit } from "lucide-react";
import { useLang } from "@context/LangContext";

const iconMap: Record<string, React.ReactNode> = {
  rocket: <Rocket className="w-4 h-4" />, bot: <Bot className="w-4 h-4" />,
  "trending-up": <TrendingUp className="w-4 h-4" />, "gamepad-2": <Gamepad2 className="w-4 h-4" />, orbit: <Orbit className="w-4 h-4" />,
};

export function Timeline() {
  const { lang } = useLang();

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          title={lang === "fa" ? "تایم‌لاین" : "Timeline"}
          subtitle={lang === "fa" ? "مسیر تکاملی پروژه‌ها" : "Project evolution path"}
        />

        <div className="relative">
          {/* Vertical line — 2px wide, centered, always visible */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] md:-ml-[1px] bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent z-0" />

          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div key={event.id}
                className={`relative flex items-start gap-5 mb-8 z-10 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, x: isLeft ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Dot on the line */}
                <div className="absolute left-4 md:left-1/2 top-5 md:-ml-[5px] z-20">
                  <div className={`w-2.5 h-2.5 rounded-full border-2 ${event.highlight ? "bg-accent-cyan border-accent-cyan shadow-[0_0_12px_rgba(0,229,255,0.5)]" : "bg-navy-950 border-navy-500"}`} />
                </div>

                {/* Content card */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-1.5rem)] ${isLeft ? "md:text-left md:pr-6" : "md:text-right md:pl-6"}`}>
                  <div className={`rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-4 ${event.highlight ? "border-accent-cyan/15" : ""}`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`p-1.5 rounded-md ${event.highlight ? "bg-accent-cyan-dim text-accent-cyan" : "bg-white/5 text-navy-500"}`}>
                        {iconMap[event.icon]}
                      </div>
                      <span className="text-accent-cyan text-xs font-mono font-bold">{event.year} — {lang === "fa" ? event.monthFa : event.month}</span>
                    </div>
                    <h4 className="text-white font-bold text-sm mb-0.5">{lang === "fa" ? event.titleFa : event.title}</h4>
                    <p className="text-navy-500 text-xs leading-relaxed">{lang === "fa" ? event.descFa : event.desc}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-1.5rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
