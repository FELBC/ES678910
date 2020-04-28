/*************************************************************
 *****************************ES9****************************
 *************************************************************/

// For await of
// ES9中异步操作集合是如何遍历的呢？

// Gen = (time) => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve(time)
//     },time)
//   })
// }
// // test = async () => {
// //   // arr数组中三个元素都是异步操作
// //   let arr = [Gen(2000),Gen(100),Gen(3000)]
// //   for(let item of arr){
// //     // 等待异步操作结果，按顺序执行
// //     console.log(Date.now(),await item.then(console.log))
// //   }
// // }
// // test()

// test = async () => {
//   let arr = [Gen(2000),Gen(100),Gen(3000)]
//   for await (let item of arr){
//     console.log(Date.now(),item)
//   }
// }
// test()

// 自定义数据结构配合For await of
const obj = {
  count:0,
  Gen(time){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({done:false,value:time})
      },time)
    })
  },
  [Symbol.asyncIterator](){
    let self = this
    return{
      next(){
        self.count++
        if(self.count<4){
          return self.Gen(Math.random()*1000)
        }else{
          return Promise.resolve({
            done:true,
            value:''
          })
        }
      }
    }
  }
}
test = async () => {
  for await(let item of obj){
    console.log(Date.now(),item)
  }
}
test()