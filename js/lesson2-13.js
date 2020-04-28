/*************************************************************
 ***************************Iterator*************************
 *************************************************************/

// ES6如何让不支持遍历的数据结构可遍历呢？

// Iterator 可遍历的接口，如果你想让你的对象可遍历，一定是部署了接口

let authors = {
  allAuthors: {
    fiction: ['Agla', 'Skks', 'LP'],
    scienceFIction: ['Neal', 'Arhru', 'Ribert'],
    fantasy: ['J.R.Tole', 'J.M.R', 'Terry P.k']
  },
  Address: []
}

// let r = [];
// for (let [k, v] of Object.entries(authors.allAuthors)) {
//   r = r.concat(v)
// }
// console.log(r)

// 自定义遍历器
// authors[Symbol.iterator] = function () {
//   // this 输入
//   let allAuthors = this.allAuthors
//   let keys = Reflect.ownKeys(allAuthors)
//   let values = []
//   // 输出
//   return {
//     next() {
//       if (!values.length) {
//         if (keys.length) {
//           values = allAuthors[keys[0]]
//           keys.shift()
//         }
//       }
//       return {
//         done: !values.length,
//         value: values.shift()
//       }
//     }
//   }
// }

// generator
authors[Symbol.iterator] = function * () {
  let allAuthors = this.allAuthors;
  let keys = Reflect.ownKeys(allAuthors)
  let values = []
  while(1){
    if(!values.length){
      if(keys.length){
        values = allAuthors[keys[0]]
        keys.shift()
        yield values.shift()
      }else{
        return false
      }
    }else{
      yield values.shift()
    }
  }
}


let r = [];
for (let v of authors) { //Uncaught TypeError: authors is not iterable
  r.push(v)
}
console.log(r)