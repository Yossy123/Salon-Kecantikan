# WORKFLOW.md — Alur Kerja Pengembangan

Alur kerja untuk repo `niggy-salon-react` (Next.js 16). Sesuai untuk bekerja solo maupun
dengan agent/AI.

## 1. Alur Git & Branch

```
main                ← selalu hijau, siap deploy
└── feature/<kode>  ← kerjaan harian, dihapus setelah merge
```

Aturan:
- Kerjakan semua perubahan di branch feature, bukan langsung di `main`.
- Commit kecil & deskriptif, pesan dalam bahasa yang konsisten (disarankan Bahasa Indonesia).
- Jangan commit: `node_modules/`, `.next/`, `.env*`, API key, data pribadi.
  (`create-next-app` sudah menyetel `.gitignore`).

Contoh alur:

```bash
git checkout -b feature/booking-form
# ... edit ...
git add src/components/feature/BookingForm.tsx
git commit -m "feat(booking): tambah form multi-step ke WhatsApp"
git checkout main
git merge feature/booking-form
git branch -d feature/booking-form
```

## 2. Loop Pengembangan Harian

1. Ambil item dari `TODO.md` (status `[ ]`).
2. Buat/cekout branch feature.
3. **Implementasi**: komponen di `src/components/`, data di `src/lib/data.ts`,
   rute di `src/app/`.
4. **Verifikasi wajib** setiap selesai satu item:
   ```bash
   npm run lint
   npx tsc --noEmit
   ```
   Keduanya harus bersih sebelum lanjut.
5. **Uji manual**: `npm run dev` → cek rute & interaksi (booking, filter, menu mobile).
6. Update `TODO.md` (centang item).
7. Commit.

## 3. Definition of Done (DoD)

Item dianggap selesai hanya jika **semua** terpenuhi:

- [ ] Lint & typecheck bersih
- [ ] Rute berfungsi di `npm run dev` (dan `npm run build` untuk fase 5)
- [ ] Konten Bahasa Indonesia asli, tanpa placeholder
- [ ] Tidak ada aset hilang / referensi rusak (cek `public/images/`)
- [ ] Tidak memakai API key or JS/SCSS lama
- [ ] Meta title/description terpasang (SEO)
- [ ] Responsif pada mobile
- [ ] TODO diperbarui

## 4. Verifikasi Build Produksi

Sebelum merge ke `main` (minimal sekali per fase):

```bash
npm run build
npm start
```

Buka `http://localhost:3000` dan lakukan smoke test semua rute inti:
`/`, `/tentang`, `/layanan`, `/layanan/<slug>`, `/booking`, `/lokasi`, `/artikel`, `/kontak`, `/promo`.

## 5. Deploy

MVP berbasis statis/hybrid — cocok untuk:

| Opsi | Cara |
|---|---|
| **Vercel** (termudah) | Push repo ke GitHub → import ke Vercel → auto-deploy per commit di `main` |
| **Netlify** | Build command `npm run build`, publish dir `out` (jika `output: 'export'`) |
| **Laragon lokal** | `npm run build && npm start` untuk produksi lokal |

Catatan:
- Untuk static export penuh, set `output: 'export'` di `next.config.ts` (cocok untuk
  hosting murni statis). Fitur yang butuh server (ISR/path dinamis saat runtime) tidak aktif.
- Jika memakai Vercel, tidak perlu konfigurasi tambahan; ISR/SSG bekerja normal.

## 6. Menangani Perubahan Requirement

- Update `PRD.md` dulu (apa yang berubah), lalu `ARCHITECTURE.md` (bagaimana), baru kode.
- Semua perubahan ini di satu branch feature yang sama, commit terpisah dan jelas.