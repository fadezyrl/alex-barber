import { IMAGES } from "@/data/images";

export type ServiceItem = {
  id: "01" | "02" | "03" | "04" | "05" | "06";
  titleKey: "s1" | "s2" | "s3" | "s4" | "s5" | "s6";
  descKey: "d1" | "d2" | "d3" | "d4" | "d5" | "d6";
};

export const SITE = {
  brand: "ALEX·BARBER",
  brandParts: { left: "ALEX", dot: "·", right: "BARBER" } as const,
  location: "Kendall, Miami, Florida",
  locationShort: "MIAMI · KENDALL",
  locationTag: "KENDALL · MIAMI · FLORIDA",
  year: 2026,
  instagramUrl: "https://www.instagram.com/alex_barber_miami/",
  instagramHandle: "@alex_barber_miami",
  bookingUrl: "",
} as const;

export const NAV_LINKS = [
  { href: "#about", labelKey: "about" },
  { href: "#svc", labelKey: "services" },
  { href: "#work", labelKey: "gallery" },
  { href: "#contact", labelKey: "contact" },
] as const;

export const SERVICES: ServiceItem[] = [
  { id: "01", titleKey: "s1", descKey: "d1" },
  { id: "02", titleKey: "s2", descKey: "d2" },
  { id: "03", titleKey: "s3", descKey: "d3" },
  { id: "04", titleKey: "s4", descKey: "d4" },
  { id: "05", titleKey: "s5", descKey: "d5" },
  { id: "06", titleKey: "s6", descKey: "d6" },
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
