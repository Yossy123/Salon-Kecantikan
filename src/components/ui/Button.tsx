import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "white";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  outline:
    "border border-primary text-primary hover:bg-primary hover:text-white",
  white: "border border-white text-white hover:bg-white hover:text-inherit",
};

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
}

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...rest}>
      {children}
    </a>
  );
}