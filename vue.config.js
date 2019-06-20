
const port = 8088

console.log('url', process.env.VUE_APP_URL)

module.exports = {
  // 放置生成的静态资源（js、css、img、fonts）的目录
  assetsDir: 'assets',
  // 生产环境sourcemap
  productionSourceMap: true,
  // 配置为相对路径，因为项目可能会部署在域名的子路径
  publicPath: '',
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    },
    port: port,
    public: `localhost:${port}`,
    proxy: {
      '/api': {
        changeOrigin: true,
        target: process.env.VUE_APP_URL,
        pathRewrite: { '^/api': '' },
        ws: false
      }
    }
  }
}
