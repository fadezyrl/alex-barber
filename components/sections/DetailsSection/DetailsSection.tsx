"use client";

import { useEffect, useRef, useState, type ReactElement } from "react";
import { PhotoSlot } from "@/components/ui/PhotoSlot/PhotoSlot";
import { useLocale } from "@/context/LocaleContext";
import { IMAGES } from "@/data/images";
import "./details-section.desktop.css";
import "./details-section.mobile.css";

export const DetailsSection = (): ReactElement => {
  const { dictionary } = useLocale();
  const ref = useRef<HTMLElement | null>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsIn(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIn(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="det" ref={ref} className={isIn ? "in" : undefined}>
      <PhotoSlot
        label={dictionary.details.photoLabel}
        src={IMAGES.details}
      />
      <span className="mu top">{dictionary.details.eyebrow}</span>
      <div className="t">
        <h2 className="d">{dictionary.details.title}</h2>
        <p>{dictionary.details.body}</p>
      </div>
    </section>
  );
};
