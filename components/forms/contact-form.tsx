"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { bookingBudgets, bookingServices } from "@/lib/data";
import { Field, TextArea, TextInput, SelectInput } from "@/components/ui/field";
import { FadeUp } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";

const EASE = [0.65, 0.05, 0, 1] as const;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    if (!email && !phone) {
      setError("Please add your email or phone so we can reply.");
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
              Scene received.
            </h2>
            <p className="mt-4 max-w-sm text-fg-muted">
              Thank you — your message is with our producers. Expect a reply
              within one business day.
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
                <Field label="Your name *" htmlFor="name">
                  <TextInput id="name" name="name" required placeholder="Ava Lindgren" autoComplete="name" />
                </Field>
                <Field label="Email" htmlFor="email">
                  <TextInput id="email" name="email" type="email" placeholder="ava@company.com" autoComplete="email" />
                </Field>
                <Field
                  label="Phone"
                  htmlFor="phone"
                  hint="Email or phone — at least one is enough."
                >
                  <TextInput id="phone" name="phone" type="tel" placeholder="+47 400 00 000" autoComplete="tel" />
                </Field>
                <Field label="Company" htmlFor="company">
                  <TextInput id="company" name="company" placeholder="Company or brand" autoComplete="organization" />
                </Field>
                <Field label="Interested in" htmlFor="service">
                  <SelectInput id="service" name="service" options={bookingServices} defaultValue="" />
                </Field>
                <Field label="Budget range" htmlFor="budget">
                  <SelectInput id="budget" name="budget" options={bookingBudgets} defaultValue="" />
                </Field>
                <Field label="Where did you find us?" htmlFor="source">
                  <TextInput id="source" name="source" placeholder="Instagram, referral, awards…" />
                </Field>
              </div>
              <Field label="Your story so far *" htmlFor="message" className="mt-10">
                <TextArea
                  id="message"
                  name="message"
                  required
                  placeholder="What are you building, and what should people remember about it?"
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
                    <span className="relative z-10">Send the brief</span>
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
