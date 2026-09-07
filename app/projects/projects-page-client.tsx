"use client";

import { PageHero } from "@/components/layout/page-hero";
import { useLanguage } from "@/components/providers/language-provider";

export function ProjectsPageHero() {
  const { t } = useLanguage();
  return (
    <PageHero
      eyebrow={t("pages.projects.eyebrow")}
      lines={[
        t("pages.projects.line1"),
        <span key="l">
          {t("pages.projects.line2Prefix")}{" "}
          <span className="type-serif-accent text-gradient-pink">{t("pages.projects.accent")}</span>.
        </span>,
      ]}
      intro={t("pages.projects.intro")}
    />
  );
}
