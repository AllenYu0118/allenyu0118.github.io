## 枚举 (Enum)

枚举类型用于取值被限定在一定范围内的场景，比如一周只有七天，颜色被限定为红绿蓝等等。

## 简单的例子

枚举使用 `enum` 关键词来定义：

```typescript
enum Days {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}
```

枚举成员会被赋值为从 `0` 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：

```typescript

console.log(Days['Sun']) // 0
console.log(Days['Mon']) // 1
console.log(Days['Tue']) // 2

console.log(Days[0]) // Sun
console.log(Days[1]) // Mon
console.log(Days[2]) // Tue

```

事实上，上面的例子会被编译为：

```typescript
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun"
    Days[Days["Mon"] = 1] = "Mon"
    Days[Days["Tue"] = 2] = "Tue"
    Days[Days["Wed"] = 3] = "Wed"
    Days[Days["Thu"] = 4] = "Thu"
    Days[Days["Fri"] = 5] = "Fri"
    Days[Days["Sat"] = 6] = "Sat"
})(Days || (Days = {}))

console.log(Days)
// {
//   '0': 'Sun',
//   '1': 'Mon',
//   '2': 'Tue',
//   '3': 'Wed',
//   '4': 'Thu',
//   '5': 'Fri',
//   '6': 'Sat',
//   Sun: 0,
//   Mon: 1,
//   Tue: 2,
//   Wed: 3,
//   Thu: 4,
//   Fri: 5,
//   Sat: 6 
// }
```

可以看到打印出来的 `Days` 其实是个对象。

## 手动赋值

我们也可以给枚举项手动赋值：

```typescript
enum Days {
    Sun = 7,
    Mon = 1,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}

console.log(Days['Sum']) // 7
console.log(Days['Mon']) // 1
console.log(Days['Fri']) // 5

```

如果未手动赋值的项与手动赋值的项重复了，`TypeScript` 是不会察觉到这一点的：

```typescript
enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days['Sun'] === 3); // true
console.log(Days['Wed'] === 3); // true
console.log(Days[3] === 'Sun'); // false
console.log(Days[3] === 'Wed'); // true
```

上面的例子中，递增到 `3` 的时候与前端的 `Sun` 的取值重复了，但是 `TypeScript` 并没有报错，导致 `Days[3]` 的值先是 `Sun`，而后又被 `Wed` 覆盖了。

所以使用的时候要注意，最好不要出现这种覆盖的情况。




## 参考

-   [TypeScript 入门教程 - 枚举](https://ts.xcatliu.com/basics/enum)
