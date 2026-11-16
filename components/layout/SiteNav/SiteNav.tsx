"use client";

import { useEffect, useState, type ReactElement } from "react";
import { BrandMark } from "@/components/ui/BrandMark/BrandMark";
import { useLocale } from "@/context/LocaleContext";
import { NAV_LINKS } from "@/data/site";
import { getBookingLinkProps } from "@/lib/booking";
import "./site-nav.desktop.css";
import "./site-nav.mobile.css";

export const SiteNav = (): ReactElement => {
  const { dictionary, locale, toggleLocale } = useLocale();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const bookingProps = getBookingLinkProps();

  useEffect(() => {
    const onScroll = (): void => {
      setSolid(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = (): void => setOpen(false);

  return (
    <nav
      id="nav"
      className={[solid ? "s" : "", open ? "o" : ""].filter(Boolean).join(" ")}
      aria-label="Primary"
    >
      <BrandMark ariaLabel={dictionary.nav.brandAria} />
      <div className="nl mu" id="nl">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {dictionary.nav[link.labelKey]}
          </a>
        ))}
        <button
          className="lg mu"
          type="button"
          id="lg"
          aria-label={dictionary.nav.localeAria}
          onClick={toggleLocale}
        >
          {locale === "ES" ? (
            <>
              <b>{dictionary.locale.es}</b> / {dictionary.locale.en}
            </>
          ) : (
            <>
              {dictionary.locale.es} / <b>{dictionary.locale.en}</b>
            </>
          )}
        </button>
        <a className="btn book" {...bookingProps} onClick={closeMenu}>
          {dictionary.nav.book}
        </a>
      </div>
      <button
        className="bg"
        id="bg"
        type="button"
        aria-label={dictionary.nav.menuAria}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
    </nav>
  );
};
