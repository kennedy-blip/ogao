"use client";

import { Toaster, type ToasterProps } from "sonner";

export function ToasterComponent(props: ToasterProps) {
  return <Toaster {...props} />;
}

export { ToasterComponent as Toaster };
