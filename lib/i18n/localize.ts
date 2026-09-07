import type { Locale } from "./config";
import type { Service, Project, Review, TeamMember, Client, ProjectCategory } from "@/lib/data";
import type { Opening } from "@/lib/data";
import {
  serviceContent,
  projectContent,
  reviewContent,
  teamContent,
  valueContent,
  statContent,
  clientContent,
  openingContent,
  projectCategoryContent,
  bookingServiceContent,
} from "./content";

export function localizeService(service: Service, locale: Locale): Service {
  if (locale === "en") return service;
  const o = serviceContent[service.slug];
  return o ? { ...service, ...o } : service;
}

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "en") return project;
  const o = projectContent[project.slug];
  if (!o) return project;
  return {
    ...project,
    title: o.title,
    summary: o.summary,
    challenge: o.challenge,
    approach: o.approach,
    outcome: o.outcome,
    services: o.services,
    results: project.results.map((r, i) => ({ ...r, label: o.resultLabels[i] ?? r.label })),
  };
}

export function localizeReview(review: Review, locale: Locale): Review {
  if (locale === "en") return review;
  const o = reviewContent[review.name];
  return o ? { ...review, quote: o.quote, role: o.role } : review;
}

export function localizeTeamMember(member: TeamMember, locale: Locale): TeamMember {
  if (locale === "en") return member;
  const o = teamContent[member.name];
  return o ? { ...member, role: o.role, bio: o.bio } : member;
}

export function localizeValue<T extends { title: string; body: string }>(
  value: T,
  locale: Locale
): T {
  if (locale === "en") return value;
  const o = valueContent[value.title];
  return o ? { ...value, title: o.title, body: o.body } : value;
}

export function localizeStat<T extends { label: string; suffix: string }>(
  stat: T,
  locale: Locale
): T {
  if (locale === "en") return stat;
  const o = statContent[stat.label];
  return o ? { ...stat, label: o.label, suffix: o.suffix ?? stat.suffix } : stat;
}

export function localizeClient(client: Client, locale: Locale): Client {
  if (locale === "en") return client;
  const o = clientContent[client.name];
  return o
    ? { ...client, description: o.description, contactInfo: o.contactInfo ?? client.contactInfo }
    : client;
}

export function localizeOpening(opening: Opening, locale: Locale): Opening {
  if (locale === "en") return opening;
  const o = openingContent[opening.title];
  return o ? { ...opening, ...o } : opening;
}

export function localizeCategory(category: ProjectCategory, locale: Locale): string {
  if (locale === "en") return category;
  return projectCategoryContent[category] ?? category;
}

export function localizeBookingService(service: string, locale: Locale): string {
  if (locale === "en") return service;
  return bookingServiceContent[service] ?? service;
}
