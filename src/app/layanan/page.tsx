import type { Metadata } from "next";
import { Suspense } from "react";
import ServiceList from "@/components/feature/ServiceList";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Daftar lengkap layanan Niggy Salon: perawatan kulit, rambut, makeup, dan body spa beserta harga.",
};

function Fallback() {
  return <p className="py-16 text-center text-ink/60">Memuat layanan...</p>;
}

export default function LayananPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Layanan"
          title="Pilih Perawatan yang Tepat"
          subtitle="Semua perawatan dimulai dari konsultasi singkat agar sesuai kebutuhan kulitmu."
        />
        <Suspense fallback={<Fallback />}>
          <ServiceList />
        </Suspense>
      </div>
    </section>
  );
}