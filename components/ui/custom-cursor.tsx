"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Two-part cursor: a solid dot glued to the pointer and a lagging ring.
 * The ring inflates over interactive targets; elements can opt into a
 * text label via [data-cursor-label].
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState("");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 400, damping: 40 });
  const ringY = useSpring(y, { stiffness: 400, damping: 40 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.body.dataset.customCursor = "true";

    const inspect = (el: Element | null) => {
      const target = el?.closest(
        "a, button, [data-cursor-label], input, textarea, select, label"
      );
      setHovering(Boolean(target));
      setLabel(target?.getAttribute("data-cursor-label") ?? "");
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
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[250] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ x, y }}
        animate={{ opacity: visible ? 1 : 0 }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[249] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line-strong"
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: visible ? 1 : 0,
          width: label ? 88 : hovering ? 56 : 36,
          height: label ? 88 : hovering ? 56 : 36,
          backgroundColor: label ? "var(--bg-inverse)" : "rgba(0, 0, 0, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        aria-hidden
      >
        {label && (
          <span className="type-eyebrow !tracking-[0.14em] text-fg-inverse">
            {label}
          </span>
        )}
      </motion.div>
    </>
  );
}
