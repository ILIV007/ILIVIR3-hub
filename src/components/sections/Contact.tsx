import { motion } from "motion/react";
import { SectionTitle } from "@components/ui/SectionTitle";
import { GlassPanel } from "@components/ui/GlassPanel";
import { socials, contactEmail } from "@data/socials";
import { Github, Youtube, Mail, Instagram, ExternalLink } from "lucide-react";
import { TelegramIcon } from "@components/ui/TelegramIcon";
import { useLang } from "@context/useLang";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  send: <TelegramIcon className="w-5 h-5" />,
  youtube: <Youtube className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
};

export function Contact() {
  const { lang } = useLang();

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title={lang === "fa" ? "تماس با ما" : "Get in Touch"}
          subtitle={lang === "fa" ? "راه‌های ارتباطی با ILIVIR3" : "Connect with ILIVIR3"}
        />

        {/* Email Card — Hero style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <a href={`mailto:${contactEmail}`} className="block group">
            <GlassPanel className="relative overflow-hidden p-6 md:p-8 hover:border-accent-cyan/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/5 via-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="p-4 rounded-2xl bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-navy-950 transition-all shadow-[0_0_20px_rgba(0,229,255,0.15)]">
                  <Mail className="w-8 h-8" />
                </div>
                <div className="text-center md:text-start flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {lang === "fa" ? "ایمیل" : "Email"}
                  </h3>
                  <p className="text-accent-cyan font-mono text-sm md:text-base break-all">
                    {contactEmail}
                  </p>
                  <p className="text-navy-400 text-xs mt-1">
                    {lang === "fa" ? "برای همکاری و سوالات" : "For collaboration & inquiries"}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-navy-600 group-hover:text-accent-cyan transition-colors" />
              </div>
            </GlassPanel>
          </a>
        </motion.div>

        {/* Social Grid — Glowing icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socials.map((social, index: number) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassPanel className="flex items-center gap-4 p-4 hover:border-accent-cyan/30 transition-all group">
                <div className="p-3 rounded-xl bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-navy-950 transition-all shadow-[0_0_15px_rgba(0,229,255,0.1)]">
                  {iconMap[social.icon]}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-sm">{social.name}</h4>
                  <p className="text-navy-400 text-xs truncate">{social.label}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-navy-600 group-hover:text-accent-cyan transition-colors" />
              </GlassPanel>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
