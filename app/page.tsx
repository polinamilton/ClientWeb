import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { CtaBand } from "@/components/cta-band";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";
import { BlogCarousel } from "@/components/ui/blog-carousel";
import { blogPosts } from "@/lib/blog-posts";

const features = [
  {
    icon: Leaf,
    title: "Plant-Based Products",
    description:
      "We clean with biodegradable, non-toxic products that are safe for your family, pets, and the planet.",
  },
  {
    icon: ShieldCheck,
    title: "Vetted & Insured Team",
    description:
      "Every cleaner is background-checked, trained, and fully insured, so you can welcome us in with confidence.",
  },
  {
    icon: Sparkles,
    title: "Satisfaction Guaranteed",
    description:
      "Not happy with a spot? We'll come back and make it right, free of charge, every single time.",
  },
];

const homeHighlights = [
  "Custom checklist for every visit",
  "Same trusted team each time",
  "Pet- and kid-safe products",
];

const officeHighlights = [
  "Flexible before- or after-hours scheduling",
  "Consistent team, every visit",
  "Discreet, professional service",
];

const stats = [
  { value: "8+", label: "Years Serving Austin" },
  { value: "1,200+", label: "Homes & Offices Cleaned" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "0", label: "Harsh Chemicals" },
];

const servicePreviews = [
  {
    icon: Leaf,
    title: "Standard Home Cleaning",
    description: "Kitchens, bathrooms, floors, and living spaces refreshed with plant-based products.",
    price: "From $120/visit",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "A top-to-bottom reset covering baseboards, appliances, grout, and every missed corner.",
    price: "From $220/visit",
  },
  {
    icon: CalendarCheck,
    title: "Recurring Plans",
    description: "Weekly, biweekly, or monthly visits with a consistent team and a loyalty discount.",
    price: "Save 10-15%",
  },
  {
    icon: Building2,
    title: "Office & Commercial",
    description: "Scheduled cleaning for offices, studios, and retail spaces that keeps your team healthy.",
    price: "Custom quote",
  },
];

