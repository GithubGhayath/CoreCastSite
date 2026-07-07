import type { Metadata } from "next";
import { team, values } from "@/lib/data";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { WordReveal } from "@/components/ui/word-reveal";
import { FadeUp, FrameReveal } from "@/components/ui/reveal";
import { CinematicScene } from "@/components/ui/cinematic-scene";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "CORECAST is a cinematic marketing agency in Oslo — a film crew for your brand. Meet the people and the philosophy behind the work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CORECAST"
        lines={[
          "WE DIRECT",
          <span key="b">
            BRANDS LIKE <span className="type-serif-accent text-accent">films</span>.
          </span>,
        ]}
        intro="Founded by a film director and a strategist, CORECAST exists because most marketing is made to be skipped — and we refuse to make anything skippable."
        scene="the-people"
      />

      {/* Manifesto */}
      <section className="px-6 py-24 md:px-12 md:py-40" aria-label="Manifesto">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <FadeUp>
              <span className="type-eyebrow text-accent">The manifesto</span>
            </FadeUp>
          </div>
          <div className="md:col-span-9">
            <WordReveal
              className="type-statement"
              accentWords={["Nothing", "impressions", "forget"]}
              text="Attention is the world's most valuable currency—and earning it is only the beginning. We don't chase clicks or impressions; we create experiences that people remember. Every identity we build, every frame we compose, and every campaign we launch is crafted with intention, precision, and purpose. Nothing is random. Nothing is unnecessary. Every detail exists to leave a lasting impression and turn brands into stories people never forget."
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24 md:px-12 md:py-32" aria-label="Values">
        <SectionHeading
          index="01"
          eyebrow="What we refuse to compromise"
          lines={["Four rules", "we shoot by."]}
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-line bg-line md:mt-24 md:grid-cols-2">
          {values.map((value, i) => (
            <FadeUp key={value.title} delay={i * 0.08} className="bg-bg p-8 md:p-14">
              <span className="type-eyebrow text-fg-subtle">0{i + 1}</span>
              <h3 className="type-title mt-6 !text-[clamp(1.4rem,2.6vw,2.2rem)]">
                {value.title}
              </h3>
              <p className="mt-5 max-w-md leading-relaxed text-fg-muted">
                {value.body}
              </p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Studio scene */}
      <section className="px-6 py-12 md:px-12" aria-hidden>
        <FrameReveal className="aspect-[21/9] rounded-md">
          <div className="relative h-full w-full">
            <CinematicScene scene="content-creation" dim={0.25} />
            <div className="absolute bottom-6 left-6 z-10">
              <p className="type-eyebrow text-white/60">Scene 03</p>
              <p className="mt-1 text-sm font-medium text-white/90">
                Stage B, commercial shoot — day 2
              </p>
            </div>
          </div>
        </FrameReveal>
      </section>

      {/* Team */}
      <section className="px-6 py-24 md:px-12 md:py-40" aria-label="The people">
        <SectionHeading
          index="02"
          eyebrow="The people"
          lines={["The crew", "behind the cut."]}
        />
        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 md:mt-24 lg:grid-cols-3">
          {team.map((member, i) => (
            <FadeUp key={member.name} delay={(i % 3) * 0.08}>
              <div className="group border-t border-line pt-6 transition-colors duration-500 hover:border-accent">
                <p className="type-eyebrow text-fg-subtle">0{i + 1}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {member.name}
                </h3>
                <p className="type-serif-accent mt-1 text-lg text-accent">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                  {member.bio}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
