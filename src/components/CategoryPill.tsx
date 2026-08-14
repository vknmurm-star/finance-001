import Link from "next/link";
import type { Category } from "@/lib/categories";

const accentClasses: Record<Category["accent"], string> = {
  teal: "bg-teal/10 text-teal-dark",
  green: "bg-green/10 text-green",
  amber: "bg-amber/10 text-amber",
  indigo: "bg-indigo/10 text-indigo",
};

export default function CategoryPill({
  category,
  className = "",
}: {
  category: Pick<Category, "slug" | "shortTitle" | "accent">;
  className?: string;
}) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accentClasses[category.accent]} ${className}`}
    >
      {category.shortTitle}
    </Link>
  );
}
