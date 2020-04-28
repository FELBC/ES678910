/*************************************************************
 *****************************ES8****************************
 *************************************************************/

// ES8中增加了对Object快速遍历的方法，了解下？

let grade = {
  'lilei':96,
  'hanmeimei':99
}

for(let [k,v] of Object.entries(grade)){
  console.log(k,v)
}

for(let k of Object.keys(grade)){
  console.log(k)
}

for(let v of Object.values(grade)){
  console.log(v)
}