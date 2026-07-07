"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { Magnetic } from "@/components/ui/magnetic";
import { FadeUp } from "@/components/ui/reveal";
import { LogoWordmark } from "@/components/ui/logo";
import ContactInfo from "@/components/providers/ContactInfo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="px-6 pb-10 pt-20 md:px-12 md:pt-28">
        <FadeUp>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_auto]">
            <div>
              <p className="type-eyebrow text-fg-subtle">New business</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="link-line type-statement mt-3 inline-block"
              >
                {siteConfig.email}
              </a>
            <ContactInfo />
            </div>

            <nav aria-label="Footer">
              <p className="type-eyebrow text-fg-subtle">Menu</p>
              <ul className="mt-4 space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="link-line text-sm font-medium text-fg-muted transition-colors hover:text-fg"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/booking"
                    className="link-line text-sm font-medium text-fg-muted transition-colors hover:text-fg"
                  >
                    Booking
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <p className="type-eyebrow text-fg-subtle">Follow</p>
              <ul className="mt-4 space-y-2">
                {siteConfig.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-line text-sm font-medium text-fg-muted transition-colors hover:text-fg"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <Magnetic strength={0.4}>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className="flex size-12 items-center justify-center rounded-full border border-line transition-colors duration-500 hover:border-line-strong"
              >
                <ArrowUp className="size-4" strokeWidth={1.5} />
              </button>
            </Magnetic>
          </div>
        </FadeUp>

        <div className="mt-20 overflow-hidden md:mt-28" aria-hidden>
          <FadeUp y={80}>
            <LogoWordmark className="w-full select-none opacity-[0.92]" />
          </FadeUp>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-xs text-fg-subtle">
          <p>© {new Date().getFullYear()} CORECAST. All rights reserved.</p>
          <p>We build brands that people remember.</p>
        </div>
      </div>
    </footer>
  );
}
