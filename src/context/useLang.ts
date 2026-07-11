import { createContext, useContext } from "react";

export type Lang = "en" | "fa";

export interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (en: string, fa: string) => string;
  dir: "ltr" | "rtl";
}

export const LangContext = createContext<LangContextType | null>(null);

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
