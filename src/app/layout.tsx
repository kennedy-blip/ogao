import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Ogao",
    default: "Ogao — Build, design, and scale faster",
  },
  description:
    "The all-in-one platform for modern creative teams. Ship beautiful products, collaborate in real time, and grow your audience without the complexity.",
  openGraph: {
    title: "Ogao — Build, design, and scale faster",
    description: "The all-in-one platform for modern creative teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased">
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
