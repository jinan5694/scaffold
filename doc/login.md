# 路由配置
## 文件
```bash
+- src
  +- router.js  
```
## 内容
- 路由结构
- 元信息的约定和使用
- 拦截器逻辑
- 滚动条行为配置
- 路由模块化

### 路由结构
```bash
+- login
+- ready
+- ready error
+- other full page
+- home
  +- 404
  +- no auth
  +- other business page
```
### 元信息的约定和使用
- title - 页面的标题，多语言形式声明
- requiresAuth - 登录后可访问，否则拦截到登录页

说明:  
设计`home`下的所有页面继承`home`的`requiresAuth`信息，因为`home`作为主页面，有`header`和`nev`组件，需要显示登录信息和菜单等资源，未登录时访问不合理。如果需要展示未登录也可以访问的内容，建议在`root`层级声明一个`fullpage`，不设置`meta - requiresAuth`即可。
### 拦截器逻辑
`requiresAuth`为`true`的页面需要验证`token`是否有效，有效可以访问，否则拦截到登录页。

待定：定义一个meta信息，代表是否有权限访问，用于资源权限控制。无权限则拦截到noAuth页面。