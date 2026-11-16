"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { getBookingLinkProps } from "@/lib/booking";
import "./booking-section.desktop.css";
import "./booking-section.mobile.css";

export const BookingSection = (): ReactElement => {
  const { dictionary } = useLocale();
  const bookingProps = getBookingLinkProps();

  return (
    <section id="book">
      <div className="book-inner">
        <h2 className="d">{dictionary.booking.title}</h2>
        <p>{dictionary.booking.body}</p>
        <a className="btn book" {...bookingProps}>
          {dictionary.booking.cta}
        </a>
        <dl className="mu">
          <dt>{dictionary.booking.visitsLabel}</dt>
          <dd>{dictionary.booking.visitsValue}</dd>
          <dt>{dictionary.booking.howLabel}</dt>
          <dd>{dictionary.booking.howValue}</dd>
        </dl>
      </div>
    </section>
  );
};
