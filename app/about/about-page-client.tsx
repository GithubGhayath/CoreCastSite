"use client";

import type { TeamMember } from "@/lib/data";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { WordReveal } from "@/components/ui/word-reveal";
import { FadeUp, FrameReveal } from "@/components/ui/reveal";
import { CinematicScene } from "@/components/ui/cinematic-scene";
import { ContactCta } from "@/components/home/contact-cta";
import TeamMarquee from "@/components/ui/TeamMarquee";
import { useLanguage } from "@/components/providers/language-provider";
import { localizeValue, localizeTeamMember } from "@/lib/i18n/localize";

const MANIFESTO_EN =
  "Attention is the world's most valuable currency—and earning it is only the beginning. We don't chase clicks or impressions; we create experiences that people remember. Every identity we build, every frame we compose, and every campaign we launch is crafted with intention, precision, and purpose. Nothing is random. Nothing is unnecessary. Every detail exists to leave a lasting impression and turn brands into stories people never forget.";
const MANIFESTO_AR =
  "الانتباه هو العملة الأكثر قيمة في العالم — وكسبه ليس سوى البداية. نحن لا نطارد النقرات أو مرات الظهور؛ بل نصنع تجارب يتذكرها الناس. كل هوية نبنيها، وكل لقطة نُركّبها، وكل حملة نطلقها، تُصنع بقصد ودقة وهدف. لا شيء عشوائي. لا شيء زائد عن الحاجة. كل تفصيل موجود ليترك أثرًا يدوم ويحوّل العلامات التجارية إلى قصص لا ينساها الناس أبدًا.";

export function AboutPageClient({
  team,
  values,
}: {
  team: TeamMember[];
  values: readonly { title: string; body: string }[];
}) {
  const { t, locale } = useLanguage();
  const localizedValues = values.map((v) => localizeValue(v, locale));
  const localizedTeam = team.map((m) => localizeTeamMember(m, locale));

  return (
    <>
      <PageHero
        eyebrow={t("pages.about.eyebrow")}
        lines={[
          t("pages.about.line1"),
          <span key="b">
            {t("pages.about.line2Prefix")}{" "}
            <span className="type-serif-accent text-gradient-pink">{t("pages.about.accent")}</span>.
          </span>,
        ]}
        intro={t("pages.about.intro")}
        scene="the-people"
      />

      {/* Manifesto */}
      <section className="px-6 py-24 md:px-12 md:py-40" aria-label="Manifesto">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <FadeUp>
              <span className="type-eyebrow text-accent">{t("pages.about.manifestoEyebrow")}</span>
            </FadeUp>
          </div>
          <div className="md:col-span-9">
            <WordReveal
              className="type-statement"
              accentWords={locale === "ar" ? ["عشوائي", "الظهور", "ينساها"] : ["Nothing", "impressions", "forget"]}
              text={locale === "ar" ? MANIFESTO_AR : MANIFESTO_EN}
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24 md:px-12 md:py-32" aria-label="Values">
        <SectionHeading
          index="01"
          eyebrow={t("pages.about.valuesEyebrow")}
          lines={[t("pages.about.valuesLine1"), t("pages.about.valuesLine2")]}
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-line bg-line md:mt-24 md:grid-cols-2">
          {localizedValues.map((value, i) => (
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
              <p className="type-eyebrow text-white/60">{t("pages.about.studioSceneNumber")}</p>
              <p className="mt-1 text-sm font-medium text-white/90">
                {t("pages.about.studioCaption")}
              </p>
            </div>
          </div>
        </FrameReveal>
      </section>

      {/* Team */}
      <section className="px-6 py-24 md:px-12 md:py-40" aria-label="The people">
        <SectionHeading
          index="02"
          eyebrow={t("pages.about.peopleEyebrow")}
          lines={[t("pages.about.peopleLine1"), t("pages.about.peopleLine2")]}
        />
        <div className="mt-16 md:mt-24">
          <TeamMarquee team={localizedTeam} />
        </div>
      </section>

      <ContactCta />
    </>
  );
}
