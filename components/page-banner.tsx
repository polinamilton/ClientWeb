interface PageBannerProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageBanner({ eyebrow, title, description }: PageBannerProps) {
  return (
    <section className="bg-emerald-950 px-6 pt-32 pb-16 text-center text-white sm:px-12 sm:pt-40 sm:pb-20">
      <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-widest text-emerald-200">
        {eyebrow}
      </span>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-emerald-100/80 sm:text-lg">{description}</p>
      )}
    </section>
  );
}
