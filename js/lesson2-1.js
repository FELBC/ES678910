/*************************************************************
 ****************************作用域***************************
*************************************************************/

// 阅读材料：
// 1.什么是作用域
// 2.JavaScript深入之词法作用域和动态作用域
// 3.深入理解JS中声明提升，作用域(链)和this关键字

/**
 * 全局作用域_知识点
*/
// window => 全局对象
// console.log(abc)
var abc = 1234 // var声明变量为全局变量
abcd = 2345 // 没有var声明的变量为全局变量windows属性

// 在函数内部没有使用var声明的变量,它不具备函数作用域,
// 它具备全局作用域,挂在windows上，windows对象的属性可以不加windows.依然有效
function test () {
  ab = 45
}
test()

/**
 * 函数作用域_知识点
*/
// 函数内部定义的变量，函数作用域，即局部作用域，让变量屏蔽在函数内部
// 获取函数内部变量可以使用return或者闭包的方式
function test2 () {
  var a = 3
  return a + 4
}
// console.log(test2())
// console.log(a)

// 闭包
function test3 () {
  var a = 3
  function test4 () {
    var b = 4
    return a + b
  }
  return test4()
}
// console.log(test3())

/**
 * 块状作用域_知识点
*/
// ES6以前不具备块状作用域
// 块状作用域，代码内部可以形成无数的块，每个块形成一个隔离的区域，
// 只要有{}的地方它就是一个块
function test5 () {
  var a = 3
  if (a === 3) {
    var b = 4
    console.log('abc')
    console.log('def')
  } else {
    console.log('ghi')
  }
  console.log(b)
  return a + 4
}
// test5()

/**
 * 动态作用域_知识点
*/
// this动态指向，不是固定指向windows，this的作用域动态
window.a = 3
function test6 () {
  console.log(this.a)
}
// 同一个函数执行出不同结果
test6()
// bind:函数动态绑定到一个对象上去，这里绑定到{a:100}
// this指向这个对象本身
test6.bind({ a: 100 })()

/**
 * 配合块状作用域{}使用的let与const_知识点
*/
// let声明的变量具有块级作用域
{
  let a = 1
  // 块内
//   console.log(a)
}
// 块外
// console.log(a)
var b = 3
let c = 4
// 通过var声明的全局变量能通过windows的属性访问，通过let声明的全局变量不行
// console.log(b, c)
// console.log(window.b, window.c)

// var声明的变量能够重复声明
var b = 4
// console.log(4)

// let声明的变量不能重复声明
// let c = 5;
// console.log(c);

// let声明的变量不会进行变量提升，var声明的变量会变量提升

// const具备let所有特性，const只能定义常量
const a = 2
// a = 3
// console.log(a)
// const不允许先声明再赋值,在初始化的时候一定要赋值
// const b
// b=3

/**
 * 作用域练习题
*/
// 1.请问下面的代码输出是什么？如何能根据i的顺序输出？
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}
// 答案：3 3 3
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}

// 2.请问下面的代码会发生什么？
console.log(val1)
let val1 = 1
// 答案：Uncaught ReferenceError: Cannot access 'val1' before initialization
