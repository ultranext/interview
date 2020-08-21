### js 实现平滑滚动（阿里）

### 数组去重，需要考虑字符串和数字，以及复杂度（头条）

### 深拷贝，考虑正则，日期，函数，环（阿里 蚂蚁）

### 简单的ast解析器（阿里）

### 实现EventEmitter （阿里，头条）

### 快排（头条）

### 一个升序数组，包含重复项，找指定值第一次出现位置（头条）

```
// 二分查找
function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length;
    let mid = Math.floor(left + right / 2);
    while (left < right) {
        if (arr[mid] === val) {
            if (mid === 0 || arr[mid - 1] !== arr[mid]) {
                break;
            }
            else {
                right = mid;
            }

        }
        if(val > arr[mid]) {
            left = mid;
        }
        if (val < arr[mid]) {
            right = mid;
        }
        mid = Math.floor(right + left / 2);
    }
    return mid;
}
const arr3 = [1,2,2,3,3,3,3,4,4,5,5,6,7,7,7,7,7,7,8,9,10,11,11,11,12,12,12];

// console.log(binarySearch(arr3, 7));
```

### 封装一个cacheRequest 可缓存的异步请求，只有首次发送时才发出真实请求，后续都请求缓存，考虑第二次请求发出时首次请求未返回或者失败的情况（快手）

### 函数防抖和节流

### 实现一个lazyload 组件，当检测到组件进入页面时才开始渲染（阿里）

### 实现一个vue filter , 处理千分位分割符和保留2位小数，如： '123456.789' -> '123,456.79'

### 实现function one() {}， function two() {}, function add(){} 三个函数，要求：one(add(two())) 和two(add(one()))均等于3 （快手）




