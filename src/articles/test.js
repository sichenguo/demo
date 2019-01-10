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

// # 抽象工厂模式
var Sport = function(subType, superType) {
  if (typeof Sport[superType] === 'function') {
    // 缓存类
    function F() {}
    // 继承父类属性和方法
    F.prototype = new Sport[superType]()
    // 将子类constructor 指向子类
    subType.constructor = subType
    // 子类原型继承 “父类”
    subType.prototype = new F()
  } else {
    // 不存在抽象类则抛出错误
    throw new Error('未创建该抽象类')
  }
}

// 球类运动抽象类
Sport.Ball = function() {
  this.type = 'ball'
}
Sport.Ball.prototype = {
  play: function() {
    return new Error('抽象方法不能调用')
  }
}

// // 力量型运动抽象类
// Sport.Power = function () {
//   this.type = 'power';
// }
// Sport.Power.prototype = {
//   play: function () {
//       return new Error('抽象方法不能调用');
//   }
// }

// // 速度型运动抽象类
// Sport.Speed = function () {
//   this.type = 'speed';
// }
// Sport.Speed.prototype = {
//   play: function () {
//       return new Error('抽象方法不能调用');
//   }
// }

// 篮球类
var BasketBall = function(name) {
  this.name = name
}
// 抽象工厂实现对球类运动的继承
Sport(BasketBall, 'Ball')
BasketBall.prototype.play = function() {
  console.log('我在玩' + this.name)
}

// 举重类
var WeightLifting = function(name) {
  this.name = name
}
// 抽象工厂实现对力量型运动的继承
Sport(WeightLifting, 'Power')
WeightLifting.prototype.play = function() {
  console.log('我在玩' + this.name)
}

// 跑步类
var Running = function(name) {
  this.name = name
}
// 抽象工厂实现对速度运动的继承
Sport(Running, 'Speed')
Running.prototype.play = function() {
  console.log('我在' + this.name)
}

// 抽象工厂模式实现
var basketBall = new BasketBall('篮球')
console.log(basketBall.type) //ball
basketBall.play()
var weightLifting = new WeightLifting('举重')
console.log(weightLifting.type) //power
weightLifting.play()
var running = new Running('跑步')
console.log(running.type) //ball
running.play()

/** 输出结果
 * ball
 * 我在玩篮球
 * power
 * 我在玩举重
 * speed
 * 我在跑步
 */

// # 抽象工厂模式end



### 参考
（1）

[1]:(https://juejin.im/post/59af8fbd5188252f8c2a103a)
[]