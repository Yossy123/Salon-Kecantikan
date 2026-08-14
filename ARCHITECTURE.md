# ARCHITECTURE — Niggy Salon (Next.js)

Dokumen arsitektur teknis untuk website Niggy Salon. Berlaku untuk direktori
`C:\laragon\www\niggy-salon-react`.

## 1. Stack

| Lapisan | Teknologi |
|---|---|
| Framework | Next.js **16.3.x** (App Router) |
| Bahasa | TypeScript |
| Styling | Tailwind CSS **v4** (CSS-first config via `@theme`) |
| Rendering | SSG (statis) untuk halaman marketing, ISR diikuti jika data berubah |
| Routing | App Router + dynamic segments |
| State | React hooks & komponen (tanpa state global di MVP) |
| Ikon | Flaticon font (disalin dari situs lama, `public/css/flaticon.css`) |
| Booking | Deep-link WhatsApp (`wa.me/6285174103353`) |

> Catatan Next.js 16: `params` adalah **Promise** — wajib `await`/`use()`.
> Lihat `node_modules/next/dist/docs/` untuk referensi API terbaru.

## 2. Struktur Folder

```
niggy-salon-react/
├── public/
│   ├── images/                  # Aset gambar (disalin dari situs lama)
│   └── fonts/                   # Flaticon font files (untuk @font-face)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (Navbar + Footer, meta, import CSS)
│   │   ├── globals.css          # Tailwind v4 + @theme design tokens
│   │   ├── flaticon.css         # @font-face Flaticon + kelas ikon (diimpor layout)
│   │   ├── page.tsx             # Beranda (/)
│   │   ├── not-found.tsx        # 404
│   │   ├── tentang/page.tsx
│   │   ├── tentang/page.tsx
│   │   ├── layanan/page.tsx     # + Suspense untuk useSearchParams
│   │   ├── layanan/[slug]/page.tsx
│   │   ├── dokter/page.tsx      # Cari Dokter (+ Suspense untuk search/filter)
│   │   ├── dokter/[slug]/page.tsx
│   │   ├── booking/page.tsx     # + Suspense untuk prefill dokter
│   │   ├── lokasi/page.tsx
│   │   ├── artikel/page.tsx
│   │   ├── artikel/[slug]/page.tsx
│   │   ├── kontak/page.tsx
│   │   └── promo/page.tsx
│   ├── components/
│   │   ├── layout/              # Navbar (client), Footer
│   │   ├── ui/                  # Button, SectionHeading
│   │   └── feature/             # ServiceCard, ServiceList, BookingForm, DoctorCard,
│   │                            #   DoctorFinder, TestimonialSlider, ContactForm,
│   │                            #   LocationMap, ArticleCard
│   ├── lib/
│   │   ├── data.ts              # Sumber data tunggal (layanan, staf, dokter, artikel, promo)
│   │   └── wa.ts                # Helper tautan WhatsApp / mailto
│   └── types/
│       └── index.ts             # Interface Service, Doctor, StaffMember, Article, dll.
├── AGENTS.md
├── ARCHITECTURE.md
├── CLAUDE.md
├── PRD.md
├── SKILL.md
├── TODO.md
└── WORKFLOW.md
```

## 3. Data Layer

Untuk MVP, seluruh konten didefinisikan **statically dalam `src/lib/data.ts`** dengan tipe
ketat dari `src/types/index.ts`. Ini mempermudah migrasi ke CMS/API di fase lanjut tanpa
mengubah komponen (komponen hanya menerima props bertipe).

Contoh tipe:

```ts
// src/types/index.ts
export interface Service {
  slug: string
  name: string
  category: 'kulit' | 'rambut' | 'makeup' | 'body'
  icon: string            // class Flaticon, mis. "flaticon-facial-treatment"
  brief: string           // deskripsi singkat (kartu/beranda)
  description: string[]   // paragraf detail halaman
  benefits: string[]      // bullet manfaat
  price: string           // "Rp 250.000"
  duration: string        // "60 menit"
  suitableFor: string[]
  image: string           // path di /images, mis. "hero_bg_3.jpg"
}
```

