import { useLang } from '../context/LangContext'
import { Card } from '../components/ui/Card'
import { FlaskConical, Beaker, Microscope } from 'lucide-react'

const experiments = [
  {
    icon: FlaskConical,
    title: 'AI Model Testing',
    status: 'Active',
    description: 'تست و ارزیابی مدل‌های مختلف هوش مصنوعی',
  },
  {
    icon: Beaker,
    title: 'Trading Algorithms',
    status: 'In Progress',
    description: 'الگوریتم‌های معاملاتی مبتنی بر یادگیری ماشین',
  },
  {
    icon: Microscope,
    title: 'Data Analysis',
    status: 'Planned',
    description: 'تحلیل داده‌های بازار و روندهای تکنولوژی',
  },
]

export function Lab() {
  const { t } = useLang()

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">{t('nav.lab')}</h1>
          <p className="text-white/60 text-lg">آزمایشگاه‌های در حال اجرا</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiments.map((exp) => (
            <Card key={exp.title} className="space-y-4 hover:border-iliv-cyan/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-iliv-cyan/20 flex items-center justify-center">
                <exp.icon className="w-6 h-6 text-iliv-cyan" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  exp.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                  exp.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-white/10 text-white/60'
                }`}>
                  {exp.status}
                </span>
              </div>
              <p className="text-white/60">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
