/*************************************************************
 ****************************Array***************************
*************************************************************/

// 问题：
// 1.ES5中数组遍历有多少种方法？
// 2.他们有什么优势和缺点？

// 与for循环相比，forEach的写法更加简洁，
// 但是它存在应用场景局限性，不支持break和continue
// every可以变相解决forEach使用场景的局限性，通过控制return true后者false
// for in为object遍历设计

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
  console.log(index, arr[index])
}

// for of
