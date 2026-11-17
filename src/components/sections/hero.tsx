"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Zap, ShieldCheck, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-muted/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            New release — Ogao v2
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
          >
            Design, build, and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              scale faster.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            The all-in-one platform for modern creative teams. Ship beautiful
            products, collaborate in real time, and grow your audience without
            the complexity.
          </motion.p>
          <div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Get started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View demo
            </Button>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:text-left">
            <FeatureIcon icon={<Zap className="h-5 w-5" />} label="Instant deploys" />
            <FeatureIcon icon={<ShieldCheck className="h-5 w-5" />} label="Enterprise security" />
            <FeatureIcon icon={<Layers className="h-5 w-5" />} label="Design system ready" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      {icon}
      <span>{label}</span>
    </div>
  );
}
