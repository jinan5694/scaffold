# 路由
项目模块较多时，需要频繁的注册路由，导致路由配置文件的体积迅速增加。如果没有整体的规划，还会出现路由定义的路径和文件不匹配的问题，删除模块或修改模块名称也需要同步修改路由配置信息。为了解决以上问题，设计了一种自动注册路由的机制。

路由相关信息配置在`src`下的`router`目录，包括3个文件
- `index.js`
- `auto-register.js`
- `guards.js`
## 自动注册
约定 `src/views` 目录及子目录下的 `*.vue` 会被自动注册， `path` 与文件目录结构保持一致。
```js
{
  path: '/foo',
  meta: {
    title: 'title'
  }
}
``` 
目录下的 `index.vue` 会被作为该目录的主文件，注册的路由为该目录，例如：
```js
// /foo/index.vue
{
  path: '/foo'
}
```
不是所有的组件都需要注册为路由，所以我们提供了另一个约定。`components` 目录下的所有组件均忽略注册。
```bash
+- foo
  +- components
    +- component-a.vue
    +- component-b.vue
  +- index.vue
  +- bar.vue
```
```js
{ path: '/foo', component: () => import('@/views/foo/index.vue') },
{ path: '/foo/bar', component: () => import('@/views/foo/bar.vue') }
```
## 手动注册
我们默认是自动注册，但是也可以通过设置进行手动注册。在组件中定义一个 `config` 对象，配置**是否手动注册**属性。框架的所有自定义配置都会放在 `config` 对象中，建议将 `config` 定义在组件的最前面，以便查看。

如果没有特殊情况，不建议将业务模块手动注册。目前手动注册的都是框架的基础模块，对路由的定义顺序由要求，所以采用手动注册并给自动注册的路由提供一个插入的位置。
```js
export default {
  config: {
    isManuallyRegistered: true // 手动注册
  }，
  name: 'Home'
  // other vue options
}
```
## 自动注册的局限性
自动注册可以获取到的信息有限，只有组件路径和config中的信息。所以，我们在config中添加了路由的meta对象，后续也可以按照这个思路扩展功能。例如在config中通过配置实现路由的重定向，页面导航名称，路由参数的处理等，后续可能会根据需求扩展。
## 导航钩子
全局导航守卫定义在`guards.js`中，包括 `beforeEach` 和 `afterEach`。
