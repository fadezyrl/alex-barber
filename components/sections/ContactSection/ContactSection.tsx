"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { SITE } from "@/data/site";
import { getBookingLinkProps } from "@/lib/booking";
import "./contact-section.desktop.css";
import "./contact-section.mobile.css";

export const ContactSection = (): ReactElement => {
  const { dictionary } = useLocale();
  const bookingProps = getBookingLinkProps();

  return (
    <section id="contact">
      <h2>
        {dictionary.contact.titleBefore}
        <i>{dictionary.contact.titleItalic}</i>
      </h2>
      <ul>
        <li>
          <span className="mu">{dictionary.contact.area}</span>
          {SITE.location}
        </li>
        <li>
          <span className="mu">{dictionary.contact.address}</span>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SITE.addressDisplay}
          </a>
        </li>
        <li>
          <span className="mu">{dictionary.contact.instagram}</span>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {SITE.instagramHandle}
          </a>
        </li>
        <li>
          <span className="mu">{dictionary.contact.booking}</span>
          <a className="book" {...bookingProps}>
            {dictionary.booking.cta}
          </a>
        </li>
        <li>
          <span className="mu">{dictionary.contact.hours}</span>
          {dictionary.contact.hoursNote}
        </li>
      </ul>
    </section>
  );
};
