import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getStaticPage } from "@/lib/pages";
import { absoluteUrl } from "@/lib/site";

const description =
  "«Финансовый минимум» — независимый проект о личных финансах для начинающих: простым языком, без снобизма и без инвестиционных советов.";

export const metadata: Metadata = {
  title: "О проекте",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: "О проекте «Финансовый минимум»",
    description,
    url: absoluteUrl("/about"),
  },
  twitter: {
    card: "summary_large_image",
    title: "О проекте «Финансовый минимум»",
    description,
  },
};

export default function AboutPage() {
  const page = getStaticPage("about");

  return (
    <div className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "О проекте", href: "/about" }]} />
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-dark">
          О проекте
        </p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
          {page.title}
        </h1>

        <div className="prose-article mt-10">
          <MDXRemote source={page.content} />
        </div>
      </Container>
    </div>
  );
}
