import type { Metadata } from "next";
import Link from "next/link";
import { Star } from "lucide-react";
import { reviews, projects } from "@/lib/data";
import { PageHero } from "@/components/layout/page-hero";
import { ReviewsSection } from "@/components/home/reviews-section";
import { FadeUp } from "@/components/ui/reveal";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What founders, CEOs and creative directors say about working with CORECAST.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        lines={[
          "TAKE THEIR",
          <span key="w">
            <span className="type-serif-accent text-gradient-pink">word</span> FOR IT.
          </span>,
        ]}
        intro="We could talk about ourselves all day. The people who signed the invoices tell it better."
      />

      <ReviewsSection standalone />

      <section className="px-6 py-24 md:px-12 md:py-36" aria-label="All reviews">
        <div className="grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
          {reviews.map((review, i) => {
            const project = projects.find((p) => p.slug === review.project);
            return (
              <FadeUp key={review.name} delay={(i % 2) * 0.08} className="bg-bg p-8 md:p-12">
                <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-6">
                  <p className="text-lg leading-relaxed">
                    “{review.quote}”
                  </p>
                  <footer className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm">
                    <cite className="not-italic font-semibold">{review.name}</cite>
                    <span className="text-fg-muted">
                      {review.role}, {review.company}
                    </span>
                  </footer>
                </blockquote>
                {project && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="link-line type-eyebrow mt-6 inline-block !tracking-[0.18em] text-accent"
                  >
                    {project.title}
                  </Link>
                )}
              </FadeUp>
            );
          })}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
