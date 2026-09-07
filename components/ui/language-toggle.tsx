"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { Magnetic } from "./magnetic";

const EASE = [0.65, 0.05, 0, 1] as const;

/**
 * Language toggle — same circular chrome as ThemeToggle so the pair
 * reads as one control group in the header. Shows the active locale
 * ("AR" / "EN") with a globe glyph that turns as the label swaps.
 */
export function LanguageToggle() {
  const { locale, toggle, t } = useLanguage();

  return (
    <Magnetic strength={0.4}>
      <button
        onClick={toggle}
        aria-label={t("languageToggle.switchTo" + (locale === "ar" ? "English" : "Arabic"))}
        className="group relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-line transition-colors duration-500 hover:border-accent"
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.4 }}
        />
        <Globe
          className="absolute size-4 text-fg-subtle opacity-0 transition-all duration-500 group-hover:rotate-180 group-hover:text-accent group-hover:opacity-25"
          strokeWidth={1.5}
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={locale}
            className="relative text-[11px] font-bold tracking-[0.05em]"
            initial={{ y: 10, opacity: 0, rotateX: 45 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: -10, opacity: 0, rotateX: -45 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {locale === "ar" ? "AR" : "EN"}
          </motion.span>
        </AnimatePresence>
      </button>
    </Magnetic>
  );
}
