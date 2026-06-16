import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { blogPosts, getBlogPost } from "@/lib/blog-posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found | Sage & Spruce Cleaning Co." };
  }

  return {
    title: `${post.title} | Sage & Spruce Cleaning Co.`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-emerald-950 px-6 pt-32 pb-16 text-white sm:px-12 sm:pt-40 sm:pb-20">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200 transition-colors hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Back to blog
        </Link>

        <span className="mt-6 block text-xs font-medium uppercase tracking-widest text-emerald-300">
          {post.category}
        </span>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-emerald-100/70">
          {formatDate(post.date)} &middot; {post.readTime}
        </p>
      </div>

      <div className="relative mx-auto mt-10 aspect-[16/9] max-w-2xl overflow-hidden rounded-3xl">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="(min-width: 1024px) 672px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mx-auto mt-12 max-w-2xl rounded-3xl bg-background p-8 text-foreground sm:p-12">
        <div className="space-y-5 text-muted-foreground">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
