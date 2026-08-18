import type { Metadata } from "next";
import { Suspense } from "react";
import ProductList from "@/components/feature/ProductList";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Produk Perawatan",
  description:
    "Jelajahi pilihan facial wash, sunscreen, serum, pelembap, body lotion, dan perawatan rambut dari Niggy Salon.",
};

export default function ProductsPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Produk Perawatan"
          title="Rawat Dirimu, Lanjutkan di Rumah"
          subtitle="Temukan pilihan produk untuk melengkapi rutinitas perawatan kulit, tubuh, dan rambutmu. Pesan langsung melalui WhatsApp dan dapatkan rekomendasi pemakaian dari tim kami."
        />
        <Suspense fallback={<p className="py-16 text-center text-ink/60">Memuat produk...</p>}>
          <ProductList products={products} />
        </Suspense>
      </div>
    </section>
  );
}
