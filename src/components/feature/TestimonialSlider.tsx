"use client";

import { useState } from "react";
import type { Testimonial } from "@/types";

export default function TestimonialSlider({
  items,
}: {
  items: Testimonial[];
}) {
  const [index, setIndex] = useState(0);
  const current = items[index];

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <div className="mx-auto max-w-3xl rounded-3xl bg-primary-light p-8 text-center shadow-sm md:p-12">
      <p className="text-6xl text-primary" aria-hidden="true">
        &ldquo;
      </p>
      <blockquote className="text-lg font-medium leading-relaxed text-ink md:text-xl">
        {current.quote}
      </blockquote>
      <p className="mt-6 text-sm font-semibold text-primary">— {current.name}</p>
      <p className="text-sm text-ink/60">Layanan: {current.service}</p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          aria-label="Testimoni sebelumnya"
        >
          ←
        </button>
        <div className="flex gap-2" aria-hidden="true">
          {items.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-primary" : "bg-ink/20"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          aria-label="Testimoni berikutnya"
        >
          →
        </button>
      </div>
    </div>
  );
}