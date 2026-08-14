import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import "./flaticon.css";

export const metadata: Metadata = {
  title: {
    default: "Niggy Salon — Salon Kecantikan & Spa",
    template: "%s | Niggy Salon",
  },
  description:
    "Niggy Salon — salon kecantikan di PERUM Taman Bojong Lestari. Perawatan kulit, rambut, makeup, dan body spa. Booking mudah via WhatsApp.",
  openGraph: {
    title: "Niggy Salon — Salon Kecantikan & Spa",
    description:
      "Perawatan kulit, rambut, makeup, dan body spa dengan pendekatan personal. Booking via WhatsApp.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}