# 配置相关
## source-map
开发模式的`source-map`默认开启。查看源码发现使用的模式为`cheap-module-eval-source-map`。

关于所有模式的详细信息见[这里](https://webpack.docschina.org/configuration/devtool/)

我们尝试调整为`source-map`，感受一下性能差异。

# 命名规范
文件，目录都采用全小写，横杆连接的风格，原因：
- git对文件名大小写不敏感
- router match 大小写不敏感