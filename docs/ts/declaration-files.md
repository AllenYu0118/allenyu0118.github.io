## 声明文件 (Declaration Files)

当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

## 新语法索引

由于本章涉及大量新语法，故在本章列出新语法的索引，方便大家在使用这些新语法时能快速查找到对应的讲解：

-   `declare var` 声明全局变量
-   `declare function` 声明全局方法
-   `declare class` 声明全局类
-   `declare enum` 声明全局枚举类型
-   `declare namespace` 声明全局对象
-   `interface` 和 `type` 声明全局类型
-   `export` 导出变量
-   `export namespace` 导出对象
-   `export default` ES6 默认导出
-   `export` `commonjs` 导出模块
-   `export as namespace` UMD 库声明全局变量
-   `declare global` 扩展全局变量
-   `declare module` 扩展模块
-   `///<reference />` 三斜线指令

## 什么是声明语句

假如我们想使用第三方库 `jQuery`，一种常见的方式是在 `html` 中通过 `<script>` 引入，然后就可以使用全局变量 `$` 或者 `jQuery`。

例如，我们获取这样获取 `id` 是 `foo` 的元素：

```javascript
$('#foo').html()

jQuery('#foo').html()

// Cannot find name '$'. Do you need to install type definitions for jQuery? Try `npm i @types/jquery`.ts(2581)
// 找不到名称“jQuery”。ts(2304)
```

但在编译器中，`ts` 并不知道 `$` 或 `jQuery` 是什么

这时候，我们需要 `declare var` 来定义它的类型：

```typescript
declare var $: (selector: string) => any
declare var jQuery: (selector: string) => any

$('#foo').html()
jQuery('#foo').html()
```

上面的例子中，`declare var` 并没有真正定义一个变量，只是定义了全局变量 `jQuery` 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。

## 什么是声明文件

通常我们会把声明语句放到一个单独的文件（`jQuery.d.ts`）中，这就是声明文件：

```typescript
// src/jQuery.d.ts
declare var $: (selector: string) => any
declare var jQuery: (selector: string) => any
```

```typescript
// src/index.ts
$('#foo').html()
jQuery('#foo').html()
```

声明文件必须以 `.d.ts` 为后缀。

假如添加了 `.d.ts` 文件后无法解析，可以检查下 `tsconfig.json` 中的 `files`、`include` 和 `exclude` 配置，确保其包含了 `jQuery.d.ts`。

### 第三方声明文件

当然，`jQuery` 的声明文件不需要我们定义了，社区已经帮我们定义好了：[jQuery in DefinitelTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/jquery/index.d.ts)。

我们可以下载下来用，但是更推荐的是，使用 `@types` 统一管理第三方库的声明文件。

`@types` 使用很简单，直接用 `npm` 安装对应的声明模块即可，以 `jQuery` 举例：

```shell
npm install @types/jquery --save-dev
```

