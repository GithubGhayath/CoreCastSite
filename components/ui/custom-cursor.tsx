"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { LogoMark } from "./logo";

/**
 * Cursor: the CORECAST logo mark glued to the pointer. It grows slightly
 * over interactive targets (links, buttons, inputs).
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.body.dataset.customCursor = "true";

    const inspect = (el: Element | null) => {
      const target = el?.closest(
        "a, button, [data-cursor-label], input, textarea, select, label"
      );
      setHovering(Boolean(target));
    };

    const move = (e: MouseEvent) => {
      setVisible(true);
      x.set(e.clientX);
      y.set(e.clientY);
      inspect(e.target as Element | null);
    };
    // smooth scroll slides content under a stationary pointer —
    // re-evaluate what the cursor is actually over
    const rescan = () => inspect(document.elementFromPoint(x.get(), y.get()));
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("scroll", rescan, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", rescan);
      document.documentElement.removeEventListener("mouseleave", leave);
      delete document.body.dataset.customCursor;
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[250] -translate-x-1/2 -translate-y-1/2"
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0, scale: hovering ? 1.35 : 1 }}
      transition={{ scale: { type: "spring", stiffness: 300, damping: 25 } }}
      aria-hidden
    >
      <LogoMark className="h-6 w-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]" />
    </motion.div>
  );
}
