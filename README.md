# 前端项目脚手架

## 技术选型
- element-ui
- sass
- jest
- mock
- proxy
- i18n
- login/logout
- axios config
- svg icon
- custom theme 
- multi tab
- layout 
- menu
- BEM *

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### self signed certificate in certificate chain
```bash
npm config set strict-ssl false
npm config set unsafe-perm true
```

# 更新包版本
### 可以使用以下命令更新项目的包到新版本，无法更新主版本
```bash
npm outdated
npm update
```
### 如果想更新主版本，需要手动升级
```bash
npm i --save package-name@latest
```