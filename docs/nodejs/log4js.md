---
title: log4js
date: 2020-10-31 14:09:49
permalink: /pages/fae37a/
categories:
  - nodejs
tags:
  - 
---
## Log4js 日志模块

## 简介

`log4js` 是 `Node.js` 日志处理模块，可以满足开发中，众多不同的需求

## 安装

```shell
npm i log4js
```

## 使用

```typescript
import { configure, getLogger } from "log4js";

configure({
    // 获取输出类别
    categories: { default: { appenders: ["cheese"], level: "error" } },

    // 输出配置
    appenders: {
        // 对日志类型为 cheese 的进行输出
        cheese: {
            type: "dateFile",
            filename: "logs/log",
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            daysToKeep: 7
        }
    },
})

// 导出 logger 实例方法
export var logger = getLogger("cheese");
```

