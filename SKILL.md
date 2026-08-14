# SKILL.md — Skill untuk Alur Kerja Niggy Salon

Kumpulan skill singkat untuk memandu agent/assistant saat mengerjakan repo ini.
Setiap skill punya: nama, deskripsi, trigger, dan langkah inti.

---

## skill: salon-layout-builder

**Deskripsi:** Membangun/merapikan layout global (Navbar, Footer, root layout) dan blok
hero/section di halaman marketing.

**Trigger:** tugas yang menyebut Navbar, Footer, hero, section layout, header.

**Langkah:**
1. Baca `src/components/layout/` dan `src/app/layout.tsx` yang ada.
2. Gunakan komponen `ui/` (Button, Card, SectionHeading) bila tersedia.
3. Komponen interaktif (toggle menu) → client component.
4. Pastikan navigasi mengikuti PRD §4 & metadata tiap halaman.

## skill: salon-content-writer

**Deskripsi:** Menulis/menyunting konten Bahasa Indonesia asli (bukan placeholder) untuk
layanan, tentang, artikel, promo, dan testimoni.

**Trigger:** tugas menulis konten, mengganti lorem ipsum, menambah layanan/artikel.

**Langkah:**
1. Tambahkan data ke `src/lib/data.ts` sesuai tipe di `src/types/index.ts`.
2. Ikuti benchmark ERHA Ultimate (solusi-berbasis-masalah, tone "dermabeauty").
3. Gunakan data kontak salons yang benar (WA, email, jam).
4. Setiap entri layanan punya `slug` kebab-case unik, `price`, `duration`, `benefits`.

## skill: booking-flow

**Deskripsi:** Membangun/memodifikasi alur booking & form kontak yang terhubung ke
WhatsApp / email.

**Trigger:** booking, form, WhatsApp, appointment, konfirmasi.

**Langkah:**
1. Pakai `src/lib/wa.ts` (helper `waLink`).
2. Form adalah client component dengan validasi field wajib.
3. Pesan WhatsApp mengikuti format PRD §5.5.
4. Uji pratinjau pesan + tautan terbuka di tab baru.

## skill: seo-page-template

**Deskripsi:** Memastikan setiap halaman punya metadata, struktur semantik, dan gambar
ber-alt yang baik.

**Trigger:** SEO, meta, metadata, aksesibilitas, generateMetadata.

**Langkah:**
1. Tiap `page.tsx` mengekspor `metadata` (title, description, openGraph).
2. Dynamic route (`/layanan/[slug]`) → `generateMetadata({ params })`.
3. Periksa heading hierarchy (satu `h1` per halaman).
4. Gambar memakai `<Image>` + alt; hero full-bleed perhatikan `sizes`.

---

## Prioritas Pakai

- Untuk tugas multi-halaman: mulai dari `salon-layout-builder`, lalu
  `salon-content-writer`, tutup dengan `seo-page-template`.
- Untuk alur konversi: `booking-flow` + `seo-page-template`.