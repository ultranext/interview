/**
 * 
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 输入：nums = [100,4,200,1,3,2]
输出：4
解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

输入：nums = [0,3,7,2,5,8,4,6,0,1]
输出：9
 */

function getMaxSubArray(nums) {
    const sorted = [...new Set(nums.sort((a, b) => a - b))];
    let max = 0;
    let cur = 0;
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] - sorted[i - 1] > 1) {
            max = Math.max(max, i - cur);
            cur = i;
        }
    }
    return Math.max(max, sorted.length - cur);
}

console.log(getMaxSubArray([100,4,200,1,3,2]))
console.log(getMaxSubArray([0,3,7,2,5,8,4,6,0,1]))
console.log(getMaxSubArray([0,3,7,2,5,8,4,6,0,1,100,4,200,1,3,2]))