/*************************************************************
 ***************************反射Reflect***********************
 *************************************************************/

// Reflect => 反射，什么是反射机制？
// Java的反射机制是在编译阶段不知道是哪个类被加载，而是在运行的时候才加载，执行

// 第一小节 Reflect.apply

// 如果想用apply方法，必须先指定Math.floor这个方法，然后再调用apply方法，
// 然后把Math.floor运用到null这个作用域下，然后传参，
// Math.floor运用到null这个作用域下，参数是1.72
// console.log(Math.floor.apply(null, [1.72]));
// console.log(Math.floor(1.72));

// 反射先告诉用apply，再传递Math.floor
// 在静态扫描的时候不知道哪个方法在调用Math.floor,
// Math.floor没有绑定在某个方法上，
// 在真正执行的时候Math.floor作为一个参数传递进来，
// console.log(Reflect.apply(Math.floor, null, [4.72]))

// 反射作用
// let price = 91.3;
// if (price > 100) {
//   price = Math.floor.apply(null, [price])
// } else {
//   price = Math.ceil.apply(null, [price])
// }
// console.log(price)

// 非反射的情况下先指定方法，
// 反射的话是执行过程中根据我的条件去调用方法
// console.log(Reflect.apply(price > 100 ? Math.floor : Math.ceil, null, [price]));

// 第二小节 Reflect.construct

// 利用反射来实例化类
// let d = new Date();
// console.log(d.getTime());
// 通过调用Reflect.construct方法，调用不同的类来动态实例化一个对象
// let d = Reflect.construct(Date, [])
// console.log(d.getTime(), d instanceof Date);

// 第三小节 
// Reflect.defineProperty 
// Reflect.deleteProperty
// Reflect.getOwnPropertyDescriptor

// Object.defineProperty与Reflect.defineProperty返回值不同
// const student = {}
// const o = Object.defineProperty(student, 'name', {
//   value: 'Mike'
// })
// console.log(student, o);
// const r = Reflect.defineProperty(student, 'age', {
//   value: 34
// })
// console.log(student, r);

// const obj = {
//   x: 1,
//   y: 2
// }
// Reflect.deleteProperty(obj, 'x')
// console.log(obj);
// 获取对象属性 obj.x obj[x]
// console.log(Reflect.get(obj, 'x'))
// console.log(Reflect.get([3, 4], 0))
// console.log(Reflect.getOwnPropertyDescriptor(obj, 'x'));

// let d = new Date();
// console.log(Reflect.getPrototypeOf(d));

// const obj = {
//   x: 1,
//   y: 2
// }
// has方法Reflect独有，Object不具备
// console.log(Reflect.has(obj, 'x'))

// obj.z = 3;
// 冻结对象
// Object.freeze(obj);
// obj.z = 3;
// // 是否可扩展
// console.log(Reflect.isExtensible(obj));
// console.log(obj);
//判断某个对象,数组下的自有属性
// console.log(Reflect.ownKeys(obj));
// console.log(Reflect.ownKeys([1, 2]));
// 冻结对象
// Reflect.preventExtensions(obj)
// console.log(Reflect.isExtensible(obj))
// Reflect.set
// Reflect.set(obj, 'z', 4)
// console.log(obj)
const arr = ['duck', 'duck', 'duck']
// Reflect.set(arr, 2, 'goose')
// console.log(arr);
// 修改原型对象
console.log(Reflect.getPrototypeOf(arr));
Reflect.setPrototypeOf(arr, String.prototype)
// arr.sort()
console.log(Reflect.getPrototypeOf(arr));