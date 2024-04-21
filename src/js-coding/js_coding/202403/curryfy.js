标题
实现通用的科里化函数

题目描述
实现函数科里化 `实现 add(1)(5) // 6 的函数封装`​

function  sum(a, b) {​
return a + b​
}​

通用的科里化封装函数​

const add = curryfy(sum)​

使用举例：​
const add1  =  add(1) // function​
add1(5) // 6​


cosnt  sum2 = (a, b, c) = a + b -c​

const currySum2 = curryfy(sum2)​

currySum2(10)(20)(5) // 25​
currySum2(10, 20) (5) // 25

function curryfy(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.call(null, ...args);
        } else {
            return function (...args2) {
                return curried.call(null, ...args, ...args2);
            }
        }
    }
}