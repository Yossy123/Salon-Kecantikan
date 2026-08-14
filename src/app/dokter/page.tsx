import type { Metadata } from "next";
import { Suspense } from "react";
import DoctorFinder from "@/components/feature/DoctorFinder";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Cari Dokter",
  description:
    "Temukan dan konsultasikan dengan tim dokter spesialis Niggy Salon untuk perawatan kulit, rambut, dan kecantikan.",
};

function Fallback() {
  return <p className="py-16 text-center text-ink/60">Memuat dokter...</p>;
}

export default function DokterPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Tim Dokter"
          title="Cari Dokter Spesialis"
          subtitle="Konsultasikan keluhan kulit, rambut, dan kecantikanmu bersama dokter yang tepat."
        />
        <Suspense fallback={<Fallback />}>
          <DoctorFinder />
        </Suspense>
      </div>
    </section>
  );
}