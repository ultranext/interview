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


/*
实现如下函数add,使如下执行都等于9

add(2,3,4)=9
add(2)(3,4)=9
add(2)(3)(4)=9
add(2,3)(4)=9

*/

/**
 * 
 * // 设计一个sum函数，使其满足以下要求

sum(1, 2).sumOf() // 返回 3

sum(1, 2)(3).sumOf() // 返回 6

sum(1)(2, 3, 4).sumOf() // 返回 10

sum(1, 2)(3, 4)(5).sumOf() // 返回 15

 */

function add(...args) {
    add.prevArgs = [...add.prevArgs || [], ...args];
    console.log('add.len', add.length);
    if (args.length < add.length) {
            return add;
        
    } else {
        return add.prevArgs.reduce((sum, cur) => sum + cur, 0);
    }
}

// 利用函数toString 自执行作为判断条件, 不确定调用长度
function add2(...outArgs) {
    const finalArgs = outArgs;
    const fn = function(...innerArgs) {
       finalArgs.concat(innerArgs);
    }
    fn.toString = function () {
        finalArgs.reduce((a, b) => a + b);
    }
    return fn;
}
const add3 = (...args) => args.reduce((a, b) => a + b, 0);
// 这里是预设fn输入形参长度， 攒够参数再执行
function currying(fn) {
    console.log('len', fn.length);
    return function judge(...args) {
        if (args.length > fn.length) {
            return fn.apply(this, args);
        }
        // return (...args2) => judge(...args, ...args2);
        return (...args2) => judge(...args, ...args2);
    }
}

const add4 = currying(add3)



console.log(add2(2,3)(4));


