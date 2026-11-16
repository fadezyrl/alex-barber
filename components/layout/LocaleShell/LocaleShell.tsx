"use client";

import { useEffect, type ReactElement, type ReactNode } from "react";
import { useLocale } from "@/context/LocaleContext";

type LocaleShellProps = {
  children: ReactNode;
};

export const LocaleShell = ({ children }: LocaleShellProps): ReactElement => {
  const { locale } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale === "ES" ? "es" : "en";
  }, [locale]);

  return <>{children}</>;
};
