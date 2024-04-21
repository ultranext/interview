/**
 * 标题
括号匹配

题目描述
function fn(str) {​

}​


console.log(fn("()[]{}")) // true​
console.log(fn("([)]"))  // false​
console.log(fn("({})"))  // true
 */

function fn(str) {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
        ')': '(',
        ']': '[',
        '}': '{'
    };
    const stack = [];
    const len = str.length;
    for (let i = 0; i < len; i++) {
        const s = str[i];
        const stackTop = stack.pop();
        if (map[s] !== stackTop) {
            stackTop && stack.push(stackTop);
            stack.push(s);
        }
    }
    return stack.length === 0;

}

console.log(fn('(){}[]'));
console.log(fn('([)]'));

