import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import { absoluteUrl } from "@/lib/site";
import homepage from "../../content/settings/homepage.json";

const description =
  "Бюджет, накопления и долги простым языком — практичные принципы личных финансов для начинающих, без давления и сложных терминов.";

export const metadata: Metadata = {
  title: homepage.heading,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: homepage.heading,
    description,
    url: absoluteUrl("/"),
  },
  twitter: {
    card: "summary_large_image",
    title: homepage.heading,
    description,
  },
};

export default function HomePage() {
  const latest = getAllArticles().slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(600px 400px at 85% 0%, rgba(14,148,136,.25), transparent 60%)",
          }}
        />
        <Container className="relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">
              {homepage.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              {homepage.heading}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              {homepage.subheading}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={homepage.primaryCtaHref}
                className="rounded-full bg-teal px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-dark"
              >
                {homepage.primaryCtaLabel}
              </Link>
              <Link
                href={homepage.secondaryCtaHref}
                className="rounded-full border border-white/25 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-teal hover:text-teal"
              >
                {homepage.secondaryCtaLabel}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <div className="absolute inset-4 rounded-full bg-teal/15" />
            <div className="absolute inset-12 rounded-full bg-teal/10" />
            <div className="absolute inset-20 flex items-center justify-center rounded-full bg-white/5 backdrop-blur">
              <span className="text-center text-2xl font-bold text-white">
                {homepage.badgeText}
                <span className="mt-1 block text-center text-base font-normal text-white/70">
                  {homepage.badgeSubtext}
                </span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold">Свежие статьи</h2>
            <Link href="/search" className="text-sm font-semibold text-teal-dark hover:underline">
              Все статьи →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper-deep/60 py-16 sm:py-20">
        <Container>
          <h2 className="text-3xl font-bold">Разделы</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            Выберите тему, которая сейчас важнее всего — остальное найдёте позже.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-line bg-surface p-7 transition-shadow hover:shadow-lg hover:shadow-ink/5"
              >
                <div>
                  <h3 className="text-xl font-bold">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-ink-soft">{category.description}</p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal-dark">
                  Смотреть статьи
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
