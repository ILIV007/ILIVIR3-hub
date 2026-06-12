export interface StatItem {
  label: string;
  labelFa: string;
  value: string;
  suffix?: string;
  icon: string;
}

export const liveStats: StatItem[] = [
  { label: "Active Projects", labelFa: "پروژه فعال", value: "7", suffix: "+", icon: "rocket" },
  { label: "Telegram Users", labelFa: "کاربر تلگرام", value: "2K", suffix: "+", icon: "users" },
  { label: "GitHub Stars", labelFa: "ستاره گیت‌هاب", value: "150", suffix: "+", icon: "star" },
  { label: "Commits", labelFa: "کامیت", value: "500", suffix: "+", icon: "git-commit" },
];

export const techFeedItems = [
  {
    id: "1",
    title: "React 19 Released",
    titleFa: "React 19 منتشر شد",
    source: "React Blog",
    date: "2025-06-01",
    tag: "React",
    url: "https://react.dev",
  },
  {
    id: "2",
    title: "Tailwind CSS v4 Stable",
    titleFa: "Tailwind CSS v4 Stable",
    source: "Tailwind CSS",
    date: "2025-05-20",
    tag: "CSS",
    url: "https://tailwindcss.com",
  },
  {
    id: "3",
    title: "Gemini 2.5 Pro Available",
    titleFa: "Gemini 2.5 Pro در دسترس",
    source: "Google AI",
    date: "2025-06-05",
    tag: "AI",
    url: "https://ai.google.dev",
  },
  {
    id: "4",
    title: "Cloudflare Pages New Features",
    titleFa: "ویژگی‌های جدید Cloudflare Pages",
    source: "Cloudflare Blog",
    date: "2025-05-15",
    tag: "DevOps",
    url: "https://blog.cloudflare.com",
  },
];
