"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.65, 0.05, 0, 1] as const;

/** Masked line-by-line reveal for editorial headlines. */
export function MaskLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  as: Tag = "h2",
  once = true,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "div";
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-12% 0px" });

  return (
    <Tag ref={ref as never} className={cn("mask-lines", className)}>
      {lines.map((line, i) => (
        <span key={i} className="line-mask">
          <motion.span
            className={cn("line-inner", lineClassName)}
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 1,
              ease: EASE,
              delay: delay + i * 0.09,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Soft rise-and-fade for supporting copy and UI clusters. */
export function FadeUp({
  children,
  className,
  delay = 0,
  y = 32,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Scale-in clip reveal for imagery / scene frames. */
export function FrameReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        className="h-full w-full"
        initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.15 }}
        animate={
          inView
            ? { clipPath: "inset(0% 0% 0% 0%)", scale: 1 }
            : { clipPath: "inset(100% 0% 0% 0%)", scale: 1.15 }
        }
        transition={{ duration: 1.3, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
