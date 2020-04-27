/*************************************************************
 ***************************代理Proxy************************
 *************************************************************/

// ES6强大的代理功能该怎么使用？

// 第一小节 

// 代理用来改变信息：

// let o = {
//   name: 'xiaoming',
//   price: 190
// }

// Proxy两个参数，代理谁，干什么
// {}表示操作，eg：劫持构造函数，
// 劫持get，set，deleteProperty,ownkeys,has,defineProperty,
// 都可以在handle里面进行操作

// name是我的隐私，我的真实价格不希望被用户读取到，
// 这个信息只传递到中介Proxy那，中介就不能再往外透露，
// 这是代理的含义
// d实现的是一个中介的角色

// o已经传给Proxy，在操作里面已经拿不到
// let d = new Proxy(o, {
//   // target表示代理的对象
//   get(target, key) {
//     if (key === 'price') {
//       return target[key] + 20
//     } else {
//       return target[key]
//     }
//   }
// })

// console.log(d.price, d.name);

// Proxy使用场景

// 走代理用来让用户知道真实的信息，但是不能修改信息
// eg:从后端拿回来的数据只能读，不能修改
// let o = {
//   name: 'xiaoming',
//   price: 190
// }
// ES6代理方式将数据变成只读，用户只读，但是代理还是可以写数据：
// 把o保护起来，暴露的是中介d，用户访问的永远是d对象
// let d = new Proxy(o, {
//   // 读
//   get(target, key) {
//     return target[key]
//   },
//   // 写，对赋值操作进行了拦截
//   // d => target, key => price, value => 300
//   set(target, key, value) {
//     return false
//     // target[key] = value;
//   }
// })
// d.price = 300; // 因为set return false，所有d.price = 300修改值不起效果
// console.log(d.price, d.name); // 190 "xiaoming"

// ES5 defineProperty将源对象变成只读,彻底将对象锁死：
// for (let [key] of Object.entries(o)) {
//   Object.defineProperty(o, key, {
//     writable: false
//   });
// }
// o.price = 300;
// console.log(o.name, o.price);

// 校验 Schema Validation
// 不破坏数据结构，多所有输入进行校验

// 监听错误
// window.addEventListener('error', (e) => {
//   console.log(e.message)
//   // 捕获错误上报
//   // report('./')
// }, true)

// let o = {
//   name: 'xiaoming',
//   price: 190
// }
// // 校验规则
// let validator = (target, key, value) => {
//   if (Reflect.has(target, key)) {
//     if (key === 'price') {
//       if (value > 300) {
//         // 不满足规则就要触发错误
//         throw new TypeError('price exceed 300')
//         // return false
//       } else {
//         target[key] = value;
//       }
//     } else {
//       target[key] = value;
//     }
//   } else {
//     return false
//   }
// }

// let d = new Proxy(o, {
//   get(target, key) {
//     return target[key] || ''
//   },
//   set: validator
// });
// d.price = 301
// d.name = 'hanmeimei'
// d.age = 400
// console.log(d.price, d.name, d.age); // 190 'hanmeimei' ''

// id目标：
// 随机,唯一,只读
// class Component {
//   constructor() {
//     this.proxy = new Proxy({
//       id: Math.random().toString(36).slice(-8)
//     }, {})
//   }
//   get id() {
//     return this.proxy.id
//   }
// }
// let com = new Component()
// let com2 = new Component()
// for (let i = 0; i < 10; i++) {
//   console.log(com.id, com2.id)
// }
// com.id = 'abc'
// console.log(com.id, com2.id)

//撤销代理
let o = {
  name: 'xiaoming',
  price: 190
}
// d包含两部分：代理数据，撤销的操作
let d = Proxy.revocable(o, {
  get(target, key) {
    if (key === 'price') {
      return target[key] + 20
    } else {
      return target[key]
    }
  }
})
console.log(d.proxy.price, d)
setTimeout(() => {
  // 撤销代理操作
  d.revoke()
  setTimeout(() => {
    console.log(d.proxy.price)
  }, 100)
}, 1000)

// 阅读：
// 1.ES6 Proxies in Depth
// 2.Meta Programming in JavaScript - Part Three:Proxies and Reflection
// 3.10 Use Cases for Proxy
// 4.How to Use Proxies
// 5.ES6 Proxies in Practice

// 练习：
// 1.组件初始化的时候都赋值一个可读且随机的ID，该怎么做？
// 2.临时代理(可撤销)有哪些应用场景呢？
// 3.如何把接口的数据用代理进行包装？