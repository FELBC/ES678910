/*************************************************************
 *****************************ES10****************************
 *************************************************************/

// JSON.stringify()能力升级
// console.log(JSON.stringify('\u{D800}'))

// 扁平化输出flat
// let arr = [1,[2,3],[4,5,[6,7,[8,9]]]]
// console.log(arr.flat(3)) //  [1, 2, 3, 4, 5, 6, 7, 8, 9]

// flatMap
// let arr = [1,2,3]
// // console.log(arr.map(item => [item*2]).flat())
// console.log(arr.flatMap(item => [item*2]))

//trimStart,trimEnd,trimLeft,trimRight
// let str = '     foo    '
// // console.log(str.replace(/^\s+|\s+$/g,''))
// console.log(str.trimStart())
// console.log(str.trimEnd())
// console.log(str.trimLeft())
// console.log(str.trimRight())
// console.log(str.trim())

// let str = `"foo" and "bar" and "baz"`

// const select = (regExp,str) => {
//   const matches = []
//   while(true){
//     const match = regExp.exec(str)
//     if(match === null) break
//     matches.push(match[1])
//   }
//   return matches
// }
// console.log(select(/"([^"]*)"/g,str))

// match
// function select(regExp,str){
//   const matches = [];
//   str.replace(regExp,function(all,first){
//     matches.push(first)
//   })
//   return matches
// }
// console.log(select(/"([^"]*)"/g,str))

// function select(regExp,str){
//   const matches = []
//   for(const match of str.matchAll(regExp)){
//     matches.push(match[1])
//   }
//   return matches
// }
// console.log(select(/"([^"]*)"/g,str))

// Object.fromEntries
// const arr = [['foo',1],['bar',2]]
// const obj = Object.fromEntries(arr)
// console.log(obj.bar)

// 获取所有key长度等于3
// const obj = {
//   abc:1,
//   def:2,
//   ghksks:3
// }
// // obj转数组，利用数组强大的api处理完再转换成obj
// let res = Object.fromEntries(
//   Object.entries(obj).filter(
//     ([key,value]) => key.length===3
//   )
// )
// console.log(res)

// try{

// }catch{

// }

// 练习
// 1.自己如何给Array实现一个Flat函数？

// 2.利用Objct.fromEntries把url的search部分返回一个object？

const url = "https://www.lbc.com/search/?words=%E5%89%8D%E7%AB%AF%E8%B7%B3%E6%A7%BD%E9%9D%A2%E8%AF%95%E5%BF%85%E5%A4%87%E6%8A%80%E5%B7%A7&type=js"

// ES5:
// const cvtUrlParamsToObj = (url) => {
//   let paramsStr = url.split('?')[1]
//   let paramsArr = paramsStr.split('&');
//   let paramsObj = {}
//   for(let item of paramsArr){
//     paramsObj[item.split("=")[0]] = item.split("=")[1]
//   }
//   return paramsObj
// }
// console.log(cvtUrlParamsToObj(decodeURI(url)))

// ES6:
const cvtUrlParamsToObj = (url) => {
  let paramsStr = url.split('?')[1]
  let paramsArr = paramsStr.split('&');
  paramsArr = paramsArr.map(item => item.split('='))
  return Object.fromEntries(paramsArr)
}
console.log(cvtUrlParamsToObj(decodeURI(url)))