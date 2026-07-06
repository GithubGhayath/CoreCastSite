"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useExperience } from "@/components/providers/experience";
import { CtaButton } from "@/components/ui/button";

const MonolithScene = dynamic(() => import("@/components/three/monolith"), {
  ssr: false,
});

const EASE = [0.65, 0.05, 0, 1] as const;
const HEADLINE = ["WE BUILD", "BRANDS", "THAT PEOPLE", "REMEMBER."];

export function Hero() {
  const { ready } = useExperience();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // headline drifts apart and dissolves as the scene takes over
  const lineShift = [
    useTransform(scrollYProgress, [0, 0.6], ["0%", "-18%"]),
    useTransform(scrollYProgress, [0, 0.6], ["0%", "10%"]),
    useTransform(scrollYProgress, [0, 0.6], ["0%", "-30%"]),
    useTransform(scrollYProgress, [0, 0.6], ["0%", "22%"]),
  ];
  const headlineOpacity = useTransform(scrollYProgress, [0.25, 0.62], [1, 0]);
  const uiOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

  return (
    <section
      ref={sectionRef}
      data-theme="dark"
      className="relative h-[165vh] text-fg"
      aria-label="CORECAST — we build brands that people remember"
    >
      <div className="vignette sticky top-0 h-screen overflow-hidden bg-bg">
        {/* architectural void behind the monolith */}
        <div
          className="animate-slow-drift absolute inset-[-10%]"
          style={{
            background: `
              radial-gradient(85% 65% at 68% 22%, #2b2142 0%, transparent 60%),
              radial-gradient(60% 50% at 22% 78%, #241b33 0%, transparent 55%),
              radial-gradient(40% 35% at 55% 50%, rgba(216,99,165,0.10) 0%, transparent 70%)
            `,
          }}
        />
        <div
          className="animate-light-sweep absolute inset-y-[-25%] left-1/2 w-[34%] -translate-x-1/2 blur-3xl"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(243,141,144,0.16) 35%, rgba(129,93,167,0.08) 65%, transparent)",
          }}
        />

        {/* the monolith — interactive, scroll-driven */}
        <div className="absolute inset-0">
          <MonolithScene progress={scrollYProgress} />
        </div>

        {/* interface */}
        <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-8 pt-28 md:px-12 md:pb-12">
          <div className="flex-1" />

          <div>
            <h1 className="type-hero" aria-label="We build brands that people remember.">
              {HEADLINE.map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block will-change-transform"
                    style={{ x: lineShift[i], opacity: headlineOpacity }}
                  >
                    <motion.span
                      className="block"
                      initial={{ y: "112%" }}
                      animate={ready ? { y: "0%" } : {}}
                      transition={{ duration: 1.1, ease: EASE, delay: 0.15 + i * 0.11 }}
                    >
                      {i === 3 ? (
                        <>
                          <span className="type-serif-accent text-gradient-brand">
                            Remember
                          </span>
                          .
                        </>
                      ) : (
                        line
                      )}
                    </motion.span>
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              className="mt-10 flex flex-wrap items-end justify-between gap-8"
              style={{ opacity: uiOpacity }}
              initial={{ opacity: 0, y: 30 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: EASE, delay: 0.85 }}
            >
              <p className="max-w-md text-base leading-relaxed text-fg-muted">
                CORECAST is a cinematic marketing agency. We transform
                ambitious businesses into unforgettable brands through
                strategy, film, photography and design.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <CtaButton href="/projects">View Our Work</CtaButton>
                <CtaButton href="/booking" variant="outline">
                  Book a Strategy Call
                </CtaButton>
              </div>
            </motion.div>
          </div>
        </div>

        {/* scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
          style={{ opacity: uiOpacity }}
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 1.6, duration: 1 }}
          aria-hidden
        >
          <span className="type-eyebrow text-fg-subtle">Scroll</span>
          <div className="h-12 w-px overflow-hidden bg-line">
            <motion.div
              className="h-full w-full bg-accent"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
