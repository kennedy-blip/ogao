export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  published: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-for-scale",
    title: "Designing for Scale: A Modern Design System",
    summary:
      "How we built a scalable component library that powers our entire platform and keeps our UI consistent.",
    content:
      `<p>Building a design system from scratch is no small feat. At Ogao, we wanted to create a foundation that could grow with our team while keeping our user interface consistent across every touchpoint.</p><p>We started with tokens — colors, spacing, typography, and radii — then composed them into components using Tailwind CSS and class-variance-authority. The result is a library that feels native to React and is a joy to maintain.</p><h2>Design tokens</h2><p>Tokens are the single source of truth. By centralizing design decisions, we made theming (including dark mode) a matter of swapping variables rather than rewriting components.</p><h2>Component composition</h2><p>Each component exposes a variant API powered by CVA, so you can compose buttons, cards, and inputs without writing one-off CSS.</p><p>The outcome? Faster shipping, fewer regressions, and a cohesive product experience.</p>`,
    author: "Maya Chen",
    date: "2024-04-12",
    readTime: "5 min",
    image: "/blog/design-system.jpg",
    category: "Design",
    published: true,
  },
  {
    slug: "deploying-to-the-edge",
    title: "Deploying to the Edge with Confidence",
    summary:
      "Zero-config deployments, instant rollbacks, and a global edge network that puts your app close to every user.",
    content:
      `<p>Deployment should be the easiest part of shipping software. At Ogao, we pushed to production thousands of times last year — here's how our edge deployment pipeline works.</p><p>Every push triggers a build that deploys to our global network within seconds. With instant rollbacks and automatic SSL, your users always get the fastest, most secure version of your app.</p><h2>Edge-first architecture</h2><p>By running your application at the edge, we reduce latency to near zero for users worldwide.</p><h2>Rollbacks in one click</h2><p>Something didn't go as planned? Roll back to any previous deployment with a single click from the dashboard.</p>`,
    author: "David Okoro",
    date: "2024-04-05",
    readTime: "7 min",
    image: "/blog/deploy.jpg",
    category: "Engineering",
    published: true,
  },
  {
    slug: "team-collaboration",
    title: "Real-Time Collaboration Done Right",
    summary:
      "Lessons learned building real-time multiplayer editing for creative teams.",
    content:
      `<p>Real-time collaboration changes how teams work together. Seeing cursors move, edits appear live, and comments resolve in real time creates a sense of shared presence that async tools can't match.</p><p>We built Ogao's collaboration layer on top of conflict-free replicated data types (CRDTs), so edits merge gracefully even when teammates work offline.</p><h2>Optimistic updates</h2><p>Every action is reflected locally first, then synced. The app feels instant, even on slow connections.</p><h2>Presence and awareness</h2><p>Know who's viewing which page, where their cursor is, and what they're editing — all without refreshing.</p>`,
    author: "Sarah Jenkins",
    date: "2024-03-28",
    readTime: "6 min",
    image: "/blog/collab.jpg",
    category: "Product",
    published: true,
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
