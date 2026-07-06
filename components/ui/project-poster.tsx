import { type Project } from "@/lib/data";
import { CinematicScene } from "./cinematic-scene";
import { cn } from "@/lib/utils";

/**
 * Art-directed typographic poster for a project — the cinematic
 * stand-in for campaign photography. Client wordmark as the hero,
 * graded scene behind, accent rule as the signature.
 */
export function ProjectPoster({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <CinematicScene
        scene={project.scene}
        dim={0.3}
        className="transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)] group-hover:scale-[1.045]"
      />
      {/* signature color wash — gives each poster its own grade */}
      <div
        className="absolute inset-0 z-[5] transition-opacity duration-1000 group-hover:opacity-80"
        style={{
          background: `radial-gradient(130% 110% at 88% -10%, ${project.accent}2e 0%, transparent 55%), radial-gradient(100% 80% at 0% 100%, ${project.accent}14 0%, transparent 50%)`,
        }}
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-8">
        <div className="flex items-start justify-between">
          <span className="type-eyebrow text-white/60">{project.category}</span>
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
