module.exports = {
  // 放置生成的静态资源（js、css、img、fonts）的目录
  assetsDir: 'assets',
  // 生产环境sourcemap
  productionSourceMap: true,
  // 配置为相对路径，因为项目可能会部署在域名的子路径
  publicPath: '',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://cloudbrain.aicloudata.com/gateway/dms/api',
        changeOrigin: true,
        ws: false
      }
    }
  }
}
