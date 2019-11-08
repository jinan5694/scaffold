import { locale } from '@/config'
import Storage from '@/utils/storage'
const LOCALE_KEY = 'APP_LOCALE'

export function getLocale () {
  return Storage.get(LOCALE_KEY) || locale
}

export function setLocale (locale) {
  Storage.set(LOCALE_KEY, locale)
}
