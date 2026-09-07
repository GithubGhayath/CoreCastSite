"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectCategories, type ProjectCategory } from "@/lib/data";
import { ProjectPoster } from "@/components/ui/project-poster";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import { localizeCategory, localizeProject } from "@/lib/i18n/localize";

const EASE = [0.65, 0.05, 0, 1] as const;
type Filter = ProjectCategory | "All";

export function ProjectsGrid() {
  const { t, locale } = useLanguage();
  const params = useSearchParams();
  const initial = params.get("category");
  const [filter, setFilter] = useState<Filter>(
    projectCategories.includes(initial as ProjectCategory)
      ? (initial as ProjectCategory)
      : "All"
  );

  const visible = useMemo(
    () =>
      projects
        .filter((p) => filter === "All" || p.category === filter)
        .map((p) => localizeProject(p, locale)),
    [filter, locale]
  );

  return (
    <section className="px-6 pb-24 md:px-12 md:pb-40" aria-label="All projects">
      <div className="flex flex-wrap items-center gap-3 border-t border-line pt-10">
        {(["All", ...projectCategories] as Filter[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={cn(
              "rounded-full border px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-500",
              filter === cat
                ? "border-accent bg-accent text-fg-inverse"
                : "border-line text-fg-muted hover:border-line-strong hover:text-fg"
            )}
          >
            {cat === "All" ? t("common.all") : localizeCategory(cat, locale)}
            <span className="ml-2 opacity-60">
              {cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length}
            </span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.04 }}
              className="aspect-[16/11] overflow-hidden rounded-md"
            >
              <Link
                href={`/projects/${project.slug}`}
                data-cursor-label={t("common.view")}
                className="group block h-full w-full"
              >
                <ProjectPoster project={project} />
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
