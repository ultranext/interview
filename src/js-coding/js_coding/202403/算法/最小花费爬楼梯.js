/**
 * 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

请你计算并返回达到楼梯顶部的最低花费。
 */

function solution(arr, n) {
    const dp = new Array(arr.length).fill(0);
    dp[0] = 0; dp[1] = 0;
    for (let i = 2; i < arr.length; i++) {
        dp[i] = Math(dp[i - 1] + arr[i - 1], dp[i - 2] + arr[i - 2])
    }
    return dp[n];
}


// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

// 问总共有多少条不同的路径？

function solution() {
    const ret = [];
    const traverse = (x, y) => {

        if (x === m && y === n) {
            ret.push([x, y]);
            return;
        }
        if (x > m || y > n) {
            return;
        }
        traverse(x+1, y);
        traverse(x, y+1);
    }
    traverse(0, 0);
}