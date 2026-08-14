import Link from "next/link";
import type { Article } from "@/types";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <p className="mb-2 flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
        {article.category}
        <span className="text-ink/40">·</span>
        <span className="text-ink/40">{article.date}</span>
      </p>
      <h3 className="text-lg font-bold leading-snug text-ink">{article.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
        {article.excerpt}
      </p>
      <Link
        href={`/artikel/${article.slug}`}
        className="mt-4 text-sm font-semibold text-primary hover:text-primary-dark"
      >
        Baca selengkapnya →
      </Link>
    </article>
  );
}