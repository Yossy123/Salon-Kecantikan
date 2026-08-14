import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { getServiceBySlug, services } from "@/lib/data";
import { waLink } from "@/lib/wa";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Layanan tidak ditemukan" };
  return {
    title: service.name,
    description: service.brief,
  };
}

export default async function LayananDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const waMessage = `Halo Niggy Salon, saya ingin bertanya tentang layanan ${service.name} (${service.price}).`;

  return (
    <>
      <section
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: `url('/images/${service.image}')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <span
            aria-hidden="true"
            className={`${service.icon} text-4xl text-primary-light`}
          />
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">{service.name}</h1>
          <p className="mt-3 text-white/85">{service.brief}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-3 md:px-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-ink">Tentang Perawatan Ini</h2>
            {service.description.map((paragraph, i) => (
              <p key={i} className="mt-4 leading-relaxed text-ink/70">
                {paragraph}
              </p>
            ))}

            <h3 className="mt-10 text-xl font-bold text-ink">Manfaat</h3>
            <ul className="mt-4 space-y-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-ink/80">
                  <span aria-hidden="true" className="mt-1 text-primary">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-bold text-ink">Cocok untuk</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.suitableFor.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-primary-light px-4 py-1.5 text-sm font-medium text-primary-dark"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-ink/10 bg-primary-light/40 p-8">
            <div className="flex items-center justify-between">
              <span className="text-sm text-ink/70">Harga</span>
              <span className="text-2xl font-bold text-primary">{service.price}</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-ink/70">Durasi</span>
              <span className="font-semibold text-ink">{service.duration}</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-ink/70">Kategori</span>
              <span className="font-semibold text-ink">{service.category}</span>
            </div>
            <div className="mt-8 space-y-3">
              <Button href="/booking" className="w-full">
                Booking Sekarang
              </Button>
              <Button href={waLink(waMessage)} variant="outline" className="w-full">
                Tanya via WhatsApp
              </Button>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-ink/60">
              Harga dapat berbeda untuk kebutuhan khusus. Hubungi kami untuk
              penawaran perawatan yang lebih personal.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}