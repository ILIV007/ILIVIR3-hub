import { Button } from '../ui/Button'
import { Heart } from 'lucide-react'

export function DonateCTA() {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 md:p-12 text-center space-y-6 border border-iliv-pink/20">
          <div className="w-16 h-16 rounded-2xl bg-iliv-pink/20 flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8 text-iliv-pink" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">حمایت از پروژه</h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            با حمایت مالی خود به توسعه پروژه‌های متن‌باز ما کمک کنید
          </p>
          <Button variant="primary" className="bg-iliv-pink hover:bg-iliv-pink/80 shadow-lg shadow-iliv-pink/25">
            <Heart className="w-5 h-5 mr-2" />
            حمایت مالی
          </Button>
        </div>
      </div>
    </section>
  )
}
