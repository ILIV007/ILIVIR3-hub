import { Github, Twitter, Send } from 'lucide-react'
import { useLang } from '../../context/LangContext'

export function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-white/5 bg-iliv-dark/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-2">ILIVIR3</h3>
            <p className="text-white/50 text-sm">{t('footer.copyright')}</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ILIV007" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://x.com/ILIVIR3" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://t.me/ILIVIR3" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
