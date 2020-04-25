## 类型推论

如果没有明确的指定类型，那么 `TypeScript` 就会依据类型推论规则推断出一个类型。

## 什么是类型推论

以下代码虽然没有指定类型，但在编译时会报错

```typescript
let myName = 'Allen Yu'
myName = 28
```

事实上，它和以下代码等价：

```typescript
let myName: string = 'Allen Yu'
myName = 28
```

`TypeScript` 会在没有明确指定类型时，推测出一个类型，这就是类型推论

**如果定义变量的时候没有赋值，也没有定义类型，就会被推断为 `any` 类型而完全不被类型检查**

```typescript
let myName
myName = 123
myName = 'Allen Yu'
```

## 参考

-   [TypeScript 入门教程 - 类型推论](https://ts.xcatliu.com/basics/type-inference)
-   [TypeScript 中文网 - 类型推论](https://www.tslang.cn/docs/handbook/type-inference.html)
