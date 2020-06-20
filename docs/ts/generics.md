## 泛型 (Generics)

泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

## 简单的例子

首先，我们来实现一个函数 `createArray`，它可以创建一个指定长度的数组，同时将每一项都填充一个默认值：

```typescript
function createArray(length: number, value: any): Array<any> {
    let result = []
    for (let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}

let result = createArray(10, 'Allen')
console.log('result: ', result);
```

上例中，我们使用了之前提到过的 - 数组泛型，来定义返回值的类型。

这段代码编译不会报错，但一个显而易见的缺陷是，它并没有准确的定义返回值的类型：

`Array<any>` 允许数组的每一项都为任意类型。但是我们的预期是，数组的每一项都应该是输入的 `value` 的类型。

这时候，泛型就派上了用场：

```typescript
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = []
    for (let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}

let result = createArray<number>(10, 666)
console.log('result: ', result);
```

上例中，我们在函数名后添加了 <T>，其中 `<T>` 用来指代任意输入的类型，在后面输入 `value: T` 和输出 `Array<T>` 中即可使用了。

接着在调用的时候，可以指定它具体的类型为 `string`。当然，也可以不手动指定，而让类型推论，自动推断出来。

## 多个类型参数

定义泛型的时候，可以一次定义多个类型参数：

```typescript
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

let result = swap(['Allen', 'YU']);
console.log('result: ', result); // result:  [ 'YU', 'Allen' ]
```

上例中，我们定义了一个 `swap` 函数，用来交换输入的元组。




## 参考

-   [TypeScript 入门教程 - 枚举](https://ts.xcatliu.com/basics/enum)
