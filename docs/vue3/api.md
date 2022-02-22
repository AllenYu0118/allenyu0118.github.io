---
title: Vue3 响应式 Api
date: 2020-10-31 14:09:49
permalink: /pages/9b7ee3/
categories:
  - vue3
tags:
  -
---

## reactive

返回一个响应式对象的副本

```typescript
const obj = reactive({ count: 0 })
```

会深拷贝传入的对象，返回的对象与传入的对象不相等

## readonly

返回一个只读的对象，如果对只读对象操作，则会提醒。

```typescript
const original = reactive({ count: 0 })

const copy = readonly(original)

watchEffect(() => {
  console.log(copy.count)
})

original.count++

copy.count++ // Cannot assign to 'count' because it is a read-only property.Vetur(2540)
```

## isProxy

判断一个对象是不是通过 `reactive` 或 `readonly` 创建的。

```typescript
const obj = { count: 0 }
const proxy = reactive(obj)
const only = readonly(obj)
const onlyProxy = readonly(proxy)

isProxy(obj) // false
isProxy(proxy) // true
isProxy(only) // true
isProxy(onlyProxy) // true
```

## isReactive

判断一个对象是不是通过 `reactive` 创建的，`readonly` 创建的返回 `false`

```typescript
const obj = { count: 0 }
const proxy = reactive(obj)
const only = readonly(obj)
const onlyProxy = readonly(proxy)

isReactive(obj) // false
isReactive(proxy) // true
isReactive(only) // false
isReactive(onlyProxy) // true
```

`onlyProxy` 对象虽然也是 `readonly` 函数包裹，但是因为包裹的对象本身也是来自 `reactive`，所以返回 `true`。

## isReadonly

判断一个对象是不是通过 `readonly` 创建的，规则和 `isReactive` 一样，只要被符合条件的函数处理过，那么不管后续如何处理，都会返回 `true`

## toRaw

获取代理对象的原始值，用于临时读取，而不会产生额外的开销，不建议保留引用对象持久使用，需要谨慎使用。

```typescript
const obj = { count: 0 }
const proxy = reactive(obj)

obj === toRaw(proxy) // true
```

## markRaw

标记一个对象，使其永远不会被 `reactive` 和 `readonly` 转换为响应式
