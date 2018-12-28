# JavaScript 设计模式简单实现

## 工厂模式

> 适用的场景

- 对象的构建十分复杂
- 需要依赖具体环境创造不同的实例
- 处理具有大量相同属性的大对象

```js
class Product {
  constructor(name) {
    this.name = name
  }
  init() {
    console.log('init')
  }
  fn1() {
    console.log('fn1')
  }
  fn2() {
    console.log('fn2')
  }
}

class Creator {
  constructor(opt) {
    this.attr = opt
  }
  create(name) {
    return new Product(name)
  }
}

// test
let creator = new Creator()
let p = creator.create('p')
p.init()
p.fn1()
p.fn2()

```

> 应用场景

- jQuery --- $('div')
- React.creatElement
- vue 异步组件


```js

```

