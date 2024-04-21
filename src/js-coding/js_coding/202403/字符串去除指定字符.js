/**
 * # 编码 2.5
对输入的字符串，去除其中的字符'b'以及连续出现的'a'和'c'
例如：
'aacbd' -> 'ad'
'aabcd' -> 'ad'
'aaabbccc' -> ''
不允许使用类似string.replace函数。要求时间、空间复杂度尽量优化
 */
// 栈

function removeStr(str) {
    if (!str) {
        return '';
    }
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === 'b') {
            continue;

        }
        if (['a', 'c'].includes(char) && ['a', 'c'].includes(stack[stack.length - 1])) {
            continue;
        }
        stack.push(char);
    }
    return stack.join('');
}

console.log(removeStr('aacbd'));
console.log(removeStr('aaabbccc'));
console.log(removeStr('aabcd'));
