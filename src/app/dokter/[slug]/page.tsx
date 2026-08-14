import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { doctors, getDoctorBySlug } from "@/lib/data";
import { waLink } from "@/lib/wa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return { title: "Dokter tidak ditemukan" };
  return {
    title: doctor.name,
    description: `${doctor.title} — ${doctor.specialties.join(", ")}.`,
  };
}

export default async function DokterDetailPage({ params }: Props) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) notFound();

  const waMessage = `Halo Niggy Salon, saya ingin berkonsultasi dengan ${doctor.name} (${doctor.title}).`;

  return (
    <>
      <section className="relative bg-cover bg-center py-24">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <div
            className="mx-auto mb-4 h-32 w-32 rounded-full bg-cover bg-center ring-4 ring-white/60"
            style={{ backgroundImage: `url('/images/${doctor.photo}')` }}
            role="img"
            aria-label={`Foto ${doctor.name}`}
          />
          <h1 className="text-4xl font-bold md:text-5xl">{doctor.name}</h1>
          <p className="mt-3 text-lg text-primary-light">{doctor.title}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-3 md:px-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-ink">Tentang Dokter</h2>
            {doctor.bio.map((paragraph, i) => (
              <p key={i} className="mt-4 leading-relaxed text-ink/70">
                {paragraph}
              </p>
            ))}

            <h3 className="mt-10 text-xl font-bold text-ink">Bidang Keahlian</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {doctor.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="rounded-full bg-primary-light px-4 py-1.5 text-sm font-medium text-primary-dark"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-ink/10 bg-primary-light/40 p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="text-sm text-ink/70">Jadwal praktek</span>
              <span className="text-right font-semibold text-ink">
                {doctor.schedule}
              </span>
            </div>
            <div className="mt-8 space-y-3">
              <Button href={`/booking?dokter=${doctor.slug}`} className="w-full">
                Buat Jadwal
              </Button>
              <Button href={waLink(waMessage)} variant="outline" className="w-full">
                Tanya via WhatsApp
              </Button>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-ink/60">
              Jadwal dapat berubah sewaktu-waktu. Hubungi kami untuk konfirmasi
              ketersediaan dokter.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}