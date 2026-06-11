import { techFeed } from '../../data/techFeed'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Newspaper } from 'lucide-react'

export function TechFeed() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">تک‌فید</h2>
          <p className="text-white/60 text-lg">آخرین اخبار تکنولوژی</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {techFeed.map((item) => (
            <Card key={item.id} className="flex items-start gap-4 group hover:border-iliv-pink/50 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-iliv-pink/20 flex items-center justify-center shrink-0">
                <Newspaper className="w-5 h-5 text-iliv-pink" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge>{item.category}</Badge>
                  <span className="text-xs text-white/40">{item.date}</span>
                </div>
                <h3 className="text-white font-medium group-hover:text-iliv-pink transition-colors">
                  {item.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
