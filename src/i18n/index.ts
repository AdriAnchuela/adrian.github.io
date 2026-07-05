import { en } from './en';
import { es } from './es';

export type Locale = 'en' | 'es';
export type UIDict = typeof en;

const dicts: Record<Locale, UIDict> = { en, es };

export function useTranslations(locale: Locale): UIDict {
  return dicts[locale];
}

export function localePath(locale: Locale, hash = ''): string {
  const base = locale === 'en' ? '/' : '/es/';
  return `${base}${hash}`;
}
