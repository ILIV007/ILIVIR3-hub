interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={`mb-10 text-center ${className || ""}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
      {subtitle && <p className="text-navy-400 text-sm max-w-lg mx-auto">{subtitle}</p>}
    </div>
  );
}
