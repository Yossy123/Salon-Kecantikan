import type { Metadata } from "next";
import LocationMap from "@/components/feature/LocationMap";
import { clinicLocations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Lokasi",
  description:
    "Lokasi Niggy Salon di PERUM Taman Bojong Lestari, jam buka, dan peta untuk memudahkan kunjunganmu.",
};

export default function LokasiPage() {
  const location = clinicLocations[0];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Lokasi
          </p>
          <h1 className="text-4xl font-bold text-ink">Temukan Kami</h1>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink">{location.name}</h2>
            <dl className="mt-6 space-y-4 text-ink/80">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Alamat
                </dt>
                <dd>{location.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Telepon
                </dt>
                <dd>
                  <a href={`tel:+${location.phone.replace(/\D/g, "")}`} className="hover:text-primary">
                    {location.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Email
                </dt>
                <dd>
                  <a href={`mailto:${location.email}`} className="hover:text-primary">
                    {location.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Jam Buka
                </dt>
                <dd>{location.hours}</dd>
              </div>
            </dl>
            <p className="mt-6 rounded-2xl bg-primary-light/40 p-4 text-sm text-ink/70">
              Tips: sebaiknya booking terlebih dahulu agar jadwalmu tersedia,
              terutama pada akhir pekan.
            </p>
          </div>
          <LocationMap location={location} />
        </div>
      </div>
    </section>
  );
}