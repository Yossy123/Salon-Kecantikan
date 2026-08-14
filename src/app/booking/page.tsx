import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "@/components/feature/BookingForm";
import { CLINIC_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Booking perawatan Niggy Salon dengan mudah. Pilih layanan, jadwalkan kunjungan, dan konfirmasi langsung via WhatsApp.",
};

export default function BookingPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Booking
          </p>
          <h1 className="text-4xl font-bold text-ink">Book Jadwal Kunjunganmu</h1>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            Isi formulir di bawah — pesan booking otomatis akan terkirim ke WhatsApp
            Niggy Salon untuk konfirmasi.
          </p>
        </div>
        <Suspense
          fallback={<p className="py-16 text-center text-ink/60">Memuat form booking...</p>}
        >
          <BookingForm />
        </Suspense>
        <p className="mt-6 text-center text-sm text-ink/60">
          Butuh bantuan? Hubungi <strong>{CLINIC_INFO.phoneDisplay}</strong> atau{" "}
          <a
            href={`mailto:${CLINIC_INFO.email}`}
            className="font-semibold text-primary hover:text-primary-dark"
          >
            {CLINIC_INFO.email}
          </a>
        </p>
      </div>
    </section>
  );
}