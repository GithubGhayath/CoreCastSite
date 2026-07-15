"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useExperience } from "@/components/providers/experience";

export function BackToTop() {
  const { lenis } = useExperience();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          aria-label="Back to top"
          onClick={() =>
            lenis?.scrollTo(0, {
              duration: 1.5,
            })
          }
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.08,
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            fixed
            bottom-6
            right-6
            z-50
            flex
            size-12
            items-center
            justify-center
            rounded-full
            border
            border-line
            bg-background
            shadow-lg
          "
        >
          <ArrowUp className="size-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}