## 类型别名 (Types Alias)

类型别名用来给一个类型起个新名字。

## 简单的例子

```typescript
type myName = string
type getName = () => string

type nameOrAge = string | number

function getMy(n: nameOrAge): nameOrAge {
    if (typeof n === 'string') {
        return 'Allen Yu'
    } else {
        return 28
    }
}
```

上例中，我们使用 `type` 创建类型别名。

类型别名常用于联合类型。


## 参考

-   [TypeScript 入门教程 - 类型声明](https://ts.xcatliu.com/advanced/type-aliases.html)
