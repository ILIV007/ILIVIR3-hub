import { Suspense, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import { useLang } from '../../context/LangContext'
import { Button } from '../ui/Button'
import { Github, Send, FolderOpen, Bot, TrendingUp } from 'lucide-react'

const Void = lazy(() => import('../three/Void').then(m => ({ default: m.Void })))
const AICore = lazy(() => import('../three/AICore').then(m => ({ default: m.AICore })))

function SceneContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        aspectRatio: '1/1',
        maxWidth: '500px',
        margin: '0 auto',
        height: '85vh',
        minHeight: '600px',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  )
}

export function Hero() {
  const { t } = useLang()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-iliv-purple/10 via-transparent to-transparent" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="hidden lg:block lg:col-span-3">
            <SceneContainer>
              <Void />
            </SceneContainer>
          </div>

          <div className="col-span-1 lg:col-span-6 text-center z-10">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient animate-fade-in-up">
                {t('hero.title')}
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                {t('hero.subtitle')}
              </p>

              {/* Main CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Button href="/projects" variant="primary">
                  <FolderOpen className="w-4 h-4 mr-2" />
                  پروژه‌ها
                </Button>
                <Button href="https://github.com/ILIV007" variant="secondary">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button href="https://t.me/ILIVIR3" variant="outline">
                  <Send className="w-4 h-4 mr-2" />
                  @ILIVIR3
                </Button>
              </div>

              {/* Bot Links Row */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <a
                  href="https://t.me/ivai_llm_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-iliv-purple/20 text-iliv-purple border border-iliv-purple/30 hover:bg-iliv-purple/30 transition-all duration-300"
                >
                  <Bot className="w-4 h-4" />
                  @ivai_llm_bot
                </a>
                <a
                  href="https://t.me/tradeagentiv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-iliv-cyan/20 text-iliv-cyan border border-iliv-cyan/30 hover:bg-iliv-cyan/30 transition-all duration-300"
                >
                  <TrendingUp className="w-4 h-4" />
                  @tradeagentiv
                </a>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-3">
            <SceneContainer>
              <AICore />
            </SceneContainer>
          </div>
        </div>

        <div className="lg:hidden mt-8">
          <SceneContainer className="mx-auto">
            <AICore />
          </SceneContainer>
        </div>
      </div>
    </section>
  )
}
