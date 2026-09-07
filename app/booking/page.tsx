import type { Metadata } from "next";
import { BookingPageClient } from "./booking-page-client";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description:
    "Book a 30-minute strategy call with CORECAST. Pick a discipline, a budget and a slot — we'll bring the ideas.",
};

export default function BookingPage() {
  return <BookingPageClient />;
}
