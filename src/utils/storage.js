/**
 * 简单的本地存储工具
 * 支持存储string, number, boolean, object 类型的值
 */

const TYPES = ['string', 'number', 'boolean', 'object']

export default {
  get (key) {
    if (isNotString(key)) return
    const data = getValue(key)
    switch (data.type) {
      case 'number':
        return +data.value
      case 'boolean':
        return !!data.value
      default:
        return data.value
    }
  },
  set (key, value) {
    if (isNotString(key)) return

    const type = typeof value
    if (TYPES.includes(type)) {
      window.localStorage.setItem(key, JSON.stringify({
        type: type,
        value: value
      }))
    } else {
      console.warn(`[app storage] 不支持的存储类型，type: ${type}`)
    }
  },
  remove (key) {
    if (isNotString(key)) return
    window.localStorage.removeItem(key)
  }
}

function isNotString (key) {
  if (typeof key !== 'string') {
    console.warn(`[app storage] "key" 必须是字符串类型`)
    return true
  }
}

function getValue (key) {
  const value = window.localStorage.getItem(key)
  try {
    const data = JSON.parse(value)
    return data.type ? data : { value: data }
  } catch (error) {
    return { type: 'string', value: value }
  }
}
