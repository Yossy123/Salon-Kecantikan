interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`mb-12 max-w-2xl ${alignment} ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold text-ink md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mt-4 text-base text-ink/70">{subtitle}</p>
      ) : null}
    </div>
  );
}