import Link from "next/link";
import { CLINIC_INFO } from "@/lib/data";

const quickLinks = [
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/produk", label: "Produk Perawatan" },
  { href: "/dokter", label: "Cari Dokter" },
  { href: "/promo", label: "Promo" },
  { href: "/booking", label: "Booking" },
  { href: "/lokasi", label: "Lokasi" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <h2 className="mb-3 text-xl font-bold text-white">Niggy Salon</h2>
          <p className="text-sm leading-relaxed text-white/70">
            Salon &amp; kecantikan lokal yang menyediakan perawatan kulit, rambut,
            makeup, dan relaksasi tubuh dengan pendekatan personal.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-white">
            Tautan Cepat
          </h2>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/70 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-white">
            Hubungi Kami
          </h2>
          <ul className="space-y-2 text-sm text-white/70">
            <li>{CLINIC_INFO.address}</li>
            <li>
              <a href={`tel:+${CLINIC_INFO.phoneRaw}`} className="hover:text-primary">
                {CLINIC_INFO.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-primary">
                {CLINIC_INFO.email}
              </a>
            </li>
            <li>
              {CLINIC_INFO.hoursWeekdays}, {CLINIC_INFO.hoursTime}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Niggy Salon. Seluruh hak cipta.
      </div>
    </footer>
  );
}
