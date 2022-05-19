---
title: gtm-support
date: 2022-03-17 16:04:20
permalink: /pages/55d70b/
sidebar: auto
categories:
  - 技术
tags:
  - 学习
---

## 代码库

- 入口：src/index.ts
  - src/assert-is-gtm-id.ts 验证 GTM ID 是否符合匹配规则
  - src/data-layer-object.ts dataLayout object type
  - src/gtm-container.ts GTM ID 容器类型
  - src/gtm-support.ts 实现 PV 和 Event 的类库
  - src/options.ts gtm-support 参数类型
  - src/utils.ts
    - loadScript 加载 GTM
    - hasScript 检查 GTM Script 是否已经存在文档中

