import Storage from './storage'
const TOKEN_KEY = 'token'

export function getToken () {
  return Storage.get(TOKEN_KEY)
}

export function setToken (token) {
  Storage.set(TOKEN_KEY, token)
}

export function removeToken () {
  Storage.remove(TOKEN_KEY)
}
