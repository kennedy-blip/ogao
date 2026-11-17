"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Search, Sparkles, Mail, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl tracking-tight"
            >
              <Sparkles className="h-6 w-6 text-primary" />
              <span>Ogao</span>
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "transition-colors hover:text-primary",
                    pathname === link.href || pathname?.startsWith(link.href + "/")
                      ? "text-primary"
                      : "",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="hidden sm:block">
              Sign in
            </Button>
            <Button size="sm" className="hidden sm:block">
              Get started
            </Button>
            <button
              className="md:hidden p-2 text-muted-foreground hover:bg-accent rounded-md"
              onClick={() => setOpen((o) => !o)}
              aria-label="Open menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <DropdownMenu open={open} onOpenChange={setOpen} modal>
        <DropdownMenuTrigger className="hidden" />
        <DropdownMenuContent className="p-4 w-full max-w-xs">
          <div className="flex items-center gap-3 mb-6 px-2">
            <ThemeToggle />
          </div>
          <DropdownMenuSeparator />
          {links.map((link) => (
            <DropdownMenuItem key={link.name} asChild>
              <Link href={link.href}>{link.name}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/login">Sign in</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/register">Get started</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

import { cn } from "@/lib/utils";
import React from "react";
