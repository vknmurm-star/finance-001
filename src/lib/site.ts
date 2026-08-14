export const SITE_URL = (process.env.SITE_URL ?? "https://example.com").replace(/\/$/, "");

export const SITE_NAME = "Финансовый минимум";

export const SITE_DESCRIPTION =
  "Личные финансы для начинающих: бюджет, накопления и долги простым языком — без снобизма и без предположения, что у вас высокий доход.";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
