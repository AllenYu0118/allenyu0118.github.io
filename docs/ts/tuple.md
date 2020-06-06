## 元组 (Tuple)

数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。

元组起源于函数编程语言（如 F#），这些语言中会频繁使用元组。

## 简单的例子

定义一对值分别为 `string` 和 `number` 的元组。

```typescript
let tom: [string, number] = ['Tom', 25]
```

访问索引的元素时，会得到正确的类型：

```typescript
tom[0].slice(1)
tom[1].toFixed()
```

也可以只赋值其中一项

```typescript
let tom: [string, number];
tom[0] = 'Tom';
```

但是当对元组对象进行初始化或者赋值值，需要提供元组类型中，指定的所有项

```typescript
let tom: [string, number];
tom = ['Tom'];

// Property '1' is missing in type '[string]' but required in type '[string, number]'.ts(2741)
```

## 越界的元素

当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：

```typescript
let tom: [string, number];
tom = ['Tom', 25];

tom.push('Jack')
tom.push(true)

// 类型“true”的参数不能赋给类型“string | number”的参数。ts(2345)
```


## 参考

-   [TypeScript 入门教程 - 元组](https://ts.xcatliu.com/advanced/tuple.html)
