import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Infinite horizontal band — content is duplicated for a seamless loop. */
export function Marquee({
  children,
  className,
  duration = 36,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="animate-marquee flex w-max items-center"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
