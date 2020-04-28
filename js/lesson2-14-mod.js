// 一个js文件中不能由多个default导出，多个文件导出需要用{}

// export const name = 'hello'
// export let addr = 'Beijing'
// export var list = [1,2,3]

// const name = 'hello'
// let addr = 'Beijing'
// let list = [1, 2, 3]
// export default name
// export {
//   addr,
//   list
// }

// 导出函数
// export default function say(content) {
//   console.log(content)
// }

// export function run(){
//   console.log('i am running')
// }

// const say = (content) => {
//   console.log(content)
// }

// const run = () => {
//   console.log('i am running');
// }

// export default say
// export{
//   run
// }

// 导出对象
// const data = {
//   code:1,
//   message:'success'
// }
// const des = {
//   age:20,
//   addr:'beijing'
// }

// export default {
//   data,
//   des
// }

// 导出类
class Test {
  constructor(){
    this.id = 2
  }
}

class Animal{
  constructor(){
    this.name = 'dog'
  }
}

export {
  Test,
  Animal
}

export default class People{
  constructor(){
    this.id = '132'
  }
}

// 被导出的模块在本模块引用
export function say(){
  console.log('say')
}

export function run(){
  say()
}
run()