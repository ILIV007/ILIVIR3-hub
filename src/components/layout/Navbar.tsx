import { useState } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLang } from '../../context/LangContext'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  const toggleLang = () => setLang(lang === 'en' ? 'fa' : 'en')

  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.projects'), href: '/projects' },
    { label: t('nav.lab'), href: '/lab' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-bold text-gradient">ILIVIR3</a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
            >
              <Globe className="w-4 h-4" />
              {lang === 'en' ? 'FA' : 'EN'}
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white/70 hover:text-white"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-white/5 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-white/70 hover:text-white transition-colors text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
          >
            <Globe className="w-4 h-4" />
            {lang === 'en' ? 'FA' : 'EN'}
          </button>
        </div>
      )}
    </nav>
  )
}
