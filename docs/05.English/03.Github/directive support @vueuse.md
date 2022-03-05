---
title: directive support @vueuse
date: 2022-03-05 22:51:48
permalink: /pages/4c48bf/
categories:
  - English
tags:
  - Github
---

## 来源

vueuse/vueuse 项目，地址： https://github.com/vueuse/vueuse

## 对话

- antfu: I think we should match with the function name and call it `vElementHover`
- webfansplz: Fixed

---

- okxiaoliang4: I think replace `watchEffect` has better performance.
- webfansplz: The `watchEffect` will triggered once immediately which will give The user unexpected behavior . (triggered onHover callback)
- okxiaoliang4: but it looks like when `isHovered` change then trigger the callback and pass `isHovered`.
- okxiaoliang4: maybe you want like this?
- webfansplz: I think we also need triggered the callback while the state is false

---

- antfu: Ouch, please reopen it against main 😅

## 翻译

- antfu: 我认为我们应该起一个与函数名相匹配的名称，它可以叫 `vElementHover`
- webfansplz: 已修改

- okxiaoliang4: 我认为替换使用 `watchEffect` 将获得更好的性能。
- webfansplz: `watchEffect` 会立即触发一次，可能会给用户带来意想不到的行为 . (触发 onHover 回调)
- okxiaoliang4: 但是它更像是，当 `isHovered` 回调且通过 `isHovered`
- okxiaoliang4: 也许你想要的是这样？
- webfansplz: 我认为我们也需要触发回调，当 `state` 的值为 `false` 时

- antfu: 哎呦，请重新打开 main 分支 😅

## 单词

- match with: 使和...相匹配
- immediately: adv.立即，马上；紧接着，紧靠着；直接的；
- unexpected: adj.想不到的，意外的
- triggered:
  - adj.触发的，起动的；有扳机的
  - v.引发，激发；起动，触发；引爆

## 来源

- vueuse/vueuse - [feat(useElementHover): directive support](https://github.com/vueuse/vueuse/pull/1357)
