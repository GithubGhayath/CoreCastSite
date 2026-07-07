"use client";

import { motion } from "framer-motion";

const EASE = [0.65, 0.05, 0, 1] as const;

/**
 * Route-level transition. Next's App Router re-mounts this template on every
 * navigation, so each new page arrives behind a brand-gradient curtain that
 * wipes upward to reveal it, while the content itself fades in just after —
 * the same cinematic language as the nav menu.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[250] bg-gradient-brand"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{ transformOrigin: "top" }}
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </>
  );
}
