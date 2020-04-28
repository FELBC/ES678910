/*************************************************************
 ***************************Module***************************
 *************************************************************/

// ES6如何把代码进行模块化设计？

// import name2, { // default导出的在import的时候可以修改名称,且不需要{}
//   addr as addr2, // {}形式导出的多个内容必须{}形式导入，用as修改名称
//   list
// } from './lesson2-14-mod'

// console.log(name2, addr2, list)

// import  say, { run } from './lesson2-14-mod'

// say('hello world')
// run()

// import  say, { run } from './lesson2-14-mod'

// say('hello world')
// run()

// import obj from './lesson2-14-mod'

// let {data,des} = obj
// console.log(data,des)

// import {Test,Animal} from './lesson2-14-mod'

// let test = new Test();
// let dog = new Animal();
// console.log(test.id,dog.name)

import * as Mod from './lesson2-14-mod'

let test = new Mod.Test();
let dog = new Mod.Animal();
console.log(test.id,dog.name)
let people = new Mod.default()
console.log(people.id)
