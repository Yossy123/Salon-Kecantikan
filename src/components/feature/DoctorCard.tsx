import Button from "@/components/ui/Button";
import type { Doctor } from "@/types";

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="flex flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
      <div className="mb-5 text-center">
        <div
          className="mx-auto mb-4 h-28 w-28 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url('/images/${doctor.photo}')` }}
          role="img"
          aria-label={`Foto ${doctor.name}`}
        />
        <h3 className="text-lg font-bold leading-snug text-ink">{doctor.name}</h3>
        <p className="mt-1 text-sm font-semibold text-primary">{doctor.title}</p>
      </div>
      <ul className="mb-6 flex flex-1 flex-wrap justify-center gap-2">
        {doctor.specialties.map((s) => (
          <li
            key={s}
            className="rounded-full bg-primary-light/60 px-3 py-1 text-xs font-medium text-ink/70"
          >
            {s}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2">
        <Button href={`/booking?dokter=${doctor.slug}`}>Buat Jadwal</Button>
        <Button href={`/dokter/${doctor.slug}`} variant="outline">
          Lihat Detail
        </Button>
      </div>
    </div>
  );
}