/**
 * 标题
实现并发限制函数

题目描述
const limit = function(num) {​
// 实现​
}​

const limitInstance = limit(1);​

const fetchSomething = function (text, second) {​
return new Promise((resolve, reject) => {​
  setTimeout(() => { console.log(text, new Date()); resolve(text) }, second * 1000)​
})​
}​

const input = [​
        limitInstance(() => fetchSomething('foo', 1)),​
        limitInstance(() => fetchSomething('bar', 1)),​
        limitInstance(() => fetchSomething('test', 1)),​
        limitInstance(() => fetchSomething('test2', 1)),​
        limitInstance(() => fetchSomething('test3', 1)),​
];​

const result = await Promise.all(input);​
console.log(result); // 依次输出结果 1秒后 'foo'  1秒后 'bar' 1秒后 'test' ...
 */