import type { Metadata } from "next";
import ArticleCard from "@/components/feature/ArticleCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { articles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Artikel",
  description:
    "Kumpulan artikel edukasi kecantikan dari Niggy Salon: tips perawatan kulit, rambut, dan gaya hidup sehat.",
};

export default function ArtikelPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Info Terkini"
          title="Artikel Kecantikan"
          subtitle="Baca tips dan informasi seputar perawatan kulit, rambut, dan kecantikan."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}