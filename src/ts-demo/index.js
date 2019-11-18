"use strict";

var user = 'Jane User';
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var book = '深入浅出 Typescript';
function warnUser() {
    alert('This is my warning message');
}
function warnMsg(msg) {
    console.log(msg);
}
// 实际上只有null和undefined可以赋给void:
var b = undefined;
var Dirctive;
(function (Dirctive) {
    Dirctive[Dirctive["up"] = 0] = "up";
    Dirctive[Dirctive["down"] = 1] = "down";
    Dirctive[Dirctive["left"] = 2] = "left";
    Dirctive[Dirctive["right"] = 3] = "right";
})(Dirctive || (Dirctive = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var a = 0;
console.log(a === Direction.Up); // true
// interface Config {
//   width?: number;
// }
function CalculateAreas(config) {
    var square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square };
}
var mySquare = CalculateAreas({ width: 5 });
var c = [1];
var list = [1, 2, 3];
function getArrayLength(arg) {
    console.log(arg.length); // ok
    return arg;
}
var returnItemFn = function (para) { return para; };
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 声明装饰器修饰方法/属性
function method(target, propertyKey, descriptor) {
    console.log(target);
    console.log('prop ' + propertyKey);
    console.log('desc ' + JSON.stringify(descriptor) + '\n\n');
    descriptor.writable = false;
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'xiaomuzhu';
    }
    Person.prototype.say = function () {
        return 'instance method';
    };
    Person.run = function () {
        return 'static method';
    };
    __decorate([
        method
    ], Person.prototype, "say", null);
    __decorate([
        method
    ], Person, "run", null);
    return Person;
}());
var xmz = new Person();
// 修改实例方法say
xmz.say = function () {
    return 'edit';
};
// 打印结果,检查是否成功修改实例方法
console.log(xmz.say());
