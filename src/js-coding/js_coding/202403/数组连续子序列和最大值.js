/**
 * 求一个数组的连续子元素的和的最大值
 [1, -2, 3, 10, -4, 7, 2, -5] => 18
[1, 4, -5, 9, 8, 3, -6] => 20
 */

function maxSubArray(nums) {
    const len = nums.length;
    const dp = new Array(len).fill(0);
    let res = dp[0] = nums[0];
    for(let i = 1; i < len; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        res = Math.max(res, dp[i]);
    }
    
    return res;
}

console.log(maxSubArray([1, -2, 3, 10, -4, 7, 2, -5]));