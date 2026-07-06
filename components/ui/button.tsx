import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "./magnetic";
import { cn } from "@/lib/utils";

/**
 * Primary CTA: magnetic pill with a sliding fill on hover.
 * variant "solid" inverts the theme; "outline" stays transparent.
 */
export function CtaButton({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  return (
    <Magnetic strength={0.3} className={className}>
      <Link
        href={href}
        className={cn(
          "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-colors duration-500",
          variant === "solid"
            ? "bg-bg-inverse text-fg-inverse"
            : "border border-line-strong text-fg hover:text-fg-inverse"
        )}
      >
        <span
          className={cn(
            "absolute inset-0 -z-0 translate-y-full rounded-full transition-transform duration-500 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)] group-hover:translate-y-0",
            variant === "solid" ? "bg-accent" : "bg-bg-inverse"
          )}
        />
        <span className="relative z-10">{children}</span>
        <ArrowUpRight
          className="relative z-10 size-4 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      </Link>
    </Magnetic>
  );
}
