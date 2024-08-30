/**
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
 * 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，
 * 其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
 * 
 * 输入：n = 12
输出：3 
解释：12 = 4 + 4 + 4

输入：n = 13
输出：2
解释：13 = 4 + 9
 */

function square(n) {
    let dp = Array.from({length: n}).fill(0);
    for (let i = 0; i < n; i++) {
        dp[i] = i;
        for (let j = 1; i > j * j; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    return dp[n];
}