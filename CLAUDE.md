# CLAUDE.md — Konteks Proyek untuk Claude

Repositori: `C:\laragon\www\niggy-salon-react` (Next.js 16, TypeScript, Tailwind v4).
Konteks lengkap teknis: baca `AGENTS.md` dan `ARCHITECTURE.md`. Product intent: `PRD.md`.

## Ringkasan Cepat

Website **Niggy Salon** — salon kecantikan lokal di PERUM Taman Bojong Lestari — dibangun
ulang dari situs statis HTML/jQuery ke React/Next.js, dengan struktur konten yang
meniru ERHA Ultimate (solusi-berbasis-masalah, treatment center, booking).

- Kontak: WA `+62 851-7410-3353`, email `yossykusuma01@gmail.com`
- Jam buka: Senin–Jumat 08.00–21.00
- Bahasa keseluruhan: Indonesia

## Rekomendasi yang Perlu Diingat

- Jalankan `npm run dev` sesering mungkin sambil mengerjakan halaman.
- Periksa `AGENTS.md` untuk aturan keras (dua yang paling sering dilanggar:
  mengimpor aset/JS lama, dan mengakses `params` secara sinkron).

## Aset yang Tersedia di `public/images/`

```
hero_bg_1.jpg  hero_bg_2.jpg  hero_bg_3.jpg
img_1.jpg      img_2.jpg      img_3.jpg      img_4.jpg      img_5.jpg
work-1.jpg     profil.jpg
person_1.jpg   person_2.jpg   person_6.jpg   loc.png
```

Ikon Flaticon tersedia lewat `public/css/flaticon.css`
(mis. `flaticon-flower`, `flaticon-facial-treatment`, `flaticon-cosmetics`, `flaticon-curl`).

## Jebakan dari Situs Lama (Jangan Diulang)

- `js/google-map.js` tidak pernah ada di situs lama → jangan dibuat/referensikan.
- API key Google Maps (`AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s`) bocor di HTML lama →
  **tidak boleh dipakai/di-commit**. Gunakan iframe embed saja.
- Nama brand inkonsisten di lama ("Pretty" vs "Niggy") → **brand resmi: Niggy Salon**.
- Staf duplikat (foto `profil.jpg` dua kali) → data tunggal di `src/lib/data.ts`.
- `images/bg_4.jpg` dirujuk tapi tidak ada → pilih gambar yang benar-benar ada.
- `images/index-1.html` nyasar di folder images → jangan disalin.
- Semua konten lama adalah placeholder (lorem ipsum) → **tulis konten asli Bahasa Indonesia**.

## Alur Kerja yang Direkomendasikan

1. Cek `TODO.md` → ambil item dengan status `[ ]`.
2. Kerjakan di branch feature (lihat `WORKFLOW.md`).
3. Tambah/mutasi data di `src/lib/data.ts` + `src/types/index.ts` bila perlu.
4. Verifikasi: `npm run lint`, `npx tsc --noEmit`, uji di browser.
5. Update TODO (centang) & commit.