/*************************************************************
 ************************RegExp Updates***********************
 *************************************************************/

// 第一小节

// ES5中字符串换行，包含变量活表达式，包含逻辑运算怎么办？
// ES6有更优雅便捷的方式吗？
const a = 20;
const b = 10;
const c = 'javascript';
// const str = 'my age is ' + (a + b) + ' i love ' + c;
const str = `my age is ${a+b} i love ${c}`
// console.log(str);

const retailPrice = 20;
const wholeSalePrice = 16;
const type = 'retail';
let showTxt = '';
if (type === 'retail') {
  showTxt = '您此次的购买单价是：' + retailPrice;
} else {
  showTxt = '您此次购买的批发价是：' + wholeSalePrice
}
// console.log(showTxt)

// 复杂字符串处理Template
function Price(strings, type) {
  let s1 = strings[0];
  const retailPrice = 20;
  const wholeSalePrice = 16;
  let showTxt;
  if (type === 'retail') {
    showTxt = '购买单价是：' + retailPrice;
  } else {
    showTxt = '购买的批发价是：' + wholeSalePrice
  }
  return `${s1}${showTxt}`;
}
let showTxt2 = Price `您此次的${'retail'}`;
// console.log(showTxt2)
// 字符串换行
let s1 = '我是第一行' + '\n' + '我是第二行';
console.log(s1);
let s2 = `我是第一行
我是第二行`;
console.log(s2);