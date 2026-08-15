"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { doctors, services } from "@/lib/data";
import { bookingText, waLink } from "@/lib/wa";
import type { Service } from "@/types";

type Step = 1 | 2 | 3 | 4;

const timeSlots = [
  "08.00",
  "09.30",
  "11.00",
  "13.00",
  "14.30",
  "16.00",
  "17.30",
  "19.00",
];

export default function BookingForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<Step>(1);
  const [doctor] = useState<string>(() => {
    const slug = searchParams.get("dokter");
    return doctors.find((d) => d.slug === slug)?.name ?? "";
  });
  const [serviceSlug, setServiceSlug] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const selectedService: Service | undefined = services.find(
    (s) => s.slug === serviceSlug
  );

  const validate = (): boolean => {
    if (step === 1 && !serviceSlug) {
      setError("Pilih salah satu layanan terlebih dahulu.");
      return false;
    }
    if (step === 2 && (!date || !time)) {
      setError("Lengkapi tanggal dan jam kunjungan.");
      return false;
    }
    if (step === 3 && (!name.trim() || !phone.trim())) {
      setError("Isi nama dan nomor HP yang valid.");
      return false;
    }
    setError("");
    return true;
  };

  const next = () => {
    if (!validate()) return;
    setStep((s) => Math.min(s + 1, 4) as Step);
  };

  const back = () => {
    setError("");
    setStep((s) => Math.max(s - 1, 1) as Step);
  };

  const sendToWhatsApp = () => {
    if (!validate()) return;
    const message = bookingText({
      service: selectedService?.name,
      date,
      time,
      name,
      phone,
      doctor: doctor || undefined,
    });
    window.open(waLink(message), "_blank");
  };

  const inputCls =
    "w-full rounded-lg border border-ink/20 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-sm md:p-10">
      <ol className="mb-8 flex items-center gap-2 overflow-x-auto pb-1 text-sm">
        {(["Layanan", "Jadwal", "Data Diri", "Konfirmasi"] as const).map(
          (label, i) => {
            const n = (i + 1) as Step;
            return (
              <li key={label} className="flex shrink-0 items-center gap-2">
                <span
                  aria-current={step === n ? "step" : undefined}
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                    step === n
                      ? "bg-primary text-white"
                      : step > n
                        ? "bg-primary-light text-primary"
                        : "bg-ink/10 text-ink/60"
                  }`}
                >
                  {n}
                </span>
                <span
                  className={
                    step === n
                      ? "font-semibold text-ink sm:inline"
                      : "hidden text-ink/60 sm:inline"
                  }
                >
                  {label}
                </span>
                {n < 4 ? <span className="text-ink/30">›</span> : null}
              </li>
            );
          }
        )}
      </ol>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
        {step === 1 ? (
        <div>
          <h3 className="mb-4 text-lg font-bold text-ink">Pilih Layanan</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((s) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => setServiceSlug(s.slug)}
                className={`rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                  serviceSlug === s.slug
                    ? "border-primary bg-primary-light text-ink"
                    : "border-ink/15 text-ink/70 hover:border-primary"
                }`}
              >
                <span className="block font-semibold text-ink">{s.name}</span>
                <span className="text-ink/60">
                  {s.price} · {s.duration}
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div>
          <h3 className="mb-4 text-lg font-bold text-ink">Pilih Jadwal</h3>
          <label className="mb-2 block text-sm font-medium text-ink/80">
            Tanggal kunjungan
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputCls}
            aria-label="Tanggal kunjungan"
          />
          <p className="mb-2 mt-5 block text-sm font-medium text-ink/80">
            Jam kunjungan
          </p>
          <div className="flex flex-wrap gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setTime(slot)}
                className={`rounded-lg border px-4 py-2 text-sm ${
                  time === slot
                    ? "border-primary bg-primary text-white"
                    : "border-ink/15 text-ink/70 hover:border-primary"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div>
          <h3 className="mb-4 text-lg font-bold text-ink">Data Diri</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="bk-name" className="mb-1 block text-sm font-medium text-ink/80">
                Nama
              </label>
              <input
                id="bk-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputCls}
                placeholder="Nama lengkap"
              />
            </div>
            <div>
              <label htmlFor="bk-phone" className="mb-1 block text-sm font-medium text-ink/80">
                Nomor HP
              </label>
              <input
                id="bk-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputCls}
                placeholder="08xxxxxxxxxx"
              />
            </div>
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <div>
          <h3 className="mb-4 text-lg font-bold text-ink">Konfirmasi</h3>
          <dl className="space-y-2 rounded-2xl bg-ink/5 p-5 text-sm">
            {doctor ? (
              <div className="flex justify-between gap-4">
                <dt className="text-ink/60">Dokter</dt>
                <dd className="font-semibold text-ink">{doctor}</dd>
              </div>
            ) : null}
            <div className="flex justify-between gap-4">
              <dt className="text-ink/60">Layanan</dt>
              <dd className="font-semibold text-ink">{selectedService?.name ?? "-"}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink/60">Tanggal</dt>
              <dd className="font-semibold text-ink">{date}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink/60">Jam</dt>
              <dd className="font-semibold text-ink">{time}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink/60">Nama</dt>
              <dd className="font-semibold text-ink">{name}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink/60">No. HP</dt>
              <dd className="font-semibold text-ink">{phone}</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm text-ink/60">
            Tekan tombol di bawah untuk mengirim pesan booking otomatis ke WhatsApp
            Niggy Salon.
          </p>
        </div>
      ) : null}

      {error ? (
        <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 1 ? (
          <button
            type="button"
            onClick={back}
            className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink/70 hover:border-primary hover:text-primary"
          >
            Kembali
          </button>
        ) : (
          <span />
        )}
        {step < 4 ? (
          <button
            type="button"
            onClick={next}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Lanjut
          </button>
        ) : (
          <button
            type="button"
            onClick={sendToWhatsApp}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Kirim ke WhatsApp
          </button>
        )}
      </div>
    </div>
  );
}