const testimonials = [
  {
    name: "Maria T.",
    initials: "MT",
    role: "South Austin",
    quote:
      "Our house actually smells fresh now, not like chemicals. The team is thorough and so easy to schedule.",
  },
  {
    name: "David R.",
    initials: "DR",
    role: "Office Manager, East Austin",
    quote:
      "Our office feels brand new every Monday. Reliable, professional, and the plant-based products make a real difference.",
  },
  {
    name: "Priya K.",
    initials: "PK",
    role: "Mueller",
    quote:
      "I love that my kids and dog can roam the second the team leaves. Spotless every time, no exceptions.",
  },
];

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We clean homes and offices throughout Austin, plus nearby communities including Round Rock, Cedar Park, and Pflugerville.",
  },
  {
    question: "Do I need to provide any supplies?",
    answer:
      "No. Every cleaner arrives with a full kit of plant-based, biodegradable products and equipment, so you don't need to buy or store anything.",
  },
  {
    question: "Can I set up a recurring schedule?",
    answer:
      "Yes. Weekly, biweekly, and monthly plans are available, each with a discount over one-time visits, and you'll get the same team each time.",
  },
  {
    question: "Is your team insured and background-checked?",
    answer:
      "Every team member is background-checked, trained, and we're fully insured and bonded for your peace of mind.",
  },
  {
    question: "How do I pay for a visit?",
    answer:
      "We securely store a card on file and charge it after each completed visit, so there's never any cash or invoices to chase down.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative">
        {/* Mobile & tablet: static hero, image up top, content below */}
        <div className="lg:hidden">
          <div className="relative aspect-[4/5] w-full sm:aspect-[16/9]">
            <Image
              src="/eco-cleaning-supplies-wide.png"
              alt="Eco-friendly cleaning supplies laid out on a counter"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[80%_center]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#F7E9DB] sm:h-40" />
          </div>
          <div className="flex flex-col items-start gap-5 bg-[#F7E9DB] px-6 pt-4 pb-10 text-left text-emerald-950 sm:px-12">
            <span className="rounded-full border border-emerald-900/15 bg-white/60 px-4 py-1 text-xs font-medium uppercase tracking-widest text-emerald-800 backdrop-blur-sm">
              Locally Owned &middot; Austin, TX
            </span>
            <h1 className="font-display text-5xl font-semibold leading-tight sm:text-6xl">
              <span className="block text-emerald-600">Spotless spaces,</span>
              <span className="block">sustainably</span>
              <span className="block">done.</span>
            </h1>
            <p className="text-base text-emerald-950/70 sm:text-lg">
              Sage &amp; Spruce Cleaning Co. brings eco-friendly, plant-based cleaning to homes
              and offices across Austin &mdash; vetted pros and zero harsh chemicals, every visit.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <LiquidButton asChild size="lg" className="w-full justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-500 sm:w-auto">
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="size-4" />
                </Link>
              </LiquidButton>
              <LiquidButton
                asChild
                size="lg"
                variant="outline"
                className="w-full justify-center border-emerald-900/25 bg-transparent text-emerald-950 hover:bg-emerald-900/5 hover:text-emerald-950 sm:w-auto"
              >
                <Link href="/services">Our Services</Link>
              </LiquidButton>
            </div>
          </div>
        </div>

        {/* Desktop: scroll-driven parallax reveal */}
        <div className="hidden lg:block">
          <SmoothScrollHero
            scrollHeight={1500}
            desktopImage="/eco-cleaning-supplies-wide.png"
            mobileImage="/eco-cleaning-supplies-wide.png"
            initialClipPercentage={25}
            finalClipPercentage={75}
            backgroundColor="#F7E9DB"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F7E9DB] via-[#F7E9DB]/90 to-transparent" />
            <div className="pointer-events-none relative flex h-full max-w-xl flex-col items-start justify-center gap-6 px-6 text-left text-emerald-950 sm:px-12 md:px-16">
              <span className="rounded-full border border-emerald-900/15 bg-white/60 px-4 py-1 text-xs font-medium uppercase tracking-widest text-emerald-800 backdrop-blur-sm">
                Locally Owned &middot; Austin, TX
              </span>
              <h1 className="font-display text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">
                <span className="block text-emerald-600">Spotless spaces,</span>
                <span className="block">sustainably</span>
                <span className="block">done.</span>
              </h1>
              <p className="max-w-xs text-base text-emerald-950/70 sm:max-w-sm sm:text-lg">
                Sage &amp; Spruce Cleaning Co. brings eco-friendly, plant-based cleaning to homes
                and offices across Austin &mdash; vetted pros and zero harsh chemicals, every visit.
              </p>
              <div className="pointer-events-auto flex flex-col gap-3 sm:flex-row">
                <LiquidButton asChild size="lg" className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500">
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="size-4" />
                  </Link>
                </LiquidButton>
                <LiquidButton
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-emerald-900/25 bg-transparent text-emerald-950 hover:bg-emerald-900/5 hover:text-emerald-950"
                >
                  <Link href="/services">Our Services</Link>
                </LiquidButton>
              </div>
            </div>
            <ChevronDown className="pointer-events-none absolute bottom-8 left-1/2 size-6 -translate-x-1/2 animate-bounce text-emerald-900/40" />
          </SmoothScrollHero>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-12 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Why Austin chooses <em className="text-emerald-600">Sage &amp; Spruce</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A cleaner home shouldn&apos;t cost the earth. Here&apos;s what sets our team apart.
          </p>
        </div>

        <RevealGroup className="mt-10 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, index) => (
            <RevealItem
              key={title}
              index={index}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-emerald-100">
                <Icon className="size-6 text-emerald-700" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-10 text-center">
          <Link href="/services" className="text-sm font-medium text-emerald-700 hover:text-emerald-600">
            View all services &rarr;
          </Link>
        </div>
      </section>

      <section className="bg-[#E7EFE6] px-6 py-16 sm:px-12 sm:py-28 lg:py-32">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <RevealItem direction="left" className="relative lg:col-span-5">
              <span
                aria-hidden
                className="absolute -top-10 -left-2 font-display text-[7rem] leading-none text-emerald-900/15 sm:-top-14 sm:text-[9rem]"
              >
                01
              </span>
              <h2 className="relative font-display text-5xl font-semibold tracking-tight text-emerald-700 sm:text-6xl lg:text-7xl">
                Residential
              </h2>
              <p className="relative mt-4 text-lg font-medium text-emerald-950/80 sm:text-xl">
                A deeper clean for every room
              </p>
              <p className="relative mt-6 text-emerald-950/85">
                From kitchens to bathrooms, our team follows a detailed checklist using plant-based
                products, so your home feels fresh without the chemical residue.
              </p>
              <ul className="relative mt-6 space-y-3">
                {homeHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/60 bg-white/50 px-4 py-3 text-sm font-medium text-emerald-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] backdrop-blur-md"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="relative mt-8">
                <LiquidButton asChild size="lg" className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500">
                  <Link href="/services">
                    Explore Home Cleaning
                    <ArrowRight className="size-4" />
                  </Link>
                </LiquidButton>
              </div>
            </RevealItem>

            <RevealItem direction="right" className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-emerald-950/10 sm:aspect-[16/11]">
                <Image
                  src="/residential-tile-cleaning.jpg"
                  alt="A cleaner spraying a plant-based solution onto a tiled kitchen counter"
                  fill
                  sizes="(min-width: 1024px) 620px, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 flex items-center gap-2 text-sm text-emerald-950/85">
                <Leaf className="size-4 text-emerald-600" />
                100% plant-based products on every visit
              </p>
            </RevealItem>
          </div>

          <div className="mt-24 grid items-center gap-12 sm:mt-32 lg:mt-40 lg:grid-cols-12 lg:gap-20">
            <RevealItem direction="left" className="order-2 lg:order-1 lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-emerald-950/10 sm:aspect-[16/11]">
                <Image
                  src="/commercial-cleaning-supplies.jpg"
                  alt="A cleaner carrying a bucket of cleaning supplies and cloths"
                  fill
                  sizes="(min-width: 1024px) 620px, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 flex items-center gap-2 text-sm text-emerald-950/85">
                <CalendarCheck className="size-4 text-emerald-600" />
                Flexible scheduling, before, after, or during hours
              </p>
            </RevealItem>

            <RevealItem direction="right" className="relative order-1 lg:order-2 lg:col-span-5">
              <span
                aria-hidden
                className="absolute -top-10 -left-2 font-display text-[7rem] leading-none text-emerald-900/15 sm:-top-14 sm:text-[9rem]"
              >
                02
              </span>
              <h2 className="relative font-display text-5xl font-semibold tracking-tight text-emerald-700 sm:text-6xl lg:text-7xl">
                Commercial
              </h2>
              <p className="relative mt-4 text-lg font-medium text-emerald-950/80 sm:text-xl">
                Cleaning that keeps your team focused
              </p>
              <p className="relative mt-6 text-emerald-950/85">
                Offices, studios, and small retail spaces stay healthy and welcoming with scheduled
                visits built around your hours, not the other way around.
              </p>
              <ul className="relative mt-6 space-y-3">
                {officeHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/60 bg-white/50 px-4 py-3 text-sm font-medium text-emerald-950 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] backdrop-blur-md"
                  >
                    <CheckCircle2 className="size-5 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="relative mt-8">
                <LiquidButton asChild size="lg" className="gap-2 bg-emerald-600 text-white hover:bg-emerald-500">
                  <Link href="/services">
                    Explore Office Cleaning
                    <ArrowRight className="size-4" />
                  </Link>
                </LiquidButton>
              </div>
            </RevealItem>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Eco-friendly cleaning <em className="text-emerald-600">for every need</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pick a one-time refresh or a recurring plan &mdash; every visit uses the same
            plant-based products and vetted team.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicePreviews.map(({ icon: Icon, title, description, price }) => (
            <div key={title} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <div className="flex size-12 items-center justify-center rounded-full bg-emerald-100">
                <Icon className="size-6 text-emerald-700" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{description}</p>
              <p className="mt-4 text-sm font-medium text-emerald-700">{price}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <LiquidButton asChild size="lg" variant="outline" className="border-emerald-900/15">
            <Link href="/services">View All Services</Link>
          </LiquidButton>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 sm:px-12">
        <div className="grid grid-cols-2 gap-8 rounded-3xl bg-emerald-900 px-8 py-12 text-center text-white sm:grid-cols-4 sm:px-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-semibold sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-emerald-100/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-12 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Loved by homes and offices across Austin
          </h2>
          <p className="mt-4 text-muted-foreground">
            We&apos;d rather let our clients do the talking.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, initials, role, quote }) => (
            <div key={name} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex gap-1 text-emerald-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">&ldquo;{quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-display text-sm font-semibold text-emerald-700">
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="text-xs text-muted-foreground">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#F7E9DB] px-6 py-16 sm:px-12 sm:py-24">
        <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-emerald-200/50 blur-3xl sm:-top-32 sm:-right-32 sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-orange-100/60 blur-3xl sm:-bottom-32 sm:-left-32 sm:h-80 sm:w-80" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Tips on eco-friendly cleaning and seasonal home care, straight from our team.
            </p>
          </div>
          <Link href="/blog" className="text-sm font-medium text-emerald-700 hover:text-emerald-600">
            Visit the blog &rarr;
          </Link>
        </div>

        <BlogCarousel posts={blogPosts.slice(0, 3)} className="relative mx-auto mt-12 max-w-6xl" />

        <div className="relative mx-auto mt-12 hidden max-w-6xl gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-15px_rgba(0,0,0,0.25)]"
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
              <div className="flex flex-1 flex-col border border-white/50 bg-white/50 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] backdrop-blur-xl sm:p-8">
                <span className="text-xs font-medium uppercase tracking-widest text-emerald-700">
                  {post.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold transition-colors group-hover:text-emerald-700">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-emerald-700 transition-transform group-hover:translate-x-1">
                  Read
                  <ArrowRight className="size-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-12 sm:py-24">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Have questions?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/contact" className="font-medium text-emerald-700 hover:text-emerald-600">
              Reach out
            </Link>{" "}
            and we&apos;ll get back to you.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-2xl border border-border bg-card px-6 py-4 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                {question}
                <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand
        heading="Ready for a spotless, sustainable space?"
        description="Get a free, no-obligation quote in minutes. Most first-time visits can be scheduled within the week."
        buttonLabel="Get Your Free Quote"
        href="/contact"
      />
    </>
  );
}
