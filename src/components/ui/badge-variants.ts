import type { ProjectStatus } from "@data/projects";

export type BadgeVariant = "active" | "beta" | "info" | "default" | "dev" | "archived";

/** Map a ProjectStatus to a Badge variant. */
export function statusToBadgeVariant(status: ProjectStatus): BadgeVariant {
  switch (status) {
    case "Active":
      return "active";
    case "Beta":
      return "beta";
    case "In Development":
      return "dev";
    case "Archived":
      return "archived";
    default:
      return "default";
  }
}

export const badgeVariants: Record<BadgeVariant, string> = {
  active: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  beta: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  dev: "bg-accent-purple/10 text-accent-purple border border-accent-purple/20",
  info: "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20",
  archived: "bg-navy-700/30 text-navy-400 border border-navy-600/40",
  default: "bg-white/5 text-navy-400 border border-white/10",
};
