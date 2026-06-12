import { motion } from "motion/react";
import { SectionTitle } from "@components/ui/SectionTitle";
import { Card } from "@components/ui/Card";
import { Badge } from "@components/ui/Badge";
import { techFeedItems } from "@data/techFeed";
import { Newspaper, ExternalLink, Calendar } from "lucide-react";
import { useLang } from "@context/LangContext";

const tagColors: Record<string, string> = { React: "info", CSS: "beta", AI: "active", DevOps: "default" };

export function TechFeed() {
  const { lang } = useLang();

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={lang === "fa" ? "اخبار تکنولوژی" : "Tech News"}
          subtitle={lang === "fa" ? "آخرین آپدیت‌ها از دنیای تکنولوژی" : "Latest updates from the tech world"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {techFeedItems.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}>
              <Card className="flex items-start gap-3" hover>
                <div className="p-2 rounded-lg bg-accent-cyan-dim text-accent-cyan shrink-0">
                  <Newspaper className="w-4 h-4" />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <Badge variant={tagColors[item.tag] as any || "default"}>{item.tag}</Badge>
                    <span className="text-navy-500 text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />{item.date}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-0.5 truncate">{lang === "fa" ? item.titleFa : item.title}</h4>
                  <p className="text-navy-500 text-xs">{item.source}</p>
                </div>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-navy-600 hover:text-accent-cyan transition-colors shrink-0">
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
