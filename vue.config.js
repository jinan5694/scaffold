
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
    port: 8083,
    proxy: {
      '/api2': {
        changeOrigin: true,
        target: 'http://cloudbrain.aicloudata.com/gateway/dms/api',
        ws: false
      }
    }
  }
}
