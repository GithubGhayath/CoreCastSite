import type { Metadata } from "next";
import { openings } from "@/lib/data";
import { PageHero } from "@/components/layout/page-hero";
import { FadeUp } from "@/components/ui/reveal";
import { CareersForm } from "@/components/forms/careers-form";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join CORECAST — designers, directors, producers and growth minds building cinematic brands in Oslo and across Europe.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        lines={[
          "DO THE BEST",
          <span key="w">
            <span className="type-serif-accent text-accent">work</span> OF YOUR LIFE.
          </span>,
        ]}
        intro="Small crew, big productions, zero busywork. If you obsess over craft the way we do, there's a desk (and a very good espresso machine) waiting."
      />

      <section className="px-6 pb-24 md:px-12" aria-label="Open positions">
        <FadeUp>
          <h2 className="type-eyebrow border-t border-line pt-10 text-fg-muted">
            Open positions — {openings.length}
          </h2>
        </FadeUp>
        <div className="mt-8">
          {openings.map((role, i) => (
            <FadeUp key={role.title} delay={i * 0.06}>
              <a
                href="#apply"
                data-cursor-label="Apply"
                className="group grid gap-2 border-b border-line py-8 transition-colors duration-500 hover:bg-card md:grid-cols-[1.4fr_1fr_1fr] md:items-baseline md:gap-8"
              >
                <h3 className="type-title !text-[clamp(1.4rem,3vw,2.4rem)] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)] group-hover:translate-x-3">
                  {role.title}
                </h3>
                <p className="text-sm text-fg-muted">
                  {role.team} · {role.type}
                  <br />
                  {role.location}
                </p>
                <p className="text-sm leading-relaxed text-fg-muted">{role.blurb}</p>
              </a>
            </FadeUp>
          ))}
        </div>
      </section>

      <section id="apply" className="scroll-mt-28 px-6 pb-24 md:px-12 md:pb-40" aria-label="Apply">
        <div className="grid gap-16 border-t border-line pt-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <FadeUp>
              <h2 className="type-title !text-[clamp(1.6rem,3vw,2.6rem)]">
                Apply<span className="text-accent">.</span>
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-muted">
                No cover-letter theatre. Send the essentials, attach your CV,
                and link the work you&apos;re proudest of. If it resonates,
                you&apos;ll hear from us within a week.
              </p>
            </FadeUp>
          </div>
          <div className="lg:col-span-8">
            <CareersForm />
          </div>
        </div>
      </section>
    </>
  );
}
