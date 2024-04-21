/**
 * 
 * 标题
实现 sum 函数使得以下表达式的值正确

题目描述
实现 sum 函数使得以下表达式的值正确​
​
sum(1, 2, 3).get();  // 6​
sum(2, 3)(2).get();  // 7​
sum(1)(2)(3)(4).get();  // 10​
sum(2)(4, 1)(2).get();  // 9
 */

function sum(...outArgs) {
    // const finalArgs = [...outArgs];
   
    // function fn() {
    //     finalArgs.concat([...arguments]);
    //     return arguments.callee;
    // }
    // fn.get = function() {
    //     return finalArgs.reduce((prev, cur) => prev + cur, 0);
    // }
    // return fn;

    function curryfy(...args1) {
        return sum.call(null, ...outArgs, ...args1);
    }
    curryfy.get = function() {
        return outArgs.reduce((prev, cur) => prev + cur, 0);
    }
    return curryfy;
}



console.log(sum(1,2,3).get())
console.log(sum(1)(2)(3).get())
console.log(sum(1,2)(3).get())
console.log(sum(1,2)(3)(4).get())