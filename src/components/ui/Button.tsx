import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  onClick?: () => void
  className?: string
}

export function Button({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300'
  const variants = {
    primary: 'bg-iliv-purple hover:bg-iliv-purple/80 text-white shadow-lg shadow-iliv-purple/25',
    secondary: 'bg-white/10 hover:bg-white/20 text-white',
    outline: 'border border-white/20 hover:border-iliv-purple hover:text-iliv-purple text-white/80',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    )
  }
  return <button onClick={onClick} className={cls}>{children}</button>
}
