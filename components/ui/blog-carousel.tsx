"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog-posts";

const AUTOPLAY_DELAY = 4000;
const SWIPE_THRESHOLD = 40;

export function BlogCarousel({
  posts,
  className,
}: {
  posts: BlogPost[];
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % posts.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [active, posts.length]);

  const goTo = (index: number) => {
    setActive((index + posts.length) % posts.length);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) {
      goTo(active - 1);
    } else if (delta < -SWIPE_THRESHOLD) {
      goTo(active + 1);
    }
    touchStartX.current = null;
  };

  return (
    <div className={cn("sm:hidden", className)}>
      <div className="overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            width: `${posts.length * 100}%`,
            transform: `translateX(-${active * (100 / posts.length)}%)`,
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ width: `${100 / posts.length}%` }}
              className="flex shrink-0 flex-col overflow-hidden rounded-2xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col border border-white/50 bg-white/50 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] backdrop-blur-xl">
                <span className="text-xs font-medium uppercase tracking-widest text-emerald-700">
                  {post.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-emerald-700">
                  Read
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {posts.map((post, index) => (
          <button
            key={post.slug}
            type="button"
            aria-label={`Show post ${index + 1}: ${post.title}`}
            onClick={() => goTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              index === active ? "w-6 bg-emerald-600" : "w-1.5 bg-emerald-900/20"
            )}
          />
        ))}
      </div>
    </div>
  );
}
