import type { Metadata } from "next";
import { Heart, Leaf, MapPin, ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "About Us | Sage & Spruce Cleaning Co.",
  description:
    "Sage & Spruce Cleaning Co. is a locally owned, eco-friendly cleaning company serving Austin, TX. Learn about our story, our values, and our team.",
};

const stats = [
  { label: "Years in Business", value: "8+" },
  { label: "Homes & Offices Cleaned", value: "1,200+" },
  { label: "Team Members", value: "100% Insured" },
  { label: "Harsh Chemicals Used", value: "0" },
];

const values = [
  {
    icon: Leaf,
    title: "Planet First",
    description:
      "Every product in our kit is biodegradable and non-toxic, so a clean home never comes at the planet's expense.",
  },
  {
    icon: Heart,
    title: "People Powered",
    description:
      "We pay fair wages, invest in training, and treat our team like the professionals they are.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Safety",
    description:
      "Background-checked, insured, and bonded. Letting us into your space should never feel like a risk.",
  },
  {
    icon: MapPin,
    title: "Locally Rooted",
    description:
      "Founded and run in Austin. We know this city, and we're invested in keeping it healthy and green.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="Rooted in Austin, growing greener every day"
        description="Sage & Spruce started with a simple idea: a cleaning service shouldn't trade your family's health for a tidy home. Years later, that idea is still at the center of everything we do."
      />

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 sm:px-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Our story
          </h2>
          <p className="text-muted-foreground">
            Sage &amp; Spruce was founded by a small group of Austin locals who couldn&apos;t find a
            cleaning service that matched their standards &mdash; both for the quality of the clean,
            and for what was being sprayed around their kids and pets.
          </p>
          <p className="text-muted-foreground">
            So we built one. We sourced plant-based products that actually perform, trained a team
            around a consistent checklist, and made insurance and background checks non-negotiable
            from day one.
          </p>
          <p className="text-muted-foreground">
            Today we clean homes and offices across Austin, but the goal hasn&apos;t changed: leave
            every space spotless, without leaving anything behind that you wouldn&apos;t want your
            family breathing.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-6 text-center"
            >
              <span className="font-display text-3xl font-semibold text-emerald-700 sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50/60 px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            What we stand for
          </h2>
          <p className="mt-4 text-muted-foreground">
            Four principles guide every visit, every product choice, and every hire.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex size-12 items-center justify-center rounded-full bg-emerald-100">
                <Icon className="size-6 text-emerald-700" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        heading="Want to see the difference for yourself?"
        description="Book your first clean and find out why so many Austin households stick with us."
        buttonLabel="Get Your Free Quote"
        href="/contact"
      />
    </>
  );
}
