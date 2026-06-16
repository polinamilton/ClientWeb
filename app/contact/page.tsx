import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "Contact | Sage & Spruce Cleaning Co.",
  description:
    "Request a free quote from Sage & Spruce Cleaning Co. Eco-friendly home and office cleaning across Austin, TX.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "(512) 555-0142",
    href: "tel:+15125550142",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@sageandsprucecleaning.com",
    href: "mailto:hello@sageandsprucecleaning.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Austin, TX & surrounding areas",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat, 8:00 AM - 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Let's get your space sparkling"
        description="Fill out the form below or reach out directly. We typically respond with a free quote within one business day."
      />

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 sm:px-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:items-start">
        <div className="space-y-4">
          {contactDetails.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                <Icon className="size-5 text-emerald-700" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{label}</p>
                {href ? (
                  <a href={href} className="text-base font-medium hover:text-emerald-700">
                    {value}
                  </a>
                ) : (
                  <p className="text-base font-medium">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <ContactForm />
      </section>
    </>
  );
}
