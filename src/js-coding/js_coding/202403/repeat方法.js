/**
 * 题目描述
使用JS实现一个repeat方法，function repeat (func, times, wait) {}，​
const repeatFunc = repeat(alert, 4, 3000), 调用这个 repeatFunc("hellworld")，会alert4次 helloworld, 每次间隔3秒
 */

function repeat(func, times, wait) {
    return function (...args) {
       for (let i = 0; i < times; i++) {
           setTimeout(() => {
               func.call(null, ...args);
           }, wait * i);
       }
    }
}

const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("helloworld");