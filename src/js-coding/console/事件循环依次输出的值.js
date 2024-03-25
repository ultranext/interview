/**
 * 标题
依次输出的值

题目描述
process.nextTick(() => {​
console.log('nextTick');​
})​

Promise.resolve().then(() => {​
console.log('promise1');​
}).then(() => {​
console.log('promise2');​
})​

setImmediate(() => {​
console.log('setImmediate');​
})​

console.log('nodejs');
 */