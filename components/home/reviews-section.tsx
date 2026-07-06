"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { reviews } from "@/lib/data";
import { Magnetic } from "@/components/ui/magnetic";
import { FadeUp } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const EASE = [0.65, 0.05, 0, 1] as const;

/** Quote theatre — one review on screen at a time, dark-graded. */
export function ReviewsSection({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 1]);

  const paginate = useCallback((dir: number) => {
    setIndex(([i]) => [(i + dir + reviews.length) % reviews.length, dir]);
  }, []);

  useEffect(() => {
    const id = setInterval(() => paginate(1), 7000);
    return () => clearInterval(id);
  }, [paginate, index]);

  const review = reviews[index];

  return (
    <section
      data-theme="dark"
      className="vignette relative overflow-hidden bg-bg px-6 py-24 text-fg md:px-12 md:py-40"
      aria-label="Client reviews"
    >
      <div
        className="animate-slow-drift absolute inset-[-10%]"
        style={{
          background: `
            radial-gradient(70% 55% at 30% 25%, #272038 0%, transparent 60%),
            radial-gradient(50% 45% at 75% 70%, rgba(216,99,165,0.08) 0%, transparent 65%)
          `,
        }}
      />

      <div className="relative z-10">
        <FadeUp>
          <div className="flex items-center gap-4">
            <span className="type-eyebrow text-accent">04</span>
            <span className="h-px w-12 bg-line-strong" />
            <span className="type-eyebrow text-fg-muted">
              What clients say
            </span>
          </div>
        </FadeUp>

        <div className="mt-16 min-h-[380px] md:mt-20 md:min-h-[420px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={index}
              custom={direction}
              initial={{ opacity: 0, y: direction > 0 ? 60 : -60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction > 0 ? -60 : 60 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="type-statement mt-8 max-w-5xl !text-[clamp(1.5rem,3.6vw,3.1rem)]">
                <span className="type-serif-accent text-accent">“</span>
                {review.quote}
                <span className="type-serif-accent text-accent">”</span>
              </p>
              <footer className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-1">
                <cite className="not-italic text-sm font-semibold">
                  {review.name}
                </cite>
                <span className="text-sm text-fg-muted">
                  {review.role}, {review.company}
                </span>
                <Link
                  href={`/projects/${review.project}`}
                  className="link-line type-eyebrow !tracking-[0.18em] text-accent"
                >
                  See the project
                </Link>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex([i, i > index ? 1 : -1])}
                aria-label={`Go to review ${i + 1}`}
                className={cn(
                  "h-px transition-all duration-500",
                  i === index ? "w-10 bg-accent" : "w-5 bg-line-strong hover:bg-fg-muted"
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Magnetic strength={0.4}>
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous review"
                className="flex size-12 items-center justify-center rounded-full border border-line transition-colors duration-500 hover:border-accent"
              >
                <ArrowLeft className="size-4" strokeWidth={1.5} />
              </button>
            </Magnetic>
            <Magnetic strength={0.4}>
              <button
                onClick={() => paginate(1)}
                aria-label="Next review"
                className="flex size-12 items-center justify-center rounded-full border border-line transition-colors duration-500 hover:border-accent"
              >
                <ArrowRight className="size-4" strokeWidth={1.5} />
              </button>
            </Magnetic>
          </div>
        </div>

        {!standalone && (
          <FadeUp className="mt-12">
            <Link
              href="/reviews"
              className="link-line type-eyebrow !tracking-[0.2em] text-fg-muted"
            >
              All reviews
            </Link>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
