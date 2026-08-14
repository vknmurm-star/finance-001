import type { Category } from "@/lib/categories";

const accentGradients: Record<Category["accent"], string> = {
  teal: "from-teal/20 via-paper-deep to-teal/5",
  green: "from-green/20 via-paper-deep to-green/5",
  amber: "from-amber/20 via-paper-deep to-amber/5",
  indigo: "from-indigo/20 via-paper-deep to-indigo/5",
};

const accentText: Record<Category["accent"], string> = {
  teal: "text-teal-dark",
  green: "text-green",
  amber: "text-amber",
  indigo: "text-indigo",
};

export default function CoverPlaceholder({
  label,
  accent,
  className = "",
}: {
  label: string;
  accent: Category["accent"];
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${accentGradients[accent]} ${className}`}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 200 200"
      >
        <circle cx="26" cy="172" r="66" fill="currentColor" className={accentText[accent]} fillOpacity="0.15" />
        <circle cx="178" cy="22" r="48" fill="currentColor" className={accentText[accent]} fillOpacity="0.12" />
      </svg>
      <span
        className={`relative px-4 text-center text-sm font-semibold tracking-wide ${accentText[accent]}`}
      >
        {label}
      </span>
    </div>
  );
}
