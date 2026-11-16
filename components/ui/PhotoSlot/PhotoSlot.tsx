"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";
import "./photo-slot.css";

type PhotoSlotProps = {
  label: string;
  src?: string;
  className?: string;
  reveal?: boolean;
  priority?: boolean;
  as?: "div" | "figure";
  children?: ReactNode;
};

export const PhotoSlot = ({
  label,
  src = "",
  className = "",
  reveal = true,
  priority = false,
  as: Tag = "div",
  children,
}: PhotoSlotProps): ReactElement => {
  const ref = useRef<HTMLElement | null>(null);
  const [isIn, setIsIn] = useState(!reveal);
  const isEmpty = !src;

  useEffect(() => {
    if (!reveal || isIn) {
      return;
    }

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
      { threshold: 0.08, rootMargin: "10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reveal, isIn]);

  return (
    <Tag
      ref={ref as never}
      className={`ph${isEmpty ? " empty" : ""} ${className}`.trim()}
      data-l={isEmpty ? label : undefined}
    >
      {!isEmpty ? (
        <div className={`ph-media${isIn ? " in" : ""}`}>
          <Image
            src={src}
            alt={label}
            fill
            sizes="(max-width: 820px) 100vw, 50vw"
            className="ph-img"
            priority={priority}
          />
        </div>
      ) : null}
      {children}
    </Tag>
  );
};
