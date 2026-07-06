"use client";

import { useRef, useState, type DragEvent, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, FileText, Upload, X } from "lucide-react";
import { openings } from "@/lib/data";
import { Field, TextInput, SelectInput } from "@/components/ui/field";
import { FadeUp } from "@/components/ui/reveal";
import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

const EASE = [0.65, 0.05, 0, 1] as const;
const ACCEPT = ".pdf,.doc,.docx";
const MAX_MB = 10;

export function CareersForm() {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const takeFile = (f: File | undefined) => {
    if (!f) return;
    const ok = /\.(pdf|docx?)$/i.test(f.name);
    if (!ok) {
      setError("PDF or Word documents only.");
      return;
    }
    if (f.size > MAX_MB * 1024 * 1024) {
      setError(`Keep it under ${MAX_MB} MB.`);
      return;
    }
    setError("");
    setFile(f);
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    takeFile(e.dataTransfer.files[0]);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      setError("Please attach your CV.");
      return;
    }
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
              Application received.
            </h2>
            <p className="mt-4 max-w-sm text-fg-muted">
              Thank you — our producers review every application personally.
              You&apos;ll hear from us within a week.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={submit}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.4, ease: EASE } }}
            aria-label="Job application form"
          >
            <FadeUp>
              <div className="grid gap-10 md:grid-cols-2">
                <Field label="Your name *" htmlFor="ca-name">
                  <TextInput id="ca-name" name="name" required placeholder="Ava Lindgren" autoComplete="name" />
                </Field>
                <Field label="Email *" htmlFor="ca-email">
                  <TextInput id="ca-email" name="email" type="email" required placeholder="ava@studio.com" autoComplete="email" />
                </Field>
                <Field label="Position *" htmlFor="ca-role">
                  <SelectInput
                    id="ca-role"
                    name="role"
                    required
                    defaultValue=""
                    options={[...openings.map((o) => o.title), "Open application"]}
                  />
                </Field>
                <Field label="Portfolio / showreel" htmlFor="ca-portfolio">
                  <TextInput id="ca-portfolio" name="portfolio" type="url" placeholder="https://…" />
                </Field>
              </div>

              {/* CV upload */}
              <div className="mt-10">
                <span className="type-eyebrow block text-fg-muted">Upload CV *</span>
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragging(true);
                  }}
                  onDragLeave={() => setDragging(false)}
                  onDrop={onDrop}
                  className={cn(
                    "mt-4 rounded-md border border-dashed transition-all duration-500",
                    dragging
                      ? "border-accent bg-card"
                      : "border-line-strong hover:border-accent"
                  )}
                >
                  {file ? (
                    <div className="flex items-center justify-between gap-4 p-6">
                      <div className="flex items-center gap-4">
                        <span className="flex size-11 items-center justify-center rounded-full bg-accent/15">
                          <FileText className="size-5 text-accent" strokeWidth={1.5} />
                        </span>
                        <div>
                          <p className="text-sm font-semibold">{file.name}</p>
                          <p className="mt-0.5 text-xs text-fg-muted">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFile(null)}
                        aria-label="Remove file"
                        className="flex size-9 items-center justify-center rounded-full border border-line transition-colors hover:border-line-strong"
                      >
                        <X className="size-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => inputRef.current?.click()}
                      className="flex w-full flex-col items-center gap-3 p-10 text-center"
                    >
                      <span className="flex size-12 items-center justify-center rounded-full border border-line">
                        <Upload className="size-5 text-fg-muted" strokeWidth={1.5} />
                      </span>
                      <span className="text-sm font-medium">
                        Drag your CV here, or{" "}
                        <span className="link-line text-accent">browse</span>
                      </span>
                      <span className="text-xs text-fg-subtle">
                        PDF, DOC or DOCX — max {MAX_MB} MB
                      </span>
                    </button>
                  )}
                  <input
                    ref={inputRef}
                    type="file"
                    accept={ACCEPT}
                    className="hidden"
                    onChange={(e) => takeFile(e.target.files?.[0])}
                  />
                </div>
                {error && (
                  <p role="alert" className="mt-3 text-sm font-medium text-accent">
                    {error}
                  </p>
                )}
              </div>

              <div className="mt-12">
                <Magnetic strength={0.3}>
                  <button
                    type="submit"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-bg-inverse px-9 py-4 text-sm font-semibold text-fg-inverse"
                  >
                    <span className="absolute inset-0 translate-y-full rounded-full bg-accent transition-transform duration-500 [transition-timing-function:cubic-bezier(0.65,0.05,0,1)] group-hover:translate-y-0" />
                    <span className="relative z-10">Send application</span>
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
