/**
 * 模拟请求 - 顺序处理

题目描述
function request(i) {​
 return new Promise((resolve) => {​
 setTimeout(() => {​
 resolve(i);​
 }, Math.random() * 1000);​
 });​
}​
/* 修改下面这段代码，让最后打印出来的数字是 0、1、2、3...9 这样的顺序 */ function main() {​
 for (let i = 0; i < 10; i++) {​
    request(i).then((res) => console.log(res));​
    }​
   }​
   main();
 */