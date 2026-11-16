import { IMAGES } from "@/data/images";

export type ServiceCategory =
  | "haircut"
  | "combo"
  | "premium"
  | "extras";

export type ServiceItem = {
  id: "01" | "02" | "03" | "04" | "05" | "06" | "07";
  titleKey: "s1" | "s2" | "s3" | "s4" | "s5" | "s6" | "s7";
  descKey: "d1" | "d2" | "d3" | "d4" | "d5" | "d6" | "d7";
  price: string;
  durationMin: number;
  category: ServiceCategory;
};

export type ReviewItem = {
  id: string;
  name: string;
  quoteKey: "r1" | "r2" | "r3" | "r4" | "r5" | "r6" | "r7" | "r8";
};

export const SITE = {
  brand: "ALEX·BARBER",
  brandParts: { left: "ALEX", dot: "·", right: "BARBER" } as const,
  barberName: "Alexis Garcia",
  location: "Kendall, Miami, Florida",
  locationShort: "MIAMI · KENDALL",
  locationTag: "KENDALL · MIAMI · FLORIDA",
  address: "14621 SW 104th St, Miami, FL 33186, USA",
  addressDisplay: "14621 SW 104th St, Miami, FL 33186",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=14621+SW+104th+St,+Miami,+FL+33186",
  year: 2026,
  instagramUrl: "https://www.instagram.com/alex_barber_miami/",
  instagramHandle: "@alex_barber_miami",
  bookingUrl:
    "https://booksy.com/en-us/1346494_alex-barber_barber-shop_15889_miami",
  bookingPlatform: "Booksy",
  rating: "5.0",
  reviewCount: 16,
  priceRange: "$35–$80",
  hoursDisplay: "08:00 AM – 08:00 PM",
} as const;

export type SocialNetwork = "instagram";

export const SOCIAL_LINKS = [
  {
    id: "instagram" as const,
    href: "https://www.instagram.com/alex_barber_miami/",
  },
] as const;

export const NAV_LINKS = [
  { href: "#about", labelKey: "about" },
  { href: "#svc", labelKey: "services" },
  { href: "#work", labelKey: "gallery" },
  { href: "#contact", labelKey: "contact" },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    titleKey: "s1",
    descKey: "d1",
    price: "$80",
    durationMin: 60,
    category: "premium",
  },
  {
    id: "02",
    titleKey: "s2",
    descKey: "d2",
    price: "$35+",
    durationMin: 30,
    category: "haircut",
  },
  {
    id: "03",
    titleKey: "s3",
    descKey: "d3",
    price: "$45+",
    durationMin: 45,
    category: "combo",
  },
  {
    id: "04",
    titleKey: "s4",
    descKey: "d4",
    price: "$15+",
    durationMin: 20,
    category: "premium",
  },
  {
    id: "05",
    titleKey: "s5",
    descKey: "d5",
    price: "$20+",
    durationMin: 30,
    category: "extras",
  },
  {
    id: "06",
    titleKey: "s6",
    descKey: "d6",
    price: "$20",
    durationMin: 25,
    category: "premium",
  },
  {
    id: "07",
    titleKey: "s7",
    descKey: "d7",
    price: "$5",
    durationMin: 10,
    category: "extras",
  },
];

export const REVIEWS: ReviewItem[] = [
  { id: "gerald", name: "Gerald", quoteKey: "r1" },
  { id: "luis", name: "Luis", quoteKey: "r2" },
  { id: "sheila", name: "Sheila", quoteKey: "r3" },
  { id: "diego", name: "Diego", quoteKey: "r4" },
  { id: "carlos", name: "Carlos", quoteKey: "r5" },
  { id: "bernardo", name: "Bernardo", quoteKey: "r6" },
  { id: "anthony", name: "Anthony", quoteKey: "r7" },
  { id: "christian", name: "Christian", quoteKey: "r8" },
];

export const WORK_SLOTS = [
  {
    className: "a",
    imageKey: "w1" as const,
    captionKey: "l1" as const,
    labelKey: "w1" as const,
    src: IMAGES.work.w1,
  },
  {
    className: "b",
    imageKey: "w2" as const,
    captionKey: "taper" as const,
    labelKey: "w2" as const,
    src: IMAGES.work.w2,
  },
  {
    className: "c",
    imageKey: "w3" as const,
    captionKey: "l2" as const,
    labelKey: "w3" as const,
    src: IMAGES.work.w3,
  },
  {
    className: "d2",
    imageKey: "w4" as const,
    captionKey: "l3" as const,
    labelKey: "w4" as const,
    src: IMAGES.work.w4,
  },
] as const;
