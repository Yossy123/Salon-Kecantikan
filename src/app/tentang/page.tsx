import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { staffMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali Niggy Salon — salon kecantikan dengan pendekatan perawatan personal untuk kulit, rambut, makeup, dan tubuh.",
};

export default function TentangPage() {
  return (
    <>
      <section
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/images/hero_bg_3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="text-4xl font-bold md:text-5xl">Tentang Niggy Salon</h1>
          <p className="mt-4 text-white/80">
            Perawatan yang personal, seperti untuk dirimu sendiri.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
          <div className="relative h-80 overflow-hidden rounded-3xl shadow-sm md:h-[420px]">
            <Image
              src="/images/img_1.jpg"
              alt="Suasana perawatan di Niggy Salon"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
              Cerita Kami
            </p>
            <h2 className="text-3xl font-bold text-ink md:text-4xl">
              Perawatan Pribadi untuk Setiap Masalah Kulitmu
            </h2>
            <p className="mt-4 leading-relaxed text-ink/70">
              Niggy Salon lahir dari keinginan menyediakan perawatan kecantikan yang
              tidak sekadar dilihat dari harga, tetapi dari kenyamanan dan hasil.
              Setiap kunjungan dimulai dengan konsultasi untuk memahami kondisi
              kulit, rambut, dan kebutuhanmu.
            </p>
            <p className="mt-4 leading-relaxed text-ink/70">
              Dari deep pore cleansing, perawatan jerawat, hingga tata rias dan
              relaksasi tubuh — semua ditangani oleh tim yang berpengalaman dengan
              produk teruji.
            </p>
            <div className="mt-8">
              <Button href="/layanan">Jelajahi Layanan</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-light/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow="Tim Kami"
            title="Para Ahli di Balik Niggy Salon"
            subtitle="Terapis dan stylist yang siap memberikan pengalaman perawatan terbaik."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staffMembers.map((staff) => (
              <div
                key={staff.name}
                className="rounded-2xl border border-ink/10 bg-white p-6 text-center shadow-sm"
              >
                <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={`/images/${staff.photo}`}
                    alt={`Foto ${staff.name}`}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-ink">{staff.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {staff.position}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{staff.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
