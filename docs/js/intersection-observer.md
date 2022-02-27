---
title: Intersection Observer API
date: 2020-11-25 22:40:19
permalink: /pages/f50f77/
categories:
  -
tags:
  -
---

> Intersection Observer API 提供了一种异步检测目标元素与祖先元素或 viewport 相交情况变化的方法。

## 使用

```javascript
let observer = new IntersectionObserver(callback, options)
```

`IntersectionObserver` 是一个构造函数, 由浏览器提供, 可以传递 `callback` 回调函数, 以及 `options` 配置对象（可选）。

构造函数返回值是一个观察器实例，实例具备以下多种方法：

```javascript
observer.observe(document.querySelector('.hook')) // 指定观察 class 为 hook DOM 节点

observer.unobserve() // 停止观察特定目标元素

observer.disconnect() // 停止观察

observer.takeRecords() // 返回观察目标的 entries 对象数组
```

`observer.observe()` 方法只能传递一个 DOM 对象，如果需要观察多个，就要多次调用这个方法。

```javascript
Array.from(document.querySelectorAll('li')).forEach(($item) => {
  observer.observe($item)
})
```

上面代码中，演示了如何观察多个 `li` 元素。

## callback 回调参数

回调函数接收 [IntersectionObserverEntry](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserverEntry) 参数数组，只要满足 `options.threshold` 指定的阀值，就会执行一次 `callback`。

如果 `options.threshold` 是默认值 `0`：
第一次触发，是目标元素刚刚进入视口（开始可见），第二次是目标元素完全离开视口（全部不可见）。

如果设置 `options.threshold` 的值是 `1`：
第一次触发，是目标元素完全进入视口（全部可见），第二次是目标元素刚刚离开视口（开始不可见）。

```javascript
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log('entry: ', entry)
  })
})
```

上面的代码表示回调函数会接收 `entries` 参数，`entries` 是一个数组，每一个数组成员都是 [IntersectionObserverEntry](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserverEntry) 对象。

## IntersectionObserverEntry 对象

目前该对象提供八个属性，分别是：

- boundingClientRect: 返回目标元素的边界（矩形）信息。
- intersectionRatio: 返回 `intersectionRect` 与 `boundingClientRect` 比值。
- intersectionRect: 返回视口和目标元素相交区域的边界（矩形）信息。
- isIntersecting: 返回一个布尔值，目标元素与视口相交，返回 `true`，否则 `false`。
- isVisible: 返回一个布尔值，MDN 上未对此属性进行说明，不能明确定义。
- rootBounds: 返回根的区域的边界（矩形）信息。
- target: 被观察的目标元素，是一个 `DOM` 节点对象。
- time: 时间戳，触发的时间，单位为毫秒。

## Options 对象

`IntersectionObserver` 构造函数的第二个参数，是一个可配置的对象。

```javascript
let options = {
  root: document.querySelector('window'),
  rootMargin: 0,
  threshold: 0,
}
```

### root 根元素

用于检查目标的可见性，默认是浏览器窗口，必须是目标元素的父元素。

### rootMargin

用于调整 `root` 区域的 `rootBounds` 边界（矩形）信息，使用 `CSS` 定义方式：

- rootMargin: "40px 30px 20px 10px" 表示扩大 `root` 的上、右、下、左的区域。
- rootMargin: "-40px -30px -20px -10px" 表示缩小 `root` 的上、右、下、左的区域。

### threshold 临界值属性

它决定了什么时候触发回调函数。可以通过数组表示多个临界值，也可以通过单数字表示一个临界值，默认值是 `0`。表示目标元素刚刚开始出现就会触发回调函数。

定义 `threshold: [0, 0.2, 0.4, 0.6, 1]` 多个临界值，表示的意思是：目标元素在刚刚显示、显示 20%，显示 40%，显示 60%，全部显示，这五个临界点时都会触发定义的回调函数！

## 参考

- [MDN Intersection Observer API](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)
- [IntersectionObserver API 应用总结](https://juejin.cn/post/6844904121833619469)
- [IntersectionObserver API 使用教程](https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)
