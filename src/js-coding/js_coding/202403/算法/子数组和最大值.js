/**
 * 题目描述
输入一个整形数组，数组里有正数也有负数。​
  数组中连续的一个或多个整数组成一个子数组，每个子数组都有一个和。​
  找到所有子数组和中的最大值。输出拥有该最大和的第一个子数组。​
  要求时间复杂度尽量低。

    function getMaxSubArray(ary) {
  }
  const inputAry1 =  [2, 3, 5, -12, -6, 4, 2, -8, 9, 11, -5, 6, -4, 3]
  console.log(getMaxSubArray(inputAry1)) // 输出  [9,11,-5,6]
  const inputAry2 = [-5, -2, -7]
  console.log(getMaxSubArray(inputAry2)) // 输出  [-2]
  const inputAry3 = [1, 1, -2, 2]
  console.log(getMaxSubArray(inputAry3)) // 输出  [1,1]
 */