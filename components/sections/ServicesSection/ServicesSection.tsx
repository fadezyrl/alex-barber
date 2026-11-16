"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { SERVICES } from "@/data/site";
import "./services-section.desktop.css";
import "./services-section.mobile.css";

export const ServicesSection = (): ReactElement => {
  const { dictionary } = useLocale();

  const formatDuration = (minutes: number): string => {
    if (minutes === 60) {
      return dictionary.services.hour;
    }

    return `${minutes} ${dictionary.services.min}`;
  };

  return (
    <section id="svc">
      <h2 className="d">{dictionary.services.title}</h2>
      <ol>
        {SERVICES.map((service) => (
          <li key={service.id}>
            <span className="n">{service.id}</span>
            <div className="svc-copy">
              <h3>{dictionary.services.items[service.titleKey]}</h3>
              <p className="mu meta">
                {service.price}
                <span aria-hidden="true"> · </span>
                {formatDuration(service.durationMin)}
              </p>
            </div>
            <p>{dictionary.services.descriptions[service.descKey]}</p>
          </li>
        ))}
      </ol>
      <p className="mu nt">{dictionary.services.pricingNote}</p>
    </section>
  );
};
