/**
 * 给定一个  m x n 的矩阵，如果一个元素为 0，
 * 则将其所在行和列的所有元素都设为 0。请使用原地算法
 * 
 * 示例 1:

示例 1:

输入:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出:
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2:

输入:
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出:
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
进阶:

一个直接的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个常数空间的解决方案吗？
 */
//思路： 先遍历，标记0坐标，后再遍历处理

function setZero(matrix) {
    const maxY = matrix.length;
    if (!maxY) {
        return;
    }
    const maxX = matrix[0].length;

    const list = [];
    for (let i = 0; i < maxY; i++) {
        for (let j = 0; j < maxX; j++) {
            const v = matrix[i][j];
            if (v === 0) {
                list.push([i, j]);
            }
        }
    }
    const handleRows= [];
    const handleCols = [];

    for(let [i, j] of list) {
        if (!handleRows[i]) {
            for (let x = 0; x < maxX; x++) {
                matrix[i][x] = 0;
            }
            handleRows[i] = true;
        }
        if (!handleCols[j]) {
            for (let y = 0; y < maxY; y++) {
                matrix[y][j] = 0;
            }
            handleCols[j] = true;
        }
    }
    return matrix;

}
const m1 = [
      [1,1,1],
      [1,0,1],
      [1,1,1]
    ];
const m2 = [
      [1,0,1],
      [0,0,0],
      [1,0,1]
    ];
const m3 = [
      [0,1,2,0],
      [3,4,5,2],
      [1,3,1,5]
    ];
console.log(setZero(m1));
console.log(setZero(m3));

console.log('end');
