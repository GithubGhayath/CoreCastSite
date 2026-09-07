"use client";

import { X } from "lucide-react";
import {Client} from "../../lib/data"
import { useLanguage } from "@/components/providers/language-provider";

type Props = {
  open: boolean;
  onClose: () => void;
  client: Client | null;
};

export default function ClientDialog({
  open,
  onClose,
  client,
}: Props) {
  const { t } = useLanguage();
  if (!open || !client) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-3xl border border-line bg-surface p-8 shadow-2xl">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 hover:bg-white/10"
        >
          <X size={20} />
        </button>


        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-line bg-white/5 p-4">
          <img
            src={client.Logo}
            alt={`${client.name} logo`}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <h2 className="text-3xl font-bold">
          {client.name}
        </h2>

      

        <p className="mt-6 leading-8 text-fg-subtle">
          {client.description}
        </p>

        <div className="mt-8">
         <h3 className="mb-3 font-semibold">
          {t("clientDialog.contactInformation")}
        </h3>

        <div className="flex flex-wrap gap-2">
          {client.contactInfo.map((contact) => (
            <span
              key={contact}
              className="rounded-full border border-line px-4 py-2 text-sm"
            >
              {contact}
            </span>
          ))}
        </div>
      </div>

       
       
      </div>
      
    </div>
  );
}