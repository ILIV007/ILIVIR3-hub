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
    desc: "First AI-powered Telegram bot with Gemini integration.",
    descFa: "اولین ربات AI تلگرام با اتصال Gemini.",
    icon: "bot", highlight: true,
  },
  {
    id: "2", year: "2024", month: "Mar", monthFa: "مارس",
    title: "TradeAgent IV", titleFa: "TradeAgent IV",
    desc: "AI trading analysis bot with automated signals.",
    descFa: "ربات تحلیل ترید AI با سیگنال خودکار.",
    icon: "trending-up",
  },
  {
    id: "3", year: "2024", month: "Jun", monthFa: "ژوئن",
    title: "Arkeen Serpent", titleFa: "آرکین سرپنت",
    desc: "Modern snake browser game released.",
    descFa: "بازی مار مدرن منتشر شد.",
    icon: "gamepad-2",
  },
  {
    id: "4", year: "2025", month: "Jan", monthFa: "ژانویه",
    title: "ILIVIR3 Hub", titleFa: "ILIVIR3 Hub",
    desc: "Tech Command Center website launched.",
    descFa: "وب‌سایت Tech Command Center راه‌اندازی شد.",
    icon: "rocket", highlight: true,
  },
  {
    id: "5", year: "2025", month: "Jun", monthFa: "ژوئن",
    title: "Donate Platform", titleFa: "پلتفرم دونیشن",
    desc: "Open-source donation platform with payment gateways.",
    descFa: "پلتفرم دونیشن متن‌باز با درگاه‌های پرداخت.",
    icon: "orbit",
  },
];
