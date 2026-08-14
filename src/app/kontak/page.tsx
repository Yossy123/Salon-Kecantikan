import type { Metadata } from "next";
import ContactForm from "@/components/feature/ContactForm";
import { CLINIC_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Niggy Salon untuk konsultasi dan pertanyaan seputar layanan. Tersedia via WhatsApp dan email.",
};

export default function KontakPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Kontak
          </p>
          <h1 className="text-4xl font-bold text-ink">Hubungi Kami</h1>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-ink">Informasi Kontak</h2>
            <dl className="mt-6 space-y-4 text-ink/80">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Alamat
                </dt>
                <dd>{CLINIC_INFO.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Telepon / WhatsApp
                </dt>
                <dd>
                  <a
                    href={`tel:+${CLINIC_INFO.phoneRaw}`}
                    className="hover:text-primary"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="hover:text-primary"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Jam Buka
                </dt>
                <dd>
                  {CLINIC_INFO.hoursWeekdays}, {CLINIC_INFO.hoursTime}
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold text-ink">Kirim Pesan</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}