"use client";

import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maya Chen",
    role: "Product Lead, Flow Studio",
    content:
      "Ogao transformed how our team ships products. We went from idea to production in days, not weeks.",
    avatar: "MC",
  },
  {
    name: "David Okoro",
    role: "Founder, Launchpad",
    content:
      "The best platform I've used. The design system alone saved us months of frontend work.",
    avatar: "DO",
  },
  {
    name: "Sarah Jenkins",
    role: "CTO, Nova Labs",
    content:
      "Enterprise-grade security with developer-friendly tooling. A rare combination done right.",
    avatar: "SJ",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by teams worldwide
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <Card key={t.name} className="hover:border-primary/50 transition-colors">
              <CardContent className="pt-8">
                <div className="flex items-center gap-1 text-primary mb-4">
                  <Quote className="h-5 w-5" />
                </div>
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-semibold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
