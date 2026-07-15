import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeUp } from "@/components/ui/reveal";
import ContactInfo from "@/components/providers/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell CORECAST about your brand. New business, press and general enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        lines={[
          "TELL US YOUR",
          <span key="s">
            <span className="type-serif-accent text-gradient-pink">story</span> SO FAR.
          </span>,
        ]}
        intro="A paragraph is enough. We read everything, and we answer within one business day."
      />

      <section className="px-6 pb-24 md:px-12 md:pb-40" aria-label="Contact form">
        <div className="grid gap-16 border-t border-line pt-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <FadeUp>
              <p className="type-eyebrow text-fg-subtle">New business</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="link-line mt-3 inline-block text-xl font-medium"
              >
                {siteConfig.email}
              </a>
            </FadeUp>
            <FadeUp delay={0.1} className="mt-10">
              <p className="type-eyebrow text-fg-subtle">Studio</p>
              <ContactInfo/>
              {/* <p className="mt-3 text-base leading-relaxed text-fg-muted">
                {siteConfig.address}
              </p>
              <p className="mt-2 text-base text-fg-muted">{siteConfig.phone1}</p>
              <p className="mt-2 text-base text-fg-muted">{siteConfig.phone2}</p> */}
            </FadeUp>
            <FadeUp delay={0.2} className="mt-10">
              <p className="type-eyebrow text-fg-subtle">Follow</p>
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
