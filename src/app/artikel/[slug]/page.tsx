import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { articles } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Artikel tidak ditemukan" };
  return { title: article.title, description: article.excerpt };
}

const relatedText: Record<string, string[]> = {
  "tips-merawat-kulit-berjerawat": [
    "Hindari memencet jerawat agar tidak menimbulkan bekas.",
    "Gunakan pembersih wajah yang lembut dua kali sehari.",
    "Jangan ragu berkonsultasi untuk perawatan yang lebih tepat.",
  ],
  "kenapa-facial-rutin-penting": [
    "Debu dan polusi menumpuk di pori-pori setiap hari.",
    "Facial rutin membantu mengangkat sel kulit mati.",
    "Kulit jadi lebih siap menerima produk perawatan lain.",
  ],
  "brightening-untuk-kulit-kusam": [
    "Mulai perawatan minimal 2–4 minggu sebelum acara.",
    "Kombinasikan dengan proteksi sinar matahari setiap hari.",
    "Konsultasikan pilihan treatment dengan terapis kami.",
  ],
};

export default async function ArtikelDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  const points = relatedText[slug] ?? [
    "Perawatan yang tepat dimulai dari mengenali kondisi kulitmu terlebih dahulu.",
    "Konsistensi dalam merawat adalah kunci hasil yang terlihat.",
    "Berkonsultasilah dengan tim Niggy Salon untuk rekomendasi terbaik.",
  ];

  return (
    <article className="py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <Link href="/artikel" className="text-sm font-semibold text-primary hover:text-primary-dark">
          ← Kembali ke Artikel
        </Link>
        <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-wider text-primary">
          {article.category}
          <span className="text-ink/40">·</span>
          <span className="text-ink/40">{article.date}</span>
        </p>
        <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">{article.title}</h1>
        <p className="mt-4 text-lg italic text-ink/70">{article.excerpt}</p>

        <div className="mt-8 space-y-4 leading-relaxed text-ink/80">
          {points.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-primary-light/40 p-8 text-center">
          <h2 className="text-xl font-bold text-ink">Butuh perawatan yang tepat?</h2>
          <p className="mt-2 text-sm text-ink/70">
            Tim Niggy Salon siap membantu menentukan langkah perawatan terbaik untukmu.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/booking">Booking Konsultasi</Button>
            <Button href="/layanan" variant="outline">
              Lihat Layanan
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}