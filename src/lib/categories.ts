import categoriesData from "../../content/categories.json";

export type CategorySlug = "budget" | "savings" | "debts" | "habits";

export interface Category {
  slug: CategorySlug;
  title: string;
  shortTitle: string;
  description: string;
  accent: "teal" | "green" | "amber" | "indigo";
}

export const categories: Category[] = categoriesData.items as Category[];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
