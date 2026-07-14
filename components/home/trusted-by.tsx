"use client";

import { clients,Client } from "@/lib/data";
import { Marquee } from "@/components/ui/marquee";
import { FadeUp } from "@/components/ui/reveal";
import ClientDialog from "@/components/ui/ClientDialog";
import { useState } from "react";
import Image from "next/image"; 

export function TrustedBy() {
const [selectedClient, setSelectedClient] = useState<Client | null>(null);


  const ShowDialog = (client: Client) => {
        setSelectedClient(client);
  };


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
                <button
                  key={client.name}
                  onClick={() => ShowDialog(client)}
                  className="mx-8 flex h-20 w-36 items-center justify-center rounded-xl border border-line bg-surface/50 p-4 transition-all duration-300 hover:scale-105 hover:border-accent md:mx-14"
                  title={client.name}
                >
                  <Image
                    src={client.Logo}
                    alt={`${client.name} logo`}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain"
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
