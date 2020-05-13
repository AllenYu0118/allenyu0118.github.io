## 类型断言 (Type Assertion)

类型断言可以手动指定一个值的类型。

## 语法

```typescript
// 值 as 类型
value as type
```

或

```typescript
// <类型>值
<type>value
```

在 `tsx` 语法（`React` 的 `jsx` 语法的 `ts` 版）中必须使用前者，即 `值 as 类型` 。

形如 `<Foo></Foo>` 的语法在 `tsx` 中表示的是一个 `ReacNode`，在 `ts` 中除了表示类型断言外，也可能是表示一个泛型。

故建议大家在使用类型断言时，统一使用 `值 as 类型` 这样的语法！

## 类型断言的用途

类型断言的常见用途有以下几种：

### 将一个联合类型断言为其中一个类型

当 `TypeScript` 不确定一个联合类型的变量到底是哪个类型时，只能访问联合类型所有类型中的共有的属性和方法。

```typescript
interface Cat {
    name: string
    run(): void
}

interface Fish {
    name: string
    swim(): void
}

function getName(animal: Cat | Fish) {
    return animal.name
}
```

而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性和方法，比如：

```typescript
interface Cat {
    name: string
    run(): void
}

interface Fish {
    name: string
    swim(): void
}

function getName(animal: Cat | Fish) {
    if (typeof animal.swim === 'function') {
        return true
    }
    return false
}

// 类型“Cat | Fish”上不存在属性“swim”。
// 类型“Cat”上不存在属性“swim”。ts(2339)
```

上面的例子中，获取 `animal.swim` 就会报错，因为 `swim` 不是联合类型 `Cat | Fish` 公共属性或者方法。

此时，可以使用类型断言，将 `animal` 断言为 `Fish`：

```typescript
interface Cat {
    name: string
    run(): void
}

interface Fish {
    name: string
    swim(): void
}

function getName(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true
    }
    return false
}
```

这样就可以解决访问 `animal.swim` 报错的问题了。

需要注意的是，类型断言只能欺骗 `TypeScript` 编译器，无法避免运行时的错误，滥用类型断言可能会导致运行时错误：

```typescript
interface Cat {
    name: string
    run(): void
}

interface Fish {
    name: string
    swim(): void
}

function getName(animal: Cat | Fish) {
    ;(animal as Fish).swim()
}

getName({
    name: 'mimi',
    run: () => {
        console.log('mimi')
    }
})
// animal.swim is not a function
```

上面的例子编译时不会报错，但在运行时会报错：

```javascript
Uncaught TypeError: animal.swim is not a function
```

原因是 `(animal as Fish).swim()` 这段代码隐藏了 `animal` 可能是 `Cat` 的情况，将 `animal` 直接断言为 `Fish` 类型了，而 `TypeScript` 信任了我们的断言，故在调用 `swim()` 没有编译错误。

可是 `getName` 函数接受的是 `Cat | Fish`，一旦传入的参数是 `Cat` 类型变量，由于 `Cat` 上没有 `swim` 方法，就会导致运行时错误。

总之，使用类型断言时要格外小心，尽量避免断言后调用方法或者引用深层属性，减少不必要的运行时错误。

## 参考

-   [TypeScript 入门教程 - 任意值](https://ts.xcatliu.com/basics/any)
-   [TypeScript 中文网 - 基础类型 - Any](https://www.tslang.cn/docs/handbook/basic-types.html)
