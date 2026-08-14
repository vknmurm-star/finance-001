import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { SITE_URL } from "@/lib/site";

function mtimeOf(...segments: string[]): Date {
  return fs.statSync(path.join(process.cwd(), ...segments)).mtime;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: mtimeOf("content", "settings", "homepage.json"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: mtimeOf("content", "pages", "about.mdx"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  const categoriesLastModified = mtimeOf("content", "categories.json");
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${SITE_URL}/categories/${c.slug}`,
    lastModified: categoriesLastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((a) => ({
    url: `${SITE_URL}/articles/${a.slug}`,
    lastModified: a.date,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}
