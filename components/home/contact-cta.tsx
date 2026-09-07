"use client";

import { siteConfig } from "@/lib/data";
import { CtaButton } from "@/components/ui/button";
import { FadeUp, MaskLines } from "@/components/ui/reveal";
import { useLanguage } from "@/components/providers/language-provider";

export function ContactCta() {
  const { t } = useLanguage();

  return (
    <section
      className="px-6 py-28 text-center md:px-12 md:py-44"
      aria-label="Contact CORECAST"
    >
      <FadeUp>
        <p className="type-eyebrow text-accent">{t("home.contactCta.eyebrow")}</p>
      </FadeUp>
      <MaskLines
        className="type-display mx-auto mt-8"
        delay={0.1}
        lines={[
          t("home.contactCta.line1"),
          <span key="u">
            {t("home.contactCta.line2Prefix")}{" "}
            <span className="type-serif-accent text-gradient-brand">
              {t("home.contactCta.accent")}
            </span>
          </span>,
        ]}
      />
      <FadeUp delay={0.3}>
        <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-fg-muted">
          {t("home.contactCta.body")}
        </p>
      </FadeUp>
      <FadeUp delay={0.4} className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <CtaButton href="/booking">{t("common.bookAStrategyCall")}</CtaButton>
        <CtaButton href="/contact" variant="outline">
          {t("common.contactUs")}
        </CtaButton>
      </FadeUp>
      <FadeUp delay={0.5} className="mt-10">
        <a
          href={`mailto:${siteConfig.email}`}
          className="link-line text-sm font-medium text-fg-muted"
        >
          {t("home.contactCta.orWriteTo")} {siteConfig.email}
        </a>
      </FadeUp>
    </section>
  );
}
