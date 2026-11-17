"use client";

import { toast as sonnerToast } from "sonner";

export type ToastProps = {
  title?: string;
  description?: string;
};

export function useToast() {
  const toast = (props: ToastProps) => {
    sonnerToast(props.title || "", {
      description: props.description,
    });
  };

  return { toast };
}
