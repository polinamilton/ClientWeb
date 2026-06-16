export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "five-plant-based-swaps",
    title: "5 Plant-Based Swaps for a Healthier Home",
    excerpt:
      "Small changes to the products under your sink can make a big difference for your family's air quality. Here's where we'd start.",
    date: "2026-04-02",
    readTime: "4 min read",
    category: "Eco Living",
    image: "/blog-eco-living-air-purifier.jpg",
    content: [
      "Most conventional cleaning products rely on synthetic fragrances and harsh solvents to get the job done. They work, but they also leave behind volatile organic compounds (VOCs) that linger in your home long after the bottle goes back under the sink.",
      "Every cleaner on our team carries a kit built around plant-based, biodegradable alternatives. Here are five swaps you can make at home today.",
      "1. All-purpose spray - trade ammonia-based cleaners for a castile-soap and vinegar blend. It cuts through grease just as well without the fumes.",
      "2. Glass cleaner - a simple mix of water, white vinegar, and a drop of citrus oil leaves windows streak-free without ammonia.",
      "3. Scrubbing powder - baking soda works on tubs, sinks, and stovetops, and it's gentle enough for daily use.",
      "4. Dish soap - look for plant-derived surfactants instead of petroleum-based ones. They're just as tough on grease.",
      "5. Air freshener - skip the aerosol and simmer citrus peels with herbs on the stove, or use a diffuser with essential oils.",
      "Switching even a few products can noticeably reduce the chemical load in your home, and it's exactly the standard we hold ourselves to on every visit.",
    ],
  },
  {
    slug: "spring-cleaning-checklist-austin",
    title: "The Austin Spring Cleaning Checklist",
    excerpt:
      "Pollen season hits Central Texas hard. Here's how to reset your home for spring without spending your whole weekend on it.",
    date: "2026-03-10",
    readTime: "5 min read",
    category: "Home Tips",
    image: "/blog-home-tips-allergy-season.jpg",
    content: [
      "If you live in Austin, you already know: cedar and oak pollen don't just dust your car, they work their way into every room of your house. Spring cleaning here isn't optional, it's seasonal maintenance.",
      "Start with soft surfaces. Curtains, throw pillows, and rugs trap pollen and pet dander all winter. A quick wash or a thorough vacuum with a HEPA filter makes a bigger difference than people expect.",
      "Don't forget the air. Replace HVAC filters before the first big pollen wave, and wipe down vents and ceiling fan blades, which collect a surprising amount of dust.",
      "Deep clean the kitchen. Pull out the fridge and stove to clean behind and underneath, wipe down cabinet fronts, and descale the coffee maker. These are the spots that get skipped every week.",
      "Tackle the entryway. Shoes, bags, and jackets carry pollen straight in from outside. A weekly wipe-down of entry floors and mats keeps it from spreading further.",
      "Reset the bathrooms. Replace shower curtains or liners, scrub grout lines, and clean out medicine cabinets that have been quietly collecting expired products.",
      "If that list feels like a lot, that's because it is. A seasonal deep clean from our team covers all of it in a single visit, so you can enjoy the nice weather instead of spending it indoors with a mop.",
    ],
  },
  {
    slug: "how-we-vet-our-team",
    title: "How We Vet Every Sage & Spruce Pro",
    excerpt:
      "Letting someone into your home is a big deal. Here's exactly what happens before a cleaner ever joins our team.",
    date: "2026-02-18",
    readTime: "3 min read",
    category: "Behind the Scenes",
    image: "/blog-behind-the-scenes-cleaning-caddy.jpg",
    content: [
      "We hear it often: \"I've never had someone else clean my house before.\" Trust is the whole foundation of this business, so we take it seriously.",
      "Every team member goes through a multi-step screening process before their first visit. That includes a full background check, in-person interviews, and a reference review.",
      "Once someone joins the team, they're paired with a senior cleaner for hands-on training that covers not just technique, but our product standards, safety protocols, and how we handle pets, valuables, and access to your home.",
      "We're also fully insured and bonded, so you're covered in the rare case something goes wrong.",
      "Finally, every client gets a direct line to our office. If anything about a visit doesn't meet your expectations, we want to know, and we'll make it right.",
      "It's a lot of process for something that might look simple from the outside. But a spotless home should never come at the cost of feeling safe in it.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
