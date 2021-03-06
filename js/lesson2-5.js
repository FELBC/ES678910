/*************************************************************
 ************************Object Updates***********************
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

// 第二小节

// Set 
// Iterator 可遍历对象
// Set本质上还是obj对象
// Set存储的成员不允许是重复的
// Set接收的参数是一个可遍历的对象
// Set里面的每个元素可以是任意值
// Set只能添加不能修改，如果想修改的话先删除再添加
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
// for (let item of s) {
//   console.log(item)
// }

// 第三小节

// ES6中Map是什么，解决什么问题，怎么用？
// Iterator 可遍历对象
// Map允许传可遍历的对象
// Iterator value 必须是 an entry object
// Map key可以是任意值，可以是函数可以是obj等
// Map允许修改，重新设置下某个key对应的值即可
// Map字典类型，重在索引
// Map遍历的时候按添加顺序来排序
// Map性能较obj有优势
let map = new Map([
  [1, 1],
  [2, 2],
  [3, 'hello']
])
// console.log(map) // Map(3) {1 => 1, 2 => 2, 3 => "hello"}
let map2 = new Map()
map2.set(1, 1)
map2.set(2, 2)
map2.set(1, 3) //修改
// map2.delete(1)
// map2.clear()
// console.log(map2)
// console.log(map2.size)
// console.log(map2.has(1)) //查找key索引值
// console.log(map2.get(1))
// console.log(map2.keys())
// console.log(map2.values())
// console.log(map2.entries())
// map2.forEach((value, key) => {
//   console.log(value, key)
// });
// [key,value]遍历时候必须成对出现
// for of, of后面对象一定是可遍历的
// for (let [key, value] of map2) {
//   console.log(key, value)
// }

// 第四小节

// ES5中怎么把一个对象复制到另一个对象上？
// ES6怎么做呢？

// Object.assign实现的是浅复制，只是引用内存地址进行了替换，不能进行深拷贝

const target = {
  a: {
    b: {
      c: {
        d: 9
      }
    },
    e: 5,
    f: 6,
    h: 10
  }
}
const source = {
  a: {
    b: {
      c: {
        d: 1
      }
    },
    e: 2,
    f: 3,
    g: undefined,
    h: null
  }
}
Object.assign(target, source) // 浅复制会出现数据丢失情况
console.log(target)

// 练习：
// 1.如果目标对象传入的是undefined和null将会怎么样呢？
// Uncaught TypeError: Cannot convert undefined or null to object
// 由于undefined和null无法转成对象， 所以如果它们作为参数， 就会报错。

// 2.如果源对象的参数是undefined和null又会怎样呢？
// 首先， 这些参数都会转成对象， 如果无法转成对象， 就会跳过。 
// 这意味着， 如果undefined和null不在首参数， 就不会报错。

// 3.如果目标对象是个嵌套的对象，子对象的属性会被覆盖吗？
// 会覆盖，源对象的属性直接替换掉目标对象的所有属性，如果目标对象有其他的属性也会被替换掉

// WeakSet, WeakMap 与 Set, Map API一样
// WeakSet与Set区别：存储的数据只能是对象
// WeakMap与Map区别: WeakMap只允许接收对象类型的key