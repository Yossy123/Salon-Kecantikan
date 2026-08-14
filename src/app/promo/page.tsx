import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { promos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Promo",
  description:
    "Promo dan paket hemat Niggy Salon: Student Discount, paket facial, bundle rambut, dan lainnya.",
};

export default function PromoPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Promo"
          title="Promo & Paket Hemat"
          subtitle="Manfaatkan penawaran spesial untuk perawatan favoritmu."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {promos.map((promo) => (
            <article
              key={promo.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm"
            >
              <div
                className="h-44 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/${promo.image}')` }}
                role="img"
                aria-label={promo.title}
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="mb-2 w-fit rounded-full bg-primary-light px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-dark">
                  {promo.badge}
                </span>
                <h2 className="text-xl font-bold text-ink">{promo.title}</h2>
                <p className="text-sm font-semibold text-primary">{promo.subtitle}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                  {promo.description}
                </p>
                <div className="mt-6">
                  <Button href="/booking" variant="outline" className="w-full">
                    Ambil Promo
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-ink p-10 text-center text-white">
          <h2 className="text-2xl font-bold">Gunakan Promo untuk Jadwal Berikutnya</h2>
          <p className="mx-auto mt-3 max-w-lg text-white/75">
            Promo berlaku selama persediaan jadwal. Hubungi kami untuk detail syarat
            &amp; ketentuan.
          </p>
          <div className="mt-8">
            <Button href="/booking">Booking Sekarang</Button>
          </div>
        </div>
      </div>
    </section>
  );
}