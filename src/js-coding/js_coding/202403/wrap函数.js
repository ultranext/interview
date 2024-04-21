/**
 * 标题
实现wrap函数

题目描述

function add(x, y) {​
return x + y;​
}​
add(1, 2) // 3​
add(1, 2, 3) //3​
// 实现wrap函数​
function wrap(fn) {​
}​
const add2 = wrap(add);​
add2(1, 2, 3)// 6​
add2(1, 2, 3, 4)// 10
 */

function wrap(fn) {
    return function(...args) {
        return args.reduce((prev, cur) => fn.call(null, prev, cur), 0)
    }
}
function add(x, y) {
    return x + y;
}
const add2 = wrap(add);
console.log(add2(1, 2, 3))// 6
console.log(add2(1, 2, 3, 4))// 10