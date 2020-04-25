/*************************************************************
 ****************************Array***************************
*************************************************************/

// 第一小节 遍历方法

// 在不同的场景选择用什么样的遍历方法

// 问题：
// 1.ES5中数组遍历有多少种方法？
// 2.他们有什么优势和缺点？

// 与for循环相比，forEach的写法更加简洁，
// 但是它存在应用场景局限性，不支持break和continue
// every可以变相解决forEach使用场景的局限性，通过控制return true后者false
// for in为object遍历设计
// ES6允许自定义数据结构，不是数组不是object，按ES6标准构造成可遍历，用for of，同时可遍历数组

const arr = [1, 2, 3, 4, 5]

// for循环
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    continue
  }
  // console.log(arr[i])
}

// forEach
arr.forEach(function (item, index, array) {
  // if(item===2){
  //   continue
  // }
  // console.log(item)
})

// every
arr.every(function (item, index, array) {
  if (item === 2) {} else {
    // console.log(item)
  }
  return true // 默认返回false,只有加了return true才会继续遍历
})

// for in
// 自定义属性不是数组中的元素，但是for in会把a属性跟8遍历出来，
// 这是for in的瑕疵，数组的索引不仅仅是数字，也可以是字符串
arr.a = 8
for (let index in arr) { // 数组也是一个对象，数组可遍历
// index类型为字符串,右侧为number，只有==的时候才会进入if语句，===不成立直接跳过if
  if (index * 1 === 2) { // ==只检查值，不检查类型，===既检查值，也要检查类型,index*1将字符串变成了数值
    continue
  }
  // console.log(index, arr[index])
}

// for of
for (let item of arr) {
  // console.log(item)
}

// 获取Price每类下的最小值例如A的最小值1.5
let Price = {
  A: [1.5, 2.3, 4.5],
  B: [3, 4, 5],
  C: [0.5, 0.8, 1.2]
}
for (let key in Price) {
  // console.log(key, Price[key])
}

// 第二小节 转换

// 伪数组：eg:argeuments,dom nodeList->选中所有li元素
// 伪数组具备数组的一些特性，具备长度，都能遍历，不能直接调用数组的方法
// 伪数组具备两个特征，按索引方式存储数据，具备length属性 eg:{0:'a',1:'b',length:2}

// 问题：
// ES5中将伪数组转换成数组该怎么办？
// ES6中如何做呢？

// ES5:
// let args = [].slice.call(arguments) // collection
// let imgs = [].slice.call(document.querySelectorAll('img')) // NodeList

// ES6:
// Array.prototype.from 用来转换伪数组到数组
// Array.from(arrayLike, mapFn, thisArg)

// let args = Array.from(arguments)
// let imgs = Array.from(document.querySelectorAll('img'))
// imgs.forEach()

// 初始化一个长度为5的数组数值1
let array = Array(5)
for (let i = 0, len = array.length; i < len; i++) {
  array[i] = 1
}
// console.log(array)

let array2 = Array.from({ length: 5 }, function () {
  return 1
})
// console.log(array2)

// 第三小节 生成新数组

// 问题
// ES5中创建一个新数组该怎么做？
// ES6中如何做呢？

// let array = Array(5);
// let array = ['',''];

// Array.prototype.of 允许你快速的把n个元素放到一个数组里面去
let array3 = Array.of(1, 2, 3, 4, 5)
// console.log(array3)

// Array.prototype.fill
let array4 = Array(5).fill(1)
// console.log(array4)
// Array.fill(value,start,end)
// 元素替换，将第2个第3个元素替换成8
let array5 = [1, 2, 3, 4, 5]
// console.log(array5.fill(8, 2, 4))

// 第四小节 数组查找元素

// 问题
// ES5中如何查找一个元素呢？
// ES6中如何做呢？

// 查找的目的：
// 为了验证某个元素在数组当中，
// 把满足条件的每个元素筛出来
let array6 = [1, 2, 3, 4, 5]
// filter把所有满足条件的元素返回回来
// filter返回一个数组
let find = array6.filter(item => item % 2 === 0)
// console.log(find)

// Array.proptotype.find
// find返回满足条件的第一个值
let find2 = array6.find(item => item % 2 === 0)
// console.log(find2)

// Array.prototype.findIndex
let findIdx = array6.findIndex(item => item % 2 === 0)
// console.log(findIdx)

/**
 * Arrar练习题
*/
// 1.JavaScript世界里有哪些元素是可遍历的？
// 对象，数组，Set,Map,String,
// 伪元素(arguments,NodeList)=>TypedArray（类数组对象）,函数的arguments对象,

// 2.如何给数据结构自定义遍历？

// 3.find()和ES5的filter()有什么区别?
// filter把所有满足条件的元素返回回来
// find返回满足条件的第一个值
