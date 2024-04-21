// 标题
// 实现一个函数，完成两个二进制数相加

// 题目描述
// 实现一个函数 add(num1, num2)，输入两个二进制数的字符串表示，输出10进制相加的结果。比如：​
// add('01', '10') = 3

function add(num1, num2) {
    if (typeof num1 !== 'string' || typeof num2 !== 'string') {
        throw new Error('num1 and num2 must be string');
    }
    const maxLen = Math.max(num1.length, num2.length);
    num1 = num1.padStart(maxLen, '0');
    num2 = num2.padStart(maxLen, '0');
    let f = 0;
    let t = 0;
    for (let i = maxLen - 1; i >= 0; i--) {
        const r = parseInt(num1[i]) + parseInt(num2[i]) + f;
        f = Math.floor(r / 2);
        t = (r % 2) * Math.pow(2, maxLen - i - 1) + t;
    }
    if (f > 0) {
        t = f * Math.pow(2, maxLen) + t;
    }
    return t;
}

console.log(add('01011111', '11110'));