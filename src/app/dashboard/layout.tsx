import { DashboardSidebar, DashboardHeader } from "@/components/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-1">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader title="Dashboard" />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto bg-muted/30">{children}</main>
      </div>
    </div>
  );
}
