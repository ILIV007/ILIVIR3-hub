import { timeline } from '../../data/timeline'
import { Card } from '../ui/Card'
import { Clock } from 'lucide-react'

export function Timeline() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">تایم‌لاین</h2>
          <p className="text-white/60 text-lg">مسیر رشد ما</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-iliv-purple via-iliv-cyan to-iliv-pink hidden md:block" />

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={event.year} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 hidden md:block" />
                <div className="w-8 h-8 rounded-full bg-iliv-purple flex items-center justify-center z-10 shrink-0">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <Card className="hover:border-iliv-purple/50 transition-all duration-300">
                    <div className="space-y-2">
                      <span className="text-iliv-purple font-bold text-lg">{event.year}</span>
                      <h3 className="text-white font-bold">{event.title}</h3>
                      <p className="text-white/60">{event.description}</p>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
