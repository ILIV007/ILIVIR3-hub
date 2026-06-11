import { useScroll } from '../../hooks/useScroll'

export function ScrollProgress() {
  const scrollY = useScroll()
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-iliv-purple via-iliv-cyan to-iliv-pink transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
