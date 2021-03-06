const port = 8188 // 8101 ~8200

module.exports = {
  // 放置生成的静态资源（js、css、img、fonts）的目录
  assetsDir: 'assets',
  // 生产环境sourcemap
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'source-map' // 开发环境禁用
  },
  // 配置为相对路径，因为项目可能会部署在域名的子路径
  publicPath: '',
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    },
    port: port,
    // public: `localhost:${port}`,
    proxy: {
      '/api': {
        changeOrigin: true,
        target: process.env.VUE_APP_URL,
        // pathRewrite: { '^/api': '' },
        ws: false
      }
    }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        prependData: `@import "~@/styles/vars.scss";`
      }
    }
  }
}
