import { type ReactNode } from "react";
import { FadeUp, MaskLines } from "@/components/ui/reveal";
import { CinematicScene } from "@/components/ui/cinematic-scene";
import type { SceneId } from "@/lib/media";

/**
 * Opening frame for inner pages: eyebrow, editorial headline, and an
 * optional cinematic scene strip below.
 */
export function PageHero({
  eyebrow,
  lines,
  intro,
  scene,
  children,
}: {
  eyebrow: string;
  lines: ReactNode[];
  intro?: string;
  scene?: SceneId;
  children?: ReactNode;
}) {
  return (
    <section className="px-6 pb-16 pt-36 md:px-12 md:pb-24 md:pt-48">
      <FadeUp>
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-accent" />
          <span className="type-eyebrow text-fg-muted">{eyebrow}</span>
        </div>
      </FadeUp>
      <MaskLines as="h1" lines={lines} className="type-display mt-8" delay={0.1} />
      {intro && (
        <FadeUp delay={0.35}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-fg-muted">
            {intro}
          </p>
        </FadeUp>
      )}
      {children}
      {scene && (
        <FadeUp delay={0.4} className="mt-16 md:mt-24">
          <div className="relative aspect-[21/9] overflow-hidden rounded-md">
            <CinematicScene scene={scene} dim={0.25} />
          </div>
        </FadeUp>
      )}
    </section>
  );
}
