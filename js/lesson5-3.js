/*************************************************************
 *****************************ES9****************************
 *************************************************************/

// 在ES9新增Object的Rest&Spread方法有何用武之地？

// const input = {
//   a:1,
//   b:2
// }
// const test = {
//   d:5
// }
// const output={
//   // ...spread扩展实现了浅拷贝，不是引用
//   ...input,
//   ...test,
//   c:3
// }
// console.log(input,output)
// input.a = 4;
// console.log(input,output)

const input = {
  a:1,
  b:2,
  c:3,
  d:4,
  e:5
}
const {a,b,...rest} = input;
console.log(a,b,rest)
