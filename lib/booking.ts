import { SITE } from "@/data/site";

export const getBookingHref = (): string => SITE.bookingUrl || "#book";

export const getBookingLinkProps = () => {
  if (!SITE.bookingUrl) {
    return {
      href: "#book",
    } as const;
  }

  return {
    href: SITE.bookingUrl,
    target: "_blank",
    rel: "noopener noreferrer",
  } as const;
};
