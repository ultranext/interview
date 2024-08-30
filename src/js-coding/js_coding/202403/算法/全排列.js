/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出: [ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]
#
 */

function solution(arr) {
    const len = arr.length;
    const ret = [];
    const backtracing = (prev, rest) => {
        if (prev.length === len) {
            ret.push(prev);
            console.log(prev);
            return;
        }
        for (let i = 0; i < rest.length; i++) {
            prev.push(rest[i]);
            backtracing([...prev], [...rest.slice(0, i), ...rest.slice(i + 1)]);
            prev.pop(rest[i]);
        }
    }
    for (let j = 0; j < len; j++) {
        backtracing([arr[j]], [...arr.slice(0, j), ...arr.slice(j + 1)]);
    }
    return ret;
}

console.log(solution([1, 2, 3]));
