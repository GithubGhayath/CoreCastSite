import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { BookingFlow } from "@/components/forms/booking-flow";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Book a 30-minute strategy call with CORECAST. Pick a discipline, a budget and a slot — we'll bring the ideas.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking"
        lines={[
          "THIRTY MINUTES.",
          <span key="l">
            ZERO <span className="type-serif-accent text-gradient-pink">obligation</span>.
          </span>,
        ]}
        intro="Pick a discipline, a budget and a slot. You'll leave the call with at least three ideas you can steal even if you never hire us."
      />
      <section className="px-6 pb-24 md:px-12 md:pb-40" aria-label="Booking appointment">
        <BookingFlow />
      </section>
    </>
  );
}
