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
