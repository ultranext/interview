/**
 * 
长度最小的子数组

给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。如果不存在符合条件的连续子数组，返回 0。

示例:

输入: s = 7, nums = [2,3,1,2,4,3]
输出: 2
解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组。

https://leetcode-cn.com/problems/minimum-size-subarray-sum/submissions
题号： 209
 */

// const s = 7;
// const nums = [2,3,1,2,4,3];

const s = 5;
const nums = [2,3,1,2,4,3];

const minLengthArr = (s, nums) => {
    const len = nums.length;
    let start = 0;
    let end = 0; // 双指针开始位置
    let sum = 0
    let res = Infinity;
    let resultArr = [];

    while (end < len) {
        sum += nums[end];
        while ( sum >= s) {
            res = Math.min(res, end - start + 1);
            resultArr = nums.slice(start , end + 1);
            sum -= nums[start++];
        }
        end++;
    }

    return {count: res === Infinity ? 0 : res, arr: JSON.stringify(resultArr)};

}

console.log(minLengthArr(s, nums));