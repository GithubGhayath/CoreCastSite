"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { WordReveal } from "@/components/ui/word-reveal";
import { FadeUp, FrameReveal } from "@/components/ui/reveal";
import { CinematicScene } from "@/components/ui/cinematic-scene";
import { Magnetic } from "@/components/ui/magnetic";
import { useLanguage } from "@/components/providers/language-provider";

const BODY_EN =
  "CoreCast is a company under Omar Al Tayeb Holding Group, established as a specialized platform for advertising, digital marketing, and media solutions. We create innovative marketing strategies that combine creativity with modern technologies to help brands strengthen their presence, connect with their audiences, and deliver impactful messages through effective digital experiences.";
const BODY_AR =
  "كوركاست شركة تابعة لمجموعة عمر الطيب القابضة، تأسست كمنصة متخصصة في الإعلان والتسويق الرقمي والحلول الإعلامية. نبتكر استراتيجيات تسويقية مبتكرة تجمع بين الإبداع والتقنيات الحديثة لمساعدة العلامات التجارية على تعزيز حضورها، والتواصل مع جمهورها، وإيصال رسائل مؤثرة عبر تجارب رقمية فعّالة.";

export function AboutSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="px-6 py-24 md:px-12 md:py-40" aria-label="About CORECAST">
      <SectionHeading
        index="01"
        eyebrow={t("home.about.eyebrow")}
        lines={[t("home.about.line1"), t("home.about.line2"), t("home.about.line3")]}
      />

      <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12">
        <div className="md:col-span-7">
          <WordReveal
            className="type-statement"
            accentWords={locale === "ar" ? ["الإعلامية", "جمهورها", "مؤثرة"] : ["cinema", "remembered", "story"]}
            text={locale === "ar" ? BODY_AR : BODY_EN}
          />
          <FadeUp delay={0.2} className="mt-12">
            <Magnetic strength={0.25}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-sm font-semibold"
              >
                <span className="link-line">{t("common.theFullStory")}</span>
                <ArrowRight
                  className="size-4 transition-transform duration-500 group-hover:translate-x-1"
                  strokeWidth={1.75}
                />
              </Link>
            </Magnetic>
          </FadeUp>
        </div>

        <div className="md:col-span-5">
          <FrameReveal className="aspect-[4/5] rounded-sm" delay={0.15}>
            <div className="relative h-full w-full">
              <CinematicScene scene="the-people" dim={0.25} />
              <div className="absolute bottom-5 left-5 z-10">
                <p className="type-eyebrow text-white/60">{t("home.about.sceneNumber")}</p>
                <p className="mt-1 text-sm font-medium text-white/90">
                  {t("home.about.sceneCaption")}
                </p>
              </div>
            </div>
          </FrameReveal>
        </div>
      </div>
    </section>
  );
}
