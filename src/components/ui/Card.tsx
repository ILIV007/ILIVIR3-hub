import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-5 ${
        hover ? "hover:border-accent-cyan/20 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-0.5" : ""
      } ${className || ""}`}
    >
      {children}
    </div>
  );
}
