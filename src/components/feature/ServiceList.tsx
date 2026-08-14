"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import ServiceCard from "@/components/feature/ServiceCard";
import { services } from "@/lib/data";
import type { ServiceCategory } from "@/types";

const filters: { key: ServiceCategory | "semua"; label: string }[] = [
  { key: "semua", label: "Semua" },
  { key: "kulit", label: "Kulit" },
  { key: "rambut", label: "Rambut" },
  { key: "makeup", label: "Makeup" },
  { key: "body", label: "Body" },
];

const validCategories: ServiceCategory[] = ["kulit", "rambut", "makeup", "body"];

export default function ServiceList() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState<ServiceCategory | "semua">(() => {
    const kategori = searchParams.get("kategori");
    return kategori && (validCategories as string[]).includes(kategori)
      ? (kategori as ServiceCategory)
      : "semua";
  });

  const filtered = useMemo(
    () =>
      active === "semua"
        ? services
        : services.filter((s) => s.category === active),
    [active]
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActive(filter.key)}
            aria-pressed={active === filter.key}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
              active === filter.key
                ? "border-primary bg-primary text-white"
                : "border-ink/20 text-ink/70 hover:border-primary hover:text-primary"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-ink/60">
          Belum ada layanan pada kategori ini.
        </p>
      ) : null}
    </>
  );
}