import { notFound } from "next/navigation";
import { getPostBySlug, blogPosts } from "@/lib/data";
import Link from "next/link";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/blog" className="text-primary hover:underline">
          Journal
        </Link>
        <span>/</span>
        <span className="text-foreground">{post.category}</span>
      </div>
      <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-border bg-muted flex items-center justify-center">
        <span className="text-sm font-medium text-muted-foreground">
          {post.category}
        </span>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6 sm:text-5xl">
        {post.title}
      </h1>
      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
        <span>{post.author}</span>
        <span>·</span>
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>
      <div className="prose prose-lg text-muted-foreground">
        {post.content.split("</p>").map((part, i) => (
          <p
            key={i}
            dangerouslySetInnerHTML={{
              __html:
                part + (i < post.content.split("</p>").length - 1 ? "</p>" : ""),
            }}
          />
        ))}
      </div>
      <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
        <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-primary">
          ← Back to journal
        </Link>
      </div>
    </article>
  );
}
