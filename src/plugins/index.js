/**
 * import all plugins in folders
 */

const plugins = []
const files = require.context('./', false, /\.js$/)
files.keys().forEach(key => {
  if (key === './index.js') return
  plugins.push(files(key))
})

export default plugins
