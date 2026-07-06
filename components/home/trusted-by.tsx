import { clients } from "@/lib/data";
import { Marquee } from "@/components/ui/marquee";
import { FadeUp } from "@/components/ui/reveal";

export function TrustedBy() {
  return (
    <section className="border-b border-line py-16 md:py-24" aria-label="Trusted by">
      <FadeUp>
        <p className="type-eyebrow px-6 text-center text-fg-subtle md:px-12">
          Trusted by ambitious brands worldwide
        </p>
      </FadeUp>
      <FadeUp delay={0.15}>
        <Marquee className="mt-10" duration={44}>
          {clients.map((client) => (
            <span
              key={client}
              className="mx-8 whitespace-nowrap text-2xl font-semibold tracking-tight text-fg-muted transition-colors duration-500 hover:text-fg md:mx-14 md:text-3xl"
              style={
                client === client.toUpperCase()
                  ? { fontFamily: "var(--font-display)", fontWeight: 400, letterSpacing: "0.04em" }
                  : { fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }
              }
            >
              {client}
            </span>
          ))}
        </Marquee>
      </FadeUp>
    </section>
  );
}
