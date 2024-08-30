/**
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

子数组是数组中元素的连续非空序列。
输入：nums = [1,1,1], k = 2
输出：2

输入：nums = [1,2,3], k = 3
输出：2
 */

// function sumK(nums, k) {
//     let count = 0;
//     const len = nums.length;
//     const helper = (start, target) => {
//         if (target < 0 || start >= len) {
//             return;
//         }
//         if (target === 0) {
//             count++;
//             return;
//         }
//         for (let i = start; i < len; i++) {
//             const cur = nums[i];
//             helper(start + 1, target - cur);
//         }
//     }
//     helper(0, k);
//     return count;
// }

function sumK(nums, k) {
    const len = nums.length;
    let sum = 0;
    let count = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            sum = sum + nums[j];
            if (sum === k) {
                count++;
                sum = 0;
                break;
            }
        }
    }
    return count;
}

console.log(sumK([1,1,1], 2));
console.log(sumK([1,2,3], 3));

console.log('end');