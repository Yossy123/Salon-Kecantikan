"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";

const navItems = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/layanan", label: "Layanan" },
  { href: "/dokter", label: "Dokter" },
  { href: "/promo", label: "Promo" },
  { href: "/artikel", label: "Artikel" },
  { href: "/lokasi", label: "Lokasi" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-primary"
        >
          <span aria-hidden="true" className="flaticon-flower text-primary" />
          Niggy<span className="text-ink"> Salon</span>
        </Link>

        <nav className="hidden items-center gap-4 xl:gap-6 lg:flex" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isActive(item.href)
                  ? "text-sm font-semibold text-primary"
                  : "text-sm font-medium text-ink/70 transition-colors hover:text-primary"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden lg:block">
            <Button href="/booking">Booking Sekarang</Button>
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="rounded-md p-2 text-ink hover:bg-ink/5 lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          className="border-t border-ink/10 lg:hidden"
          aria-label="Navigasi mobile"
        >
          <ul className="flex flex-col px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={
                    isActive(item.href)
                      ? "block py-3 text-sm font-semibold text-primary"
                      : "block py-3 text-sm text-ink/70 hover:text-primary"
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-3">
              <Button href="/booking" className="w-full">
                Booking Sekarang
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}