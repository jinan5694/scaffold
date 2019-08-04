# about lint
本项目使用eslint做语法检查，可以检查的文件包括
- js
- vue

使用的规则包括两个包
- standard
- eslint-plugin-vue

配置文件位置为根目录的`.eslintrc.js`

## standard
此规则包含了一些预定义的JavaScript语法推荐，可以规避一些常见的书写错误和运行风险。
## eslint-plugin-vue
vue官方团队出品，专门为vue语法检查而设计。支持单文件组件（SFC）的检查和vue特有语法检查。例如：
- vue属性的书写顺序
- 模板中的书写格式
- 计算属性中必须返回值

eslint-plugin-vue有4个等级的配置包
- base
- essential
- strongly recommended
- recommended

规则数量从少到多，并且是包含的关系。我们选用recommended规则包。

但是，在开发的过程中推荐规则包中有部分规则影响了开发的流畅性，代码的可读性。例如：
- 单行只能书写一个属性
- 多行组件的尖括号必须独立一行

为了优化我们的开发体验，我们在recommended的基础上，对部分规则进行了调整和定制化的配置。
## 未分类规则
经测试，未分类规则主要是针对模板中的行内js的lint规则的补充，我认为还是有必要添加进来。效果在开发中观察体会。

以上