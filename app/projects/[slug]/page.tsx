import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, reviews } from "@/lib/data";
import { ProjectDetailClient } from "./project-detail-client";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.client} — ${project.title}`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];
  const review = reviews.find((r) => r.project === project.slug);

  return <ProjectDetailClient project={project} next={next} review={review} />;
}
