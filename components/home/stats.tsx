"use client";

import { stats } from "@/lib/data";
import { Counter } from "@/components/ui/counter";
import { FadeUp } from "@/components/ui/reveal";
import { useLanguage } from "@/components/providers/language-provider";
import { localizeStat } from "@/lib/i18n/localize";

export function Stats() {
  const { locale } = useLanguage();
  const localized = stats.map((s) => localizeStat(s, locale));

  return (
    <section
      className="border-y border-line"
      aria-label="Company statistics"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {localized.map((stat, i) => (
          <FadeUp
            key={stat.label}
            delay={i * 0.08}
            className="border-line p-8 [&:nth-child(odd)]:border-e md:p-14 lg:[&:not(:last-child)]:border-e"
          >
            <div className="type-display text-gradient-pink">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-4 text-sm font-medium text-fg-muted">
              {stat.label}
            </p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
