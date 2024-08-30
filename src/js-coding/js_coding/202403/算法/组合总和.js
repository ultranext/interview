/**
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的数字可以无限制重复被选取。

说明：

所有数字（包括 target）都是正整数。
解集不能包含重复的组合。
示例 1：

输入：candidates = [2,3,6,7], target = 7,
所求解集为： [ [7], [2,2,3] ]
示例 2：

输入：candidates = [2,3,5], target = 8,
所求解集为： [ [2,2,2,2], [2,3,3], [3,5] ]
#
 */

function getCompisition(candidates, target) {
    const sortedCandidates = candidates.sort((a, b) => a - b);
    const len = sortedCandidates.length;
    const path = [];
    const ret = [];
    const used = [];
    const backtracing = (i, sum) => {
        if (sum === target) {
            ret.push(Array.from(path));
            return;
        }
        for (let j = i; j < len; j++) {
            const n = sortedCandidates[j];
            use[j] = true;
            if (j > i && sortedCandidates[j] === sortedCandidates[j - 1] && used[j - 1] === false) {
                continue;
            }
            if (n > target - sum) {
                break;
            }
            path.push(n);
            sum += n;
            backtracing(j, sum);
            path.pop();
            sum -= n;

        }
       
    }
}

/*
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
示例: 输入: n = 4, k = 2 输出: [ [2,4], [3,4], [2,3], [1,2], [1,3], [1,4], ]
*/

function solution(n, k) {
    const ret = [];
    const backtracing = (prev = [], i) => {
        if (prev.length === k) {
            ret.push(prev);
            console.log(prev);
            return;
        }
        for (let j = i; j < n + 1; j++) {
            prev.push(j);
            backtracing([...prev], j + 1);
            prev.pop();
            j--;
        }
    }
    backtracing([], 1);
    return ret;
}

console.log(solution(5, 4));
