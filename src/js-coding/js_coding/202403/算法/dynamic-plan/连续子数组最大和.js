/**
 * 连续子数组最大和
const nums = [-2,1,-3,4,-1,2,1,-5,4]
 */

function getMaxSubArray(arr) {
    const len = arr.length;
    const dp = Array.from({length: len}).fill(0);
    dp[0] = arr[0];
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(arr[i], dp[i-1] + arr[i]);
    }
    return Math.max.apply(null, dp);
}

console.log(getMaxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

console.log('end');