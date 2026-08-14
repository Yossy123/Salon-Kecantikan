<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean. Keep it — but use the project rules below for this repo's specifics.

<!-- END:nextjs-agent-rules -->

# AGENTS.md — Niggy Salon Project (Next.js 16)

Pedoman kerja untuk AI agents pada repo `niggy-salon-react`.

## Perintah Utama

Jalankan di root repo:

| Aksi | Perintah |
|---|---|
| Dev server | `npm run dev` |
| Build produksi | `npm run build` |
| Jalankan produksi | `npm start` |
| Lint | `npm run lint` |
| Typecheck | `npx tsc --noEmit` |
| Test | belum ada; tambahkan jika diminta |

Setelah selesai mengubah kode: jalankan **lint + typecheck** dan pastikan bersih.

## Stack & Konvensi

- Next.js 16 (App Router, `src/app/`), TypeScript, Tailwind CSS v4, React 19.
- **`params` adalah Promise** — gunakan `await params` atau `use(params)`; jangan akses
  sinkron.
- Server Components secara default; tandai `'use client'` hanya untuk komponen interaktif
  (form, slider, toggle navbar).
- Tipe data (Service, StaffMember, dst.) ada di `src/types/index.ts`; data konten di
  `src/lib/data.ts`. Tambahkan data baru di sana, bukan hardcode di halaman.
- Konten harus **Bahasa Indonesia**, tanpa lorem ipsum.
- Tajuk header/footer dari PRD §4.

## Struktur Penting

- `src/app/*/page.tsx` — halaman; tiap halaman ekspor `metadata`.
- `src/components/layout/` — Navbar, Footer.
- `src/components/ui/` — komponen kecil reusable.
- `src/components/feature/` — blok spesifik fitur (HeroSection, BookingForm, dll).
- `public/images/` — aset gambar; `public/css/flaticon.css` & `public/fonts/` untuk ikon.

## Aturan Keras (Jangan Dilanggar)

1. **Jangan mengubah folder situs lama** `C:\laragon\www\Niggy Salon\`. Folder tersebut
   hanya sumber aset & referensi visual. (Path ini tidak di dalam repo.)
2. **Jangan mengimpor ulang** JS/SCSS lama (jQuery, `main.js`, `style.scss`).
3. **Jangan commit** API key (mis. key Google Maps lama di template), `node_modules/`,
   `.next/`, atau data pribadi non-publik.
4. Booking & kontak via deep-link WhatsApp/mailto (lihat `src/lib/wa.ts`) — tanpa backend.
5. Peta pakai Google Maps **embed iframe** (tanpa key); jangan referensikan
   `js/google-map.js`.
6. Gambar asli hanya dari `public/images/`; gunakan komponen `<Image>` Next.js bila
   memungkinkan (perlu `sizes` untuk gambar penuh).

## Konvensi Penamaan

- File/folder: `kebab-case` (kecuali komponen React: `PascalCase.tsx`).
- Komponen: `PascalCase`; hook: `useCamelCase`.
- Variabel/fungsi: `camelCase`; konstanta data: `UPPER_SNAKE` bila menyangkut konstanta global.

## Aksesibilitas & SEO

- Tiap halaman: `title` + `description` unik via `generateMetadata`/`metadata`.
- Semua `<img>` punya `alt` deskriptif.
- Tombol & tautan interaktif punya label jelas; navigasi mobile dapat dioperasikan.

## Definisi Selesai

Satu task dianggap selesai bila: lint & typecheck bersih, rute berfungsi
(`npm run dev`), tidak ada aset hilang, konten bukan placeholder, dan documentasinya
dipesan oleh TODO.md yang diperbarui.