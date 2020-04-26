/*************************************************************
 **************************Object Updates*************************
 *************************************************************/

// 第一小节
// ES5中Object属性能简写吗？
// ES6可以吗？
let x = 1;
let y = 2;
let z = 3;
let obj = {
  x: x,
  y: y,
  hello: function () {
    console.log('hello')
  }
}
obj[z] = 5 // key为变量
obj.hello()

let obj2 = {
  x,
  y,
  [z + y]: 6, // key为变量,[]里面可以写任何的变量或表达式
  // 常规函数
  hello() {
    console.log('hello')
  },
  // ES5对象中不允许加异步方法，ES6允许，* 表示这是一个异步方法
  // generator函数
  * hello2() {
    console.log('hello2')
  }
}
obj2.hello2() //无输出
obj2.hello2().next() //hello2