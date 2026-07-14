"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LogoStacked } from "./logo";

/**
 * Opening title card: the logo sits centered and "fills up" from the
 * bottom as a counter climbs to 100, then the curtain lifts.
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
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center overflow-hidden bg-[#1d1c29] px-6 text-[#f2eff6]"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.65, 0.05, 0, 1] }}
          aria-hidden
        >
          <motion.div
            className="flex flex-col items-center"
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.5, ease: [0.65, 0.05, 0, 1] }}
          >
            {/* the logo fills from the bottom up as the site loads */}
            <div className="relative">
              <LogoStacked className="h-32 w-auto opacity-[0.14] md:h-40" />
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(${100 - count}% 0% 0% 0%)` }}
              >
                <LogoStacked className="h-32 w-auto md:h-40" />
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <span className="type-eyebrow text-[#a49fb6]">Loading</span>
              <span className="type-eyebrow tabular-nums text-[#f2eff6]">
                {count}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
