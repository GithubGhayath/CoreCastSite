"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useExperience } from "@/components/providers/experience";
import { useTheme } from "@/components/providers/theme-provider";
import { useLanguage } from "@/components/providers/language-provider";
import { CtaButton } from "@/components/ui/button";

const MonolithScene = dynamic(() => import("@/components/three/monolith"), {
  ssr: false,
});
const EASE = [0.65, 0.05, 0, 1] as const;

export function Hero() {
  const { ready } = useExperience();
  const { theme } = useTheme();
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const HEADLINE = [t("hero.line1"), t("hero.line2"), t("hero.line3"), t("hero.line4")];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // As the hero ends, the monolith "docks" into the navbar logo slot:
  // it shrinks and flies toward the top-left corner, then fades — handing
  // off to the real header logo that slides in at the same moment.
  // (Tune these ranges to match the header's `pastHero` threshold.)
  const dockScale = useTransform(scrollYProgress, [0.55, 0.9], [1, 0.12]);
  const dockX = useTransform(scrollYProgress, [0.55, 0.9], ["0%", "-42%"]);
  const dockY = useTransform(scrollYProgress, [0.55, 0.9], ["0%", "-42%"]);
  const dockOpacity = useTransform(scrollYProgress, [0.72, 0.92], [1, 0]);
  // Reduced motion: no flight, just a gentle fade.
  const fadeOnly = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]);

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
      className="relative h-[165vh] text-fg"
      aria-label={t("hero.ariaLabel")}
    >
      <div className="vignette sticky top-0 h-screen overflow-hidden bg-bg">
        {/* architectural void behind the monolith */}
        <div
          className="animate-slow-drift absolute inset-[-10%]"
          style={{ background: "var(--hero-void)" }}
        />
        <div
          className="animate-light-sweep absolute inset-y-[-25%] left-1/2 w-[34%] -translate-x-1/2 blur-3xl"
          style={{ background: "var(--hero-sweep)" }}
        />

        {/* the monolith — interactive, scroll-driven; docks into the navbar */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={
            reduce
              ? { opacity: fadeOnly }
              : {
                  scale: dockScale,
                  x: dockX,
                  y: dockY,
                  opacity: dockOpacity,
                  transformOrigin: "50% 50%",
                }
          }
        >
          <MonolithScene
            progress={scrollYProgress}
            fogColor={theme === "dark" ? "#1d1c29" : "#efeaf5"}
          />
        </motion.div>

        {/* interface — pointer-events pass through empty areas so the
            monolith below stays hoverable; re-enabled on the content */}
        <div className="pointer-events-none relative z-10 flex h-full flex-col justify-between px-6 pb-8 pt-28 md:px-12 md:pb-12">
          <div className="flex-1" />

          <div className="pointer-events-auto">
            <h1 className="type-hero" aria-label={t("hero.ariaLabel")}>
              {HEADLINE.map((line, i) => (
                <span key={i} className="block overflow-hidden">
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
                            {t("hero.accent")}
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
                {t("hero.paragraph")}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <CtaButton href="/projects">{t("common.viewOurWork")}</CtaButton>
                <CtaButton href="/booking" variant="outline">
                  {t("common.bookAStrategyCall")}
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
          <span className="type-eyebrow text-fg-subtle">{t("hero.scroll")}</span>
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
