"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";
import { useTheme } from "@/components/providers/theme-provider";
import { Magnetic } from "@/components/ui/magnetic";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const EASE = [0.65, 0.05, 0, 1] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Sync with the hero monolith's dock animation (hero.tsx dock ranges):
      // the navbar slides in just as the shrinking monolith reaches this corner.
      setPastHero(window.scrollY > window.innerHeight * 0.58);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [open]);

  // The homepage opens as a full-frame cinematic scene: the navbar
  // stays out of the shot until the visitor scrolls, then slides in.
  const hiddenInHero = pathname === "/" && !pastHero && !open;
  // While the header floats transparently over the hero, borrow the dark
  // theme's ink — but only when the hero is actually dark (dark mode).
  const overDarkScene =
    pathname === "/" && !scrolled && !open && theme === "dark";
  // The logo "lands" into the bar as the hero monolith docks. On every
  // other route it is simply present from the start.
  const logoLanded = pathname !== "/" || pastHero || open;

  return (
    <>
      <header
        data-theme={overDarkScene ? "dark" : undefined}
        className={cn(
          "fixed inset-x-0 top-0 z-[120] text-fg transition-all duration-700 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)]",
          scrolled && !open && "backdrop-blur-md",
          hiddenInHero && "pointer-events-none -translate-y-full opacity-0"
        )}
        style={{
          backgroundColor: scrolled && !open ? "var(--scrim)" : "transparent",
        }}
      >
        <div className="flex items-center justify-between px-6 py-5 md:px-12">
          <Link
            href="/"
            aria-label="CORECAST home"
            className="block transition-[filter] duration-500 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)] hover:drop-shadow-[0_0_10px_rgba(216,99,165,0.55)]"
          >
            <motion.span
              className="block origin-left will-change-transform"
              initial={false}
              animate={
                logoLanded
                  ? { scale: 1, opacity: 1 }
                  : { scale: 1.35, opacity: 0 }
              }
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Logo />
            </motion.span>
          </Link>

          <div className="flex items-center gap-4">
            <Magnetic strength={0.3}>
              <Link
                href="/booking"
                className="link-line type-eyebrow hidden !tracking-[0.2em] md:inline-block"
              >
                Book a call
              </Link>
            </Magnetic>
            <ThemeToggle />
            <Magnetic strength={0.4}>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="group flex size-10 flex-col items-center justify-center gap-[7px] rounded-full border border-line transition-colors duration-500 hover:border-line-strong"
              >
                <span
                  className={cn(
                    "h-px w-4 bg-current transition-transform duration-500 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)]",
                    open && "translate-y-1 rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "h-px w-4 bg-current transition-transform duration-500 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)]",
                    open && "-translate-y-1 -rotate-45"
                  )}
                />
              </button>
            </Magnetic>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="fixed inset-0 z-[110] flex flex-col justify-between overflow-hidden bg-bg px-6 pb-10 pt-28 md:px-12"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.9, ease: EASE }}
            aria-label="Main navigation"
          >
            <ul className="mt-4 md:mt-8">
              {navLinks.map((link, i) => (
                <li key={link.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%", transition: { duration: 0.4, ease: EASE } }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-baseline gap-5 py-1"
                    >
                      <span className="type-eyebrow text-fg-subtle">
                        0{i + 1}
                      </span>
                      <span
                        className={cn(
                          "type-title transition-colors duration-500",
                          pathname === link.href
                            ? "text-gradient-pink"
                            : "text-fg group-hover:text-gradient-pink"
                        )}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>

            <motion.div
              className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
            >
              <div>
                <p className="type-eyebrow text-fg-subtle">New business</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="link-line mt-2 inline-block text-lg font-medium"
                >
                  {siteConfig.email}
                </a>
              </div>
              <ul className="flex gap-6">
                {siteConfig.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-line type-eyebrow !tracking-[0.18em] text-fg-muted"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
