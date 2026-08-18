import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/feature/ServiceCard";
import TestimonialSlider from "@/components/feature/TestimonialSlider";
import DoctorCard from "@/components/feature/DoctorCard";
import ProductCard from "@/components/feature/ProductCard";
import { doctors, products, promos, services, solutionCards, testimonials } from "@/lib/data";

export default function HomePage() {
  const featured = services.slice(0, 3);
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero_bg_1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-light">
            Salon Kecantikan &amp; Spa
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
            Nikmati Perawatan,<br />
            <span className="text-primary-light">Wujudkan Kulit Sehatmu</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-white/85">
            Perawatan yang personal untuk kulit, rambut, dan tubuhmu — ditangani
            langsung oleh terapis &amp; makeup artist berpengalaman.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/booking">Booking Sekarang</Button>
            <Button href="/layanan" variant="white">
              Lihat Layanan
            </Button>
          </div>
        </div>
      </section>

      {/* Temukan Solusi */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Solusi"
            title="Temukan Solusi untuk Masalah Kulitmu"
            subtitle="Mulai dari masalah yang kamu alami — kami bantu temukan perawatan yang paling tepat."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solutionCards.map((card) => (
              <Link
                key={card.category}
                href={`/layanan?kategori=${card.category}`}
                className="group rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <span
                  aria-hidden="true"
                  className={`${card.icon} mb-4 inline-block text-4xl text-primary`}
                />
                <h3 className="text-lg font-bold text-ink group-hover:text-primary">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-ink/70">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Layanan Unggulan */}
      <section className="border-y border-ink/5 bg-stone-50 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Layanan"
            title="Layanan Unggulan Kami"
            subtitle="Perawatan yang paling banyak dipilih pelanggan Niggy Salon."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/layanan" variant="outline">
              Lihat Semua Layanan
            </Button>
          </div>
        </div>
      </section>

      {/* Produk Perawatan */}
      <section className="bg-primary-light/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Produk Perawatan"
            title="Lanjutkan Perawatan di Rumah"
            subtitle="Pilihan produk untuk melengkapi rutinitas kulit, tubuh, dan rambutmu setelah berkunjung ke Niggy Salon."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/produk" variant="outline">
              Lihat Semua Produk
            </Button>
          </div>
        </div>
      </section>

      {/* Tim Dokter Spesialis */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Tim Dokter"
            title="Tim Dokter Spesialis Niggy Salon"
            subtitle="Konsultasikan keluhanmu bersama dokter spesialis yang berpengalaman."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/dokter" variant="outline">
              Lihat Semua Dokter
            </Button>
          </div>
        </div>
      </section>

      {/* Promo */}
      <section
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero_bg_2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-lg text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
              {promos[0].badge}
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">{promos[0].title}</h2>
            <p className="mt-3 text-white/85">{promos[0].description}</p>
            <div className="mt-8">
              <Button href="/promo" variant="white">
                Lihat Semua Promo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Testimoni"
            title="Cerita Pelanggan Setelah Berkunjung"
            subtitle="Pengalaman pelanggan yang telah mempercayakan waktu perawatannya kepada Niggy Salon."
          />
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* CTA booking */}
      <section className="bg-ink py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-bold">Siap untuk Tampil Lebih Percaya Diri?</h2>
          <p className="mt-3 text-white/75">
            Jadwalkan kunjunganmu sekarang — mudah, cepat, langsung konfirmasi via WhatsApp.
          </p>
          <div className="mt-8">
            <Button href="/booking">Booking Sekarang</Button>
          </div>
        </div>
      </section>
    </>
  );
}
