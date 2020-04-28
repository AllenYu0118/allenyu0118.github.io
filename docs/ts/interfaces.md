## 接口 (Interfaces)

在 `TypeScript` 中，我们使用接口定义对象的类型。

## 什么是接口

在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

`TypeScript` 中的接口是一个很灵活的概念，可以对变量所具有的结构进行类型检查，它有时被称为”鸭式辩型法“或者”结构性子类型化“。同时，也常用于对「对象的形状（Shape）」进行描述。

## 简单的例子

```typescript
interface My {
    name: string
    age: number
}

let allen: My = {
    name: 'Allen Yu',
    age: 18
}
```

上面的例子中，我们定义了一个接口 `My`，接着定义了一个变量 `allen`，它的类型是 `My`，这样我们就约束了对象的结构以及属性。

定义的变量比接口少了某些属性是不行的，例如少了 `age`

```typescript
interface My {
    name: string
    age: number
}

let allen: My = {
    name: 'Allen Yu'
}

// Property 'age' is missing in type '{ name: string; }' but required in type 'My'.ts(2741)
```

多一些属性也是不允许的

```typescript
interface My {
    name: string
    age: number
}

let allen: My = {
    name: 'Allen Yu',
    age: 18,
    weight: '65kg'
}

// 不能将类型“{ name: string; age: number; weight: string; }”分配给类型“My”。
// 对象文字可以只指定已知属性，并且“weight”不在类型“My”中。ts(2322)
```

可见，赋值的时候，**变量的形状必须与接口的形状保持一致**。

## 可选属性

有时我们也不确定某个属性是有，还是没有，那么可以用可选属性：

```typescript
interface My {
    name: string
    age?: number
}

let allen: My = {
    name: 'Allen Yu'
}
```

在属性的后面添加 ”?“，表示这个属性可有可无

这时，**未定义的属性还是不能添加的**

```typescript
interface My {
    name: string
    age?: number
}

let allen: My = {
    name: 'Allen Yu',
    age: 18,
    weight: '65kg'
}

// 不能将类型“{ name: string; age: number; weight: string; }”分配给类型“My”。
// 对象文字可以只指定已知属性，并且“weight”不在类型“My”中。ts(2322)
```

## 任意属性

有时候，我们希望接口允许有任意属性，可以使用以下方式：

```typescript
interface My {
    name: string
    age?: number
    [property: string]: string
}

let allen: My = {
    name: 'Allen Yu',
    age: 18,
    weight: '65kg'
}
// 不能将类型“{ name: string; age: number; weight: string; }”分配给类型“My”。
// 属性“age”与索引签名不兼容。
// 不能将类型“number”分配给类型“string”。ts(2322)
```

以上会出现问题，与我们的直觉有些不符，原因出在任意属性的类型值上。

在 `TypeScript` 中，**一旦定义了任意属性，那么确定属性和可选属性的类型值，都必须是它的类型的子集**

以下代码可以解决上面的问题：

```typescript
// 方法一：
interface My {
    name: string
    age?: number
    [property: string]: string | number
}

// 方法二：
interface My {
    name: string
    age?: number
    [property: string]: any
}

let allen: My = {
    name: 'Allen Yu',
    age: 18,
    weight: '65kg'
}
```

## 只读属性

我们希望在对象中的属性，只能在创建的时候被赋值，那么我们可以使用 `readonly` 定义只读属性

```typescript
interface My {
    readonly id: number
    name: string
    age?: number
    [property: string]: any
}

let allen: My = {
    id: 1,
    name: 'Allen Yu',
    age: 18,
    weight: '65kg'
}

allen.id = 2

// Cannot assign to 'id' because it is a read-only property.ts(2540)
```

如果第一次创建的时候，只读属性没有赋值，那后面也无法再赋值上去了

```typescript
interface My {
    readonly id: number
    name: string
    age?: number
    [property: string]: any
}

let allen: My = {
    name: 'Allen Yu',
    age: 18,
    weight: '65kg'
}

allen.id = 1

// Property 'id' is missing in type '{ name: string; age: number; weight: string; }' but required in type 'My'.ts(2741)
// demo.ts(2, 12): 'id' is declared here.
```

## 参考

-   [TypeScript 入门教程 - 对象的类型--接口](https://ts.xcatliu.com/basics/type-of-object-interfaces)
-   [TypeScript 中文网 - 接口](https://www.tslang.cn/docs/handbook/interfaces.html)
