"use client";

import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Ogao?",
    a: "Ogao is an all-in-one platform for modern creative teams to design, build, and scale digital products.",
  },
  {
    q: "Do I need a credit card to start?",
    a: "No. Our Starter plan is free forever — no credit card required.",
  },
  {
    q: "Can I upgrade or downgrade anytime?",
    a: "Yes. You can change your plan at any time from your dashboard settings.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. We use end-to-end encryption and are SOC 2 compliant on paid plans.",
  },
  {
    q: "Do you offer custom domains?",
    a: "Yes. Custom domains are available on the Pro plan and above.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
