"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoStacked } from "./logo";

/**
 * Opening title card: a counter climbs to 100 while the wordmark
 * flickers in, then the curtain lifts in two acts.
 */
export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // interval-driven (not rAF) so a backgrounded tab can't stall the
    // curtain; the timeout guarantees the site opens no matter what
    const start = performance.now();
    const duration = 1600;

    const id = setInterval(() => {
      const t = Math.min((performance.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t >= 1) clearInterval(id);
    }, 32);
    const finish = setTimeout(() => {
      setCount(100);
      setExiting(true);
    }, duration + 250);

    return () => {
      clearInterval(id);
      clearTimeout(finish);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-end justify-between overflow-hidden bg-[#1d1c29] px-6 pb-6 md:px-12 md:pb-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.65, 0.05, 0, 1] }}
          aria-hidden
        >
          <motion.div
            className="text-[#f2eff6]"
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.65, 0.05, 0, 1] }}
          >
            <span className="type-eyebrow text-[#a49fb6]">
              A cinematic marketing agency
            </span>
            <LogoStacked className="mt-5 h-28 w-auto md:h-36" />
          </motion.div>
          <motion.div
            className="type-display text-gradient-brand tabular-nums"
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.65, 0.05, 0, 1] }}
          >
            {count}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
