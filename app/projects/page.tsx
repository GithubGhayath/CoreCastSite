import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { ContactCta } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work across visual identity, reels & video and photography — brand stories directed by CORECAST.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        lines={[
          "EVERY BRAND",
          <span key="l">
            IS A <span className="type-serif-accent text-gradient-pink">story</span>.
          </span>,
        ]}
        intro="A selection of transformations — identities forged, films cut, photographs lit. Filter by discipline or wander the whole reel."
      />
      <Suspense>
        <ProjectsGrid />
      </Suspense>
      <ContactCta />
    </>
  );
}
