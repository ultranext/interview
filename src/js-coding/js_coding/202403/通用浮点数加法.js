/*
标题
通用浮点数加法

题目描述
function add(num1, num2) {​
?​
}​

add(0.1, 0.2)  // 0.3​
add(0.11, 0.2)  // 0.31​
add(0.91, 0.2)  // 1.11​
add(0, 0.2)  // 0.2
*/

function add(num1, num2) {
    const getLen = (num) => num.toString().split('.')[1]?.length || 0;
    const len1 = getLen(num1);
    const len2 = getLen(num2);
    const base = Math.pow(10, Math.max(len1, len2));
    return ((base * num1) + (base * num2)) / base;
}

console.log(add(0.1, 0.2))
console.log(add(0.11, 0.2))
console.log(add(0.91, 0.2))
console.log(add(0, 0.2))