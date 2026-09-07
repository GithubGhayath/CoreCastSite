"use client";

import { useRef } from "react";
import { type Project } from "@/lib/data";
import { scenes } from "@/lib/media";
import { CinematicScene } from "./cinematic-scene";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { localizeCategory } from "@/lib/i18n/localize";

/**
 * Art-directed typographic poster for a project — the cinematic
 * stand-in for campaign photography. Client wordmark as the hero,
 * graded scene behind, accent rule as the signature. On hover the
 * scene's film clip fades up and plays; off-hover it settles back to
 * the still frame (so grids don't autoplay a dozen videos at once).
 */
export function ProjectPoster({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const clip = scenes[project.scene].video;
  const { locale } = useLanguage();

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    // preload="none" defers the fetch until the first hover
    v.play().catch(() => {});
  };

  const stop = () => {
    videoRef.current?.pause();
  };

  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      onMouseEnter={play}
      onMouseLeave={stop}
    >
      <CinematicScene
        scene={project.scene}
        dim={0.3}
        still
        className="transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)] group-hover:scale-[1.045]"
      />

      {/* film clip — loads and plays only while hovered */}
      {clip && (
        <video
          ref={videoRef}
          src={clip}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 z-[4] h-full w-full object-cover opacity-0 transition-opacity duration-700 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)] group-hover:opacity-100"
          aria-hidden
        />
      )}

      {/* signature color wash — gives each poster its own grade */}
      <div
        className="absolute inset-0 z-[5] transition-opacity duration-1000 group-hover:opacity-80"
        style={{
          background: `radial-gradient(130% 110% at 88% -10%, ${project.accent}2e 0%, transparent 55%), radial-gradient(100% 80% at 0% 100%, ${project.accent}14 0%, transparent 50%)`,
        }}
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-8">
        <div className="flex items-start justify-between">
          <span className="type-eyebrow text-white/60">{localizeCategory(project.category, locale)}</span>
          <span className="type-eyebrow text-white/60">{project.year}</span>
        </div>
        <div>
          <div
            className="h-[3px] w-10 transition-all duration-700 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)] group-hover:w-20"
            style={{ backgroundColor: project.accent }}
          />
          <p
            className="mt-4 break-words text-[clamp(1.8rem,4.2vw,3.4rem)] uppercase leading-[0.95] text-white"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "0.01em" }}
          >
            {project.client}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            {project.title}
          </p>
        </div>
      </div>
    </div>
  );
}
