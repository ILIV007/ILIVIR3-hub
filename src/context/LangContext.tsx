import { createContext, useContext, useState, type ReactNode } from 'react'

type Lang = 'en' | 'fa'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    'hero.title': 'ILIVIR3',
    'hero.subtitle': 'Next-Gen AI Systems',
    'hero.cta': 'Explore',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.lab': 'Lab',
    'footer.copyright': '© 2024 ILIVIR3. All rights reserved.',
  },
  fa: {
    'hero.title': 'ایلیویر۳',
    'hero.subtitle': 'سیستم‌های هوش مصنوعی نسل بعد',
    'hero.cta': 'کاوش',
    'nav.home': 'خانه',
    'nav.projects': 'پروژه‌ها',
    'nav.lab': 'آزمایشگاه',
    'footer.copyright': '© 2024 ایلویر۳. تمامی حقوق محفوظ است.',
  },
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: (k) => k,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const t = (key: string) => translations[lang][key] || key
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
