"use client";

import type { ReactElement } from "react";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import { useLocale } from "@/context/LocaleContext";
import { IMAGES } from "@/data/images";
import { SITE } from "@/data/site";
import "./about-section.desktop.css";
import "./about-section.mobile.css";

export const AboutSection = (): ReactElement => {
  const { dictionary } = useLocale();

  return (
    <section id="about">
      <PhotoSlot
        className="p1"
        label={dictionary.about.portraitLabel}
        src={IMAGES.about.a1}
      />
      <div className="tx">
        <span className="mu">{dictionary.about.eyebrow}</span>
        <h2 className="d">{dictionary.about.title}</h2>
        <p>{dictionary.about.p1}</p>
        <p>{dictionary.about.p2}</p>
        <span className="mu loc">{SITE.locationTag}</span>
      </div>
      <PhotoSlot
        className="p2"
        label={dictionary.about.workingLabel}
        src={IMAGES.about.a2}
      />
    </section>
  );
};
