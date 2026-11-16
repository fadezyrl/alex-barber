"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { SITE } from "@/data/site";
import { getBookingLinkProps } from "@/lib/booking";
import "./site-footer.desktop.css";
import "./site-footer.mobile.css";

export const SiteFooter = (): ReactElement => {
  const { dictionary } = useLocale();
  const bookingProps = getBookingLinkProps();

  return (
    <footer>
      <div className="w" aria-hidden="true">
        ALEX BARBER
      </div>
      <div className="r1 mu">
        <span>{SITE.locationShort}</span>
        <div>
          <a href="#about">{dictionary.nav.about}</a>
          <a href="#svc">{dictionary.nav.services}</a>
          <a href="#work">{dictionary.nav.gallery}</a>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <a className="btn book" {...bookingProps}>
          {dictionary.booking.cta}
        </a>
      </div>
      <p className="mu cp">{dictionary.footer.copyright}</p>
    </footer>
  );
};
