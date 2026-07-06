"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Check } from "lucide-react";
import { bookingBudgets, bookingServices, timeSlots } from "@/lib/data";
import { ChoicePill, Field, TextArea, TextInput } from "@/components/ui/field";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

const EASE = [0.65, 0.05, 0, 1] as const;

const STEPS = ["Discipline", "Budget", "Date & time", "Details", "Confirm"] as const;

interface Booking {
  service: string;
  budget: string;
  date: string;
  slot: string;
  name: string;
  email: string;
  company: string;
  notes: string;
}

/** Next 14 weekdays, computed on the client. */
function useUpcomingDays() {
  return useMemo(() => {
    const days: { iso: string; weekday: string; day: number; month: string }[] = [];
    const cursor = new Date();
    while (days.length < 14) {
      cursor.setDate(cursor.getDate() + 1);
      const dow = cursor.getDay();
      if (dow === 0 || dow === 6) continue;
      days.push({
        iso: cursor.toISOString().slice(0, 10),
        weekday: cursor.toLocaleDateString("en-GB", { weekday: "short" }),
        day: cursor.getDate(),
        month: cursor.toLocaleDateString("en-GB", { month: "short" }),
      });
    }
    return days;
  }, []);
}

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [booking, setBooking] = useState<Booking>({
    service: "",
    budget: "",
    date: "",
    slot: "",
    name: "",
    email: "",
    company: "",
    notes: "",
  });
  const days = useUpcomingDays();

  const set = (patch: Partial<Booking>) =>
    setBooking((b) => ({ ...b, ...patch }));

  const canContinue = [
    booking.service !== "",
    booking.budget !== "",
    booking.date !== "" && booking.slot !== "",
    booking.name.trim() !== "" && /.+@.+\..+/.test(booking.email),
    true,
  ][step];

  const prettyDate = days.find((d) => d.iso === booking.date);

  if (done) {
    return (
      <motion.div
        className="flex min-h-[420px] flex-col items-center justify-center rounded-md border border-line p-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-accent">
          <Check className="size-7 text-fg-inverse" strokeWidth={2} />
        </span>
        <h2 className="type-title mt-8 !text-[clamp(1.6rem,3vw,2.6rem)]">
          You&apos;re on the call sheet.
        </h2>
        <p className="mt-4 max-w-md text-fg-muted">
          {prettyDate &&
            `${prettyDate.weekday} ${prettyDate.day} ${prettyDate.month} at ${booking.slot} (CET) — `}
          a calendar invitation is on its way to {booking.email}.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="rounded-md border border-line">
      {/* progress */}
      <div className="flex flex-wrap gap-y-2 border-b border-line px-6 py-5 md:px-10">
        {STEPS.map((label, i) => (
          <button
            key={label}
            onClick={() => i < step && setStep(i)}
            disabled={i > step}
            className={cn(
              "mr-6 flex items-center gap-2 text-xs font-semibold tracking-wide transition-colors duration-500",
              i === step
                ? "text-accent"
                : i < step
                  ? "text-fg hover:text-accent"
                  : "cursor-default text-fg-subtle"
            )}
          >
            <span
              className={cn(
                "flex size-5 items-center justify-center rounded-full border text-[10px]",
                i === step
                  ? "border-accent"
                  : i < step
                    ? "border-fg bg-fg text-bg"
                    : "border-line"
              )}
            >
              {i < step ? <Check className="size-3" /> : i + 1}
            </span>
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>

      <div className="min-h-[380px] px-6 py-10 md:px-10 md:py-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {step === 0 && (
              <fieldset>
                <legend className="type-statement">
                  What should we talk about?
                </legend>
                <div className="mt-8 flex flex-wrap gap-3">
                  {bookingServices.map((s) => (
                    <ChoicePill
                      key={s}
                      selected={booking.service === s}
                      onClick={() => set({ service: s })}
                    >
                      {s}
                    </ChoicePill>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 1 && (
              <fieldset>
                <legend className="type-statement">
                  Roughly, the investment level?
                </legend>
                <p className="mt-3 text-sm text-fg-muted">
                  This only helps us bring the right ideas — nothing is binding.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {bookingBudgets.map((b) => (
                    <ChoicePill
                      key={b}
                      selected={booking.budget === b}
                      onClick={() => set({ budget: b })}
                    >
                      {b}
                    </ChoicePill>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset>
                <legend className="type-statement">Pick your moment.</legend>
                <div className="mt-8 flex gap-3 overflow-x-auto pb-3">
                  {days.map((d) => (
                    <button
                      key={d.iso}
                      type="button"
                      onClick={() => set({ date: d.iso })}
                      aria-pressed={booking.date === d.iso}
                      className={cn(
                        "flex min-w-[76px] flex-col items-center rounded-md border px-4 py-4 transition-all duration-400",
                        booking.date === d.iso
                          ? "border-accent bg-accent text-fg-inverse"
                          : "border-line text-fg-muted hover:border-line-strong hover:text-fg"
                      )}
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-wider">
                        {d.weekday}
                      </span>
                      <span className="mt-1 text-2xl font-semibold">{d.day}</span>
                      <span className="text-[11px] uppercase tracking-wider">
                        {d.month}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="type-eyebrow mt-8 text-fg-subtle">Time (CET)</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {timeSlots.map((slot) => (
                    <ChoicePill
                      key={slot}
                      selected={booking.slot === slot}
                      onClick={() => set({ slot })}
                      disabled={booking.date === ""}
                    >
                      {slot}
                    </ChoicePill>
                  ))}
                </div>
              </fieldset>
            )}

            {step === 3 && (
              <fieldset>
                <legend className="type-statement">Who are we meeting?</legend>
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                  <Field label="Your name *" htmlFor="bk-name">
                    <TextInput
                      id="bk-name"
                      value={booking.name}
                      onChange={(e) => set({ name: e.target.value })}
                      placeholder="Ava Lindgren"
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Email *" htmlFor="bk-email">
                    <TextInput
                      id="bk-email"
                      type="email"
                      value={booking.email}
                      onChange={(e) => set({ email: e.target.value })}
                      placeholder="ava@company.com"
                      autoComplete="email"
                    />
                  </Field>
                  <Field label="Company" htmlFor="bk-company" className="md:col-span-2">
                    <TextInput
                      id="bk-company"
                      value={booking.company}
                      onChange={(e) => set({ company: e.target.value })}
                      placeholder="Company or brand"
                      autoComplete="organization"
                    />
                  </Field>
                  <Field label="Anything we should watch before the call?" htmlFor="bk-notes" className="md:col-span-2">
                    <TextArea
                      id="bk-notes"
                      rows={3}
                      value={booking.notes}
                      onChange={(e) => set({ notes: e.target.value })}
                      placeholder="Links, context, ambitions…"
                    />
                  </Field>
                </div>
              </fieldset>
            )}

            {step === 4 && (
              <div>
                <h2 className="type-statement">One last look.</h2>
                <dl className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
                  {[
                    ["Discipline", booking.service],
                    ["Budget", booking.budget],
                    [
                      "When",
                      prettyDate
                        ? `${prettyDate.weekday} ${prettyDate.day} ${prettyDate.month} · ${booking.slot} CET`
                        : "",
                    ],
                    ["Who", `${booking.name}${booking.company ? ` — ${booking.company}` : ""}`],
                    ["Email", booking.email],
                  ].map(([k, v]) => (
                    <div key={k} className="border-b border-line pb-4">
                      <dt className="type-eyebrow text-fg-subtle">{k}</dt>
                      <dd className="mt-2 text-base font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="flex items-center justify-between border-t border-line px-6 py-5 md:px-10">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-semibold transition-opacity duration-300",
            step === 0 && "pointer-events-none opacity-0"
          )}
        >
          <ArrowLeft className="size-4" strokeWidth={1.75} />
          Back
        </button>

        <Magnetic strength={0.3}>
          <button
            onClick={() =>
              step === STEPS.length - 1 ? setDone(true) : setStep((s) => s + 1)
            }
            disabled={!canContinue}
            className={cn(
              "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-500",
              canContinue
                ? "bg-bg-inverse text-fg-inverse"
                : "cursor-not-allowed bg-card text-fg-subtle"
            )}
          >
            {canContinue && (
              <span className="absolute inset-0 translate-y-full rounded-full bg-accent transition-transform duration-500 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)] group-hover:translate-y-0" />
            )}
            <span className="relative z-10">
              {step === STEPS.length - 1 ? "Confirm booking" : "Continue"}
            </span>
            {step === STEPS.length - 1 ? (
              <Calendar className="relative z-10 size-4" strokeWidth={1.75} />
            ) : (
              <ArrowRight className="relative z-10 size-4 transition-transform duration-500 group-hover:translate-x-0.5" strokeWidth={1.75} />
            )}
          </button>
        </Magnetic>
      </div>
    </div>
  );
}
