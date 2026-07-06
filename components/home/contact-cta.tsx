import { siteConfig } from "@/lib/data";
import { CtaButton } from "@/components/ui/button";
import { FadeUp, MaskLines } from "@/components/ui/reveal";

export function ContactCta() {
  return (
    <section
      className="px-6 py-28 text-center md:px-12 md:py-44"
      aria-label="Contact CORECAST"
    >
      <FadeUp>
        <p className="type-eyebrow text-accent">Your story starts here</p>
      </FadeUp>
      <MaskLines
        className="type-display mx-auto mt-8"
        delay={0.1}
        lines={[
          "LET'S MAKE",
          <span key="u">
            SOMETHING{" "}
            <span className="type-serif-accent text-gradient-brand">
              unforgettable
            </span>
          </span>,
        ]}
      />
      <FadeUp delay={0.3}>
        <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-fg-muted">
          One call. Thirty minutes. We&apos;ll tell you exactly how we&apos;d
          make your brand impossible to ignore.
        </p>
      </FadeUp>
      <FadeUp delay={0.4} className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <CtaButton href="/booking">Book a Strategy Call</CtaButton>
        <CtaButton href="/contact" variant="outline">
          Contact Us
        </CtaButton>
      </FadeUp>
      <FadeUp delay={0.5} className="mt-10">
        <a
          href={`mailto:${siteConfig.email}`}
          className="link-line text-sm font-medium text-fg-muted"
        >
          or write to {siteConfig.email}
        </a>
      </FadeUp>
    </section>
  );
}
