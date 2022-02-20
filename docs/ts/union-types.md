---
title: union-types
date: 2020-10-31 14:09:49
permalink: /pages/9647a1/
categories:
  - ts
tags:
  - 
---
## 联合类型 (Union Types)

联合类型表示取值可以是多种类型中的一种

## 简单的例子

```typescript
let myName: string | number
myName = 'Allen Yu'
myName = 28
myName = true // 不能将类型“true”分配给类型“string | number”
```

可以给 `myName` 赋值字符串和数字类型，赋值为布尔类型的值时，就会提示报错。

联合类型使用 `|` 分割每个类型

## 访问联合类型的属性和方法

当 `TypeScript` 不确定联合类型中的变量，具体是哪个类型时，我们只能访问联合类型中**并集的属性和方法**。

```typescript
let myName: string | number
myName.toString()
myName.length // 类型“number”上不存在属性“length”。
```

上例中，`toString` 是 `string` 和 `number` 的共同的方法，所以可以使用，而 `length` 属性，`number` 类型是没有的，所以不能使用。

联合类型的变量在被赋值的时候，会根据类型推论的规则，推断出一个类型。

```typescript
let myName: string | number
myName = 'Allen Yu'
myName.split('')

myName = 28
myName += 1
```

以上代码可正常执行，是因为 `TypeScript` 推断第一个有值的 `myName` 是 `string` 类型，第二个有值的 `myName` 是 `number` 类型。

## 参考

-   [TypeScript 入门教程 - 联合类型](https://ts.xcatliu.com/basics/union-types)
