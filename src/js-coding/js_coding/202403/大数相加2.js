/**
 * 标题
大数相加

题目描述
'8898345345345' +​
'794353840503454'
 */

const a = '8898345345345';
const b = '794353840503454';
function add(a, b) {
    const maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, '0');
    b = b.padStart(maxLen, '0');
    let t = 0;
    let f = 0;
    let sum = '';

    for (let i = maxLen - 1; i > -1; i--) {
        t = Number(a[i]) + Number(b[i]) + f;
        f = Math.floor(t / 10);
        sum = t % 10 + sum;
    }
    if (f === 1) {
        sum = f + sum;
    }
    return sum;
}

console.log(add(a, b));