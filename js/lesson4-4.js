/*************************************************************
 *****************************ES8****************************
 *************************************************************/

// ES8中如何获取Object数据的描述符？

const data = {
  PortLand:'78/50',
  Dublin:'88/52',
  Lima:'58/40'
}

Object.defineProperty(data,'Lima',{
  enumerable:false,
  writable:false
})

console.log(Object.keys(data))
console.log(Object.getOwnPropertyDescriptors(data))
console.log(Object.getOwnPropertyDescriptor(data,'Lima'))