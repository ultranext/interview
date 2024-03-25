/*
给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

示例 1：
输入：matrix = [
 [1,2,3],
 [4,5,6],
 [7,8,9]
]
输出：[1,2,3,6,9,8,7,4,5]
示例 2：
输入：matrix = [
 [1,2,3,4],
 [5,6,7,8],
 [9,10,11,12]
]

输出：[1,2,3,4,8,12,11,10,9,5,6,7]
https://leetcode-cn.com/problems/spiral-matrix
题号： 54
*/

const matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const matrix2 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
   ];


const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

const mySpiralOrder = function (matrix) {
    const maxY = matrix.length;
    if (!maxY) {
        return [];
    }
    const maxX = matrix[0].length;
    const visited = [];
    const result = [];

    for (let y = 0; y < maxY; y++) {
        visited[y] = [];
    }
    let currentDirIndex = 0;
    const targetLength = maxX * maxY;
    const isValid = (i, j) => i > -1 && j > -1 && i < maxY && j < maxX && !visited[i][j];

    walk = (i, j) => {
        // 当前值需保证是有效的
        const val = matrix[i][j];
        result.push(val);
        visited[i][j] = true;
        // 遍历完成
        if (result.length === targetLength) {
            return result;
        }
        const [diffI, diffJ] = direction[currentDirIndex];
        let nextI = i + diffI;
        let nextJ = j + diffJ;

        if (!isValid(nextI, nextJ)) {
            currentDirIndex = (currentDirIndex + 1) % 4;
            const [diffI, diffJ] = direction[currentDirIndex];
            nextI = diffI + i;
            nextJ = diffJ + j
        }

        walk(nextI, nextJ);
    }

    walk(0, 0);
    return result;
}

console.log(mySpiralOrder(matrix1), '\n');
console.log(mySpiralOrder(matrix2), '\n');




/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
let spiralOrder = function (matrix) {
    let maxY = matrix.length
    if (!maxY) return []
    let maxX = matrix[0].length
  
    // 记录一个 visited 数组
    // 按照 右 -> 下 -> 左 -> 上 的方向不断前进
    // 直到遇到边界或者已经访问过的元素 则切换成下一个方向
    let dirs = [
        [0, 1], // 右
        [1, 0], // 下
        [0, -1], // 左
        [-1, 0], // 上
    ]
  
    let currentDirIndex = 0
  
    let visited = []
    for (let y = 0; y < maxY; y++) {
        visited[y] = []
    }
    let isValid = (y, x) => {
        return y >= 0 && y < maxY && x >= 0 && x < maxX && !visited[y][x]
    }
  
    let targetLength = maxY * maxX
    let res = []
  
    let helper = (y, x) => {
        let val = matrix[y][x]
        res.push(val)
  
        if (res.length === targetLength) {
            return res
        }
  
        visited[y][x] = true
        let [diffY, diffX] = dirs[currentDirIndex % 4]
        let nextY = y + diffY
        let nextX = x + diffX
        if (!isValid(nextY, nextX)) {
            [diffY, diffX] = dirs[++currentDirIndex % 4]
            nextY = y + diffY
            nextX = x + diffX
        }
        helper(nextY, nextX)
    }
  
    helper(0, 0)
  
    return res
  };