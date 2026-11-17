"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Layout,
  BarChart3,
  Folder,
  FileText,
  Mail,
  Settings,
  LogOut,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: <Layout /> },
  { name: "Projects", href: "/dashboard/projects", icon: <Folder /> },
  { name: "Blog", href: "/dashboard/blog", icon: <FileText /> },
  { name: "Messages", href: "/dashboard/messages", icon: <Mail /> },
  { name: "Settings", href: "/dashboard/settings", icon: <Settings /> },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-16 bottom-0 z-20 hidden w-72 border-r border-border bg-background flex flex-col lg:flex">
      <div className="flex items-center gap-2 px-6 py-5">
        <div className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center">
          <span className="text-white text-xs font-bold">O</span>
        </div>
        <span className="font-bold text-xl tracking-tight">Ogao</span>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            >
              <div className="h-5 w-5">{item.icon}</div>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="p-4 border-t border-border">
        <Link
          href="/logout"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Sign out
        </Link>
      </div>
    </aside>
  );
}

export function DashboardHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background">
      <div>
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm">
          <User className="h-4 w-4 mr-2" />
          Profile
        </Button>
      </div>
    </div>
  );
}
