import Link from "next/link";
import Container from "./Container";
import Logomark from "./Logomark";
import { categories } from "@/lib/categories";
import { SITE_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-paper-deep/60">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Logomark className="h-8 w-8" />
              <span className="text-lg font-bold text-ink">{SITE_NAME}</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-ink-soft">
              Личные финансы простым языком — для тех, кто хочет разобраться
              с бюджетом, накоплениями и долгами без стыда и лишней сложности.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Разделы</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/categories/${c.slug}`} className="hover:text-teal-dark">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Проект</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>
                <Link href="/about" className="hover:text-teal-dark">
                  О проекте
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-teal-dark">
                  Поиск по статьям
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-line pt-6 text-xs text-ink-soft">
          © {new Date().getFullYear()} {SITE_NAME}. Материалы носят
          информационный характер, не являются индивидуальной инвестиционной
          рекомендацией и не заменяют консультацию финансового специалиста.
        </p>
      </Container>
    </footer>
  );
}
