import { motion } from "motion/react";
import { GlassPanel } from "@components/ui/GlassPanel";
import { liveStats } from "@data/stats";
import { Rocket, Users, Star, GitCommit } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  rocket: <Rocket className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  star: <Star className="w-6 h-6" />,
  "git-commit": <GitCommit className="w-6 h-6" />,
};

export function LiveStats() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {liveStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassPanel className="text-center py-8" glow="cyan">
                <div className="text-neon-cyan mb-3 flex justify-center">
                  {iconMap[stat.icon]}
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                  {stat.value}
                  <span className="text-neon-cyan">{stat.suffix}</span>
                </div>
                <div className="text-space-400 text-sm font-medium">{stat.label}</div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
