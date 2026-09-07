"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { Magnetic } from "@/components/ui/magnetic";
import { FadeUp } from "@/components/ui/reveal";
import { LogoWordmark } from "@/components/ui/logo";
import ContactInfo from "@/components/providers/ContactInfo";
import { useLanguage } from "@/components/providers/language-provider";

const navKeyByHref: Record<string, string> = {
  "/": "nav.home",
  "/about": "nav.about",
  "/services": "nav.services",
  "/projects": "nav.projects",
  "/reviews": "nav.reviews",
  "/careers": "nav.careers",
  "/contact": "nav.contact",
};

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="px-6 pb-10 pt-20 md:px-12 md:pt-28">
        <FadeUp>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_auto]">
            <div>
              <p className="type-eyebrow text-fg-subtle">{t("nav.newBusiness")}</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="link-line type-statement mt-3 inline-block"
              >
                {siteConfig.email}
              </a>
            <ContactInfo />
            </div>

            <nav aria-label="Footer">
              <p className="type-eyebrow text-fg-subtle">{t("nav.menu")}</p>
              <ul className="mt-4 space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="link-line text-sm font-medium text-fg-muted transition-colors hover:text-fg"
                    >
                      {t(navKeyByHref[l.href] ?? l.label)}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/booking"
                    className="link-line text-sm font-medium text-fg-muted transition-colors hover:text-fg"
                  >
                    {t("nav.booking")}
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <p className="type-eyebrow text-fg-subtle">{t("nav.follow")}</p>
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

            
          </div>
        </FadeUp>

        <div className="mt-20 overflow-hidden md:mt-28" aria-hidden>
          <FadeUp y={80}>
            <LogoWordmark className="w-full select-none opacity-[0.92]" />
          </FadeUp>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-xs text-fg-subtle">
          <p>© {new Date().getFullYear()} CORECAST. {t("footer.rights")}</p>
          <p>{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
