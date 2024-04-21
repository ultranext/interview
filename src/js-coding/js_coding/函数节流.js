/*
标题
函数节流

题目描述
1. 实现一个能够立即执行的截流函数；​
2. 给截流函数传参，使得每隔 1000ms 最多触发一次；​
3. 模拟一个每隔 300ms 触发一次的触发器，一共触发 5 次来验证你的截流函数。预期截流后的函数实际触发 2 次。
*/

function throttle(fn, wait, leading = true) {
    let lastTime = 0;
    return function() {
        const now = Date.now();
        if (leading && lastTime === 0) {
            fn.apply(this, arguments);
            lastTime = now;
            return;
        }
        if (now - lastTime >= wait) {
            fn.apply(this, arguments);
            lastTime = now;
        }
    }
}

const test = throttle(() => {
    console.log('test', Date.now());
}, 1000);
let count = 0;
const trigger = () => {
    test();
    count++;
    if (count < 5) {
        setTimeout(trigger, 300);
    }
};

trigger();