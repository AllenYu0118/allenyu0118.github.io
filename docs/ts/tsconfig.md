## 编译运转配置

`TypeScript` 是无法直接运行的，需要通过编译为 `JavaScript` 文件才能执行，`tsconfig.json` 就是控制编译配置的文件。

```json
{
    "compilerOptions": {
        // 配置编译后文件目录
        "outDir": "./build"
    }
}
```

## 编译为 JavaScript

在 `package.json` 中配置

```json
{
    "script": {
        "build": "tsc"
    }
}
```

配置完成后，执行 `npm run build`, 可以编译项目中所有的 `.ts` 文件

## 自动编译

只需要添加 `-w`，执行 `npm run build` 后，只要 `.ts` 文件有改变，就会自动编译为 `.js` 文件

## 自动执行

安装 `nodemon` 包，[nodemon npm](https://www.npmjs.com/package/nodemon)

```shell
npm install --save-dev nodemon
```

在 `package.json` 中配置命令

```json
{
    "script": {
        "start": "nodemon .build/index.js"
    }
}
```

简单的 `nodemon` 配置，在 `package.json` 中

```json
"nodemonConfig": {
    // 配置忽略监听的目录或文件
    "ignore": ["test/*", "docs/*"],

    // 延迟多少 ms 执行
    "delay": "2500"
}
```

启动

```shell
npm run start
```

通过以上配置，我们执行两个命令，即可完成 `TypeScript` 编译生成 `JavaScript`，执行 `JavaScript` 的过程。

```shell
npm run watch
npm run start
```

## 合并命令

每次都要执行两个命令，还挺麻烦的，可以通过 `concurrently` 包解决

安装 `concurrently` 包，[concurrently npm](https://www.npmjs.com/package/concurrently)

```shell
npm install concurrently -D
```

修改 `package.json` 中的配置如下

```json
{
    "script": {
        "dev:build": "tsc -w",
        "dev:start": "nodemon .build/index.js",
        "dev": "concurrently npm:dev:*"
    }
}
```

执行下面的命令

```shell
npm run dev
```

上面的代码中，相当于执行了 `npm run dev:build` 和 `npm run dev:start` 两个命令

