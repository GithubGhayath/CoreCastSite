"use client";

import Link from "next/link";
import { CtaButton } from "@/components/ui/button";
import { MaskLines, FadeUp } from "@/components/ui/reveal";
import { useLanguage } from "@/components/providers/language-provider";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <FadeUp>
        <p className="type-eyebrow text-accent">{t("pages.notFound.eyebrow")}</p>
      </FadeUp>
      <MaskLines
        as="h1"
        lines={[t("pages.notFound.line1"), t("pages.notFound.line2"), t("pages.notFound.line3")]}
        className="type-display mt-6"
        delay={0.1}
      />
      <FadeUp delay={0.35}>
        <p className="mx-auto mt-8 max-w-md text-fg-muted">
          {t("pages.notFound.body")}
        </p>
      </FadeUp>
      <FadeUp delay={0.45} className="mt-10">
        <CtaButton href="/">{t("pages.notFound.backHome")}</CtaButton>
      </FadeUp>
      <FadeUp delay={0.55} className="mt-6">
        <Link href="/projects" className="link-line text-sm font-medium text-fg-muted">
          {t("pages.notFound.browseWork")}
        </Link>
      </FadeUp>
    </section>
  );
}
