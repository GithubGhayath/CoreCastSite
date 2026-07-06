"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { Magnetic } from "./magnetic";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <Magnetic strength={0.4}>
      <button
        onClick={toggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        className="flex size-10 items-center justify-center rounded-full border border-line transition-colors duration-500 hover:border-line-strong"
      >
        {theme === "dark" ? (
          <Sun className="size-4" strokeWidth={1.5} />
        ) : (
          <Moon className="size-4" strokeWidth={1.5} />
        )}
      </button>
    </Magnetic>
  );
}
