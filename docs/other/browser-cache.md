## 浏览器缓存机制


## 强缓存

### Expires 过期时间

返回一个绝对时间，如果请求时间在设定的 `Expires` 之前，就会命中缓存，直接使用本地缓存:

```shell
Expires: Thu, 08 Oct 2020 07:30:03 GMT
```
上面配置的意思是：缓存在2020年10月8日7时30分03秒前有效

### Cache-Control 缓存控制

存在多个属性值，但 `max-age` 最有意义，指定了缓存的时间，描述的是一个相对时间，而非绝对时间：
```shell
Cache-Control: max-age=60
```

上面配置的意思是：缓存从当前时间的 60 秒内都有效

### 为什么有两个控制参数
如果同时设置了 `Expires` 和 `Cache-Control`，哪个会生效呢？依据 `W3C` 的说明，`max-age` 优先于 `Expires`

## 协商缓存

### Last-Modified && If-Modified-Since 修改时间验证

携带 `If-Modified-Since` 的前提是，缓存中存储了 `Last-Modified` 信息，每个请求返回时，`response` 可以携带 `Last-Modified` 字段，表示资源最后修改的日期。

### ETag && If-None-Match 内容 hash 值验证

`ETag` 是根据当前请求的资源生成的唯一标识，这个唯一标识是一个字符串，只要资源有变化，这个字符串就会不同。