# PRD — Niggy Salon Website (Next.js)

> Product Requirements Document
> Versi: 1.0 (MVP — Marketing + Booking)
> Status: Disetujui untuk dikerjakan

---

## 1. Ringkasan Produk

Niggy Salon adalah website resmi untuk **Niggy Salon**, sebuah salon & spa kecantikan
lokal yang berlokasi di **PERUM Taman Bojong Lestari**. Website ini dibangun ulang dari
situs statis (HTML/jQuery/Bootstrap) menjadi aplikasi **Next.js + TypeScript + Tailwind CSS**
dengan arah desain dan struktur konten yang terinspirasi dari **ERHA Ultimate**
(erhaultimate.co.id) — klinik spesialis kulit & rambut nasional.

Tujuan utama: memperkenalkan layanan, membangun kepercayaan, dan mendorong calon
pelanggan untuk **melakukan booking konsultasi/perawatan** dengan cara yang mudah.

### Sumber rujukan
- Situs lama: `C:\laragon\www\Niggy Salon\` (statis, tetap dipertahankan sebagai sumber aset)
- Benchmark: ERHA Ultimate — struktur berbasis solusi masalah, treatment center,
  penemuan klinik, dan alur booking.

---

## 2. Target Pengguna (Personas)

| Persona | Karakteristik | Kebutuhan utama |
|---|---|---|
| **Anin (24, mahasiswa)** | Mengunjungi salon untuk perawatan wajah & rambut; sensitif harga; aktif di media sosial | Melihat harga promo, booking cepat via WhatsApp, info acara/lokasi |
| **Dewi (34, pekerja kantoran)** | Ingin perawatan berkala, jarang punya waktu | Jadwal online, kontak cepat, info jam buka & lokasi |
| **Bima (28, pekerja)** | Perawatan rambut/spa sebagai perawatan pribadi | Daftar layanan jelas dengan harga, kontak langsung |

**Pembuat keputusan produk:** pemilik Niggy Salon (yossykusuma01@gmail.com,
0851-7410-3353).

---

## 3. Persona Bisnis Niggy Salon (data aktual)

| Data | Nilai |
|---|---|
| Nama | Niggy Salon (website lama bertajuk "Pretty") |
| Alamat | PERUM Taman Bojong Lestari |
| Telepon/WA | 0851-7410-3353 (`+62 851-7410-3353`) |
| Email | yossykusuma01@gmail.com |
| Jam buka | Senin – Jumat, 08.00 – 21.00 |
| Lokasi map | Embed Google Maps iframe (koordinat Cibinong -6.470058, 106.814174) |

Semua data di atas **wajib** dipakai konsisten di seluruh halaman.

---

## 4. Sitemap & Halaman (MVP)

| # | Rute | Halaman | Konten utama |
|---|---|---|---|
| 1 | `/` | Beranda | Hero, "Temukan Solusi untuk Masalah Kulitmu", layanan unggulan, promo, testi, CTA booking |
| 2 | `/tentang` | Tentang | Profil salon, visi-misi, tim ahli |
| 3 | `/layanan` | Layanan | Katalog layanan (grup scr masalah) |
| 4 | `/layanan/[slug]` | Detail Layanan | Deskripsi, manfaat, harga, durasi, CTA booking |
| 5 | `/booking` | Booking | Form multi-langkah → WhatsApp |
| 6 | `/lokasi` | Lokasi | Info alamat, jam, peta embed |
| 7 | `/artikel` | Artikel | Konten edukasi kecantikan |
| 8 | `/kontak` | Kontak | Info kontak, form pesan → email/WhatsApp |
| 9 | `/promo` | Promo | Diskon (cth. Student Discount 25%) |
| 10 | `/dokter` | Cari Dokter | Pencarian dokter (search + filter keahlian) |
| 11 | `/dokter/[slug]` | Detail Dokter | Profil dokter, keahlian, jadwal, CTA booking |

### Navigasi global
Header: Beranda, Tentang, Layanan, **Dokter**, Promo, Artikel, Lokasi, Kontak + tombol **Booking Sekarang**.
Footer: info salon, tautan cepat, kontak, sosial media.

---

## 5. Fitur & Acceptance Criteria per Halaman

### 5.1 Beranda (`/`)
- **Hero** dengan gambar latar `hero_bg_1.jpg` + tagline + CTA booking.
- **"Temukan Solusi untuk Masalah Kulitmu"**: 2–4 kartu masalah (Rambut, Kulit Berjerawat,
  Kulit Kusam, Rambut Rontok) → menuju filter/daftar layanan.
- **Layanan Unggulan**: grid kartu layanan (Skin & Beauty Care, Makeup Pro, Hair Style).
- **Promo**: bagian Student Discount (rekomendasi warna sesuai brand).
- **Testimoni**: slider testimoni pelanggan (3+).
- **CTA appointment** di bawah halaman.

AC: Semua tautan navigasi berfungsi; setiap kartu layanan mengarah ke
`/layanan/<slug>`; CTA membuka `/booking`.

### 5.2 Tentang (`/tentang`)
- Profil + cerita salon.
- **Tim Ahli** — kartu staf (nama, posisi, foto). Data dari `lib/data.ts` (staf: `staff`).

AC: Data staf dirender dari satu sumber data; foto `profil.jpg` dijadikan avatar.
Tidak ada lagi duplikasi kartu staf (bug dari situs lama).

### 5.3 Layanan (`/layanan`)
- Filter/kategori: Semua, Kulit, Rambut, Makeup, Body.
- Daftar layanan sebagai kartu.

AC: Kartu dapat difilter; klik membuka halaman detail.

### 5.4 Detail Layanan (`/layanan/[slug]`)
- Info lengkap: deskripsi, manfaat (bullet), harga, durasi, "cocok untuk".
- CTA **Booking Sekarang** + **Tanya via WhatsApp**.

AC: Route dinamis dengan `params` (Promise) sesuai Next.js App Router; slug tidak dikenal
menampilkan 404; `generateStaticParams` untuk prerender semua slug.

### 5.5 Booking (`/booking`)
- Form multi-langkah: (1) pilih layanan, (2) tanggal & waktu, (3) data diri, (4) konfirmasi.
- Submit → membuka WhatsApp dengan pesan pra-terisi:
  ```
  Halo Niggy Salon, saya ingin booking:
  Layanan: {layanan}
  Tanggal: {tanggal} | Jam: {jam}
  Nama: {nama} | No. HP: {telepon}
  ```
  URL: `https://wa.me/6285174103353?text=<url-encoded>`.
