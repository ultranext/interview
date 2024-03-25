/**
 * 箭头函数this指向

题目描述
var name = 'window;​
function a() {​
this.name = 'a';​
return () => {​
console.log(this.name);​
}​
}​

const fn = a();​
fn();​

const b = (...res) => {​
// console.log()​
}​
b(1,2,3)  // 1,2,3
 */