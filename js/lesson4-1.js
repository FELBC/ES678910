/*************************************************************
 *****************************ES8****************************
 *************************************************************/

// Async\Await
// ES8中有没有比Promise更优雅的异步方式呢？
// Async/Await必须联合使用，Promise的语法糖

// async function firstAsync(){ 
//   // Async作用:如果传递的是非Promise实例，自动返回一个Promise实例
//   return 27 // 相当于 return Promise.resolve(27)
// }
// console.log(firstAsync() instanceof Promise)
// firstAsync().then(res=>{
//   console.log(res)
// })

// firstAsync = async () => {
//   // 异步操作，1秒钟之后执行
//   let promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve('now it is done')
//     },1000 )
//   })
//   promise.then(res => {
//     console.log(res)
//   })
//   // 然后执行这
//   console.log(2)
//   return 3 // 等于return Promise.resolve(3)
// }
// firstAsync().then(res => {
//   console.log(res)
// })
// // 执行结果：
// // 2
// // 3
// // now it is done

// Async/Await用来解决多个异步操作顺序问题,从上到下
// firstAsync = async () => {
//   let promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve('now it is done')
//     },1000 )
//   })
//   //await promise：表达式，用来计算出一个结果，用来返回promise返回的值
//   let result = await promise 
//   console.log(result)
//   console.log(await 30)
//   await Promise.resolve(40).then(res=>console.log(res))
//   console.log(2)
//   return 3 
// }
// firstAsync().then(res => {
//   console.log(res)
// })
// 执行结果：
// now it is done
// 2
// 3