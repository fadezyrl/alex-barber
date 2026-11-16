"use client";

import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

type RevealProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "div" | "section" | "figure" | "span";
  eager?: boolean;
};

export const Reveal = ({
  children,
  as: Tag = "div",
  eager = false,
  className = "",
  ...rest
}: RevealProps): ReactElement => {
  const ref = useRef<HTMLElement | null>(null);
  const [isIn, setIsIn] = useState(eager);

  useEffect(() => {
    if (isIn) {
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
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isIn]);

  return (
    <Tag
      ref={ref as never}
      className={`rv${isIn ? " in" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
};
