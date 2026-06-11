import { Button } from '../ui/Button'
import { Github, Star } from 'lucide-react'

export function GitHubCTA() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 md:p-12 text-center space-y-6 border border-white/10">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto">
            <Github className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">مخازن گیت‌هاب</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            کد منبع تمام پروژه‌ها در گیت‌هاب در دسترس است. ستاره بدید!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="https://github.com/ILIV007" variant="secondary">
              <Github className="w-5 h-5 mr-2" />
              ILIV007
            </Button>
            <Button href="https://github.com/ILIV007/ILIVIR3-hub" variant="outline">
              <Star className="w-5 h-5 mr-2" />
              ILIVIR3-hub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
