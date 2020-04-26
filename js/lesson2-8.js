/*************************************************************
 ****************************解构赋值*************************
 *************************************************************/

// 解构工作原理：
// 一层一层对应，结构的过程其实就是按照左边的变量的结构，
// 和右边的数据的结构要一致，然后挨个匹配，匹配到之后，
// 右边的是数据项，左边的是变量，一一对应，一一映射

// 第一小节 数组的解构赋值

// ES5从一个复杂的数据结构中提取数据是如何做的？
// ES6有更优雅便捷的方式吗？
// 凡是可遍历的对象都可以进行解构赋值Array,obj,string,set,map

// ES5:
// let arr = ['hello', 'world'];
// let firstName = arr[0];
// let surName = arr[1];
// let [firstName, surName] = arr;
// console.log(firstName, surName);

// 数组解构赋值
// 解构赋值左侧中括号语法规定，必须这么用

// 跳过某个赋值元素
// let arr2 = ['a', 'b', 'c', 'd'];
// let [firstName, , thirdName] = arr2;
// console.log(firstName, thirdName);

// 字符串结构赋值
// let arr = 'abcd';
// let [firstName, , thirdName] = arr;
// console.log(firstName, thirdName);

// Set解构赋值
// 比索引取值更方便
// let [firstName, , thirdName] = new Set([1, 2, 3, 4]);
// console.log(firstName, thirdName);

// 对象属性解构赋值
// 结构赋值不仅可以赋简单的变量，还可以赋对象的属性
// let user = {
//   name: "s",
//   surName: 't'
// };
// [user.name, user.surName] = [1, 2];
// console.log(user);

// 循环的解构赋值
// let arr = ['hello', 'world'];
// for (let i = 0, item; i < arr.length; i++) {
//   item = arr[i]
//   console.log(item);
// }
// let user = {
//   name: "s",
//   surName: 't'
// };
// // Object.entries() 方法返回一个给定对象自身可枚举属性的键值对数组
// for (let [k, v] of Object.entries(user)) {
//   // 隐式赋值，显示索引
//   console.log(k, v);
// }

// ... rest参数的解构赋值
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let [firstName, curName, ...last] = arr;
// console.log(firstName, curName, last);

// 默认值
// 当数据量不够的时候，通过解构赋值变量的值为跟没赋值一样，undefined
// let arr = [];
// let [firstName = 'hello', curName, ...last] = arr;
// console.log(firstName, curName, last); // 1 undefined []

// 第二小节 Object的解构赋值

// let options = {
//   title: 'menu',
//   // width: 100,
//   height: 200
// };
// // 简写变量名跟对象属性名必须一摸一样
// // let {
// //   title,
// //   width,
// //   height
// // } = options;
// let {
//   title: title2,
//   width = 101,
//   height
// } = options
// console.log(title2, width, height); // menu 101 200

// let options = {
//   title: 'menu',
//   width: 100,
//   height: 200
// };
// // eg：后端返回接口数据，把需要的某几个取出来，其他用...rest变量存起来
// let {
//   title,
//   ...last
// } = options
// console.log(title, last);

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ['Cake', 'Donut'],
  extra: true
}
let {
  size: {
    width: width2,
    height
  },
  items: [, item2],
  extra
} = options;
console.log(width2, height, item2, extra);

// 阅读
// 1.Destructuring Assignment
// 2.ES6 JavaScript Destructuring in Depth
// 3.解构赋值

// 练习
// 1.一个函数需要传入很多参数，是否可以利用解构赋值来简化操作呢？
// 2.如何在业务开发中对接口数据进行解构赋值呢？