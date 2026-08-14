import Link from "next/link";
import type { Service } from "@/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/layanan/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
    >
      <span
        aria-hidden="true"
        className={`${service.icon} mb-4 inline-block text-4xl text-primary`}
      />
      <h3 className="text-lg font-bold text-ink">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
        {service.brief}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4 text-sm">
        <span className="font-semibold text-primary">{service.price}</span>
        <span className="text-ink/50">{service.duration}</span>
      </div>
    </Link>
  );
}