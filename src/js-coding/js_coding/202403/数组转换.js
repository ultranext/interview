/**
 * 已知数组 arr=[1,[2,[3,[4,null]]]]结构固定, 实现一个函数，把arr转换为 [4,[3,[2,[1,null]]]] ，考虑arr 有n级嵌套的情况
 */

function reverseArr(arr) {
    const stack = [];
    let next;
    const res;
    while(arr) {
        const [a, b] = arr;
        stack.push(a)
        arr = b;
    }
    while(next = stack.pop()) {
        res.push([])
    }
}
