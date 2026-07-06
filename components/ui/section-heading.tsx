import { type ReactNode } from "react";
import { FadeUp, MaskLines } from "./reveal";
import { cn } from "@/lib/utils";

/** Numbered eyebrow + display headline used to open each act. */
export function SectionHeading({
  index,
  eyebrow,
  lines,
  className,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  lines: ReactNode[];
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <FadeUp>
        <div
          className={cn(
            "flex items-center gap-4",
            align === "center" && "justify-center"
          )}
        >
          <span className="type-eyebrow text-accent">{index}</span>
          <span className="h-px w-12 bg-line-strong" />
          <span className="type-eyebrow text-fg-muted">{eyebrow}</span>
        </div>
      </FadeUp>
      <MaskLines lines={lines} className="type-display mt-6" delay={0.1} />
    </div>
  );
}