可以在[这个页面](https://microsoft.github.io/TypeSearch/)搜索你需要的声明文件。

## 书写声明文件

当一个第三方库没哟提供声明文件时，我们就需要自己书写声明文件了。前面只介绍了最简单的声明文件内容，而真正书写一个声明文件并不是一件简单的事情，以下会详细介绍如何书写声明文件。

在不同的场景下，声明文件的内容和使用方式会有所区别。

库的使用场景有以下几种：

-   全局变量：通过 `<script>` 标签引入第三方库，注入全局变量
-   npm 包：通过 `import foo from 'foo'` 导入，符合 `ES6` 模块规范
-   UMD 库：既可以通过 `<script>`标签引入，有可以通过 `import` 引入
-   直接扩展全局变量：既可以通过 `<script>` 标签引入，改变全局变量的结构
-   模块插件，通过 `<script>` 或 `import` 导入后，改变另一个模块的结构

### 全局变量

全局变量的声明文件主要有以下几种语法：

-   `declare var` 声明全局变量
-   `declare function` 声明全局方法
-   `declare class` 声明全局类
-   `declare enum` 声明全局枚举类型
-   `declare namespace` 声明全局对象
-   `interface` 和 `type` 声明全局类型

#### declare var

定义一个全局变量的类型，与其类似的，还有 `declare let` 和 `declare const`，使用 `let` 和使用 `var` 没有什么区别

```typescript
// src/jquery.d.ts

declare let jQuery: (selector: string) => any
```

```typescript
// src/index.ts
jQuery('#foo')

jQuery = function(selector) {
    return document.querySelector(selector)
}
```

而当我们使用 `const` 定义时，表示此时的全局变量是一个常量，不允许再修改它的值了。

#### declare function

`declare function` 用来定义全局函数的类型。`jQuery` 就是一个函数，所以也可以使用 `function` 定义。

```typescript
declare function jQuery(selector: string) => any;
```

函数重载也是支持的：

```typescript
declare function jQuery(selector: string) => any;
declare function jQuery(domReadyCallback: () => any): any;
```

#### declare class

当全局变量是一个类的时候，我们使用 `declare class` 来定义它的类型

```typescript
declare class Animal {
    name: string
    constructor(name: string)
    sayHi(): string
}
```

#### declare enum

使用 `declare enum` 定义的枚举类型也称作外部枚举

```typescript
declare enum Direction {
    Up,
    Down,
    Left,
    Right
}
```

#### declare namespace

用来表示全局变量是一个对象，包含很多子属性

```typescript
declare namespace jQuery {
    function ajax(url: string, settting?: any): void
}
```

#### 嵌套的命名空间

如果对象有深层的层级，则需要使用嵌套的 `namespace` 声明深层的属性类型

```typescript
declare namespace jQuery {
    function ajax(url: string, settting?: any): void

    namespace fn {
        function extend(object: any): void
    }
}
```

假如 `jQuery` 下仅有 `fn` 这一个属性，则可以不需要嵌套：

```typescript
declare namespace jQuery.fn {
    function extend(object: any): void
}
```

#### `interface` 和 `type`

用来声明全局接口和类型

```typescript
// typs/jQuery.d.ts
interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any
}

declare namespace jQuery {
    function ajax(url: string, settings?: AjaxSettings): void
}
```

这样，就可以在其他文件中也可以使用这个接口或者类型了

```typescript
// src/index.ts
let settings: AjaxSettings = {
    method: 'POST',
    data: {
        name: 'Allen Yu'
    }
}

jQuery.ajax('/api/postForm', settings)
```

#### 防止命名冲突

暴露在最外层的 `interface` 和 `type` 会作为全局类型作用于整个项目中，在项目比较大的情况下，很容易导致冲突，我们应该尽量减少使用。

故最好将它们放到 `namespace` 下：

```typescript
// typs/jQuery.d.ts

declare namespace jQuery {
    interface AjaxSettings {
        method?: 'GET' | 'POST'
        data?: any
    }
    function ajax(url: string, settings?: AjaxSettings): void
}
```

```typescript
// src/index.ts
let settings: jQuery.AjaxSettings = {
    method: 'POST',
    data: {
        name: 'Allen Yu'
    }
}

jQuery.ajax('/api/postForm', settings)
```

#### 声明合并

如果我们声明了相同的名称，但是不同的类型的全局类型，它们会很好的合并起来，例如：

```typescript
declare function jQuery(selector: string): any

declare namespace jQuery {
    interface AjaxSettings {
        method?: 'GET' | 'POST'
        data?: any
    }
    function ajax(url: string, settings: AjaxSettings): void
}

export {}
```

```typescript
// src/index.ts
let settings: jQuery.AjaxSettings = {
    method: 'POST',
    data: {
        name: 'Allen Yu'
    }
}
jQuery('#demo')
jQuery.ajax('/api/postForm', settings)
```

### 声明文件在 `npm` 包中的位置

一般来说，`npm` 包中的声明文件可能存在两个地方：

1. 与该 `npm` 绑定在一起。判断依据是 `package.json` 中的 `types` 字段，或者有一个 `index.d.ts` 文件。
2. 发布到 `@types` 里。只需要尝试是否能够从 `@types` 中下载对应的包，就知道是否存在该声明文件。

如果以上两个地方都不存在我们需要的声明文件，那么就需要自己创建声明文件了。

首先，创建一个 `types` 目录，专门用来管理自己写的声明文件。这种方式需要配置 `tsconfig.json` 中的 `paths` 和 `baseUrl` 字段。

目录结构：

```
typescript/project
├── src
|  └── index.ts
├── types
|  └── jQuery
|     └── index.d.ts
└── tsconfig.json
```

`tsconfig.json` 内容

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "baseUrl": "./",
        "paths": {
            "*": ["types/*"]
        }
    }
}
```

## 参考

-   [TypeScript 入门教程 - 任意值](https://ts.xcatliu.com/basics/any)
-   [TypeScript 中文网 - 基础类型 - Any](https://www.tslang.cn/docs/handbook/basic-types.html)
