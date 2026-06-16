import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { LiquidButton } from "@/components/ui/liquid-glass-button";

interface CtaBandProps {
  heading: string;
  description: string;
  buttonLabel: string;
  href: string;
}

export function CtaBand({ heading, description, buttonLabel, href }: CtaBandProps) {
  return (
    <section className="bg-emerald-900 px-6 py-20 text-center text-white sm:px-12">
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
      <p className="mx-auto mt-3 max-w-xl text-emerald-100/80">{description}</p>
      <div className="mt-8">
        <LiquidButton asChild size="lg" className="gap-2 bg-white text-emerald-900 hover:bg-emerald-50">
          <Link href={href}>
            {buttonLabel}
            <ArrowRight className="size-4" />
          </Link>
        </LiquidButton>
      </div>
    </section>
  );
}
