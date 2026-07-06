"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-scrubbed manifesto text: words develop from ghost to full
 * ink as the reader moves through the section, like a print exposure.
 */
export function WordReveal({
  text,
  className,
  accentWords = [],
}: {
  text: string;
  className?: string;
  accentWords?: string[];
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLSpanElement>("[data-word]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.06,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
            end: "bottom 45%",
            scrub: 0.6,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text]);

  const clean = (w: string) => w.replace(/[^\p{L}\p{N}]/gu, "").toLowerCase();

  return (
    <p ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          data-word
          className={cn(
            "inline",
            accentWords.some((a) => clean(word) === clean(a)) &&
              "type-serif-accent text-accent"
          )}
        >
          {word}{" "}
        </span>
      ))}
    </p>
  );
}
