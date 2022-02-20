---
title: build-in-objects
date: 2020-10-31 14:09:49
permalink: /pages/ae94d9/
categories:
  - ts
tags:
  - 
---
## 内置对象 （Build In Objects）

`JavaScript` 中有很多内置对象，它们可以直接在 `TypeScript` 中当做定义好的类型。

内置对象是指，根据标准在全局作用域上的对象。这里的标准是指 `ECMAScript` 和其它环境的标准。


## ECMAScript 的内置对象

`Boolean`、`Error`、`Date`、`RegExp` 等等都属于内置对象。

我们可以在 `TypeScript` 中将变量定义为这些类型。

```typescript
let b: Boolean = new Boolean(1)
let e: Error = new Error('Error')
let d: Date = new Date()
let r: RegExp = /[a-zA-Z]/g
```

## DOM 和 BOM 的内置对象

`Document`、`HTMLElement`、`Event`、`NodeList` 都属于 DOM 和 BOM 的内置对象。

```typescript
let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll('div')

document.addEventListener('click', function (e: MouseEvent) {
    console.log(e)
})
```

## TypeScript 核心库的定义文件

[TypeScript 核心库的定义文件](https://github.com/microsoft/TypeScript/tree/master/src/lib)中定义了所有浏览器环境需要用到的类型，并且是预置在 `TypeScript` 中的。

当我们使用一些常用方法时，`TypeScript` 实际已经帮我们做了很多的类型判断工作了，例如：

```typescript
let random = Math.floor(Math.random() * 100 + '1')
// 类型“string”的参数不能赋给类型“number”的参数。ts(2345)
```

上面的代码中实现了一个获取 1 - 100 的随机数的方法，`Math.floor` 方法接收的是一个 `number` 类型的参数，但 `Math.random() * 100 + '1'` 得到的是一个字符串，所以会报错。

我们也可以看看 `TypeScript` 中关于 `Math.floor` 的类型定义：

```typescript
interface Math {
    /**
     * Returns the greatest integer less than or equal to its numeric argument.
     * @param x A numeric expression.
     */
    floor(x: number): number;
}
```

## 用 TypeScript 写 Node.js

Node.js 不是内置对象的一部分，如果想用 TypeScript 写 Node.js，则需要引入第三方声明文件：

```shell
npm install @types/node --save-dev
```

## 参考

-   [TypeScript 入门教程 - 内置对象](https://ts.xcatliu.com/basics/built-in-objects)