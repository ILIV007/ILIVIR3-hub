import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: ReactNode;
  className?: string;
}

export function Button({ children, variant = "primary", size = "md", href, icon, className }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50";
  const variants = {
    primary: "bg-accent-cyan text-deep-navy hover:bg-accent-cyan/90",
    outline: "border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10",
    ghost: "text-navy-400 hover:text-white",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className || ""}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes}>
      {icon}
      {children}
    </button>
  );
}
