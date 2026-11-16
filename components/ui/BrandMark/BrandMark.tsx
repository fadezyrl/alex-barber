import type { ReactElement } from "react";
import { SITE } from "@/data/site";
import "./brand-mark.css";

type BrandMarkProps = {
  ariaLabel: string;
  href?: string;
};

export const BrandMark = ({
  ariaLabel,
  href = "#hero",
}: BrandMarkProps): ReactElement => {
  return (
    <a href={href} className="wm" aria-label={ariaLabel}>
      {SITE.brandParts.left}
      <i>{SITE.brandParts.dot}</i>
      {SITE.brandParts.right}
    </a>
  );
};
