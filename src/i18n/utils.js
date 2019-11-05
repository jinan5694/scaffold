import { locale } from '@/config'
const LOCALE_KEY = 'APP_LOCALE'

export function getLocale () {
  return localStorage.getItem(LOCALE_KEY) || locale
}

export function setLocale (locale) {
  localStorage.setItem(LOCALE_KEY, locale)
}
