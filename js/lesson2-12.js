/*************************************************************
 ***************************Generator************************
 *************************************************************/

// ES6如何让遍历"停下来"？

// 1.next可以传值进去，它用来修改内部运行的数据，
// 2.return可以提前终止掉generator函数内部的运行
// 3.从外部向内部抛出异常try catch

// 第一小节 

// ES5:
// function loop() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i)
//   }
// }
// loop()

// ES6:

// 应用场景：
// 1.抽奖
// 2.自定义遍历器

// function * loop() {
//   for (let i = 0; i < 5; i++) {
//     yield console.log(i)
//   }
// }
// const l = loop()
// l.next();
// l.next();
// l.next();
// l.next();
// l.next();

// function * gen(){
//   let val
//   // 执行遇到yield关键字停下来
//   val = yield 1 // yield表达式返回的是undefined
//   console.log(val)
// }
// const l = gen()
// l.next() // 执行到yield 1,没有任何输出 // 空
// l.next() // 进行赋值操作 // undefined

// 返回值： 我当前遍历的对象的值， 循环是否已经结束

function* gen() {
  let val
  val = yield*[1, 2, 3] // *表示后面跟着的是可迭代的对象(generator对象)，嵌套
  console.log(val)
}
const l = gen()
// next会返回当前执行的状态和数据
console.log(l.next()) //{value: 1, done: false}
console.log(l.next()) //{value: 2, done: false}

// function * gen(){
//   let val
//   val = (yield [1,2,3]) + 7
//   console.log(val)
// }
// const l = gen()
// // 不传参业务的返回值undefined
// console.log(l.next(10)) // 执行l.next(10),找yield表达式,输出{value: Array(3), done: false}
// console.log(l.return(100)) // 终止 输出{value: 100, done: true}
// console.log(l.next(20)) // 再执行l.next(20)，计算yield整个表达式的值，由next传进来的参数20替换，20+7,输出27，最终再返回{value: undefined, done: true}

// 抛出异常
// function * gen(){
//   while(true){
//     try{
//       yield 1
//     }catch(e){
//       console.log(e.message)
//     }
//   }
// }
// const g = gen();
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
// g.throw(new Error('error'))
// console.log(g.next())

// 场景 年会抽奖
// function * draw(first = 1, second = 3, third = 5){
//   let firstPrice = ['1A','1B','1C']
//   let secondPrice = ['2A','2B','2C','2D','2E','2F','2G','2H','2I']
//   let thirdPrice = ['3A','3B','3C','3D','3E','3F','3G','3H','3I','3J','3K']
//   let count = 0
//   let random

//   while(1){
//     if(count < first){
//       random = Math.floor(Math.random()*firstPrice.length)
//       yield firstPrice[random]
//       count++
//       firstPrice.splice(random,1)
//     }else if(count < first + second){
//       random = Math.floor(Math.random()*secondPrice.length)
//       yield secondPrice[random]
//       count++
//       secondPrice.splice(random,1)
//     }else if(count < first + second + third){
//       random = Math.floor(Math.random()*thirdPrice.length)
//       yield thirdPrice[random]
//       count++
//       thirdPrice.splice(random,1)
//     }
//   }
// }
// let d = draw()
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)
// console.log(d.next().value)