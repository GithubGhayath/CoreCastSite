"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { CinematicScene } from "@/components/ui/cinematic-scene";
import { FadeUp } from "@/components/ui/reveal";

export function ServicesSection() {
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const px = useSpring(x, { stiffness: 120, damping: 18 });
  const py = useSpring(y, { stiffness: 120, damping: 18 });

  return (
    <section
      className="relative px-6 py-24 md:px-12 md:py-40"
      aria-label="Services"
      onMouseMove={(e) => {
        x.set(e.clientX + 28);
        y.set(e.clientY - 130);
      }}
    >
      <SectionHeading
        index="02"
        eyebrow="What we direct"
        lines={["Every frame", "in service of", "the brand."]}
      />

      <div className="mt-16 border-t border-line md:mt-24">
        {services.map((service, i) => (
          <FadeUp key={service.slug} delay={i * 0.05}>
            <Link
              href={`/services#${service.slug}`}
              data-cursor-label="Open"
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-b border-line py-8 transition-colors duration-500 hover:bg-card md:grid-cols-[80px_1fr_1fr_auto] md:gap-10 md:py-10"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="type-eyebrow text-fg-subtle">{service.index}</span>
              <h3 className="type-title !text-[clamp(1.6rem,3.6vw,3.2rem)] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)] group-hover:translate-x-3">
                {service.title}
              </h3>
              <p className="hidden max-w-xs text-sm leading-relaxed text-fg-muted md:block">
                {service.tagline}
              </p>
              <ArrowUpRight
                className="size-5 text-fg-subtle transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                strokeWidth={1.5}
              />
            </Link>
          </FadeUp>
        ))}
      </div>

      {/* floating scene preview follows the cursor across the list */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[90] hidden aspect-video w-[340px] overflow-hidden rounded-md lg:block"
            style={{ x: px, y: py }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.65, 0.05, 0, 1] }}
            aria-hidden
          >
            <CinematicScene scene={services[active].scene} dim={0.2} />
            <div className="absolute bottom-3 left-4 z-10">
              <span className="type-eyebrow text-white/70">
                {services[active].title}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
