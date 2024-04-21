/** 实现一个模板字符串替换函数

题目描述
function  template(str, obj)​

template("${name} is  ${age} years old",{name:"TOM", age:"20"})--> "TOM is  20 years old"
*/
function template(str, obj){
   return  str.replace(/\$\{(.+?)\}/g, (_, $1) => (obj[$1] || ''));
}

console.log(template("${name} is  ${age} years old",{name:"TOM", age:"20"}));