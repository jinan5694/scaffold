# jsconfig
解决绝对路径import文件的问题

之前我们只能使用相对路径来import文件，如果路径过深就会出现下面的情况
```js
import foo from '../../../../../bar'
```
为了代码的可读性和支持vue-cli的全局别名设置（@/），引入jsconfig.json在根目录

## 问题
- 只支持js，vue文件的导入提示，css，png等其他资源不支持
- 暂时不支持在js中引入vue文件，找不到
- 这个文件是vscode专用的，它是tsconfig的子集，不支持其他编辑器