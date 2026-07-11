import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

type Lang = "en" | "fa";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (en: string, fa: string) => string;
  dir: "ltr" | "rtl";
}

const LangContext = createContext<LangContextType | null>(null);

const STORAGE_KEY = "ilivir3-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "en" || saved === "fa") return saved;
  } catch {
    /* ignore */
  }
  // Detect from browser language
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

  // Sync <html lang> and <html dir> whenever language changes
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  const t = useCallback((en: string, fa: string) => (lang === "fa" ? fa : en), [lang]);
  const dir = lang === "fa" ? "rtl" : "ltr";

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang, t, dir }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
