import { useLang } from '../context/LangContext'
import { Button } from '../components/ui/Button'
import { Home } from 'lucide-react'

export function NotFound() {
  const { t } = useLang()

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold text-gradient">404</h1>
        <p className="text-white/60 text-xl">صفحه مورد نظر یافت نشد</p>
        <Button href="/" variant="primary">
          <Home className="w-5 h-5 mr-2" />
          {t('nav.home')}
        </Button>
      </div>
    </div>
  )
}
