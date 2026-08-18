import Image from "next/image";
import Button from "@/components/ui/Button";
import { waLink } from "@/lib/wa";
import type { Product } from "@/types";

const categoryLabels = {
  pembersih: "Pembersih",
  serum: "Serum",
  pelembap: "Pelembap",
  "pelindung-matahari": "Sunscreen",
  "perawatan-tubuh": "Perawatan Tubuh",
  "perawatan-rambut": "Perawatan Rambut",
} as const;

export default function ProductCard({ product }: { product: Product }) {
  const message = `Halo Niggy Salon, saya ingin memesan produk ${product.name}. Mohon info proses pemesanan dan totalnya.`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-primary-light">
        <Image
          src={`/images/${product.image}`}
          alt={`${product.name}, produk ${categoryLabels[product.category].toLowerCase()}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-dark">
          {categoryLabels[product.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink/50">
          {product.size}
        </p>
        <h2 className="mt-2 text-xl font-bold text-ink">{product.name}</h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
          {product.description}
        </p>
        <ul className="mt-4 space-y-2 border-t border-ink/10 pt-4 text-sm text-ink/65">
          {product.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span aria-hidden="true" className="text-primary">✓</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button
            href={waLink(message)}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            className="w-full"
          >
            Pesan Sekarang
          </Button>
        </div>
      </div>
    </article>
  );
}
