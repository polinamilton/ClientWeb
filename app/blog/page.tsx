import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageBanner } from "@/components/page-banner";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Sage & Spruce Cleaning Co.",
  description:
    "Tips on eco-friendly cleaning, seasonal home care in Austin, and a look behind the scenes at Sage & Spruce Cleaning Co.",
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <PageBanner
        eyebrow="Blog"
        title="Tips for a cleaner, greener home"
        description="Eco-friendly cleaning advice, seasonal checklists for Austin homes, and an inside look at how our team works."
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <span className="text-xs font-medium uppercase tracking-widest text-emerald-700">
                  {post.category}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold transition-colors group-hover:text-emerald-700">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {formatDate(post.date)} &middot; {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-emerald-700 transition-transform group-hover:translate-x-1">
                    Read
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
