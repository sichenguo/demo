const user = 'Jane User';
const decLiteral: number = 6;
const hexLiteral: number = 0xf00d;
const binaryLiteral: number = 0b1010;
const octalLiteral: number = 0o744;
const book: string = '深入浅出 Typescript';
function warnUser(): void {
  alert('This is my warning message');
}
function warnMsg(msg: string): void {
  console.log(msg);
}
// 实际上只有null和undefined可以赋给void:
const b: void = undefined;

enum Dirctive {
  up,
  down,
  left,
  right
}
enum Direction {
  Up,
  Down,
  Left,
  Right
}

const a = 0;

console.log(a === Direction.Up); // true

interface User {
  name: string;
  age?: number;
  readonly isMale: boolean;
}
// interface Config {
//   width?: number;
// }

function CalculateAreas(config: { width?: number }): { area: number } {
  let square = 100;
  if (config.width) {
    square = config.width * config.width;
  }
  return { area: square };
}

let mySquare = CalculateAreas({ width: 5 });
const c: number[] = [1];
const list: Array<number> = [1, 2, 3];
function getArrayLength<T>(arg: Array<T>) {
  console.log(arg.length); // ok
  return arg;
}
interface ReturnItemFn<T> {
  (para: T): T;
}
const returnItemFn: ReturnItemFn<number> = para => para;

interface Dog {
  name: string;
  weight: number;
}

interface Info {
  username: string;
}
// 声明装饰器修饰方法/属性
function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log('prop ' + propertyKey);
  console.log('desc ' + JSON.stringify(descriptor) + '\n\n');
  descriptor.writable = false;
}

class Person {
  name: string;
  constructor() {
    this.name = 'xiaomuzhu';
  }

  @method
  say() {
    return 'instance method';
  }

  @method
  static run() {
    return 'static method';
  }
}

const xmz = new Person();

// 修改实例方法say
xmz.say = function() {
  return 'edit';
};

// 打印结果,检查是否成功修改实例方法
console.log(xmz.say());
