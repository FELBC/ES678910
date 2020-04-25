/*************************************************************
 ****************************Class***************************
*************************************************************/

// 第一小节

// 问题：
// ES5中怎么申明一个类？
// ES6是如何做到呢？

// ES5中做类的定义的时候所用公用的东西都放在函数体内部不合理
// 所有的实例对象想共有的东西放在function proptotype上去

// 把ES5 function当作构造函数去用，比如函数体内部，
// 哪是是实例对象，想自己独一份的东西，往里边放，
// 通用的东西放原型链上去

// ES5:
// 类的声明

// let Animal = function (type) {
//   this.type = type
// }
// Animal.prototype.eat = function () {
//   console.log('i am eat food')
// }
// // 实例：
// let dog = new Animal('dog')
// let monkey = new Animal('monkey')
// console.log(dog)
// console.log(monkey)
// // monkey 修改原型上方法
// monkey.constructor.prototype.eat = function () {
//   console.log('error')
// }
// dog.eat()
// monkey.eat()

// ES6:
// 类的声明
// class只是ES5用原型链声明类的一个语法糖
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   eat () {
//     console.log('i am eat food')
//   }
// }

// let dog = new Animal('dog')
// let monkey = new Animal('monkey')
// console.log(dog)
// console.log(monkey)
// dog.eat()
// monkey.eat()

// console.log(typeof Animal) // function

// 问题：
// ES5中怎么读写一个属性？
// obj.prop, obj['prop'],只能读写，做不到拦截，修改，有条件的读写

// ES6中如何做的呢？
// 通过set get方式能让你在读写属性上面能够有更大的操作权，甚至个性化的定制

// 属性保护,只读,读写属性getter,setter
// get,set当作一个入口，控制属性的只读，有条件的写入
// let _age = 4
// class Animal {
//   constructor (type) {
//     this.type = type
//   }
//   // age是暴露给实例对象操作的出入口
//   // 返回值跟出入口的名字不能一样
//   // 真实存储年龄的变量不叫age，而是_age
//   get age () {
//     return _age
//   }
//   // set作为一个拦截
//   set age (val) {
//     if (val < 7 && val > 4) {
//       _age = val
//     }
//   }
//   eat () {
//     console.log('i am eat food')
//   }
// }
// let dog = new Animal('dog')
// console.log(dog.age)
// dog.age = 5
// console.log(dog.age)
// console.log(dog._age)

// ES5中怎么操作一个方法？这里的方法指对象实例方法，类的静态方法
// ES6是如何做的呢？
// 如果方法的内部要引用实例对象的一些信息，必须定义为类的实例对象方法
// 如果方法的内部不会涉及到实例对象的内容，则定义为类的静态方法

// let Animal = function (type) {
//   this.type = type
// }
// Animal.prototype.eat = function () {
//   // 静态方法引用
//   Animal.walk()
//   console.log('i am eat food')
// }

// Animal.walk = function () {
//   console.log('i am walking')
// }
// let dog = new Animal('dog')
// dog.eat()
// // 静态方法在实例对象上找不到
// dog.walk() // Uncaught TypeError: dog.walk is not a function

class Animal {
  constructor (type) {
    this.type = type
  }
  eat () {
    // ES6静态方法调用
    Animal.walk()
    console.log('i am eat food')
  }
  // 类的静态方法
  static walk () {
    console.log('i am walking')
  }
}
let dog = new Animal('dog')
dog.eat()
