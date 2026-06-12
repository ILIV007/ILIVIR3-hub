import { type ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  glow?: "cyan" | "purple" | "none";
  className?: string;
}

export function GlassPanel({ children, glow = "none", className }: GlassPanelProps) {
  const glows = {
    cyan: "border-accent-cyan/10 shadow-[0_0_30px_-10px_rgba(0,229,255,0.15)]",
    purple: "border-accent-purple/10 shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)]",
    none: "border-white/5",
  };

  return (
    <div className={`rounded-2xl border bg-white/[0.02] backdrop-blur-md p-6 ${glows[glow]} ${className || ""}`}>
      {children}
    </div>
  );
}
