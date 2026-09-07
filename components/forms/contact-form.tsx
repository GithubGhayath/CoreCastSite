"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { bookingBudgets, bookingServices } from "@/lib/data";
import { Field, TextArea, TextInput, SelectInput } from "@/components/ui/field";
import { FadeUp } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { useLanguage } from "@/components/providers/language-provider";
import { localizeBookingService } from "@/lib/i18n/localize";

const EASE = [0.65, 0.05, 0, 1] as const;

export function ContactForm() {
  const { t, locale } = useLanguage();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const localizedServices = bookingServices.map((s) => localizeBookingService(s, locale));

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    if (!email && !phone) {
      setError(t("forms.contact.errorNoContact"));
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <div className="relative min-h-[480px]">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            className="flex min-h-[480px] flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-accent">
              <Check className="size-7 text-fg-inverse" strokeWidth={2} />
            </span>
            <h2 className="type-title mt-8 !text-[clamp(1.6rem,3vw,2.6rem)]">
              {t("forms.contact.doneTitle")}
            </h2>
            <p className="mt-4 max-w-sm text-fg-muted">
              {t("forms.contact.doneBody")}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={submit}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.4, ease: EASE } }}
            aria-label="Contact form"
          >
            <FadeUp>
              <div className="grid gap-10 md:grid-cols-2">
                <Field label={t("forms.name")} htmlFor="name">
                  <TextInput id="name" name="name" required placeholder={t("forms.namePlaceholder")} autoComplete="name" />
                </Field>
                <Field label={t("forms.email")} htmlFor="email">
                  <TextInput id="email" name="email" type="email" placeholder={t("forms.emailPlaceholderCompany")} autoComplete="email" />
                </Field>
                <Field
                  label={t("forms.phone")}
                  htmlFor="phone"
                  hint={t("forms.phoneHint")}
                >
                  <TextInput id="phone" name="phone" type="tel" placeholder={t("forms.phonePlaceholder")} autoComplete="tel" />
                </Field>
                <Field label={t("forms.company")} htmlFor="company">
                  <TextInput id="company" name="company" placeholder={t("forms.companyPlaceholder")} autoComplete="organization" />
                </Field>
                <Field label={t("forms.interestedIn")} htmlFor="service">
                  <SelectInput id="service" name="service" options={localizedServices} defaultValue="" />
                </Field>
                <Field label={t("forms.budgetRange")} htmlFor="budget">
                  <SelectInput id="budget" name="budget" options={bookingBudgets} defaultValue="" />
                </Field>
                <Field label={t("forms.whereFindUs")} htmlFor="source">
                  <TextInput id="source" name="source" placeholder={t("forms.whereFindUsPlaceholder")} />
                </Field>
              </div>
              <Field label={t("forms.contact.storyLabel")} htmlFor="message" className="mt-10">
                <TextArea
                  id="message"
                  name="message"
                  required
                  placeholder={t("forms.contact.storyPlaceholder")}
                />
              </Field>
              {error && (
                <p role="alert" className="mt-6 text-sm font-medium text-accent">
                  {error}
                </p>
              )}
              <div className="mt-12">
                <Magnetic strength={0.3}>
                  <button
                    type="submit"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-bg-inverse px-9 py-4 text-sm font-semibold text-fg-inverse"
                  >
                    <span className="absolute inset-0 translate-y-full rounded-full bg-accent transition-transform duration-500 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)] group-hover:translate-y-0" />
                    <span className="relative z-10">{t("forms.contact.submit")}</span>
                    <ArrowUpRight className="relative z-10 size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} />
                  </button>
                </Magnetic>
              </div>
            </FadeUp>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
