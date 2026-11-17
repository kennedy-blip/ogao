import Link from "next/link";
import { Sparkles, Mail, GitBranch, X, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    items: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Company",
    items: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    items: ["Blog", "Documentation", "Help Center", "Community"],
  },
  {
    title: "Legal",
    items: ["Privacy", "Terms", "Security", "Status"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl tracking-tight">Ogao</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              Building the future of digital creativity with professional-grade
              tools for modern teams.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/kennedy-blip/ogao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GitBranch className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 Ogao Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
