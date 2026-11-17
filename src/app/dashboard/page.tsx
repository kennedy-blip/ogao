import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnalyticsChart } from "@/components/dashboard/analytics-chart";
import { cn } from "@/lib/utils";

const stats = [
  { title: "Projects", value: "12", change: "+4", trend: "up" },
  { title: "Visitors", value: "4.2k", change: "+12%", trend: "up" },
  { title: "Conversions", value: "3.8%", change: "-0.4%", trend: "down" },
  { title: "Revenue", value: "$12.4k", change: "+18%", trend: "up" },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold text-foreground">Overview</h1>
        <div className="flex items-center gap-2">
          <Badge className={cn("bg-green-100 text-green-700")}>Active</Badge>
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/projects">View all projects <ArrowRight className="ml-1 h-3 w-3" /></Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <Badge
                className={cn(
                  stat.trend === "up"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
                )}
              >
                {stat.change}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Visitors over time</CardTitle>
            <CardDescription>
              Last 7 days of traffic to your projects.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AnalyticsChart />
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
            <CardDescription>Latest updates across your workspace.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { actor: "Maya Chen", action: "published a post", time: "2h ago" },
              { actor: "David Okoro", action: "deployed project", time: "5h ago" },
              { actor: "Sarah Jenkins", action: "joined workspace", time: "1d ago" },
              { actor: "Alex Rivera", action: "updated settings", time: "2d ago" },
            ].map((item) => (
              <div key={item.actor} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground shrink-0 text-sm font-medium">
                  {item.actor.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">
                    <span className="font-medium">{item.actor}</span>{" "}
                    {item.action}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
