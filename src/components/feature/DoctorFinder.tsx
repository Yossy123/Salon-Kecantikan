"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import DoctorCard from "@/components/feature/DoctorCard";
import { doctors } from "@/lib/data";
import type { ServiceCategory } from "@/types";

const filters: { key: ServiceCategory | "semua"; label: string }[] = [
  { key: "semua", label: "Semua" },
  { key: "kulit", label: "Kulit" },
  { key: "rambut", label: "Rambut" },
  { key: "makeup", label: "Makeup" },
  { key: "body", label: "Body" },
];

const validCategories: ServiceCategory[] = ["kulit", "rambut", "makeup", "body"];

export default function DoctorFinder() {
  const searchParams = useSearchParams();
  const [active, setActive] = useState<ServiceCategory | "semua">(() => {
    const kategori = searchParams.get("keahlian");
    return kategori && (validCategories as string[]).includes(kategori)
      ? (kategori as ServiceCategory)
      : "semua";
  });
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return doctors.filter((d) => {
      const matchesCategory =
        active === "semua" || d.category === active;
      const matchesQuery =
        q === "" ||
        d.name.toLowerCase().includes(q) ||
        d.title.toLowerCase().includes(q) ||
        d.specialties.some((s) => s.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [active, query]);

  const inputCls =
    "w-full rounded-full border border-ink/20 px-5 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <>
      <div className="mb-8 mx-auto max-w-xl">
        <label htmlFor="doctor-search" className="sr-only">
          Cari dokter
        </label>
        <input
          id="doctor-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari nama dokter, gelar, atau keahlian..."
          className={inputCls}
        />
      </div>

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

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      ) : (
        <p className="py-16 text-center text-ink/60">
          Tidak ada dokter yang cocok dengan kata kunci tersebut.
        </p>
      )}
    </>
  );
}