export interface TimelineEvent {
  id: string;
  year: string;
  month: string;
  monthFa: string;
  title: string;
  titleFa: string;
  desc: string;
  descFa: string;
  icon: string;
  highlight?: boolean;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1", year: "2024", month: "Jan", monthFa: "ژانویه",
    title: "IVAI Bot Launch", titleFa: "راه‌اندازی IVAI Bot",
    desc: "First AI-powered Telegram bot with Gemini integration and prompt master system.",
    descFa: "اولین ربات AI تلگرام با اتصال Gemini و سیستم پرامپت مستر.",
    icon: "bot", highlight: true,
  },
  {
    id: "2", year: "2024", month: "Mar", monthFa: "مارس",
    title: "TradeAgent IV", titleFa: "TradeAgent IV",
    desc: "AI trading analysis bot with automated signals and crypto market tracking.",
    descFa: "ربات تحلیل ترید AI با سیگنال خودکار و ردیابی بازار کریپتو.",
    icon: "trending-up",
  },
  {
    id: "3", year: "2024", month: "Jun", monthFa: "ژوئن",
    title: "Arkeen Serpent", titleFa: "آرکین سرپنت",
    desc: "Modern space-themed Snake arcade game released as Telegram Mini App.",
    descFa: "بازی آرکید مار فضایی مدرن به عنوان Telegram Mini App منتشر شد.",
    icon: "gamepad-2", highlight: true,
  },
  {
    id: "4", year: "2024", month: "Sep", monthFa: "سپتامبر",
    title: "XO Game (C++)", titleFa: "بازی دوز (C++)",
    desc: "Tic-Tac-Toe written in C++ as a university academic project.",
    descFa: "بازی دوز با C++ به عنوان پروژه دانشگاهی.",
    icon: "gamepad-2",
  },
  {
    id: "5", year: "2025", month: "Jan", monthFa: "ژانویه",
    title: "ILIVIR3 Hub", titleFa: "ILIVIR3 Hub",
    desc: "Central web portal launched on Cloudflare Pages — Tech Command Center.",
    descFa: "پورتال وب مرکزی روی Cloudflare Pages راه‌اندازی شد — مرکز فرماندهی تکنولوژی.",
    icon: "rocket", highlight: true,
  },
  {
    id: "6", year: "2025", month: "Jun", monthFa: "ژوئن",
    title: "Donate Platform", titleFa: "پلتفرم دونیشن",
    desc: "Open-source donation platform with multiple payment gateways.",
    descFa: "پلتفرم دونیشن متن‌باز با درگاه‌های پرداخت متنوع.",
    icon: "heart",
  },
  {
    id: "7", year: "2026", month: "Jan", monthFa: "ژانویه",
    title: "AI Admin", titleFa: "AI Admin",
    desc: "Telegram channel content-processing bot on Cloudflare Workers free tier — now powering @ILIVIR3.",
    descFa: "ربات پردازش محتوای کانال تلگرام روی Cloudflare Workers — اکنون فعال در کانال @ILIVIR3.",
    icon: "bot", highlight: true,
  },
  {
    id: "8", year: "2026", month: "Feb", monthFa: "فوریه",
    title: "Lyra", titleFa: "Lyra",
    desc: "AI Prompt Optimizer bot with 4-D methodology — multilingual EN/FA/RU. Live at @Lyra_IVbot.",
    descFa: "ربات بهینه‌ساز پرامپت AI با روش ۴ مرحله‌ای — چندزبانه EN/FA/RU. زنده در @Lyra_IVbot.",
    icon: "sparkles",
  },
  {
    id: "9", year: "2026", month: "Mar", monthFa: "مارس",
    title: "Fredy + Pixoris", titleFa: "Fredy + Pixoris",
    desc: "AI Content OS for developer channels (Fredy), plus Pixoris gaming website.",
    descFa: "سیستم‌عامل محتوای AI برای کانال‌های دولوپر (Fredy)، به‌علاوه سایت گیمینگ Pixoris.",
    icon: "rocket",
  },
  {
    id: "10", year: "2026", month: "Apr", monthFa: "آوریل",
    title: "Hades Army + AtlasEA", titleFa: "Hades Army + AtlasEA",
    desc: "Autonomous AI dev platform (Hades Army) and MetaTrader 5 Expert Advisor (AtlasEA) in development.",
    descFa: "پلتفرم توسعه خودمختار AI (Hades Army) و اکسپرت MetaTrader 5 (AtlasEA) در حال ساخت.",
    icon: "orbit", highlight: true,
  },
];
