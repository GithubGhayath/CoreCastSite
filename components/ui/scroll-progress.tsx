"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Hairline scroll indicator — a brand-gradient line pinned to the very top
 * of the viewport that fills as the visitor moves through the page.
 * Spring-smoothed so it glides with the Lenis scroll rather than snapping.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[130] h-[2px] origin-left bg-gradient-brand"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
