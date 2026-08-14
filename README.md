# Niggy Salon

Website resmi **Niggy Salon** — salon & spa kecantikan lokal di **PERUM Taman Bojong
Lestari, Cibinong**. Dibangun ulang dari situs statis (HTML/jQuery/Bootstrap) menjadi
aplikasi modern dengan struktur konten dan arah desain yang terinspirasi dari **ERHA
Ultimate** (erhaultimate.co.id).

## Fitur

- **Beranda** — hero, solusi sesuai masalah, layanan unggulan, tim dokter, promo, testimoni
- **Tentang** — profil salon + tim ahli
- **Layanan** & **Detail Layanan** — katalog dengan filter kategori
- **Cari Dokter** & **Detail Dokter** — pencarian (nama/gelar/keahlian) + filter keahlian
- **Booking** — form multi-langkah → kirim pesan otomatis ke WhatsApp
- **Lokasi** — alamat, jam buka, Google Maps embed
- **Artikel** & **Detail Artikel** — konten edukasi kecantikan
- **Kontak** — info kontak + form pesan
- **Promo** — paket & diskon

## Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Bahasa | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first, token brand) |
| Ikon | Flaticon font |
| Booking | WhatsApp deep-link (`wa.me`) |
| Rendering | SSG untuk halaman marketing |

## Menjalankan

```bash
npm install       # pasang dependensi
npm run dev       # mode development (http://localhost:3000)
npm run build     # build produksi
npm start         # jalankan build produksi
npm run lint      # linting
```

## Struktur Proyek

```
src/
├── app/          # Routing & halaman (App Router)
├── components/   # layout/, ui/, feature/
├── lib/          # data.ts (sumber data) & wa.ts (helper WhatsApp)
└── types/        # tipe TypeScript
```

## Dokumentasi

- `PRD.md` — product requirements & acceptance criteria
- `ARCHITECTURE.md` — arsitektur & pola kode
- `WORKFLOW.md` — git flow & definisi selesai
- `AGENTS.md` / `CLAUDE.md` — panduan untuk AI coding assistant

## Data

Seluruh konten (layanan, dokter, artikel, promo, testimoni) didefinisikan statis di
`src/lib/data.ts`. Data dokter saat ini masih dummy dan akan diperbarui setelah
konfirmasi client.