
import i18n from '@/i18n'

export function t (key) {
  if (key.i18n) {
    return i18n.t(key.i18n)
  }
  return key
}