- Validasi wajib untuk setiap field.

AC: Semua field tervalidasi; tombol submit menampilkan pratinjau pesan; tautan
WhatsApp terbuka di tab baru.

### 5.6 Lokasi (`/lokasi`)
- Alamat & jam buka.
- **Google Maps embed** (iframe, tanpa API key — diambil dari `contact.html` lama).

AC: iframe map tampil tanpa error; tidak ada referensi ke `js/google-map.js` atau
API key lama yang bocor.

### 5.7 Artikel (`/artikel`)
- Grid artikel edukasi (judul, kategori, tanggal, ringkasan).
- Data dari `lib/data.ts` (minimal 3 artikel).

AC: Artikel dirender dari data; tautan menuju detail artikel (opsional fase lanjut).

### 5.8 Kontak (`/kontak`)
- Info kontak (alamat, telp, email).
- Form pesan (nama, email, subjek, pesan) → submit membuat tautan `mailto:`
  atau WhatsApp dengan isi pesan.

AC: Form tervalidasi; submit membuka komunikasi yang siap dikirim.

### 5.9 Promo (`/promo`)
- Kartu promo: Student Discount hingga 25%, promo paket perawatan.
- CTA menuju booking.

AC: Setiap promo memiliki CTA yang berfungsi.

### 5.10 Cari Dokter (`/dokter`)
- Kotak pencarian (cari nama/gelar/keahlian) + filter keahlian (Semua/Kulit/Rambut/Makeup/Body).
- Kartu dokter: foto, nama + gelar, list keahlian, tombol **Buat Jadwal** & **Lihat Detail**.
- Data dummy di `lib/data.ts` (`doctors`) — **sementara**, akan diganti setelah konfirmasi client.

AC: Pencarian & filter bekerja; "Buat Jadwal" membuka `/booking?dokter=<slug>` (nama dokter prefill di pesan WhatsApp).

### 5.11 Detail Dokter (`/dokter/[slug]`)
- Profil lengkap: foto, nama + gelar, bio, bidang keahlian, jadwal praktek.
- CTA **Buat Jadwal** + **Tanya via WhatsApp**.

AC: Route dinamis dengan `params` (Promise); slug tidak dikenal → 404; `generateStaticParams` untuk semua dokter.

---

## 6. Benchmark — Fitur ERHA Ultimate yang Diadaptasi

| ERHA Ultimate | Adaptasi di Niggy Salon |
|---|---|
| "Temukan Solusi Tepat untuk Masalahmu" | Kartu solusi masalah di beranda |
| Treatment Center (Acne/Anti-Aging/Brightening/Hair) | Grup layanan: Kulit, Rambut, Makeup, Body |
| `find-clinic`, `find-doctor` | Halaman Lokasi (1 lokasi di MVP) + **Cari Dokter** (`/dokter`) |
| Halaman booking | Form booking → WhatsApp |
| Artikel / Skin Wiki | Halaman Artikel edukasi |
| Personalised therapy narrative | Bagian "Perawatan Pribadi untuk Kamu" di Tentang |

---

## 7. Konten Awal (Bahasa Indonesia)

Seluruh konten placeholder dari situs lama ("Even the all-powerful Pointing...",
"Far far away...") **tidak boleh dipakai**. Ganti dengan konten asli bahasa Indonesia,
misalnya:

- Layanan: skin & beauty care, makeup pro, hair style, facial, body massage, perawatan jerawat.
- Harga contoh: Basic Rp 150rb, Standard Rp 250rb, Premium Rp 400rb, Platinum Rp 650rb
  (dapat disesuaikan oleh pemilik).
- Testimoni: 3 kutipan singkat nama inisial + layanan.

---

## 8. Non-Goals (di luar cakupan MVP)

- Autentikasi & akun pengguna
- Database / CMS live (konten statis dari `lib/data.ts` untuk sekarang)
- Pembayaran online
- Multi-bahasa (i18n)
- Admin panel
- Blog detail (hanya grid + ringkasan)

---

## 9. Definisi Selesai (Done)

Halaman dianggap selesai bila:
- [ ] Rute berfungsi di `npm run dev` dan `npm run build`
- [ ] `npm run lint` bersih
- [ ] Tidak ada referensi ke aset yang hilang (`google-map.js`, API key lama)
- [ ] Konten bukan placeholder; bahasa Indonesia konsisten
- [ ] Meta title/description per halaman terpasang
- [ ] Responsif (mobile-first) dan navigasi berfungsi