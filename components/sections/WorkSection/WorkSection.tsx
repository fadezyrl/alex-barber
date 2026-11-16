"use client";

import type { ReactElement } from "react";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import { useLocale } from "@/context/LocaleContext";
import { WORK_SLOTS } from "@/data/site";
import "./work-section.desktop.css";
import "./work-section.mobile.css";

export const WorkSection = (): ReactElement => {
  const { dictionary } = useLocale();

  return (
    <section id="work">
      <h2 className="d">{dictionary.work.title}</h2>
      {WORK_SLOTS.map((slot) => (
        <PhotoSlot
          key={slot.imageKey}
          as="figure"
          className={slot.className}
          label={dictionary.work.slots[slot.labelKey]}
          src={slot.src}
        >
          <figcaption>
            {slot.captionKey === "taper"
              ? dictionary.work.taper
              : dictionary.work[slot.captionKey]}
          </figcaption>
        </PhotoSlot>
      ))}
    </section>
  );
};
