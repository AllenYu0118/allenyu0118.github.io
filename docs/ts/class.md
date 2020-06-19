## 类 (Class)

传统方法中，`JavaScript` 通过构造函数实现类的概念，通过原型链实现继承。而在 `ES6` 中，我们终于迎来了 `class`。

## 类的概念

虽然 `JavaScript` 中有类的概念，但可能大多数 `JavaScript` 程序员并不是非常熟悉类，这里对类的相关概念做一个简单的介绍。

- 类（class）：定义了一件事物的抽象特点，包含它的属性和方法。
- 对象（Object）：类的实例，通过 `new` 生成。
- 面向对象（OOP)的三大特点：封装、继承和多态。
- 封装：将对数据的操作细节隐藏起来，只暴露对外的接口。
- 继承：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性。
- 多态：由继承产生了相关而不同的类，对同一个方法可以有不同的响应。
- 存取器：用以改变属性的读取和赋值行为。
- 修饰符：修饰符是一些关键字，用于限定成员或者类型的性质。
- 抽象类：抽象类是供其他类继承的基类，抽象类不允许被实例化，抽象类中的抽象方法必须在子类中被实现。
- 接口：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现。一个类只能继承至另一个类，但是可以实现多个接口


## ES6 中类的用法

### 属性和方法

使用 `class` 定义类，使用 `constructor` 定义构造函数。

通过 `new` 生成新实例的时候，会自动调用构造函数。

```javascript
class Animal {
    public name

    constructor (name) {
        this.name = name
    }

    sayHi () {
        return `My name is ${this.name}`
    }
}
```

### 类的继承

使用 `extends` 关键字实现继承，子类中使用 `super` 关键字来调用父类的构造函数和方法。

```javascript
class Cat extends Animal {
    constructor (name) {
        super(name)
    }

    sayHi () {
        return `Meow，` + super.sayHi()
    }
}
```

### 存取器

使用 `getter` 和 `setter` 可以改变属性的赋值和读取行为：

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    get name () {
        return 'Jack'
    }

    set name (value) {
        console.log('setter: ' + value);
    }

}
```

### 静态方法

使用 `static` 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用：

```javascript
class Animal {
    public isAnimal (instance) {
        return instance instanceof Animal
    }
}
```

## ES7 中类的方法

`ES7` 中有一些关于类的提案，`TypeScript` 也实现了它们。

### 实例属性

可以直接在类里面定义：

```javascript
class Animal {
    name = 'Allen Yu'

    constructor () {
        // ....
    }
}

let animal = new Animal()
animal.name // Allen Yu
```

### 静态属性

`ES7` 提案中，可以使用 `static` 定义一个静态属性，静态属性可以通过类直接调用，不用实例化：

```javascript
class Animal {
    static speci = 'can move'

    constructor() {

    }
}

console.log(Animal.speci)
```

## TypeScript 中类的用法

### public、private 和 protected

`TypeScript` 可以使用三种访问修饰符（Access Modifiers），分别是 `public`、`private` 和 `protected`。

- `public` 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有属性和方法都是 `public`。
- `private` 修饰的属性或方法是私有的，不能在声明它的类的外部访问到。
- `protected` 修饰的属性或方法是受保护的，它和 `private` 类似，区别是它在子类中允许被访问的。

下面举一些例子：

```typescript
class Animal {
    public name
    public constructor (name) {
        this.name = name
    }
}

let dog = new Animal('dog')
dog.name // dog
dog.name = 'big dog'
dog.name // 'big dog'
```

上面的例子中，`name` 被设置成了 `public`，所以直接访问实例的 `name` 属性是允许的。

很多时候，我们希望有的属性是无法直接存取的，这时候就可以使用 `private`：

```typescript
class Animal {
    private name
    public constructor (name) {
        this.name = name
    }
}

let cat = new Animal('cat')
cat.name

// 属性“name”为私有属性，只能在类“Animal”中访问。ts(2341)
```

需要注意的是，`TypeScript` 编译后的代码，并没有限制 `private` 属性在外部的可访问性。

使用 `private` 修饰的属性或方法，在子类中也是不允许访问的：

```typescript
class Animal {
    private name
    public constructor (name) {
        this.name = name
    }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}

// 属性“name”为私有属性，只能在类“Animal”中访问。ts(2341)
```

而如果用 `protected` 修饰，则允许在子类中访问：

```typescript
class Animal {
    protected name
    public constructor (name) {
        this.name = name
    }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}
```

- 当构造函数修饰为 `protected` 时，该类不允许被继承和实例化。
- 当构造函数修饰符为 `private` 时，该类只能被继承，不能被实例化。

### 参数属性

修饰符和 `readonly` 还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁。

```typescript
class Animal {
    public constructor (public name) {
        this.name = name
    }
}
```

### readonly 关键字

只读属性关键字，只允许出现在属性声明、索引签名或构造函数中。

```typescript
class Animal {
    readonly name
    public constructor(name) {
        this.name = name
    }
}

let a = new Animal('Jack')
console.log(a.name)
a.name = 'lucy'

// 无法分配到 "name" ，因为它是只读属性。ts(2540)
```

注意，如果 `readonly` 和其他访问修饰符同时存在的话，需要写在其后面。

```typescript
class Animal {
    public constructor (public readonly name) {
        this.name = name
    }
}
```

### 抽象类

`abstract` 用于定义抽象类和其中的抽象方法。

什么是抽象类

首先，抽象类是不允许被实例化的：

```typescript
abstract class Animal {
    public constructor(public name) {
        this.name = name
    }

    abstract sayHi()
}
let a = new Animal('Jack')

// 无法创建抽象类的实例。ts(2511)
```

上面我们定义了一个抽象类 `Animal`，并且定义了一个抽象方法 `sayHi`。在实例化抽象类的时候报错了。

其次，抽象类中的抽象方法必须被子类实现：

```typescript
abstract class Animal {
    public constructor(public name) {
        this.name = name
    }
    abstract sayHi()
}

class Cat extends Animal {
    public eat() {
        console.log(`${this.name} is eating。`)
    }
}

let cat = new Cat('Jack')

// 非抽象类“Cat”不会实现继承自“Animal”类的抽象成员“sayHi”。ts(2515)
```

下面是正确使用抽象类的例子：

```typescript
abstract class Animal {
    public constructor(public name) {
        this.name = name
    }
    abstract sayHi()
}

class Cat extends Animal {
    public eat() {
        console.log(`${this.name} is eating。`)
    }
    sayHi() {
        console.log(`${this.name} say hi!`)
    }
}

let cat = new Cat('Jack')
```

## 类的类型

给类加上 `TypeScript` 的类型很简单，与接口类似：

```typescript
class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    sayHi(): string {
        return `${this.name} say hi!`
    }
}

let mi = new Animal('mi mi')
console.log('mi.sayHi(): ', mi.sayHi()); // mi.sayHi():  mi mi say hi!
```


## 参考

-   [TypeScript 入门教程 - 类](https://ts.xcatliu.com/advanced/class.html)
