import { createSharedPathnamesNavigation } from 'next-intl/navigation';
interface LocaleEvent {
  name: string;
  code: string;
  iso: string;
  dir: string;
}
export const locales = ['en', 'de', 'es', 'ja','ko','it','pt'];
export const localePrefix = 'as-needed';
export const defaultLocale= "en";
export const localeItems:LocaleEvent[]= [
  { name: "English",code: "en", iso: "en-US", dir: "ltr" },
  { name: "español",code: "es", iso: "es-ES", dir: "ltr" },
  { name: "中文",code: "zh", iso: "zh-CN", dir: "ltr" },
  { name: "Deutsch",code: "de", iso: "de-DE", dir: "ltr" },
  { name: "Italiano",code: "it", iso: "it-IT", dir: "ltr" },
  { name: "日本語",code: "ja", iso: "ja-JP", dir: "ltr" },
  { name: "한국인",code: "ko", iso: "ko-KR", dir: "ltr" },
  { name: "Português",code: "pt", iso: "pt-PT", dir: "ltr" },
]

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });