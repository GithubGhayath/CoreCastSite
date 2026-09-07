"use client";

import type { Opening } from "@/lib/data";
import { PageHero } from "@/components/layout/page-hero";
import { FadeUp } from "@/components/ui/reveal";
import { CareersForm } from "@/components/forms/careers-form";
import { useLanguage } from "@/components/providers/language-provider";
import { localizeOpening } from "@/lib/i18n/localize";

export function CareersPageClient({ openings }: { openings: Opening[] }) {
  const { t, locale } = useLanguage();
  const localized = openings.map((o) => localizeOpening(o, locale));

  return (
    <>
      <PageHero
        eyebrow={t("pages.careers.eyebrow")}
        lines={[
          t("pages.careers.line1"),
          <span key="w">
            <span className="type-serif-accent text-gradient-pink">{t("pages.careers.accent")}</span>{" "}
            {t("pages.careers.line2Suffix")}
          </span>,
        ]}
        intro={t("pages.careers.intro")}
      />

      <section className="px-6 pb-24 md:px-12" aria-label="Open positions">
        <FadeUp>
          <h2 className="type-eyebrow border-t border-line pt-10 text-fg-muted">
            {t("pages.careers.openPositions")} — {openings.length}
          </h2>
        </FadeUp>
        <div className="mt-8">
          {localized.map((role, i) => (
            <FadeUp key={role.title} delay={i * 0.06}>
              <a
                href="#apply"
                data-cursor-label={t("forms.careers.openApplication")}
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
                {t("pages.careers.applyHeading")}<span className="text-accent">.</span>
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-muted">
                {t("pages.careers.applyBody")}
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
