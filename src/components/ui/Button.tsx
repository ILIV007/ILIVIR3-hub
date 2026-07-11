import { type ReactNode, type MouseEventHandler } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "outline" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
}

interface AnchorProps extends BaseProps {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  /** Treat the href as an in-page anchor (e.g. "#projects"). Internal routes use `to`. */
  internal?: boolean;
}

interface LinkProps extends BaseProps {
  to: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

interface ButtonProps extends BaseProps {
  href?: undefined;
  to?: undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/50 disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "bg-accent-cyan text-deep-navy hover:bg-accent-cyan/90 shadow-[0_0_20px_-8px_rgba(0,229,255,0.5)]",
  outline: "border border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10",
  secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10",
  ghost: "text-navy-400 hover:text-white hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

function classes(variant: Variant, size: Size, className?: string) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className || ""}`;
}

export function Button(props: AnchorProps | LinkProps | ButtonProps) {
  const { children, variant = "primary", size = "md", icon, className } = props;

  // Internal router link
  if ("to" in props && props.to !== undefined) {
    const { to, onClick } = props as LinkProps;
    return (
      <Link to={to} onClick={onClick} className={classes(variant, size, className)}>
        {icon}
        {children}
      </Link>
    );
  }

  // Anchor (external URL, mailto, tel, or in-page hash)
  if ("href" in props && props.href !== undefined) {
    const { href, onClick, internal } = props as AnchorProps;
    const isExternal = !internal && (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:"));
    const isHash = href.startsWith("#");

    const anchorProps = isExternal
      ? { target: "_blank" as const, rel: "noopener noreferrer" }
      : {};

    const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
      if (isHash) {
        e.preventDefault();
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      onClick?.(e);
    };

    return (
      <a href={href} onClick={handleClick} className={classes(variant, size, className)} {...anchorProps}>
        {icon}
        {children}
      </a>
    );
  }

  // Plain button
  const { onClick, type = "button", disabled } = props as ButtonProps;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes(variant, size, className)}>
      {icon}
      {children}
    </button>
  );
}
