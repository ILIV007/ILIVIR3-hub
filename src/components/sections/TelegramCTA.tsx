import { Button } from '../ui/Button'
import { Send } from 'lucide-react'

export function TelegramCTA() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 md:p-12 text-center space-y-6 border border-iliv-cyan/20">
          <div className="w-16 h-16 rounded-2xl bg-iliv-cyan/20 flex items-center justify-center mx-auto">
            <Send className="w-8 h-8 text-iliv-cyan" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">به کانال تلگرام بپیوندید</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            آخرین اخبار، آپدیت‌ها و پروژه‌های جدید را در کانال تلگرام ما دنبال کنید
          </p>
          <Button href="https://t.me/ILIVIR3" variant="primary" className="animate-pulse-glow">
            <Send className="w-5 h-5 mr-2" />
            @ILIVIR3
          </Button>
        </div>
      </div>
    </section>
  )
}
