import type { Metadata } from "next";
import {
  Building2,
  CalendarCheck,
  Hammer,
  Home,
  PackageOpen,
  Sparkles,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "Services | Sage & Spruce Cleaning Co.",
  description:
    "Explore eco-friendly cleaning services from Sage & Spruce, including standard, deep, move-in/move-out, recurring, office, and post-construction cleaning in Austin, TX.",
};

const services = [
  {
    icon: Home,
    title: "Standard Home Cleaning",
    description:
      "Kitchens, bathrooms, floors, and living spaces refreshed with our plant-based product line. Perfect for regular upkeep.",
    price: "From $120 per visit",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "A top-to-bottom reset that covers baseboards, inside appliances, grout, and every corner that everyday cleaning skips.",
    price: "From $220 per visit",
  },
  {
    icon: PackageOpen,
    title: "Move-In / Move-Out Cleaning",
    description:
      "Start fresh or leave a space spotless for the next tenant, including cabinets, closets, and appliance interiors.",
    price: "From $250 per visit",
  },
  {
    icon: Building2,
    title: "Office & Commercial",
    description:
      "Scheduled cleaning for offices, studios, and small retail spaces that keeps shared areas healthy for your team and clients.",
    price: "Custom quote",
  },
  {
    icon: CalendarCheck,
    title: "Recurring Plans",
    description:
      "Weekly, biweekly, or monthly visits with a consistent team and checklist, plus a discount for ongoing service.",
    price: "Save 10-15%",
  },
  {
    icon: Hammer,
    title: "Post-Construction Cleaning",
    description:
      "Dust and debris removal after a renovation or build, so your space is move-in ready, not just swept.",
    price: "Custom quote",
  },
];

const steps = [
  {
    step: "01",
    title: "Tell us about your space",
    description:
      "Share a few details about your home or office and the type of clean you're looking for. We'll send a free quote within hours.",
  },
  {
    step: "02",
    title: "We send a vetted team",
    description:
      "A background-checked, insured cleaning team arrives with plant-based products and a room-by-room checklist.",
  },
  {
    step: "03",
    title: "Enjoy a spotless space",
    description:
      "Walk through with us if you'd like, or just relax. Not happy with a spot? We'll come back and make it right, free.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our Services"
        title="Eco-friendly cleaning for every space"
        description="From a one-time deep clean to ongoing weekly visits, every Sage & Spruce service uses the same plant-based products and vetted, insured team."
      />

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, price }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-emerald-100">
                <Icon className="size-6 text-emerald-700" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{description}</p>
              <p className="mt-4 text-sm font-medium text-emerald-700">{price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50/60 px-6 py-20 sm:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-muted-foreground">
            Booking with us is simple, and there's never any pressure or hidden fees.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-3">
          {steps.map(({ step, title, description }) => (
            <div key={step} className="flex flex-col gap-3">
              <span className="font-display text-4xl font-semibold text-emerald-600">{step}</span>
              <h3 className="font-display text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        heading="Not sure which service is right for you?"
        description="Tell us a bit about your space and we'll recommend the best plan, no obligation."
        buttonLabel="Get Your Free Quote"
        href="/contact"
      />
    </>
  );
}
