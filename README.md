# fetools

一个轻量、好用的前端工具函数库。

### Feature
- [ ] 支持 TypeScript
- [ ] 轻量，无依赖其他第三方库
- [ ] 支持 IE9+
- [ ] 测试覆盖率 > 95%

### Usage
```
npm install save fetools-utils
```

### API
[API 文档](./docs/API.md)

### TODO
已通过测试，[未发布的API文档](./docs/TODO.md)

### Test
```
npm run test
```

### Build
```
npm run build
```

### Coverage

查看测试覆盖率报告
```
npm run coverage
```

### PR
如何PR？请移步[PR 流程](./docs/PR.md)

### Q & A 

#### 1. 使用 TypeScript 编写
TypeScript 是 JavaScript 的超集，增加静态类型系统。能够尽早发现可能存在的书写错误，还能有比较好的编写体验。

#### 2. 使用 Rollup 构建
Rollup 是一个 JavaScript 模块打包器，相比 Webpack 打包出的代码更轻量，适合用于公共库的打包。

#### 3. API 使用 $
为了尽可能不和引用方原有的命名存在冲突和保留一些工具的 tree-shaking(live code inclusion) 能力，因而折中使用了此命名规则。

### Licence
**MIT**