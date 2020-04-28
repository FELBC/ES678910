/*************************************************************
 *****************************ES9****************************
 *************************************************************/

 // ES9中Promise是如何兜底操作的？

const Gen = time => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      if(time<500){
        reject(time)
      }else{
        resolve(time)
      }
    },time);
  })
}
Gen(Math.random()*1000)
  .then(res=>console.log('resolve',res))
  .catch(err=>console.log('reject',err))
  .finally(()=>console.log('finish'))