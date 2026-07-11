export interface TechFeedItem {
  id: string;
  tag: string;
  title: string;
  titleFa: string;
  source: string;
  date: string;
  url: string;
}

export const techFeedItems: TechFeedItem[] = [
  {
    id: "1", tag: "AI",
    title: "Gemini 3 Flash Released", titleFa: "Gemini 3 Flash منتشر شد",
    source: "Google AI", date: "2025-12-01",
    url: "https://blog.google/technology/ai/",
  },
  {
    id: "2", tag: "Cloudflare",
    title: "Cloudflare Workers AI Updates", titleFa: "آپدیت Cloudflare Workers AI",
    source: "Cloudflare Blog", date: "2025-11-20",
    url: "https://blog.cloudflare.com/",
  },
  {
    id: "3", tag: "React",
    title: "React 19 Stable", titleFa: "React 19 پایدار شد",
    source: "React Blog", date: "2025-05-15",
    url: "https://react.dev/blog/",
  },
  {
    id: "4", tag: "CSS",
    title: "Tailwind CSS v4", titleFa: "Tailwind CSS v4",
    source: "Tailwind Labs", date: "2025-01-20",
    url: "https://tailwindcss.com/blog/",
  },
  {
    id: "5", tag: "Trading",
    title: "Crypto Market Intelligence Era", titleFa: "عصر هوشمندی بازار کریپتو",
    source: "TradeAgent IV", date: "2025-11-10",
    url: "https://t.me/TradeAgentIV",
  },
  {
    id: "6", tag: "DevOps",
    title: "Autonomous AI Development", titleFa: "توسعه خودمختار AI",
    source: "Hades Army", date: "2025-12-05",
    url: "https://github.com/ILIV007/Hades-Army",
  },
];
