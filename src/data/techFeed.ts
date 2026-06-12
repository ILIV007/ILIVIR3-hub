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
    title: "Gemini 2.5 Pro Released", titleFa: "Gemini 2.5 Pro منتشر شد",
    source: "Google AI", date: "2025-06-01",
    url: "https://blog.google/technology/ai/",
  },
  {
    id: "2", tag: "React",
    title: "React 19 Stable", titleFa: "React 19 پایدار شد",
    source: "React Blog", date: "2025-05-15",
    url: "https://react.dev/blog/",
  },
  {
    id: "3", tag: "CSS",
    title: "Tailwind CSS v4", titleFa: "Tailwind CSS v4",
    source: "Tailwind Labs", date: "2025-01-20",
    url: "https://tailwindcss.com/blog/",
  },
  {
    id: "4", tag: "DevOps",
    title: "Cloudflare Pages Updates", titleFa: "آپدیت Cloudflare Pages",
    source: "Cloudflare Blog", date: "2025-06-05",
    url: "https://blog.cloudflare.com/",
  },
];
