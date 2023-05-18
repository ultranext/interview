/*
实现currying函数

function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}

const currySum = currying(sum);

currySum(2)();
currySum(1,2)(3)();
currySum(1)(2)(3)();
*/
