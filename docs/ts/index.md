> 声明：本内容参考文档来自[TypeScript 入门教程](https://ts.xcatliu.com/basics/primitive-data-types)，感谢作者提供了由浅入深的内容，使我在学习 `TypeScript` 的时候更加的愉快。

## 什么是 TypeScript

[TypeScript](https://www.typescriptlang.org/) 是 `JavaScript` 的超集，主要提供类型系统和 ES6 支持，能够为编写大型 `JavaScript` 程序提供静态类型检查，它由 `Microsoft` 开发，代码[开源在 GitHub ](https://github.com/Microsoft/TypeScript)上。

## TypeScript 的优势

-   `TypeScript` 的静态类型，可以帮助我们在开发过程中，发现潜在的风险

-   更友好的编辑器自动提示

-   代码语义化，更清晰易懂

## 安装 TypeScript

`TypeScript` 的命令行工具安装：

```shell
npm install typescript -g
```

`-g` 表示全局安装。

一般为了项目间的协作顺利，都会安装到项目内：

```shell
npm install typescript -D
```

以上命令会在命令行安装 `tsc` 的命令。

```shell
npx tsc demo.ts
```

---

如果想在 `node` 里直接执行 `TypeScript`，可以安装 `ts-node` 包

```shell
npm install ts-node -D
```

执行 `TypeScript` 文件

```shell
npx ts-node demo.ts
```
