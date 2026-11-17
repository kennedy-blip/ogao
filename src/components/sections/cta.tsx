"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands of teams shipping faster with Ogao. Start building
            today — free forever.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/register">
              <Button size="lg">Get started free</Button>
            </Link>
            <Button variant="outline" size="lg">
              Contact sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
