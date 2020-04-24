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
