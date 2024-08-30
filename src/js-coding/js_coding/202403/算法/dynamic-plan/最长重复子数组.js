/**
 * 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
 * 示例 1:

输入:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
输出: 3
解释: 
长度最长的公共子数组是 [3, 2, 1]。
 */

function getMaxSubArray(a, b) {
    const aLen = a.length;
    const bLen = b.length;
    const dp = Array.from({length: aLen}).map(() => {
        return Array.from({length: bLen}).fill(0);
    });
    let max = 0;
    for(let i = aLen - 1; i >= 0; i--) {
        for (let j = bLen - 1; j >= 0; j--) {
            if (a[i] === b[j]) {
                dp[i][j] = ((i > aLen -2 ||  j > bLen - 2) ? 0 : dp[i + 1][j + 1]) + 1;
                max = Math.max(max, dp[i][j]);
            } else {
                dp[i][j] = 0;
            }

        }
    }
    return max;
}
const a = [1,2,3,2,1];
const b = [3,2,1,4,7];
console.log(getMaxSubArray(a, b));
