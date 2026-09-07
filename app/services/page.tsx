import type { Metadata } from "next";
import { services } from "@/lib/data";
import { ServicesPageClient } from "./services-page-client";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand identity, content creation, reels & video, photography and performance marketing — directed like cinema, measured like media.",
};

export default function ServicesPage() {
  return <ServicesPageClient services={services} />;
}
