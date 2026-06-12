interface BadgeProps {
  children: React.ReactNode;
  variant?: "active" | "beta" | "info" | "default";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    active: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    beta: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    info: "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20",
    default: "bg-white/5 text-navy-400 border border-white/10",
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${variants[variant]} ${className || ""}`}>
      {children}
    </span>
  );
}
