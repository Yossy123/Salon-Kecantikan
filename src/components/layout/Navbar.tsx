"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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
            <span
              aria-hidden="true"
              className="relative block h-5 w-6"
            >
              <span
                className={`absolute left-0 top-0 block h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ease-in-out ${
                  open ? "translate-y-2 rotate-45" : "rotate-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 rounded-full bg-current transition-opacity duration-300 ease-in-out ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-0.5 w-6 rounded-full bg-current transition-transform duration-300 ease-in-out ${
                  open ? "-translate-y-2 -rotate-45" : "rotate-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            key="mobile-menu"
            id="mobile-menu"
            aria-label="Navigasi mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
          >
            <div className="border-t border-ink/10">
              <ul className="flex flex-col px-4 py-2">
                {navItems.map((item, i) => (
                  <li key={item.href}>
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: 0.04 * i,
                        ease: "easeOut",
                      }}
                    >
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
                    </motion.div>
                  </li>
                ))}
                <li className="py-3">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: 0.04 * navItems.length,
                      ease: "easeOut",
                    }}
                  >
                    <Button
                      href="/booking"
                      className="w-full"
                      onClick={() => setOpen(false)}
                    >
                      Booking Sekarang
                    </Button>
                  </motion.div>
                </li>
              </ul>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}