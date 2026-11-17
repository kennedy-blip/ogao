import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/button";

const featured = blogPosts[0];
const recent = blogPosts.slice(1);

export default function BlogPage() {
  return (
    <div className="space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Journal
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Insights on design, engineering, and building products at scale.
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-border bg-muted">
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-semibold text-xl">{featured.category}</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">
                {featured.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 line-clamp-2">
                {featured.summary}
              </p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <Link href={`/blog/${featured.slug}`}>
                <Button>Read article</Button>
              </Link>
            </div>

            <div className="lg:col-span-1 space-y-6">
              {recent.map((post) => (
                <div
                  key={post.slug}
                  className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-colors group"
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-3 border border-border bg-muted">
                    <div className="w-full h-full bg-gradient-to-tr from-accent to-muted/50 flex items-center justify-center text-sm font-medium text-muted-foreground">
                      {post.category}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-foreground group-hover:text-primary transition-colors"
                  >
                    <h3 className="text-lg font-bold">{post.title}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.summary}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
