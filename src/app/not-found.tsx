import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">404</p>
      <h1 className="mt-2 text-4xl font-bold text-ink">Halaman tidak ditemukan</h1>
      <p className="mt-3 max-w-md text-ink/70">
        Halaman yang kamu cari mungkin sudah dipindah atau tidak tersedia.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
      >
        Kembali ke Beranda
      </Link>
    </section>
  );
}