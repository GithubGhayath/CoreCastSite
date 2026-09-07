import type { Metadata } from "next";
import { team, values } from "@/lib/data";
import { AboutPageClient } from "./about-page-client";

export const metadata: Metadata = {
  title: "About",
  description:
    "CORECAST is a cinematic marketing agency in Oslo — a film crew for your brand. Meet the people and the philosophy behind the work.",
};

export default function AboutPage() {
  return <AboutPageClient team={team} values={values} />;
}
