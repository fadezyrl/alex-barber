import { es, type Dictionary } from "./es";
import { en } from "./en";

export type Locale = "ES" | "EN";

export const dictionaries: Record<Locale, Dictionary> = {
  ES: es,
  EN: en,
};

export const DEFAULT_LOCALE: Locale = "ES";

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];

export type { Dictionary };
