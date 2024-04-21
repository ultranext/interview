/**
 * 标题
多维数组的展开

题目描述
实现一个 flat，可以把下面 arr 这样的数组扁平化后输出？​


```​
const arr =  [1, 2, true, null, '3', { a: 1 }]​
```​


const b =  [1, 2, true, null, '3']​

a[2] = b;​
b[2] = a;
 */

function flat(arr, res = []) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            res.concat(flat(arr[i], res));
        } else {
            res.push(arr[i])
        }
    }
    return res;
}

console.log(flat([1,2,[3, [4,5, [6]]], 7,8]));