/**
 * 
 * 题目描述
设计实现一个类:​
​
class Observer {​
    constructor(data) {​
    }​
    $on(){}​
}

实现以下功能：
// 实例化对象
const data = new Observer({ a: 1 });
console.log(data.a) //  1
// 通过 $on 给对应的 key 绑定处理函数
data.$on('a', (newValue, oldValue) => {
   console.log(newValue, oldValue);
});
// 给对应 key 赋值时触发绑定函数的执行
data.a = 2 // 2, 1

 */