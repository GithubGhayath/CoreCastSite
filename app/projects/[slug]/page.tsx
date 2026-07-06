import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { projects, reviews } from "@/lib/data";
import { FadeUp, FrameReveal, MaskLines } from "@/components/ui/reveal";
import { CinematicScene } from "@/components/ui/cinematic-scene";
import { WordReveal } from "@/components/ui/word-reveal";
import { ProjectPoster } from "@/components/ui/project-poster";
import { Magnetic } from "@/components/ui/magnetic";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.client} — ${project.title}`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const review = reviews.find((r) => r.project === project.slug);

  return (
    <>
      {/* Opening frame */}
      <section className="px-6 pt-36 md:px-12 md:pt-48" aria-label={project.title}>
        <FadeUp>
          <div className="flex flex-wrap items-center gap-4">
            <span className="h-px w-12" style={{ backgroundColor: project.accent }} />
            <span className="type-eyebrow text-fg-muted">{project.category}</span>
            <span className="type-eyebrow text-fg-subtle">{project.year}</span>
          </div>
        </FadeUp>
        <MaskLines
          as="h1"
          lines={[project.client]}
          className="type-display mt-8"
          delay={0.1}
        />
        <FadeUp delay={0.25}>
          <p className="type-serif-accent mt-4 text-2xl text-accent md:text-3xl">
            {project.title}
          </p>
        </FadeUp>

        <FadeUp delay={0.35} className="mt-12 flex flex-wrap gap-x-14 gap-y-6 border-t border-line pt-8">
          <div>
            <p className="type-eyebrow text-fg-subtle">Client</p>
            <p className="mt-2 text-sm font-medium">{project.client}</p>
          </div>
          <div>
            <p className="type-eyebrow text-fg-subtle">Year</p>
            <p className="mt-2 text-sm font-medium">{project.year}</p>
          </div>
          <div>
            <p className="type-eyebrow text-fg-subtle">Services</p>
            <p className="mt-2 max-w-xs text-sm font-medium">
              {project.services.join(" · ")}
            </p>
          </div>
        </FadeUp>

        <FrameReveal className="mt-14 aspect-[21/10] rounded-md" delay={0.2}>
          <div className="relative h-full w-full">
            <CinematicScene scene={project.scene} dim={0.2} />
          </div>
        </FrameReveal>
      </section>

      {/* Story */}
      <section className="px-6 py-24 md:px-12 md:py-36" aria-label="Project story">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <FadeUp>
              <h2 className="type-eyebrow text-accent">The challenge</h2>
            </FadeUp>
          </div>
          <div className="md:col-span-8">
            <WordReveal className="type-statement !text-[clamp(1.25rem,2.4vw,2rem)]" text={project.challenge} />
          </div>

          <div className="md:col-span-4">
            <FadeUp>
              <h2 className="type-eyebrow text-accent">The approach</h2>
            </FadeUp>
          </div>
          <div className="md:col-span-8">
            <WordReveal className="type-statement !text-[clamp(1.25rem,2.4vw,2rem)]" text={project.approach} />
          </div>

          <div className="md:col-span-4">
            <FadeUp>
              <h2 className="type-eyebrow text-accent">The outcome</h2>
            </FadeUp>
          </div>
          <div className="md:col-span-8">
            <WordReveal className="type-statement !text-[clamp(1.25rem,2.4vw,2rem)]" text={project.outcome} />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-y border-line" aria-label="Results">
        <div className="grid md:grid-cols-3">
          {project.results.map((r, i) => (
            <FadeUp
              key={r.label}
              delay={i * 0.08}
              className="border-line p-10 md:p-16 md:[&:not(:last-child)]:border-r"
            >
              <p className="type-display" style={{ color: project.accent }}>
                {r.value}
              </p>
              <p className="mt-4 text-sm font-medium text-fg-muted">{r.label}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Client voice */}
      {review && (
        <section className="px-6 py-24 md:px-12 md:py-36" aria-label="Client quote">
          <FadeUp>
            <blockquote className="mx-auto max-w-4xl text-center">
              <p className="type-statement">
                <span className="type-serif-accent text-accent">“</span>
                {review.quote}
                <span className="type-serif-accent text-accent">”</span>
              </p>
              <footer className="mt-8 text-sm text-fg-muted">
                <cite className="not-italic font-semibold text-fg">{review.name}</cite>
                {" — "}
                {review.role}, {review.company}
              </footer>
            </blockquote>
          </FadeUp>
        </section>
      )}

      {/* Next project */}
      <section className="px-6 pb-24 md:px-12 md:pb-36" aria-label="Next project">
        <FadeUp>
          <div className="mb-8 flex items-center justify-between">
            <span className="type-eyebrow text-fg-muted">Next story</span>
            <Magnetic strength={0.25}>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 text-sm font-semibold"
              >
                <span className="link-line">All projects</span>
                <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} />
              </Link>
            </Magnetic>
          </div>
        </FadeUp>
        <FrameReveal className="aspect-[21/9] rounded-md">
          <Link
            href={`/projects/${next.slug}`}
            data-cursor-label="Next"
            className="group block h-full w-full"
          >
            <ProjectPoster project={next} />
          </Link>
        </FrameReveal>
      </section>
    </>
  );
}
