import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { WordReveal } from "@/components/ui/word-reveal";
import { FadeUp, FrameReveal } from "@/components/ui/reveal";
import { CinematicScene } from "@/components/ui/cinematic-scene";
import { Magnetic } from "@/components/ui/magnetic";

export function AboutSection() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-40" aria-label="About CORECAST">
      <SectionHeading
        index="01"
        eyebrow="About CORECAST"
        lines={["Not an agency.", "A film crew", "for your brand."]}
      />

      <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12">
        <div className="md:col-span-7">
          <WordReveal
            className="type-statement"
            accentWords={["cinema", "remembered", "story"]}
            text="Most marketing is designed to be skipped. We direct brands the way cinema directs emotion — with strategy as the script, design as the set, and every campaign as a scene people don't want to leave. The businesses we work with stop being seen and start being remembered, because we never ship anything without a story worth telling."
          />
          <FadeUp delay={0.2} className="mt-12">
            <Magnetic strength={0.25}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-sm font-semibold"
              >
                <span className="link-line">The full story</span>
                <ArrowRight
                  className="size-4 transition-transform duration-500 group-hover:translate-x-1"
                  strokeWidth={1.75}
                />
              </Link>
            </Magnetic>
          </FadeUp>
        </div>

        <div className="md:col-span-5">
          <FrameReveal className="aspect-[4/5] rounded-sm" delay={0.15}>
            <div className="relative h-full w-full">
              <CinematicScene scene="the-people" dim={0.25} />
              <div className="absolute bottom-5 left-5 z-10">
                <p className="type-eyebrow text-white/60">Scene 06</p>
                <p className="mt-1 text-sm font-medium text-white/90">
                  The studio, 11:47 PM
                </p>
              </div>
            </div>
          </FrameReveal>
        </div>
      </div>
    </section>
  );
}
