export type ProjectStatus = "Active" | "Beta" | "Archived" | "In Development";
export type ProjectCategory = "AI" | "Finance" | "Game" | "Web" | "Tool" | "Trading";

export interface Project {
  id: string;
  slug: string;
  title: string;
  titleFa: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  descriptionFa: string;
  shortDesc: string;
  shortDescFa: string;
  github?: string;
  demo?: string;
  telegram?: string;
  tags: string[];
  featured?: boolean;
  /** When the project was first released (YYYY-MM). */
  released?: string;
  /** Latest version label shown in the UI. */
  version?: string;
}

export const projects: Project[] = [
  // ─────────────────────────────────────────────────────────────────
  // FEATURED — AI & Telegram bots
  // ─────────────────────────────────────────────────────────────────

  {
    id: "1",
    slug: "ai-admin",
    title: "AI Admin",
    titleFa: "AI Admin",
    category: "AI",
    status: "Active",
    version: "0.7.3",
    released: "2026-01",
    description:
      "A Telegram channel content-processing bot built on Cloudflare Workers. Accepts raw posts in private chat, cleans them, rewrites them with AI (Gemini or OpenRouter), formats them with HTML, and publishes them to your channel. Can also edit posts already published where the bot is an admin. Runs 100% on the free tier — no servers, no databases, no monthly bill. Live example: @ILIVIR3 channel on Telegram.",
    descriptionFa:
      "ربات پردازش محتوای کانال تلگرام روی Cloudflare Workers. پست‌های خام را در چت خصوصی دریافت می‌کند، پاکسازی و با AI (Gemini یا OpenRouter) بازنویسی می‌کند، با HTML فرمت می‌کند و در کانال شما منتشر می‌کند. کل سیستم روی لایه رایگان Cloudflare Workers اجرا می‌شود — بدون سرور، بدون دیتابیس، بدون قبض ماهانه. نمونه واقعی استفاده: کانال @ILIVIR3 در تلگرام.",
    shortDesc: "Telegram channel admin bot with AI rewriting",
    shortDescFa: "ربات ادمین کانال با بازنویسی AI",
    github: "https://github.com/ILIV007/AI-admin",
    telegram: "https://t.me/ILIVIR3",
    tags: ["Telegram", "Gemini", "OpenRouter", "Cloudflare Workers", "AI"],
    featured: true,
  },

  {
    id: "2",
    slug: "tradeagent-iv",
    title: "TradeAgent IV HYBRID",
    titleFa: "TradeAgent IV HYBRID",
    category: "Finance",
    status: "Active",
    version: "4.3.2",
    released: "2024-03",
    description:
      "Advanced serverless cryptocurrency intelligence system on Cloudflare Workers. Automates Telegram channel posting with real-time market analysis, powered by a proprietary Emotion Engine that gauges market psychology using BTC/ETH price action, Fear & Greed Index, and BTC Dominance. Multi-model AI failover across Gemini and OpenRouter with bilingual EN/FA output. Tracks 3 tiers of coins (blue chips, utility/L2s, meme/AI).",
    descriptionFa:
      "سیستم هوشمند سرورلس ارز دیجیتال روی Cloudflare Workers. ارسال خودکار تحلیل بازار در کانال تلگرام با موتور اختصاصی Emotion که روانشناسی بازار را از روی قیمت BTC/ETH، شاخص Fear & Greed و سلطه BTC تحلیل می‌کند. فیل‌اور چندمدلی AI بین Gemini و OpenRouter با خروجی دوزبانه EN/FA. ردیابی ۳ لایه ارز (blue chips، utility/L2، meme/AI).",
    shortDesc: "AI crypto intelligence with emotion engine",
    shortDescFa: "هوش ارز دیجیتال با موتور احساسات",
    github: "https://github.com/ILIV007/TradeAgentIV",
    telegram: "https://t.me/TradeAgentIV",
    tags: ["Trading", "AI", "Gemini", "Cloudflare Workers", "Crypto", "Finance"],
    featured: true,
  },

  {
    id: "3",
    slug: "lyra",
    title: "Lyra",
    titleFa: "Lyra",
    category: "AI",
    status: "Active",
    version: "1.0",
    released: "2026-02",
    description:
      "AI Prompt Optimizer Telegram bot built on Cloudflare Workers. Takes raw user input and turns it into optimized, professional-grade prompts for any AI platform. Uses a 4-D methodology (Deconstruct → Diagnose → Develop → Deliver) to analyze intent, fill gaps, and produce structured prompts with copy-friendly code blocks. Multilingual: English, Persian, Russian. Test it live: @Lyra_IVbot on Telegram.",
    descriptionFa:
      "ربات بهینه‌ساز پرامپت AI تلگرام روی Cloudflare Workers. ورودی خام کاربر را به پرامپت حرفه‌ای و بهینه برای هر پلتفرم AI تبدیل می‌کند. از روش‌شناسی ۴ مرحله‌ای (Deconstruct → Diagnose → Develop → Deliver) برای تحلیل intent، پر کردن شکاف‌ها و تولید پرامپت ساختاریافته با بلاک‌های کپی کد استفاده می‌کند. چندزبانه: انگلیسی، فارسی، روسی. تست زنده: @Lyra_IVbot در تلگرام.",
    shortDesc: "AI prompt optimizer with 4-D methodology",
    shortDescFa: "بهینه‌ساز پرامپت AI با روش ۴ مرحله‌ای",
    github: "https://github.com/ILIV007/Lyra",
    telegram: "https://t.me/Lyra_IVbot",
    tags: ["Telegram", "AI", "OpenRouter", "Cloudflare Workers", "Prompt"],
    featured: true,
  },

  {
    id: "4",
    slug: "arkeen-serpent",
    title: "Arkeen Serpent",
    titleFa: "آرکین سرپنت",
    category: "Game",
    status: "Active",
    version: "2.3",
    released: "2024-06",
    description:
      "Modern space-themed arcade game that reimagines the classic Snake gameplay. Built as a high-performance web application and seamlessly integrated as a Telegram Mini App. Features 4 difficulty levels (Easy to Insane), 5 unique visual realms (Void, Moon, Emerald, Crimson, Royal), combo system, and beautifully crafted cosmic environments.",
    descriptionFa:
      "بازی آرکید فضایی مدرن که گیم‌پلی کلاسیک مار را بازطراحی می‌کند. ساخته‌شده به عنوان وب‌اپلیکیشن پرسرعت و یکپارچه با Telegram Mini App. دارای ۴ سطح سختی (از آسان تا Insane)، ۵ قلمرو بصری منحصربه‌فرد (Void، Moon، Emerald، Crimson، Royal)، سیستم کمبو و محیط‌های کیهانی زیبا.",
    shortDesc: "Space-themed Snake arcade + Telegram Mini App",
    shortDescFa: "بازی مار فضایی + Telegram Mini App",
    github: "https://github.com/ILIV007/arkeen-serpent",
    demo: "https://arkeen-serpent.pages.dev",
    tags: ["JavaScript", "Canvas", "Game", "Telegram Mini App"],
    featured: true,
  },

  // ─────────────────────────────────────────────────────────────────
  // FEATURED — Content engines & platforms
  // ─────────────────────────────────────────────────────────────────

  {
    id: "5",
    slug: "fredy-admin",
    title: "Fredy",
    titleFa: "Fredy",
    category: "AI",
    status: "Active",
    version: "1.3.0",
    released: "2026-03",
    description:
      "Production-ready serverless Content Operating System that automatically collects, processes, and publishes high-quality developer content to Telegram channels. Built entirely on Cloudflare's free tier. Plugin-based architecture with 12 content source providers (GitHub, NewsAPI, NASA, Hacker News, Dev.to, Reddit, XKCD, etc.), 6-dimension content quality scoring, smart scheduler, humanized post formatting, and 10-screen admin control panel. Live example: @ILIVIR3 channel on Telegram.",
    descriptionFa:
      "سیستم‌عامل محتوای سرورلس آماده پروداکشن که محتوای باکیفیت توسعه‌دهنده را به‌صورت خودکار جمع‌آوری، پردازش و در کانال‌های تلگرام منتشر می‌کند. کاملاً روی لایه رایگان Cloudflare. معماری پلاگین‌محور با ۱۲ منبع محتوا (GitHub، NewsAPI، NASA، Hacker News، Dev.to، Reddit، XKCD و...)، امتیازدهی ۶ بعدی کیفیت محتوا، زمان‌بند هوشمند، فرمت انسانی پست و پنل ادمین ۱۰ صفحه‌ای. نمونه واقعی استفاده: کانال @ILIVIR3 در تلگرام.",
    shortDesc: "AI content engine for developer channels",
    shortDescFa: "موتور محتوای AI برای کانال‌های دولوپر",
    github: "https://github.com/ILIV007/Fredy-admin",
    telegram: "https://t.me/ILIVIR3",
    tags: ["Telegram", "AI", "Gemini", "Cloudflare Workers", "Content", "Plugin"],
    featured: true,
  },

  {
    id: "6",
    slug: "hades-army",
    title: "Hades Army",
    titleFa: "Hades Army",
    category: "AI",
    status: "In Development",
    version: "0.8.0",
    released: "2026-04",
    description:
      "Autonomous AI development platform designed to run on Cloudflare Workers. Complete ecosystem for managing AI agents, code reviews, approvals, memory management, and deployments — all serverless at the edge. Multi-agent system (Builder, Reviewer, Analyzer, Tester, Deployer), 7-stage code review pipeline, multi-level approval workflows with escalation, persistent memory with versioning and rollback, real-time monitoring, and security-first design with secret scanning and RBAC.",
    descriptionFa:
      "پلتفرم توسعه خودمختار AI روی Cloudflare Workers. اکوسیستم کامل برای مدیریت agent‌های AI، code review، تأییدها، مدیریت حافظه و دیپلوی — همگی سرورلس. سیستم چند agent (Builder، Reviewer، Analyzer، Tester، Deployer)، خط لوله ۷ مرحله‌ای code review، گردش کار تأیید چندسطحی با escalation، حافظه پایدار با نسخه‌گذاری، مانیتورینگ لحظه‌ای و امنیت اولویت‌بخش با secret scanning و RBAC.",
    shortDesc: "Autonomous AI dev platform — multi-agent system",
    shortDescFa: "پلتفرم توسعه خودمختار AI — چند agent",
    github: "https://github.com/ILIV007/Hades-Army",
    tags: ["AI", "Cloudflare Workers", "Multi-Agent", "Automation", "D1", "KV"],
    featured: true,
  },

  {
    id: "7",
    slug: "pixoris",
    title: "Pixoris",
    titleFa: "Pixoris",
    category: "Web",
    status: "In Development",
    version: "4.5",
    released: "2026-03",
    description:
      "Gaming website for game news and digital product sales. Frontend on Cloudflare Pages and backend on Cloudflare Workers. Single consolidated stylesheet (no render-blocking @import), right sidebar navigation with mobile drawer, admin panel with 10 tabs (Posts, Products, Media, Users, Audit Logs, Settings, etc.), and optimized API with bootstrap endpoint and Cloudflare Cache API. Includes Pac Mode and background music.",
    descriptionFa:
      "سایت گیمینگ برای اخبار بازی و فروش محصولات دیجیتال. فرانت روی Cloudflare Pages و بک‌اند روی Cloudflare Workers. استایل‌شیت یکپارچه (بدون @import رندر-بلاک)، ناوبری سایدبار راست با دراور موبایل، پنل ادمین ۱۰ تب (پست، محصول، مدیا، کاربران، لاگ‌ها، تنظیمات و...) و API بهینه با bootstrap endpoint و Cache API. دارای Pac Mode و موسیقی پس‌زمینه.",
    shortDesc: "Gaming news + shop on Cloudflare",
    shortDescFa: "اخبار گیم + فروشگاه روی Cloudflare",
    github: "https://github.com/ILIV007/Pixoris",
    tags: ["React", "Cloudflare Workers", "Gaming", "E-commerce", "Web"],
    featured: false,
  },

  // ─────────────────────────────────────────────────────────────────
  // OTHER PROJECTS
  // ─────────────────────────────────────────────────────────────────

  {
    id: "8",
    slug: "ivai-bot",
    title: "IVAI Bot",
    titleFa: "IVAI Bot",
    category: "AI",
    status: "Active",
    version: "2.0",
    released: "2024-01",
    description:
      "Smart Telegram bot powered by Gemini AI. Multi-model support with version switching, advanced prompt master system, and user management. Direct connection to Gemini models with auto-update capability.",
    descriptionFa:
      "ربات هوشمند تلگرام با قدرت Gemini. پشتیبانی چند مدل با سوئیچ نسخه، سیستم پرامپت مستر پیشرفته و مدیریت کاربر. اتصال مستقیم به مدل‌های Gemini با آپدیت خودکار.",
    shortDesc: "Telegram AI bot with Gemini",
    shortDescFa: "ربات AI تلگرام با Gemini",
    github: "https://github.com/ILIV007/IVAI",
    telegram: "https://t.me/IVAI_LLM_bot",
    tags: ["Telegram", "Gemini", "Python", "AI"],
    featured: false,
  },

  {
    id: "9",
    slug: "donate-platform",
    title: "Donate Platform",
    titleFa: "پلتفرم دونیشن",
    category: "Web",
    status: "Active",
    version: "1.0",
    released: "2025-06",
    description:
      "Donation platform with multiple payment gateways. Reporting and contribution management for open-source projects.",
    descriptionFa:
      "پلتفرم دونیشن با درگاه‌های متنوع. گزارش‌دهی و مدیریت کمک‌ها برای پروژه‌های متن‌باز.",
    shortDesc: "Donation platform with payment gateways",
    shortDescFa: "پلتفرم دونیشن با درگاه پرداخت",
    github: "https://github.com/ILIV007/Donate",
    demo: "https://iliv007-donate.pages.dev",
    tags: ["React", "Payment", "Web"],
    featured: false,
  },

  {
    id: "10",
    slug: "xo-game",
    title: "XO Game (Tic-Tac-Toe)",
    titleFa: "بازی دوز",
    category: "Game",
    status: "Archived",
    version: "1.0",
    released: "2024-09",
    description:
      "Tic-Tac-Toe (دوز) game written in C++ as a university academic project. Classic two-player console implementation.",
    descriptionFa:
      "بازی دوز (Tic-Tac-Toe) نوشته‌شده با C++ به عنوان پروژه دانشگاهی. پیاده‌سازی کلاسیک دو نفره در کنسول.",
    shortDesc: "C++ Tic-Tac-Toe — university project",
    shortDescFa: "بازی دوز C++ — پروژه دانشگاهی",
    github: "https://github.com/ILIV007/XO-GitHub",
    tags: ["C++", "Game", "Console", "Academic"],
    featured: false,
  },

  {
    id: "11",
    slug: "atlas-ea",
    title: "AtlasEA",
    titleFa: "AtlasEA",
    category: "Trading",
    status: "Beta",
    version: "0.1.23",
    released: "2026-04",
    description:
      "MetaTrader 5 Expert Advisor (EA) — beta release. Modular architecture with 25+ components: Audit, Bootstrap, Config, Contracts, Core, Diagnostics, Engines, Events, Infrastructure, Interfaces, Optimization, Performance, Plugins, Profiles, Recovery, Replay, Strategies, StrategySDK, Testing, Trading, Validation, and more. Designed for serious algorithmic trading with full testing and validation pipeline.",
    descriptionFa:
      "اکسپرت آدوایزر MetaTrader 5 — نسخه بتا. معماری ماژولار با ۲۵+ کامپوننت: Audit، Bootstrap، Config، Contracts، Core، Diagnostics، Engines، Events، Infrastructure، Interfaces، Optimization، Performance، Plugins، Profiles، Recovery، Replay، Strategies، StrategySDK، Testing، Trading، Validation و بیشتر. طراحی‌شده برای ترید الگوریتمی حرفه‌ای با خط لوله کامل تست و اعتبارسنجی.",
    shortDesc: "MetaTrader 5 Expert Advisor (beta)",
    shortDescFa: "اکسپرت MetaTrader 5 (بتا)",
    github: "https://github.com/ILIV007/AtlasEA",
    tags: ["MQL5", "MetaTrader 5", "Trading", "Expert Advisor", "Algorithmic"],
    featured: false,
  },

  {
    id: "12",
    slug: "ilivir3-hub",
    title: "ILIVIR3 HUB",
    titleFa: "ILIVIR3 HUB",
    category: "Web",
    status: "Active",
    version: "11.5.1",
    released: "2025-01",
    description:
      "The Central Portal for ILIVIR3 Telegram Bot & Projects. Modern, responsive single-page application deployed on Cloudflare Pages. Bilingual (EN/FA) with full RTL support, glassmorphism UI, 3D hero scene, code-splitting, lazy-loaded routes, and SEO-ready with Open Graph, Twitter Card, JSON-LD structured data.",
    descriptionFa:
      "پورتال مرکزی ربات و پروژه‌های ILIVIR3. اپلیکیشن تک‌صفحه‌ای مدرن و ریسپانسیو روی Cloudflare Pages. دوزبانه (EN/FA) با پشتیبانی کامل RTL، رابط کاربری glassmorphism، صحنه هیرو ۳D، code-splitting، مسیرهای lazy-loaded و آماده SEO با Open Graph، Twitter Card و JSON-LD.",
    shortDesc: "Central hub for ILIVIR3 ecosystem",
    shortDescFa: "هاب مرکزی اکوسیستم ILIVIR3",
    github: "https://github.com/ILIV007/ILIVIR3-hub",
    demo: "https://ilivir3.pages.dev",
    telegram: "https://t.me/ILIVIR3",
    tags: ["React", "TypeScript", "Tailwind", "Three.js", "Cloudflare Pages"],
    featured: false,
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getFeatured = () => projects.filter((p) => p.featured);
export const getActive = () => projects.filter((p) => p.status === "Active");
export const getByCategory = (cat: ProjectCategory) => projects.filter((p) => p.category === cat);
