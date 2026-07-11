import { useEffect } from "react";
import { useLang } from "@context/useLang";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
}

const BASE_URL = "https://ilivir3.pages.dev";
const SITE_NAME = "ILIVIR3";

function updateMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function updateCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }
  link.href = href;
}

function updateOgUrl(href: string) {
  updateMeta("og:url", href, "property");
  updateMeta("twitter:url", href);
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: BASE_URL,
  description: "AI Systems, Open Source & Experimental Tech by ILIV007",
  inLanguage: ["en", "fa"],
  author: {
    "@type": "Person",
    name: "ILIV007",
    url: "https://github.com/ILIV007",
  },
};

function injectJsonLd() {
  const id = "ld-json-website";
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(jsonLd);
}

/**
 * Lightweight client-side SEO manager.
 * Updates document title, meta description, canonical URL, and OG/Twitter tags
 * whenever the route or language changes. Also injects JSON-LD structured data once.
 */
export function Seo({ title, description, path = "" }: SeoProps) {
  const { lang } = useLang();

  useEffect(() => {
    injectJsonLd();
  }, []);

  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Tech Command Center`;
    document.title = fullTitle;
    // Note: <html lang> and <html dir> are managed by LangContext — don't set them here.

    const desc =
      description ||
      "AI Systems, Open Source & Experimental Tech by ILIV007 — central hub for the ILIVIR3 Telegram bot ecosystem.";

    updateMeta("description", desc);
    updateMeta("og:title", fullTitle, "property");
    updateMeta("og:description", desc, "property");
    updateMeta("og:locale", lang === "fa" ? "fa_IR" : "en_US", "property");
    updateMeta("twitter:title", fullTitle);
    updateMeta("twitter:description", desc);

    const url = `${BASE_URL}${path}`;
    updateCanonical(url);
    updateOgUrl(url);
  }, [title, description, path, lang]);

  return null;
}
