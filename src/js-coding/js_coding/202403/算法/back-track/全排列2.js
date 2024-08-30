/**
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 输入： [1,1,2]
 * 输出： 
 * [
 * [1,1,2],
 * [1,2,1],
 * [2,1,1]
 * ]
 */

function allRank(arr) {
    if (arr.length === 1) {
        return [arr];
    }
    const result = [];
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const cur = arr[i];
        const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const restAllRank = allRank(rest);
        for (let r of restAllRank) {
            const next = [cur, ...r];
            if (!map.has(next.join('_'))) {
                map.set(next.join('_'), true);
                result.push(next);
            }
        }
    }
    return result;
}

console.log(allRank([1,1,2]));
console.log('end');