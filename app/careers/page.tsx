import type { Metadata } from "next";
import { openings } from "@/lib/data";
import { CareersPageClient } from "./careers-page-client";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join CORECAST — designers, directors, producers and growth minds building cinematic brands in Oslo and across Europe.",
};

export default function CareersPage() {
  return <CareersPageClient openings={openings} />;
}
