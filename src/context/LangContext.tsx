import { createContext, useContext, useState, type ReactNode } from "react";

type Lang = "en" | "fa";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (en: string, fa: string) => string;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = (en: string, fa: string) => (lang === "fa" ? fa : en);
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
