"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project, Review } from "@/lib/data";
import { FadeUp, FrameReveal, MaskLines } from "@/components/ui/reveal";
import { CinematicScene } from "@/components/ui/cinematic-scene";
import { WordReveal } from "@/components/ui/word-reveal";
import { ProjectPoster } from "@/components/ui/project-poster";
import { Magnetic } from "@/components/ui/magnetic";
import { useLanguage } from "@/components/providers/language-provider";
import { localizeProject, localizeReview, localizeCategory } from "@/lib/i18n/localize";

export function ProjectDetailClient({
  project: rawProject,
  next: rawNext,
  review: rawReview,
}: {
  project: Project;
  next: Project;
  review: Review | undefined;
}) {
  const { t, locale } = useLanguage();
  const project = localizeProject(rawProject, locale);
  const next = localizeProject(rawNext, locale);
  const review = rawReview ? localizeReview(rawReview, locale) : undefined;

  return (
    <>
      {/* Opening frame */}
      <section className="px-6 pt-36 md:px-12 md:pt-48" aria-label={project.title}>
        <FadeUp>
          <div className="flex flex-wrap items-center gap-4">
            <span className="h-px w-12" style={{ backgroundColor: project.accent }} />
            <span className="type-eyebrow text-fg-muted">{localizeCategory(project.category, locale)}</span>
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
            <p className="type-eyebrow text-fg-subtle">{t("pages.projectDetail.client")}</p>
            <p className="mt-2 text-sm font-medium">{project.client}</p>
          </div>
          <div>
            <p className="type-eyebrow text-fg-subtle">{t("pages.projectDetail.year")}</p>
            <p className="mt-2 text-sm font-medium">{project.year}</p>
          </div>
          <div>
            <p className="type-eyebrow text-fg-subtle">{t("pages.projectDetail.servicesLabel")}</p>
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
              <h2 className="type-eyebrow text-accent">{t("pages.projectDetail.challenge")}</h2>
            </FadeUp>
          </div>
          <div className="md:col-span-8">
            <WordReveal className="type-statement !text-[clamp(1.25rem,2.4vw,2rem)]" text={project.challenge} />
          </div>

          <div className="md:col-span-4">
            <FadeUp>
              <h2 className="type-eyebrow text-accent">{t("pages.projectDetail.approach")}</h2>
            </FadeUp>
          </div>
          <div className="md:col-span-8">
            <WordReveal className="type-statement !text-[clamp(1.25rem,2.4vw,2rem)]" text={project.approach} />
          </div>

          <div className="md:col-span-4">
            <FadeUp>
              <h2 className="type-eyebrow text-accent">{t("pages.projectDetail.outcome")}</h2>
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
            <span className="type-eyebrow text-fg-muted">{t("pages.projectDetail.nextStory")}</span>
            <Magnetic strength={0.25}>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 text-sm font-semibold"
              >
                <span className="link-line">{t("common.allProjects")}</span>
                <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} />
              </Link>
            </Magnetic>
          </div>
        </FadeUp>
        <FrameReveal className="aspect-[21/9] rounded-md">
          <Link
            href={`/projects/${next.slug}`}
            data-cursor-label={t("common.next")}
            className="group block h-full w-full"
          >
            <ProjectPoster project={next} />
          </Link>
        </FrameReveal>
      </section>
    </>
  );
}
