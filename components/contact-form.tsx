"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { cn } from "@/lib/utils";

const services = [
  "Standard Home Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out Cleaning",
  "Office & Commercial",
  "Recurring Plans",
  "Post-Construction Cleaning",
  "Not sure yet",
];

const fieldClasses = cn(
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors",
  "placeholder:text-muted-foreground",
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
);

export function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-10 text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="size-6 text-emerald-700" />
        </div>
        <h3 className="font-display text-xl font-semibold">Thanks for reaching out!</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          We&apos;ve received your request and will get back to you with a free quote within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input id="name" name="name" type="text" required placeholder="Jane Doe" className={fieldClasses} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" placeholder="(512) 555-0100" className={fieldClasses} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="service" className="text-sm font-medium">
            Service
          </label>
          <select id="service" name="service" defaultValue={services[0]} className={fieldClasses}>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Tell us about your space
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Number of bedrooms/bathrooms, preferred schedule, anything we should know..."
          className={cn(fieldClasses, "resize-none")}
        />
      </div>

      <div className="mt-2 self-start">
        <LiquidButton type="submit" size="lg" className="bg-emerald-600 text-white hover:bg-emerald-500">
          Request a Free Quote
        </LiquidButton>
      </div>
    </form>
  );
}
