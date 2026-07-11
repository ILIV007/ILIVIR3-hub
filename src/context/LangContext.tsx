import { useState, useEffect, useCallback, type ReactNode } from "react";
import { LangContext, type Lang, type LangContextType } from "./useLang";

const STORAGE_KEY = "ilivir3-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "en" || saved === "fa") return saved;
  } catch {
    /* ignore */
  }
  const nav = navigator.language.toLowerCase();
  if (nav.startsWith("fa") || nav.startsWith("persian")) return "fa";
  return "en";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "en" ? "fa" : "en";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  const t = useCallback((en: string, fa: string) => (lang === "fa" ? fa : en), [lang]);
  const dir = lang === "fa" ? "rtl" : "ltr";

  const value: LangContextType = { lang, setLang, toggleLang, t, dir };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
