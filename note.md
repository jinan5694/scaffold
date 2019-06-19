### 跨域相关
切换后端服务地址有两种方式
- 通过`vue.config.js`中的`proxy`实现。修改`.env.development.local`中的server-url
- 修改baseURL

优点：支持跨域

缺点：需要重启前端服务

优点：不需要重启

缺点：不支持跨域