Konvensi:
- `slug` dalam kebab-case (contoh: `facial-cleansing`).
- Path gambar adalah string relatif ke `public/`, dipakai sebagai `src` `<Image>`/`<img>`.
- Semua konten **Bahasa Indonesia**, bebas placeholder.

## 4. Routing

- Halaman statis: folder biasa dengan `page.tsx`.
- Dynamic: `app/layanan/[slug]/page.tsx` & `app/dokter/[slug]/page.tsx` — baca `params` (Promise):

```tsx
export default async function Page({ params }: PageProps<'/layanan/[slug]'>) {
  const { slug } = await params
  // ...
}
```

- Prerender semua entri dengan `generateStaticParams()`.
- Slug tidak dikenal → `notFound()`.
- Halaman yang membaca `searchParams` (client) dibungkus `<Suspense>`: `/layanan`
  (`kategori`), `/dokter` (`keahlian`), `/booking` (`dokter`).
- Generik `PageProps<'/rute'>` dari `next` untuk tipe params aman.

## 5. Styling (Tailwind v4)

Tailwind v4 dikonfigurasi lewat CSS di `src/app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-primary: #fa5bdd;        /* warna aksen brand (dari template lama) */
  --color-primary-dark: #d943be;
  --color-ink: #171717;
  --font-sans: var(--font-montserrat); /* Montserrat, seperti brand */
}
```

Aturan pemakaian:
- Pakai kelas utilitas di JSX; hindari CSS kustom kecuali untuk efek kompleks.
- Warna brand lewat token `--color-primary` (menghasilkan kelas `bg-primary`, `text-primary`, dst).
- Font brand: Montserrat didefinisikan sebagai bagian dari `--font-sans` di
  `globals.css`. Di lingkungan tanpa akses internet saat build, **jangan** pakai
  `next/font/google` (build bisa menggantung); fallback ke system-font otomatis.
  Untuk brand yang presisi, self-host file font Montserrat di `public/fonts/`.
- Ikon Flaticon diimpor dari `src/app/flaticon.css` (font files di `public/fonts/flaticon/`).

## 6. Komponen

- **Server Component** (default) untuk semua halaman & kartu konten.
- **Client Component** (tandai `'use client'`) hanya untuk hal interaktif:
  `BookingForm`, `TestimonialSlider`, `Navbar` (toggle mobile), `DoctorFinder`, filter layanan.
- Komponen UI kecil (`Button`, `Card`, `SectionHeading`) reusable dan menerima props.

## 7. Booking (WhatsApp)

Tidak ada backend. `src/lib/wa.ts`:

```ts
export function waLink(text: string): string {
  return `https://wa.me/6285174103353?text=${encodeURIComponent(text)}`
}
```

`BookingForm` membangun pesan dari state form lalu `window.open(waLink(message), '_blank')`.
Format pesan sesuai PRD §5.5.

## 8. Peta

Gunakan **Google Maps embed iframe** (tanpa API key) — jikarame yang sama dengan
`contact.html` lama:

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m14!..." loading="lazy" />
```

**Larang**: memuat `js/google-map.js` atau Google Maps JS API dengan key (API key lama
tidak boleh dipakai/di-commit). Acuan: PRD §5.6.

## 9. SEO & Metadata

- Tiap halaman mengekspor `metadata` (title, description, `openGraph`).
- Manual: `export const metadata: Metadata = { ... }` di tiap `page.tsx`.
- Sitemap & robots diterapkan fase 5 (lihat TODO).

## 10. Standing Rules

1. Jangan mengubah isi folder situs lama `C:\laragon\www\Niggy Salon\` (hanya sebagai
   referensi/sumber aset).
2. Jangan memakai ulang file JS/SCSS lama; semua harus berupa komponen React.
3. Jangan commit API key, `.env`, atau data pribadi non-publik.
4. Change via feature branch — lihat `WORKFLOW.md`.