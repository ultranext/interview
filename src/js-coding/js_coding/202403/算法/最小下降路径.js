/**
 * 
 * 给定一个方形整数数组  A，我们想要得到通过 A 的下降路径的最小和。

下降路径可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列。

示例：
输入：[[1,2,3],[4,5,6],[7,8,9]]
输出：12
解释：
可能的下降路径有：
[1,4,7], [1,4,8], [1,5,7], [1,5,8], [1,5,9]
[2,4,7], [2,4,8], [2,5,7], [2,5,8], [2,5,9], [2,6,8], [2,6,9]
[3,5,7], [3,5,8], [3,5,9], [3,6,8], [3,6,9]
和最小的下降路径是 [1,4,7]，所以答案是 12。
 * 
 */

function minFallingPathSum(arr) {
    let len = arr.length;
    let dp = Array.from({ length: len }).fill([]);

    for (let i = 0; i < len; i++) {
        dp[len - 1][i] = arr[n - 1][i];
    }

    for (let j = len - 2; j >= 0; j--) {
        for (let k = 0; k < n; k++) {
            dp[j][k] = Infinity;
            const indexes = [k - 1, k, k + 1];
            for (let idx of indexes) {
                if (idx >= 0 && idx < len ) {
                    dp[j][k] = Math.min(dp[j][k], arr[j][k] + dp[j + 1][idx])
                }
            }
        }
    }

    return Math.min(...dp[0]);

}

