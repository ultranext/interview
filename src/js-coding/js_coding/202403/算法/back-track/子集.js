/**
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
    说明：解集不能包含重复的子集。

    输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */

function subset(arr) {
    const len = arr.length;
    const res = [];
    const helper = (start, prev, targetLen) => {
        if (start > len) {
            return;
        }
        if (prev.length === targetLen) {
            res.push(prev);
            return;
        }
        for (let i = start; i < len; i++) {
            const cur = arr[i];
            prev = prev.concat(cur);
            helper(i + 1, prev, targetLen);
        }
    }
    for (let j = 0; j < len; j++) {
        helper(0, [], j);
    }
    
}