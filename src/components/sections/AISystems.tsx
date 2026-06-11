import { Card } from '../ui/Card'
import { Brain, Zap, Shield } from 'lucide-react'

const systems = [
  {
    icon: Brain,
    title: 'IVAI Bot',
    description: 'ربات هوش مصنوعی پیشرفته با پشتیبانی از چندین مدل',
    features: ['Multi-Model', 'Real-time', 'Custom Prompts'],
  },
  {
    icon: Zap,
    title: 'TradeAgent IV',
    description: 'سیستم تحلیل و سیگنال‌دهی معاملاتی مبتنی بر AI',
    features: ['Technical Analysis', 'AI Signals', 'Risk Management'],
  },
  {
    icon: Shield,
    title: 'ILIVIR3 Core',
    description: 'هسته مرکزی سیستم‌های هوش مصنوعی',
    features: ['Scalable', 'Secure', 'Fast'],
  },
]

export function AISystems() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">سیستم‌های AI</h2>
          <p className="text-white/60 text-lg">راهکارهای هوشمند ما</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {systems.map((system) => (
            <Card key={system.title} className="group hover:border-iliv-cyan/50 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-iliv-purple/20 flex items-center justify-center">
                  <system.icon className="w-6 h-6 text-iliv-purple" />
                </div>
                <h3 className="text-xl font-bold text-white">{system.title}</h3>
                <p className="text-white/60">{system.description}</p>
                <div className="space-y-2">
                  {system.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-iliv-cyan" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
