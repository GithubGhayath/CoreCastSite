import type { Metadata } from "next";
import { ContactPageClient } from "./contact-page-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell CORECAST about your brand. New business, press and general enquiries.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
