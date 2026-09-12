"use client";

import { clients, Client } from "@/lib/data";
import { Marquee } from "@/components/ui/marquee";
import { FadeUp } from "@/components/ui/reveal";
import ClientDialog from "@/components/ui/ClientDialog";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import { localizeClient } from "@/lib/i18n/localize";

export function TrustedBy() {
  const { t, locale } = useLanguage();
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [paused, setPaused] = useState(false);
  const ShowDialog = (client: Client) => {
    setSelectedClient(localizeClient(client, locale));
  };

  return (
    <section
      className="border-b border-line py-16 md:py-24"
      aria-label="Trusted by"
    >
      <FadeUp>
        <p className="type-eyebrow px-6 text-center text-fg-subtle md:px-12">
          {t("home.trustedBy")}
        </p>
      </FadeUp>
      <FadeUp delay={0.15}>
        <Marquee className="mt-10" duration={44} paused={paused}>
          {clients.map((client) => (
            <button
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              key={client.name}
              onClick={() => ShowDialog(client)}
              className="mx-8 flex h-30 w-46 items-center justify-center rounded-xl border border-none bg-surface/50 p-4 transition-all duration-300 hover:scale-105 hover:border-accent md:mx-14"
              title={client.name}
            >
              <Image
                src={client.Logo}
                alt={`${client.name} logo`}
                width={180}
                height={100}
                className="max-h-30 w-auto object-contain"
              />
            </button>
          ))}
        </Marquee>
      </FadeUp>
      <ClientDialog
        open={selectedClient !== null}
        client={selectedClient}
        onClose={() => setSelectedClient(null)}
      />
    </section>
  );
}
