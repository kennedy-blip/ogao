"use client";

import { Activity, Cpu, Layers, Mail, ShieldCheck, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    title: "Real-time collaboration",
    description:
      "Work with your team in the same space. See changes live, leave comments, and ship together.",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    title: "Instant deploys",
    description:
      "Push to production in seconds with our global edge network. Zero-config deployments.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Design system",
    description:
      "A professional component library built on Tailwind and shadcn/ui for consistent UIs.",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "Enterprise security",
    description:
      "SOC 2 compliant, end-to-end encryption, and granular access controls.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Powerful analytics",
    description:
      "Understand your users with real-time dashboards and conversion funnels.",
    icon: <Cpu className="h-5 w-5" />,
  },
  {
    title: "Smart notifications",
    description:
      "Email and in-app notifications that keep your team aligned.",
    icon: <Mail className="h-5 w-5" />,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to ship
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Professional tools for modern teams, without the overhead.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {feature.icon}
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
