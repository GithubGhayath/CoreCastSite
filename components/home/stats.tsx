import { stats } from "@/lib/data";
import { Counter } from "@/components/ui/counter";
import { FadeUp } from "@/components/ui/reveal";

export function Stats() {
  return (
    <section
      className="border-y border-line"
      aria-label="Company statistics"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeUp
            key={stat.label}
            delay={i * 0.08}
            className="border-line p-8 [&:nth-child(odd)]:border-r md:p-14 lg:[&:not(:last-child)]:border-r"
          >
            <div className="type-display text-accent">
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
