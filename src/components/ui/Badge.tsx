interface BadgeProps {
  children: string
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-iliv-purple/20 text-iliv-purple border border-iliv-purple/30 ${className}`}>
      {children}
    </span>
  )
}
