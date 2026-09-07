"use client";

import { siteConfig } from "@/lib/data";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeUp } from "@/components/ui/reveal";
import ContactInfo from "@/components/providers/ContactInfo";
import { useLanguage } from "@/components/providers/language-provider";

export function ContactPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("pages.contact.eyebrow")}
        lines={[
          t("pages.contact.line1"),
          <span key="s">
            <span className="type-serif-accent text-gradient-pink">{t("pages.contact.accent")}</span>{" "}
            {t("pages.contact.line2Suffix")}
          </span>,
        ]}
        intro={t("pages.contact.intro")}
      />

      <section className="px-6 pb-24 md:px-12 md:pb-40" aria-label="Contact form">
        <div className="grid gap-16 border-t border-line pt-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <FadeUp>
              <p className="type-eyebrow text-fg-subtle">{t("pages.contact.newBusiness")}</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="link-line mt-3 inline-block text-xl font-medium"
              >
                {siteConfig.email}
              </a>
            </FadeUp>
            <FadeUp delay={0.1} className="mt-10">
              <p className="type-eyebrow text-fg-subtle">{t("pages.contact.studio")}</p>
              <ContactInfo/>
            </FadeUp>
            <FadeUp delay={0.2} className="mt-10">
              <p className="type-eyebrow text-fg-subtle">{t("pages.contact.follow")}</p>
              <ul className="mt-3 space-y-1.5">
                {siteConfig.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-line text-sm font-medium text-fg-muted hover:text-fg"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
