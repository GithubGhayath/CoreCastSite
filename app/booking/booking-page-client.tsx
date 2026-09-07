"use client";

import { PageHero } from "@/components/layout/page-hero";
import { BookingFlow } from "@/components/forms/booking-flow";
import { useLanguage } from "@/components/providers/language-provider";

export function BookingPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("pages.booking.eyebrow")}
        lines={[
          t("pages.booking.line1"),
          <span key="l">
            {t("pages.booking.line2Prefix")}{" "}
            <span className="type-serif-accent text-gradient-pink">{t("pages.booking.accent")}</span>.
          </span>,
        ]}
        intro={t("pages.booking.intro")}
      />
      <section className="px-6 pb-24 md:px-12 md:pb-40" aria-label="Booking appointment">
        <BookingFlow />
      </section>
    </>
  );
}
