"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/feature/ProductCard";
import type { Product, ProductCategory } from "@/types";

const categories: { value: ProductCategory; label: string }[] = [
  { value: "pembersih", label: "Pembersih" },
  { value: "serum", label: "Serum" },
  { value: "pelembap", label: "Pelembap" },
  { value: "pelindung-matahari", label: "Sunscreen" },
  { value: "perawatan-tubuh", label: "Perawatan Tubuh" },
  { value: "perawatan-rambut", label: "Perawatan Rambut" },
];

export default function ProductList({ products }: { products: Product[] }) {
  const searchParams = useSearchParams();
  const category = searchParams.get("kategori");
  const selectedCategory = categories.some((item) => item.value === category)
    ? (category as ProductCategory)
    : undefined;
  const filtered = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <nav className="mb-10 flex flex-wrap justify-center gap-2" aria-label="Kategori produk">
        <Link
          href="/produk"
          aria-current={selectedCategory === undefined ? "page" : undefined}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            selectedCategory === undefined
              ? "bg-primary text-white"
              : "bg-primary-light text-primary-dark hover:bg-primary hover:text-white"
          }`}
        >
          Semua Produk
        </Link>
        {categories.map((item) => (
          <Link
            key={item.value}
            href={`/produk?kategori=${item.value}`}
            aria-current={selectedCategory === item.value ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              selectedCategory === item.value
                ? "bg-primary text-white"
                : "bg-primary-light text-primary-dark hover:bg-primary hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-ink/60">
          Belum ada produk pada kategori ini.
        </p>
      ) : null}
    </>
  );
}
