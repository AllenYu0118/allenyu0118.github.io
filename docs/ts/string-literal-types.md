## 字符串字面量类型 (String Literal Types)

字符串字面量类型，可以用来约束取值只能是某几个字符串中的一个。

## 简单的例子

```typescript
type EventNames = 'click' | 'scroll' | 'mouseover'

function handlerEvent (el: Element, event: EventNames) {
    console.log(event)
}

handlerEvent(document.querySelector('.btn'), 'click')
handlerEvent(document.querySelector('.link'), 'mouseover')
```

如果传递的事件名称不在 `EventNames` 内

```typescript
handlerEvent(document.querySelector('.btn2'), 'mouseout')
// 类型“"mouseout"”的参数不能赋给类型“EventNames”的参数。ts(2345)
```

上面的 `handlerEvent` 函数，第二参数传递的是 `mouseout` 不在 `EventNames` 中，所以报错了


## 参考

-   [TypeScript 入门教程 - 字符串字面量类型](https://ts.xcatliu.com/advanced/string-literal-types.html)
