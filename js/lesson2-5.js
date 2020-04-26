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
// obj.hello()

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
// obj2.hello2() //无输出
// obj2.hello2().next() //hello2

// Set 
// Set本质上还是obj对象
// Set存储的成员不允许是重复的
// Set接收的参数是一个可遍历的对象
let s = new Set()
// let s = new Set([1, 2, 3, 4])
s.add('hello').add('goodbye').add('hello') // 存入重复数据会帮你自动过滤
// console.log(s); //Set(2) {"hello", "goodbye"}
// s.delete('hello')
// console.log(s)
// s.clear() // 全部清空
// console.log(s)
// console.log(s.has('hello')); // 判断是否存在某条数据
// console.log(s.size); // 查询有多少条数据
// console.log(s.keys());
// console.log(s.values());
// console.log(s.entries());
// s.forEach((item) => {
//   console.log(item)
// })
for (let item of s) {
  console.log(item)
}