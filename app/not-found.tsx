import Link from "next/link";
import { CtaButton } from "@/components/ui/button";
import { MaskLines, FadeUp } from "@/components/ui/reveal";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <FadeUp>
        <p className="type-eyebrow text-accent">Scene missing</p>
      </FadeUp>
      <MaskLines
        as="h1"
        lines={["404", "LEFT ON THE", "CUTTING ROOM FLOOR."]}
        className="type-display mt-6"
        delay={0.1}
      />
      <FadeUp delay={0.35}>
        <p className="mx-auto mt-8 max-w-md text-fg-muted">
          This page didn&apos;t make the final cut. The story continues from
          the beginning.
        </p>
      </FadeUp>
      <FadeUp delay={0.45} className="mt-10">
        <CtaButton href="/">Back to the opening scene</CtaButton>
      </FadeUp>
      <FadeUp delay={0.55} className="mt-6">
        <Link href="/projects" className="link-line text-sm font-medium text-fg-muted">
          or browse the work
        </Link>
      </FadeUp>
    </section>
  );
}
