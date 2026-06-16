import { Leaf, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  { icon: Phone, value: "(512) 555-0142", href: "tel:+15125550142" },
  {
    icon: Mail,
    value: "hello@sageandsprucecleaning.com",
    href: "mailto:hello@sageandsprucecleaning.com",
  },
  { icon: MapPin, value: "Austin, TX & surrounding areas" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 sm:px-12 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
            <Leaf className="size-5 text-emerald-600" />
            Sage &amp; Spruce Cleaning Co.
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Eco-friendly home &amp; office cleaning, proudly serving Austin, TX.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          {contactInfo.map(({ icon: Icon, value, href }) => (
            <div key={value} className="flex items-center gap-2 text-muted-foreground">
              <Icon className="size-4 text-emerald-600" />
              {href ? (
                <a href={href} className="transition-colors hover:text-emerald-700">
                  {value}
                </a>
              ) : (
                <span>{value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 text-center text-xs text-muted-foreground sm:px-12">
        {`© ${new Date().getFullYear()} Sage & Spruce Cleaning Co. · Austin, TX`}
      </div>
    </footer>
  );
}
