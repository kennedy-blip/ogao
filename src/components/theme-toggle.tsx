"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="hover:bg-accent"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 fill-current" />
      ) : (
        <Moon className="h-5 w-5 fill-current" />
      )}
    </Button>
  );
}
