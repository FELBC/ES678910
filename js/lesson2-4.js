/*************************************************************
 ************************Function Updates*********************
 *************************************************************/

// 第一小节

// 问题
// ES5中怎么处理函数参数的默认值？
// ES6是如何做的呢？

// 参数默认值
// ES5:
function f(x, y, z) {
  // X必选，yz可选
  if (y === undefined) {
    y = 0
  }
  if (z === undefined) {
    z = 0
  }
  return x + y + z
}
// console.log(f(1, 2, 3))

// ES6:
function f2(x, y = 0, z = 0) {
  return x + y + z
}
// console.log(f(1,undefined,3))
//参数的默认值可以是其他参数的运算表达式
function f3(x, y, z = x + y) {
  // ES6中不允许使用arguments
  // arguments 当前函数参数情况
  // console.log(Array.from(arguments)); // 将参数伪数组转换成数组
  //函数体的length能获取到没有默认值的参数个数(定义时候的参数个数，不是执行时候参数个数)
  // console.log(f2.length);

  return x + y + z
}
// console.log(f2(1, 2, 3, 4));

// 第二小节

// 问题
// ES5中怎么处理不确定参数的问题？
// 使用arguments

// ES6是如何做的呢
function sum() {
  let num = 0
  // Array.prototype.forEach.call(arguments, function (item) {
  //   num += item * 1
  // })
  Array.from(arguments).forEach(function (item) {
    num += item * 1
  })
  return num
}
// console.log(sum(1, 2, 3));

// Rest parameter
// (获取所有的函数被执行时候的参数，nums是数组，允许拆开，不确定的全部放...nums)
// 所有的参数放在nums变量里面
// base第一个参数，...nums剩余的参数
function sum2(base, ...nums) {
  let total = 0
  nums.forEach(function (item) {
    total += item * 1
  })
  return base * 2 + total
}
// console.log(sum2(1, 2, 3, 4))

// spread操作
function sum3(x = 1, y = 2, z = 3) {
  return x + y + z
}
let data = [4, 5, 7]
// console.log(sum(data[0], data[1], data[2]))
// console.log(sum.apply(this, data))
// console.log(sum(...data))

// 第三小节
// ES6中的箭头函数是什么？
// ()=>{}
function hello() {}
let hello2 = function () {}
let hello3 = (name, city) => {
  console.log('hello world', name, city)
}
// hello3('zs', 'dq')
// 有且只有一个参数，()可以省略
let hello4 = name => {
  console.log('hello world', name);
}
// hello4('ls')
// 没有参数()不能省略
let hello5 = () => {
  console.log('hello world');
}
// hello5()

// 如果函数返回值是表达式，{}可以省略，
let sum4 = (x, y, z) => x + y + z
// console.log(sum4(1, 2, 3))
// 如果函数返回值是一个字面量对象，对象需要用()括起来,()当作运算表达式的作用
// let sum5 = (x, y, z) => ({
//   x: x,
//   y: y,
//   z: z
// })
// 或者
let sum5 = (x, y, z) => {
  return {
    x: x,
    y: y,
    z: z
  }
}
// console.log(sum5(1, 2, 3));
// 如果返回的是其他值，写{}

// 箭头函数this
// 普通函数和箭头函数this指向不同
let test = {
  name: 'test',
  say: function () {
    console.log(this.name)
  }
}
// ES5谁调用函数，this指向谁
// test.say() // test

let test2 = {
  name: 'test',
  say: () => {
    console.log(this.name, this)
  }
}
// ES6箭头函数定义的时候this指向什么，执行的时候this还是指向什么
// test2.say() //undefined,{}

// 练习题：
// 1.如何用箭头函数来实现一个数组排序的问题
let list = [1, 3, 4, 5, 2];
let listSort = () => list.sort((a, b) => a - b)
console.log(listSort())
// 2.箭头函数对this的处理还有什么妙用