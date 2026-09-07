import type { Metadata } from "next";
import { reviews, projects } from "@/lib/data";
import { ReviewsPageClient } from "./reviews-page-client";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "What founders, CEOs and creative directors say about working with CORECAST.",
};

export default function ReviewsPage() {
  return <ReviewsPageClient reviews={reviews} projects={projects} />;
}
