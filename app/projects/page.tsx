import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { ContactCta } from "@/components/home/contact-cta";
import { ProjectsPageHero } from "./projects-page-client";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work across visual identity, reels & video and photography — brand stories directed by CORECAST.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsPageHero />
      <Suspense>
        <ProjectsGrid />
      </Suspense>
      <ContactCta />
    </>
  );
}
