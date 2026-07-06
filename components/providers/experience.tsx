"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Preloader } from "@/components/ui/preloader";
import { CustomCursor } from "@/components/ui/custom-cursor";

gsap.registerPlugin(ScrollTrigger);

const ExperienceContext = createContext<{ ready: boolean }>({ ready: false });

export function useExperience() {
  return useContext(ExperienceContext);
}

/**
 * Wires the cinematic runtime: Lenis smooth scroll synced to GSAP's
 * ticker + ScrollTrigger, the preloader curtain, and the custom cursor.
 */
export function Experience({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    lenis.stop();

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (ready) {
      lenisRef.current?.start();
      ScrollTrigger.refresh();
    }
  }, [ready]);

  return (
    <ExperienceContext.Provider value={{ ready }}>
      <Preloader onComplete={() => setReady(true)} />
      <CustomCursor />
      {children}
    </ExperienceContext.Provider>
  );
}
