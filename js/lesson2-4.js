/*************************************************************
 **************************Function Updates*************************
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
function f(x, y = 0, z = 0) {
  return x + y + z
}
// console.log(f(1,undefined,3))
//参数的默认值可以是其他参数的运算表达式
function f2(x, y, z = x + y) {
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
console.log(sum2(1, 2, 3, 4))