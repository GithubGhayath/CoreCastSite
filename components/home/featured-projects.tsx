import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, projectCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectPoster } from "@/components/ui/project-poster";
import { FadeUp, FrameReveal } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="px-6 py-24 md:px-12 md:py-40" aria-label="Featured projects">
      <div className="flex flex-wrap items-end justify-between gap-10">
        <SectionHeading
          index="03"
          eyebrow="Selected work"
          lines={["Stories we've", "already told."]}
        />
        <FadeUp delay={0.2}>
          <ul className="flex flex-wrap gap-3">
            {projectCategories.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/projects?category=${encodeURIComponent(cat)}`}
                  className="inline-block rounded-full border border-line px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-500 hover:border-line-strong hover:bg-card"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>

      <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-2 md:gap-8">
        {featured.map((project, i) => (
          <FrameReveal
            key={project.slug}
            delay={i * 0.12}
            className={
              i === 0
                ? "aspect-[16/10] rounded-md md:col-span-2"
                : "aspect-[4/5] rounded-md md:aspect-[16/12]"
            }
          >
            <Link
              href={`/projects/${project.slug}`}
              data-cursor-label="View"
              className="group block h-full w-full"
            >
              <ProjectPoster project={project} />
            </Link>
          </FrameReveal>
        ))}
      </div>

      <FadeUp className="mt-16 flex justify-center">
        <Magnetic strength={0.25}>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm font-semibold"
          >
            <span className="link-line">All projects</span>
            <ArrowRight
              className="size-4 transition-transform duration-500 group-hover:translate-x-1"
              strokeWidth={1.75}
            />
          </Link>
        </Magnetic>
      </FadeUp>
    </section>
  );
}
