import { useLang } from '../../context/LangContext'

interface SectionTitleProps {
  titleKey: string
  subtitleKey?: string
  className?: string
}

export function SectionTitle({ titleKey, subtitleKey, className = '' }: SectionTitleProps) {
  const { t } = useLang()
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">{t(titleKey)}</h2>
      {subtitleKey && <p className="text-white/60 text-lg">{t(subtitleKey)}</p>}
    </div>
  )
}
