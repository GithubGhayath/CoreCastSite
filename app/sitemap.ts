import type { MetadataRoute } from "next";
import { projects, siteConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/reviews",
    "/contact",
    "/booking",
    "/careers",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectPages = projects.map((p) => ({
    url: `${siteConfig.url}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
