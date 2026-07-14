import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { PageHero } from "@/components/layout/page-hero";
import { FadeUp, FrameReveal, MaskLines } from "@/components/ui/reveal";
import { CinematicScene } from "@/components/ui/cinematic-scene";
import { Magnetic } from "@/components/ui/magnetic";
import { ContactCta } from "@/components/home/contact-cta";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand identity, content creation, reels & video, photography and performance marketing — directed like cinema, measured like media.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        lines={[
          "EVERYTHING",
          <span key="l">
            A BRAND <span className="type-serif-accent text-gradient-pink">needs</span>
          </span>,
          "TO BE SEEN.",
        ]}
        intro="Five disciplines, one director's eye. Engage them separately or as a single production — either way, the story stays coherent."
      />

      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className="scroll-mt-28 border-t border-line px-6 py-24 md:px-12 md:py-36"
          aria-label={service.title}
        >
          <div
            className={cn(
              "grid items-start gap-12 lg:grid-cols-12",
              i % 2 === 1 && "lg:[&>*:first-child]:order-2"
            )}
          >
            <div className="lg:col-span-5">
              <FrameReveal className="aspect-[4/3] rounded-md">
                <div className="relative h-full w-full">
                  <CinematicScene scene={service.scene} dim={0.25} />
                  <span className="type-eyebrow absolute bottom-5 left-5 z-10 text-white/60">
                    Scene {service.index}
                  </span>
                </div>
              </FrameReveal>
            </div>

            <div className="lg:col-span-7">
              <FadeUp>
                <span className="type-eyebrow text-accent">{service.index}</span>
              </FadeUp>
              <MaskLines
                lines={[service.title]}
                className="type-display mt-4 !text-[clamp(2.2rem,5.5vw,5rem)]"
                delay={0.08}
              />
              <FadeUp delay={0.2}>
                <p className="type-serif-accent mt-6 text-2xl text-accent">
                  {service.tagline}
                </p>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted">
                  {service.description}
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <ul className="mt-10 flex flex-wrap gap-3">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="rounded-full border border-line px-4 py-2 text-xs font-medium text-fg-muted"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </FadeUp>
              <FadeUp delay={0.4} className="mt-10">
                <Magnetic strength={0.25}>
                  <Link
                    href="/booking"
                    className="group inline-flex items-center gap-3 text-sm font-semibold"
                  >
                    <span className="link-line">Start a {service.title} project</span>
                    <ArrowUpRight
                      className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                    />
                  </Link>
                </Magnetic>
              </FadeUp>
            </div>
          </div>
        </section>
      ))}

      <ContactCta />
    </>
  );
}
