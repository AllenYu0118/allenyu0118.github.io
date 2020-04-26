## 原始数据类型 (Primitive Data Types)

JavaScript 的类型分为两种：原始数据类型（Primitive Data Types）和对象类型（Object Types）。

在《JavaScript 高级程序设计》中也称为：简单数据类型和复杂数据类型。

原始数据类型包括：布尔值、数值、字符串、`null`、`undefined` 以及 [ES6 中的 Symbol](https://es6.ruanyifeng.com/#docs/symbol)。

本节主要介绍**前五种**原始数据类型在 `TypeScript` 中的应用。

## 布尔值

布尔值是最基本的数据类型，在 `TypeScript` 中和 `JavaScript` 中都是使用 `boolean` 定义布尔值类型。

```typescript
let isGoodStudent: boolean = true
```

注意，使用构造函数 `Boolean` 实例化的对象不是布尔值：

```typescript
let isGoodStudent: boolean = new Boolean(true)

// - error TS2322: Type 'Boolean' is not assignable to type 'boolean'
//  - 错误编号 TS2322： 'Boolean' 类型与 'boolean' 不匹配
// 'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
// 'boolean' 是一个原始数据类型，但 'Boolean' 是一个包装对象。尽量使用 'boolean'
```

那如果我确实想定义一个布尔对象呢？只需要修改成以下代码即可

```typescript
let isGoodStudent: Boolean = new Boolean(true)
```

移除 `new` 后， 得到的就是 `boolean` 类型的值了，这里的 `Boolean(true)` 和 `new Boolean(true)` 区别就是：

-   `Boolean(true)` 调用的是转型函数，强制转换参数为 `boolean` 类型后返回，和我们常用的 `!!true` 方法是一样的
-   `new Boolean(true)` 是创建一个 `Boolean` 对象类型的实例，这个实例的 `typeof` 是 `object`

```typescript
let isGoodStudent: boolean = Boolean(true)
```

在 `TypeScript` 中，`boolean` 是 `JavaScript` 的基本类型，而 `Boolean` 依据使用方式的不同，可以是转型函数，也可以是构造函数。数值、字符串类型和布尔值相同。

## 数值

和 `JavaScript` 一样，`TypeScript` 里的所有数字都是浮点数。这些浮点数的类型是 `number`。除了支持十进制和十六进制字面量，`TypeScript` 还支持 `ES6` 中的[二进制和八进制字面量](https://es6.ruanyifeng.com/#docs/number)

```typescript
let decLiteral: number = 17 // 十进制 17
let hexLiteral: number = 0x11 // 十六进制，十进制的 17
let binaryLiteral: number = 0b10001 // 二进制，十进制的 17
let octalLiteral: number = 0o21 // 八进制，十进制的 17
```

编译结果：

```javascript
var decLiteral = 17
var hexLiteral = 0x11
var binaryLiteral = 17
var octalLiteral = 17
```

十六进制，目前的运行时（浏览器和 nodejs）都是支持的，所以不需要转移为十进制

## 字符串

使用 `string` 定义字符串类型

```typescript
let myName: string = 'Yu Xiao Lei'
let age: number = 28

// 模板字符串
let introduce: string = `Hello, my name is ${myName}.
I'll be ${age + 1} years old next month.`
```

编译结果：

```javascript
var myName = 'Yu Xiao Lei'
var age = 28
// 模板字符串
var introduce =
    'Hello, my name is ' +
    myName +
    ".\nI'll be " +
    (age + 1) +
    ' years old next month.'
```

> 变量名不能定义为 `name` ，`TypeScript` 编译会报错，报错原因：[stackoverflow](https://stackoverflow.com/questions/43586243/why-is-a-global-name-variable-declared-in-typescript-and-can-i-avoid-using-it)

## 空值

`JavaScript` 没有空值概念，在 `TypeScript` 中，可以用 `void` 表示没有任何返回值的函数

```typescript
function myFun(): void {
    console.log('I like cats')
}
```

声明一个 `void` 类型的变量只能给它赋值 `undefine` 和 `null`

```typescript
let unusable: void = undefined
```

## Null 和 Undefined

在 `TypeScript` 中，可以使用 `null` 和 `undefined` 定义这两个原始数据类型

```typescript
let n: null = null
let u: undefined = undefined
```

默认情况下，`null` 和 `undefined` 是所有类型的子类型。就是说你可以把 `null` 和 `undefined` 赋值给 `number` 或者 `string` 类型的变量。

```typescript
let n: number = null
let u: string = undefined
```

编译结果

```typescript
var n = null
var u = undefined
```

然而，当你指定了 `--strictNullChecks` 标记，`null` 和 `undefined` 只能赋值给 `void` 和它们各自。

如果你想传入一个 `string` 或 `null` 或 `undefined`，你可以使用联合类型 `string | null | undefined`

> TypeScript 官方文档是鼓励尽可能的使用 `--strictNullChecks`，这样可以避免出现很多常见的问题
