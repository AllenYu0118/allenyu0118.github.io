---
title: any
date: 2020-10-31 14:09:49
permalink: /pages/b87d32/
categories:
  - ts
tags:
  - 
---
## 任意值 (Any)

任意值用来表示允许赋值为任意类型。

## 什么是任意类型

普通类型定义后是不允许修改类型的

```typescript
let myName: string = 'Allen Yu'
myName = 28

// error TS2322: Type '28' is not assignable to type 'string'.
```

但如果是 `any` 类型，则允许被赋值为任意类型

```typescript
let myName: any = 'Allen Yu'
myName = 28
myName = true
```

## 任意值的作用

在对现有代码进行改写的时候，`any` 类型是十分有用的，它允许你在编译时可选择的包含或者移除类型检查，同时也能调用任意方法，即使方法不存在

```typescript
let myName: any = 'Allen Yu'
myName.toFixed()
myName.split('')
```

## 未声明类型的变量

变量如果在声明的时候，未制定类型，那么它会被识别为任意值类型。

```typescript
let something

something = 123
something = 'seven'

something.setName()
```

## 参考

-   [TypeScript 入门教程 - 任意值](https://ts.xcatliu.com/basics/any)
-   [TypeScript 中文网 - 基础类型 - Any](https://www.tslang.cn/docs/handbook/basic-types.html)
