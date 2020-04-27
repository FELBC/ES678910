/*************************************************************
 ************************异步操作(Promise)********************
 *************************************************************/

// ES5中的回调地狱了解吗？
// ES6是如何通过异步操作来实现的呢？

// 第一小节 异步操作与回调的关系

// js单线程，异步操作不会立马执行，放到异步队列里面去，
// 优先同步操作，同步操作完之后才会异步操作

// function loadScript(src) {
//   let script = document.createElement('script');
//   script.src = src;
//   document.head.append(script);
// }

// function test() {
//   console.log('test')
// }
// loadScript('./1.js') //存在异步操作，异步操作放在异步队列进行，执行完loadScript('./1.js')这句不等待1.js异步代码执行,
// test(); // 而是执行test(),单线程执行完之后才会走异步队列的事情执行1.js里面代码
// test 
// 1

// ES5回调
// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;
//   script.onload = () => {
//     callback(src)
//   }
//   document.head.append(script)
// }

// function test(name) {
//   console.log(name);
// }

// loadScript('./1.js', test);

// 回调地狱
// loadScript('./1.js', function (script) {
//   console.log(script)
//   loadScript('./2.js', function (script) {
//     console.log(script)
//     loadScript('./3.js', function (script) {
//       console.log(script)
//     })
//   })
// });

// 第二小节 Promise
// 用平行的方式表示异步的操作

// 1.new Promise返回状态pending挂起,结果为undefined
// 2.通过用resolve或者reject去改变Promise的状态，而且状态不可逆

// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => resolve(src) // fulfilled,result
//     script.onerror = (err) => reject(err) // rejected,error
//     document.head.append(script)
//   })
// }

// loadScript('./1.js')
//   .then(() => {
//     // 如果不加返回值，loadScript('./4.js')依然是一个空的promise对象，
//     // 如果想在这里用loadScript('./4.js')这个promise对象继续影响下一个promise对象，必须手动加return
//     // 不然就影响不了下一个promise对象，即便loadScript('./4.js')加载不到报错loadScript('./3.js')还是会继续执行，
//     // 加完return之后如果loadScript('./4.js')加载不到报错就不会继续执行loadScript('./3.js')，而是报错
//     return loadScript('./4.js')
//   }, (err) => {
//     console.log(err)
//   }).then(() => {
//     loadScript('./3.js')
//   }, (err) => {
//     console.log(err)
//   });

// 第三小节 then
// .then是Promise对象原型上的方法，只要是Promise对象，它就可以调用.then方法
// .then返回一个新的Promise实例
// .then如果传的不是一个函数，onFulfilled,onRejected相当于没有，then会帮你返回一个新的空的promise对象，从而保证连续的链式调用
// promise.then(onFulfilled,onRejected) 
// then支持两个参数，onFulfilled,onRejected，onFulfilled是必选的，onRejected可选
// onFulfilled,onRejected都是函数类型，对应resolve,reject,跟Promise状态息息相关

// 第四小节 Promise的静态方法
// // Promise.resolve():
// function test(bool) {
//   if (bool) {
//     return new Promise((resove, reject) => {
//       resove(30);
//     })
//   } else {
//     return Promise.resolve(42)
//   }
// }
// test(1).then((value) => {
//   console.log(value);
// });

// Promise.reject():
// function test2(bool) {
//   if (bool) {
//     return new Promise((resolve, reject) => {
//       resolve(30)
//     })
//   } else {
//     return Promise.reject(new Error('error'))
//   }
// }
// test2().then((value) => {
//   console.log(value)
// }, (err) => {
//   console.log(err)
// })

// 第四小节 Catch异常捕获
// Catch是Promise原型链上对象的方法
// 捕获链式操作上reject抛出的异常
// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => resolve(src) // fulfilled,result
//     script.onerror = (err) => reject(err) // rejected,error
//     document.head.append(script)
//   })
// }

// // 异步操作串行
// loadScript('./1.js')
//   .then(() => {
//     return loadScript('./4.js')
//   })
//   .then(() => {
//     return loadScript('./3.js')
//   })
//   .catch(err => {
//     console.log(err)
//   });

// 第五小节 异步操作并行
// 模拟三个异步操作，异步操作接口并行实现
// const p1 = Promise.resolve(1)
// const p2 = Promise.resolve(2)
// const p3 = Promise.resolve(3)

// Promise.all([p1, p2, p3]).then((value) => {
//   console.log(value)
// });

// 第六小节 竞争race
// 先到先得，CDN资源获取防止一个地方挂掉，同样的资源写两个相同的接口来竞争，服务器地址不同
// 模拟两个不同响应时间的异步操作
const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000);
  });
}
const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    }, 0);
  });
}
Promise.race([p1(), p2()]).then((value) => {
  console.log(value)
});

// 阅读
// 1.Promise
// 2.fetch
// 3.JavaScript Promise
// 4.ES6 Promises in Depth
// 5.Using Promises
// 6.JavaScript Promises for Dummies

// 练习
// 1.按顺序加载脚本的代码不太直观看出顺序执行的过程，如果按顺序延时执行是不是更好理解呢？
// 2.请用Promise实现一个接口。