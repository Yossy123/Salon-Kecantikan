import { CLINIC_INFO } from "@/lib/data";

export function waLink(text: string): string {
  return `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
}

export function mailtoLink(to: string, subject: string, body: string): string {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${to}?${params.toString()}`;
}

export function bookingText(options: {
  service?: string;
  date?: string;
  time?: string;
  name?: string;
  phone?: string;
  doctor?: string;
}): string {
  const lines = [
    `Halo ${CLINIC_INFO.name}, saya ingin booking:`,
    `Dokter: ${options.doctor ?? "-"}`,
    `Layanan: ${options.service ?? "-"}`,
    `Tanggal: ${options.date ?? "-"} | Jam: ${options.time ?? "-"}`,
    `Nama: ${options.name ?? "-"} | No. HP: ${options.phone ?? "-"}`,
  ];
  return lines.join("\n");
}