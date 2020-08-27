### js 实现平滑滚动（阿里）

### 数组去重，需要考虑字符串和数字，以及复杂度（头条）

### 深拷贝，考虑正则，日期，函数，环（阿里 蚂蚁）

```
let o = {a: 1};
const obj = {
    date: new Date(),
    r: /d{3}/g,
    o1: o,
    o2: o,
    fn() {console.log(0);}
};
obj.obj = obj;
function deepClone (obj) {
    let targetMap = new Map();
    const _deepClone = target => {
        if (typeof target  === 'Function') {
            return target;
        }
        if (!target || typeof target !== 'Object') {
            return target;
        }
        // regExp|Date|function|
        if (target instanceof RegExp) {
            return new RegExp(target);
        }
        if (target instanceof Date) {
            return new Date(target);
        }
       
        if (targetMap.has(target)) {
            return targetMap.get(target);
        }

        let result = target instanceof Array ? [] : {};
        targetMap.set(target, target);
        for (let prop in target) {
            result[prop] = _deepClone(target[prop]);
        }
        return result;

    }
    return _deepClone(obj);
};


function deepClone2(target, hash = new WeakMap()) {
    const Constructor = target.constructor;
    let result;
    switch (constructor) {
        case RegExp:
        case Date:
        result = new Constructor(target)
            break;
        default:
            if (hash.has(target)) {
                return hash.get(target);
            }
            hash.set(target, target);
            break;
    }
    result = new Constructor();
    for (let key of Object.keys(target)) {
        result[key] = typeof target[key] === 'Object' ? deepClone(target[key], hash): target[key];
    }
    return result;
}

console.log(deepClone(obj));
console.log(deepClone2(obj));

```

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
```
const cacheRequest = (function () {
    let requestMap = new Map();
    return function (url, data, cb) {
        let promise = requestMap.get(url);
        if (!promise) {
            promise = new Promise((resolve, reject) => {
                request(url, data, {
                    success(res) {
                        resolve(res);
                    },
                    fail(e) {
                        requestMap.delete(url);
                        reject(e);
                    }
                })
            });
            requestMap.set(url, promise);
        }
        return promise.then(res => cb(res), err => cb(e));
    }
    
})();
```

### 函数防抖和节流

### 实现一个lazyload 组件，当检测到组件进入页面时才开始渲染（阿里）

### 实现一个vue filter , 处理千分位分割符和保留2位小数，如： '123456.789' -> '123,456.79'

### 实现function one() {}， function two() {}, function add(){} 三个函数，要求：one(add(two())) 和two(add(one()))均等于3 （快手）



## 算法类
1. 两数之和
给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

## 实现一个异步求和函数
提供一个异步add方法如下，需要实现一个await sum(...args)函数;
```
function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 1000);
}

async function sum(...args) {
  if (args.length > 1) {
    const result = await new Promise((resolve) => {
      asyncAdd(args[0], args[1], (err, result) => {
        if (!err) {
          resolve(result);
        }
      });
    });
    return sum(result, ...args.splice(2));
  }
  return args[0];
}

// 优化版

function createAdd(a, b = 0) {
  return new Promise((resolve) => {
    asyncAdd(a, b, (err, result) => {
      if (!err) {
        resolve(result);
      }
    });
  });
}

async function sum(...args) {
  if (args.length > 1) {
    const result = [];
    for (let i = 0; i < args.length; i = i + 2) {
      result.push(createAdd(args[i], args[i + 1]));
    }
    return sum(...(await Promise.all(result)));
  }
  return args[0];
}


```

### 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal


### 合并二维有序数组成一维有序数组，归并排序的思路

### 斐波那契数列

### 字符串出现的不重复最长长度

### 有一堆整数，请把他们分成三份，确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90）

### 实现 lodash 的_.get







