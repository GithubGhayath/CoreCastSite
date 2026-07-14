import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

const inputBase =
  "w-full border-b border-line bg-transparent py-4 text-base outline-none transition-colors duration-500 placeholder:text-fg-subtle focus:border-accent";

export function Field({
  label,
  htmlFor,
  children,
  className,
  hint,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
  hint?: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="type-eyebrow block text-fg-muted">
        {label}
      </label>
      {children}
      {hint && <p className="mt-2 text-xs text-fg-subtle">{hint}</p>}
    </div>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(inputBase, props.className)} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      rows={4}
      {...props}
      className={cn(inputBase, "resize-none", props.className)}
    />
  );
}

export function SelectInput({
  options,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: readonly string[];
}) {
  return (
    <select {...props} className={cn(inputBase, "appearance-none", props.className)}>
      <option value="" disabled>
        Select…
      </option>
      {options.map((o) => (
        <option key={o} value={o} className="bg-bg-elevated text-fg">
          {o}
        </option>
      ))}
    </select>
  );
}

/** Pill-style choice used in the booking flow. */
export function ChoicePill({
  selected,
  children,
  onClick,
  disabled,
}: {
  selected: boolean;
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      className={cn(
        "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-400",
        selected
          ? "border-accent bg-accent text-fg-inverse"
          : "border-line text-fg-muted hover:border-line-strong hover:text-fg",
        disabled && "cursor-not-allowed opacity-30 hover:border-line hover:text-fg-muted"
      )}
    >
      {children}
    </button>
  );
}
