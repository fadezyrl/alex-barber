"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { SOCIAL_LINKS, type SocialNetwork } from "@/data/site";
import "./social-links.css";

type SocialLinksProps = {
  tone?: "light" | "dark";
};

const ICONS: Record<SocialNetwork, ReactElement> = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="12"
        r="4.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="17.35" cy="6.7" r="1.15" fill="currentColor" />
    </svg>
  ),
};

export const SocialLinks = ({
  tone = "dark",
}: SocialLinksProps): ReactElement => {
  const { dictionary } = useLocale();

  return (
    <nav
      className={`social-links social-links--${tone}`}
      aria-label={dictionary.social.groupAria}
    >
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={dictionary.social[link.id]}
        >
          {ICONS[link.id]}
        </a>
      ))}
    </nav>
  );
};
