/**
 * 给定一个包含  m x n  个元素的矩阵（m 行, n 列），
 * 请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 
 * 示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

function traveMatrix(matrix) {
    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    let dir = 0;
    const n = matrix.length;
    const targetLen = n * n;
    const visited = Array.from({length: n}).fill(Array.from({length: n}).fill(0));

    const isValid = (x, y) => {
        return x >= 0 && x < n && y >= 0 && y < n && visited[x][y];
    }


    const helper = (x, y, num) => {
        // 终止条件
        if (num === targetLen) {
            return;
        }
        res[x][y] = num;
        visited[x][y] = true;
        let nextX = dirs[dir][0] + x;
        let nextY = dirs[dir][1] + y;
        if (!isValid(nextX, nextY)) {
            nextX = dirs[dir++][0] + x;
            nextY = dirs[dir++][1] + y;
        }
        helper(nextX, nextY, num++);
    }

    helper(0, 0, 1);
    return res;

} 

