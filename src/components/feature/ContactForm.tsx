"use client";

import { useState } from "react";
import { mailtoLink, waLink } from "@/lib/wa";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!name.trim() || !message.trim()) {
      setError("Nama dan pesan wajib diisi.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (via: "whatsapp" | "email") => {
    if (!validate()) return;
    const body = `Dari: ${name}\nEmail: ${email || "-"}\n\n${message}`;
    if (via === "whatsapp") {
      window.open(waLink(`${subject ? `[${subject}] ` : ""}${body}`), "_blank");
    } else {
      window.location.href = mailtoLink("yossykusuma01@gmail.com", subject || "Pesan dari website", body);
    }
  };

  const inputCls =
    "w-full rounded-lg border border-ink/20 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/30";

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ct-name" className="mb-1 block text-sm font-medium text-ink/80">
            Nama
          </label>
          <input
            id="ct-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCls}
            placeholder="Nama kamu"
          />
        </div>
        <div>
          <label htmlFor="ct-email" className="mb-1 block text-sm font-medium text-ink/80">
            Email
          </label>
          <input
            id="ct-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputCls}
            placeholder="email@contoh.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="ct-subject" className="mb-1 block text-sm font-medium text-ink/80">
          Subjek
        </label>
        <input
          id="ct-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={inputCls}
          placeholder="Topik pesan"
        />
      </div>
      <div>
        <label htmlFor="ct-message" className="mb-1 block text-sm font-medium text-ink/80">
          Pesan
        </label>
        <textarea
          id="ct-message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputCls}
          placeholder="Tulis pesanmu..."
        />
      </div>

      {error ? (
        <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          onClick={() => handleSubmit("whatsapp")}
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          Kirim via WhatsApp
        </button>
        <button
          type="submit"
          onClick={() => handleSubmit("email")}
          className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
        >
          Kirim via Email
        </button>
      </div>
    </form>
  );
}