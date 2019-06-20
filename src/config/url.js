let baseUrl = '/api'
if (localStorage.baseUrl) {
  baseUrl = localStorage.baseUrl
  console.warn(`[app] this baseUrl "${baseUrl}" is in use.`)
}

export default baseUrl
