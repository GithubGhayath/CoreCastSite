"use client";

import { scenes, type SceneId } from "@/lib/media";
import { cn } from "@/lib/utils";

/**
 * A film-graded backdrop for a section. If the Seedance clip for the
 * scene exists (lib/media.ts → video), it plays; otherwise a bespoke
 * procedural set — gradients, volumetric sweep, scene-specific
 * geometry — stands in. Always dark-graded, like projected footage.
 */
export function CinematicScene({
  scene,
  className,
  dim = 0.35,
  still = false,
}: {
  scene: SceneId;
  className?: string;
  dim?: number;
  /** Force the still frame (skip video autoplay) — e.g. project posters
   *  that play their clip only on hover. */
  still?: boolean;
}) {
  const def = scenes[scene];
  const [base, mid, glow] = def.palette;

  return (
    <div
      data-scene={scene}
      className={cn("vignette absolute inset-0 overflow-hidden", className)}
      style={{ backgroundColor: base }}
      aria-hidden
    >
      {def.video && !still ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={def.video}
          poster={def.image ?? undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : def.image ? (
        /* MVP placeholder still, dark-graded to sit under the type */
        <div
          className="animate-slow-drift absolute inset-[-4%] bg-cover bg-center"
          style={{ backgroundImage: `url("${def.image}")` }}
        />
      ) : (
        <>
          {/* atmosphere */}
          <div
            className="animate-slow-drift absolute inset-[-10%]"
            style={{
              background: `
                radial-gradient(90% 70% at 70% 20%, ${mid} 0%, transparent 60%),
                radial-gradient(70% 55% at 25% 80%, ${mid} 0%, transparent 55%),
                radial-gradient(45% 40% at 60% 55%, ${glow}30 0%, transparent 70%)
              `,
            }}
          />
          {/* volumetric sweep */}
          <div
            className="animate-light-sweep absolute inset-y-[-30%] left-1/2 w-[38%] -translate-x-1/2 blur-3xl"
            style={{
              background: `linear-gradient(to bottom, transparent, ${glow}45 35%, ${glow}20 65%, transparent)`,
            }}
          />
          <SceneGeometry scene={scene} glow={glow} mid={mid} />
        </>
      )}
      {/* grade */}
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(to bottom, ${base}00, ${base})`, opacity: dim }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: base, opacity: dim * 0.35 }} />
    </div>
  );
}

/** Abstract set pieces that give each scene its own silhouette. */
function SceneGeometry({
  scene,
  glow,
  mid,
}: {
  scene: SceneId;
  glow: string;
  mid: string;
}) {
  switch (scene) {
    case "brand-identity":
      // gallery: tall poster panels receding sideways
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-[6%]">
          {[0.9, 1.15, 0.8, 1.05, 0.85].map((h, i) => (
            <div
              key={i}
              className="w-[11%] rounded-[2px] border"
              style={{
                height: `${h * 42}%`,
                borderColor: `${glow}55`,
                background: `linear-gradient(${160 + i * 25}deg, ${glow}2e, ${mid} 80%)`,
                boxShadow: `0 0 60px ${glow}1a`,
                animation: `float-y ${9 + i * 1.7}s ease-in-out ${i * 0.8}s infinite`,
              }}
            />
          ))}
        </div>
      );
    case "content-creation":
      // studio: crossing light beams and a rig silhouette
      return (
        <div className="absolute inset-0 opacity-80">
          <div
            className="absolute -top-1/4 left-[18%] h-[150%] w-[16%] rotate-[24deg] blur-2xl"
            style={{ background: `linear-gradient(to bottom, ${glow}30, transparent 75%)` }}
          />
          <div
            className="absolute -top-1/4 right-[22%] h-[150%] w-[10%] -rotate-[18deg] blur-2xl"
            style={{ background: `linear-gradient(to bottom, ${glow}22, transparent 70%)` }}
          />
          <div
            className="absolute bottom-[18%] left-1/2 h-px w-[60%] -translate-x-1/2"
            style={{ background: `linear-gradient(to right, transparent, ${glow}40, transparent)` }}
          />
        </div>
      );
    case "reels-video":
      // vertical screens floating in the dark
      return (
        <div className="absolute inset-0 flex items-center justify-center gap-[7%]">
          {[1.1, 0.85, 1.25, 0.9].map((h, i) => (
            <div
              key={i}
              className="aspect-[9/16] rounded-lg border"
              style={{
                height: `${h * 34}%`,
                borderColor: `${glow}50`,
                background: `linear-gradient(${20 + i * 70}deg, ${mid}, ${glow}30 90%)`,
                boxShadow: `0 0 70px ${glow}22`,
                animation: `float-y ${8 + i * 2}s ease-in-out ${i * 1.1}s infinite`,
              }}
            />
          ))}
        </div>
      );
    case "photography":
      // softbox disc and its table reflection
      return (
        <div className="absolute inset-0 opacity-80">
          <div
            className="absolute left-1/2 top-[26%] size-[26vmin] -translate-x-1/2 rounded-full blur-xl"
            style={{ background: `radial-gradient(circle, ${glow}36 0%, transparent 70%)` }}
          />
          <div
            className="absolute left-1/2 top-[58%] h-px w-[46%] -translate-x-1/2"
            style={{ background: `linear-gradient(to right, transparent, ${glow}45, transparent)` }}
          />
          <div
            className="absolute left-1/2 top-[58%] h-[20%] w-[38%] -translate-x-1/2 blur-2xl"
            style={{ background: `linear-gradient(to bottom, ${glow}16, transparent)` }}
          />
        </div>
      );
    case "the-people":
      // studio windows at night, rain-blurred city bokeh
      return (
        <div className="absolute inset-0 opacity-75">
          <div className="absolute inset-x-[12%] top-[16%] grid h-[52%] grid-cols-3 gap-[3%]">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-[2px] border"
                style={{
                  borderColor: `${glow}20`,
                  background: `linear-gradient(to bottom, ${mid}, transparent)`,
                }}
              />
            ))}
          </div>
          {[
            [20, 30, 5], [34, 62, 3], [55, 40, 6], [70, 55, 4], [82, 34, 5], [45, 25, 3],
          ].map(([x, y, s], i) => (
            <div
              key={i}
              className="absolute rounded-full blur-[6px]"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${s * 4}px`,
                height: `${s * 4}px`,
                background: `${glow}55`,
                animation: `float-y ${7 + i}s ease-in-out ${i * 0.6}s infinite`,
              }}
            />
          ))}
        </div>
      );
    default:
      return null;
  }
}
