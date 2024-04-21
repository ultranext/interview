/**
 * Q:请写一个函数，对字符串进行处理：
输入 '1, 2, 3, 5, 7, 8, 10' 输出 '1~3, 5, 7~8, 10'
 */

function group(str) {
    const arr = str.split(',');
    let tmp = [];
    let ret = [];
    for(let i = 0; i < arr.length; i++) {
        if (i === 0) {
            tmp.push(arr[i]);
            continue;
        }
        if (arr[i] - arr[i-1] > 1) {
            if (tmp.length === 1) {
                ret.push(tmp[0]);
            } else {
                ret.push(`${tmp[0]}~${tmp[tmp.length - 1]}`);
            }
            tmp = [arr[i]];
            continue;
        }
        tmp.push(arr[i]);
    }
    tmp.length === 1 && ret.push(tmp[0]);
    tmp.length > 1 && ret.push(`${tmp[0]}~${tmp[tmp.length - 1]}`);
    return ret;

}

console.log(group('1, 2, 3, 5, 7, 8, 10'))