export interface Project {
  id: string;
  slug: string;
  title: string;
  titleFa: string;
  category: string;
  status: "Active" | "Beta" | "Archived";
  description: string;
  descriptionFa: string;
  shortDesc: string;
  shortDescFa: string;
  github?: string;
  demo?: string;
  telegram?: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1", slug: "ivai-bot", title: "IVAI Bot", titleFa: "IVAI Bot",
    category: "AI", status: "Active",
    description: "Smart Telegram bot powered by Gemini AI. Multi-model support, prompt master system, and advanced user management.",
    descriptionFa: "ربات هوشمند تلگرام با قدرت Gemini. پشتیبانی چند مدل، سیستم پرامپت مستر و مدیریت کاربر.",
    shortDesc: "Telegram AI bot with Gemini", shortDescFa: "ربات AI تلگرام با Gemini",
    github: "https://github.com/ILIV007/IVAI", telegram: "https://t.me/IVAI_bot", demo: "https://t.me/IVAI_LLM_bot",
    tags: ["Telegram", "Gemini", "Python", "AI"], featured: true,
  },
  {
    id: "2", slug: "tradeagent-iv", title: "TradeAgent IV", titleFa: "TradeAgent IV",
    category: "Finance", status: "Active",
    description: "Intelligent trading analysis bot. AI market analysis, automated signals, and risk management.",
    descriptionFa: "ربات تحلیل و ترید هوشمند. تحلیل AI بازار، سیگنال خودکار و مدیریت ریسک.",
    shortDesc: "AI-powered trading analysis", shortDescFa: "تحلیل ترید با AI",
    github: "https://github.com/ILIV007/TradeAgentIV", telegram: "https://t.me/TradeAgentIV_bot", demo: "https://t.me/tradeagentiv",
    tags: ["Trading", "AI", "Python", "Finance"], featured: true,
  },
  {
    id: "3", slug: "arkeen-serpent", title: "Arkeen Serpent", titleFa: "آرکین سرپنت",
    category: "Game", status: "Active",
    description: "Classic snake game with modern graphics and online features. Multiple game modes.",
    descriptionFa: "بازی کلاسیک مار با گرافیک مدرن و امکانات آنلاین. حالت‌های مختلف.",
    shortDesc: "Modern snake browser game", shortDescFa: "بازی مار مدرن",
    github: "https://github.com/ILIV007/SnakeGame", demo: "https://arkeen-serpent.pages.dev",
    tags: ["JavaScript", "Canvas", "Game"], featured: true,
  },
  {
    id: "4", slug: "donate-platform", title: "Donate Platform", titleFa: "پلتفرم دونیشن",
    category: "Web", status: "Active",
    description: "Donation platform with multiple payment gateways. Reporting and contribution management.",
    descriptionFa: "پلتفرم دونیشن با درگاه‌های متنوع. گزارش‌دهی و مدیریت کمک‌ها.",
    shortDesc: "Donation platform", shortDescFa: "پلتفرم دونیشن",
    github: "https://github.com/ILIV007/DonatePlatform", demo: "https://iliv007-donate.pages.dev",
    tags: ["React", "Payment", "Web"], featured: false,
  },
  {
    id: "5", slug: "cv-website", title: "CV Website", titleFa: "وب‌سایت رزومه",
    category: "Web", status: "Active",
    description: "Personal resume website with modern design. Multi-language and dark/light mode.",
    descriptionFa: "وب‌سایت رزومه با طراحی مدرن. چند زبانه و حالت تاریک/روشن.",
    shortDesc: "Personal resume site", shortDescFa: "سایت رزومه",
    github: "https://github.com/ILIV007/CV-Website", demo: "https://iliv007-cv.pages.dev",
    tags: ["React", "Tailwind", "Web"], featured: false,
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getFeatured = () => projects.filter((p) => p.featured);
