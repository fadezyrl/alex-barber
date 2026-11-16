"use client";

import type { ReactElement } from "react";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import { useLocale } from "@/context/LocaleContext";
import { IMAGES } from "@/data/images";
import { SITE } from "@/data/site";
import { getBookingLinkProps } from "@/lib/booking";
import "./hero-section.desktop.css";
import "./hero-section.mobile.css";

export const HeroSection = (): ReactElement => {
  const { dictionary } = useLocale();
  const bookingProps = getBookingLinkProps();
  const ariaLabel = `${dictionary.hero.line1} ${dictionary.hero.line2} ${dictionary.hero.line3}`;

  return (
    <section id="hero" className="hero">
      <h1 className="d" aria-label={ariaLabel}>
        <span>
          <em>{dictionary.hero.line1}</em>
        </span>
        <span>
          <em>{dictionary.hero.line2}</em>
        </span>
        <span>
          <em>{dictionary.hero.line3}</em>
        </span>
      </h1>
      <PhotoSlot
        label={dictionary.hero.photoLabel}
        src={IMAGES.hero}
        videoSrc={IMAGES.heroVideo}
        priority
      />
      <div className="hb">
        <p>{dictionary.hero.sub}</p>
        <a className="btn book" {...bookingProps}>
          {dictionary.hero.cta}
        </a>
        <span className="mu">{SITE.locationShort}</span>
      </div>
    </section>
  );
};
