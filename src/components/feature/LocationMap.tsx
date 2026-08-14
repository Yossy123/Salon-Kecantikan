import type { ClinicLocation } from "@/types";

export default function LocationMap({ location }: { location: ClinicLocation }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-ink/10 shadow-sm">
      <iframe
        src={location.mapsEmbedUrl}
        title={`Peta lokasi ${location.name}`}
        width="600"
        height="450"
        style={{ border: 0, width: "100%" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}