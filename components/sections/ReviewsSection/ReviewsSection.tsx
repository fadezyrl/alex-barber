"use client";

import {
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type ReactElement,
  type PointerEvent as ReactPointerEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { useLocale } from "@/context/LocaleContext";
import { REVIEWS, SITE } from "@/data/site";
import "./reviews-section.desktop.css";
import "./reviews-section.mobile.css";

const AUTO_MS = 6500;
const SWIPE_PX = 48;

export const ReviewsSection = (): ReactElement => {
  const { dictionary } = useLocale();
  const total = REVIEWS.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const dragStartX = useRef<number | null>(null);

  const goTo = useEffectEvent((next: number): void => {
    const wrapped = ((next % total) + total) % total;
    setIndex(wrapped);
  });

  const goPrev = useEffectEvent((): void => {
    goTo(index - 1);
  });

  const goNext = useEffectEvent((): void => {
    goTo(index + 1);
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = (): void => setReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || total < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      goNext();
    }, AUTO_MS);

    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, total]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>): void => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }
    dragStartX.current = event.clientX;
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>): void => {
    if (dragStartX.current === null) {
      return;
    }

    const delta = event.clientX - dragStartX.current;
    dragStartX.current = null;

    if (Math.abs(delta) < SWIPE_PX) {
      return;
    }

    if (delta < 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  const onKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>): void => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  return (
    <section id="reviews" aria-labelledby="reviews-title">
      <div className="reviews-head">
        <span className="mu eyebrow">{dictionary.reviews.eyebrow}</span>
        <h2 id="reviews-title" className="d">
          {dictionary.reviews.title}
        </h2>
        <p className="mu summary">{dictionary.reviews.summary}</p>
      </div>

      <div
        className="reviews-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label={dictionary.reviews.regionAria}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setPaused(false);
          }
        }}
        onKeyDown={onKeyDown}
      >
        <div className="reviews-rail" aria-hidden="true">
          <span className="reviews-mark">“</span>
          <span className="reviews-rating">{dictionary.reviews.ratingLabel}</span>
        </div>

        <div
          className="reviews-stage"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            dragStartX.current = null;
          }}
        >
          <div className="reviews-live" aria-live="polite" aria-atomic="true">
            {REVIEWS.map((review, reviewIndex) => {
              const isActive = reviewIndex === index;
              return (
                <figure
                  key={review.id}
                  className={`reviews-slide${isActive ? " is-active" : ""}`}
                  aria-hidden={!isActive}
                  data-index={reviewIndex}
                >
                  <blockquote>
                    <p>{dictionary.reviews.quotes[review.quoteKey]}</p>
                  </blockquote>
                  <figcaption>
                    <cite>{review.name}</cite>
                    <span className="mu reviews-staff">{SITE.barberName}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>

        <div className="reviews-controls">
          <button
            type="button"
            className="reviews-nav"
            aria-label={dictionary.reviews.prevAria}
            onClick={goPrev}
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className="reviews-dots" role="tablist" aria-label={dictionary.reviews.regionAria}>
            {REVIEWS.map((review, reviewIndex) => (
              <button
                key={review.id}
                type="button"
                role="tab"
                className={`reviews-dot${reviewIndex === index ? " is-active" : ""}`}
                aria-label={`${dictionary.reviews.goToAria} ${reviewIndex + 1}`}
                aria-selected={reviewIndex === index}
                tabIndex={reviewIndex === index ? 0 : -1}
                onClick={() => goTo(reviewIndex)}
              />
            ))}
          </div>

          <button
            type="button"
            className="reviews-nav"
            aria-label={dictionary.reviews.nextAria}
            onClick={goNext}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <p className="mu reviews-count" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
          <span> / </span>
          {String(total).padStart(2, "0")}
        </p>
      </div>

      <p className="mu source">
        <a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer">
          {dictionary.reviews.source}
        </a>
      </p>
    </section>
  );
};
