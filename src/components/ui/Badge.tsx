import { badgeVariants, type BadgeVariant } from "./badge-variants";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${badgeVariants[variant]} ${className || ""}`}
    >
      {children}
    </span>
  );
}
