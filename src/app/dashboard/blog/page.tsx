import Link from "next/link";
import { Button } from "@/components/ui/button";

const posts = [
  { title: "Designing for Scale", status: "published", date: "Apr 12" },
  { title: "Deploying to the Edge", status: "published", date: "Apr 5" },
  { title: "Real-Time Collaboration", status: "draft", date: "Mar 28" },
];

export default function DashboardBlog() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Blog</h1>
        <Button>New post</Button>
      </div>
      <div className="rounded-xl border border-border bg-card">
        <div className="border-b border-border">
          <div className="flex px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <div className="w-1/3">Title</div>
            <div className="w-1/3">Status</div>
            <div className="w-1/3 text-right">Date</div>
          </div>
        </div>
        <div className="divide-y divide-border">
          {posts.map((post) => (
            <div key={post.title} className="flex px-6 py-4 items-center">
              <div className="w-1/3">
                <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  {post.title}
                </Link>
              </div>
              <div className="w-1/3">
                <span className={`text-xs font-medium rounded-full px-2 py-1 ${
                  post.status === "published"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                }`}>
                  {post.status}
                </span>
              </div>
              <div className="w-1/3 text-right text-sm text-muted-foreground">{post.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
