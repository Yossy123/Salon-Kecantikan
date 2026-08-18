# TODO — Niggy Salon (Next.js)

Status checklist. Centang `[x]` saat selesai & lolos verifikasi (lint + typecheck).

## Fase 0 — Fondasi
- [x] `git init` + project Next.js (create-next-app, TypeScript + Tailwind v4)
- [x] Salin aset: `public/images/*` (14 gambar), `public/fonts/*` (Flaticon/Icomoon)
- [x] Jangan salin API key lama / aset rusak (`google-map.js`, `bg_4.jpg`)
- [x] Design token di `globals.css` (`--color-primary: #fa5bdd`, font stack)
- [x] Font brand (Montserrat via CSS stack; fallback system jika tak tersedia)

## Fase 1 — Layout & Data
- [x] `src/types/index.ts` — tipe `Service`, `StaffMember`, `Article`, `Promo`, `Testimonial`, `ClinicLocation`
- [x] `src/lib/data.ts` — 8 layanan, 3 staf, 3 artikel, 3 promo, 3 testimoni, 1 lokasi
- [x] `src/lib/wa.ts` — helper `waLink()` + `mailtoLink()` + `bookingText()`
- [x] `src/app/layout.tsx` — metadata dasar, bahasa `id`, import ikon Flaticon
- [x] `src/components/layout/Navbar.tsx` (client) — menu + tombol Booking
- [x] `src/components/layout/Footer.tsx` — info salon & tautan
- [x] `src/components/ui/` — Button, SectionHeading

## Fase 2 — Halaman Statis
- [x] `/` Beranda: hero + Temukan Solusi + layanan unggulan + promo + testi + CTA
- [x] `/tentang` Tentang: profil + tim staf (data tunggal)
- [x] `/layanan` Layanan: daftar kartu + filter kategori (Suspense + useSearchParams)
- [x] `/lokasi` Lokasi: alamat, jam, peta embed iframe (tanpa API key)
- [x] `/artikel` Artikel: grid artikel
- [x] `/kontak` Kontak: info + form → WhatsApp/email (`ContactForm`)
- [x] `/promo` Promo: kartu promo + CTA

## Fase 3 — Dynamic Route
- [x] `/layanan/[slug]/page.tsx` — detail layanan (`await params`, `notFound()`)
- [x] `generateStaticParams()` untuk prerender semua slug
- [x] `generateMetadata` tiap detail
- [x] `/artikel/[slug]` — detail artikel ringkas (agar tautan tidak mati)

## Fase 4 — Interactivity
- [x] `BookingForm.tsx` — multi-step (layanan → tanggal/jam → data → konfirmasi) → WhatsApp
- [x] `TestimonialSlider.tsx` (client)
- [x] Filter kategori di `/layanan` (client) + inisialisasi dari query
- [x] Prefill dokter di booking: `/booking?dokter=<slug>` → nama dokter masuk pesan WhatsApp

## Fase 4b — Cari Dokter (adaptasi ERHA `/find-doctor`)
- [x] Tipe `Doctor` + data dummy 4 dokter di `src/lib/data.ts` (untuk diganti setelah konfirmasi client)
- [x] `DoctorCard` — foto, nama + gelar, keahlian, tombol Buat Jadwal & Lihat Detail
- [x] `DoctorFinder` (client) — search nama/gelar/keahlian + filter keahlian (Suspense + useSearchParams)
- [x] `/dokter` — halaman daftar + pencarian
- [x] `/dokter/[slug]` — detail dengan `generateStaticParams`, `generateMetadata`, `notFound()`
- [x] Section "Tim Dokter Spesialis" di beranda + item "Dokter" di Navbar & Footer

## Fase 5 — SEO, QA, Polish
- [x] Meta title/description unik semua halaman (audit `generateMetadata`)
- [x] Aksesibilitas dasar: heading, alt, label, fokus
- [x] Responsif mobile navbar & grid
- [x] Verifikasi build: semua rute 200 (`npm run build` + `next start`)
- [x] `robots.txt` dasar untuk crawler
- [ ] Sitemap (`app/sitemap.ts`) setelah domain produksi dikonfirmasi
- [x] Polish konten non-dokter, form, dan hierarki beranda (lint + typecheck)
- [ ] Audit kontras & interaksi lanjutan (desktop/mobile cross-check browser)
- [ ] Commit final + update file dokumentasi ini

## Fase 5b - Katalog Produk
- [x] `/produk` - katalog produk perawatan dengan filter kategori dan tombol tanya stok via WhatsApp
- [x] Data produk di `src/lib/data.ts` - facial wash, sunscreen, serum, pelembap, lotion, dan perawatan rambut
- [x] Produk unggulan ditampilkan di beranda serta ditautkan dari Navbar dan Footer

## Backlog / Ide Lanjutan (di luar MVP)
- [x] Halaman detail artikel (`/artikel/[slug]`) — sudah dibuat ringkas di Fase 3
- [ ] Data dokter real (ganti dummy setelah konfirmasi client)
- [ ] Multi-bahasa (i18n ID/EN)
- [ ] CMS/API untuk konten (migrasi dari `data.ts`)
- [ ] Pembayaran online & akun pengguna
- [ ] Halaman kemitraan/bisnis
