/**
 * 标题
Promise timeout

题目描述
实现promise timeout 方法，可以选择函数或者原型方法，如果ms时间未fullfilled，则整体reject​

function timeoutPromise(ms, promise) {}​
timeoutPromise(1000, p).then().catch()​

Promise.prototype.timeout = function(ms) {}​
p.timeout(1000).then().catch()​

p.race([p1, p2,  p3]).then()
 */