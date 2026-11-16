"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { SERVICES } from "@/data/site";
import "./services-section.desktop.css";
import "./services-section.mobile.css";

export const ServicesSection = (): ReactElement => {
  const { dictionary } = useLocale();

  return (
    <section id="svc">
      <h2 className="d">{dictionary.services.title}</h2>
      <ol>
        {SERVICES.map((service) => (
          <li key={service.id}>
            <span className="n">{service.id}</span>
            <h3>{dictionary.services.items[service.titleKey]}</h3>
            <p>{dictionary.services.descriptions[service.descKey]}</p>
          </li>
        ))}
      </ol>
      <p className="mu nt">{dictionary.services.pricingNote}</p>
    </section>
  );
};
