/**
 * 标题
通过对象属性路径获取属性值

题目描述
const obj = {​
a: 1,​
b: {​
c: 2,​
d: {​
e: 3​
}​
}​
}​

get(obj, 'a.d.e') // 3​
get(obj, 'a.f.e') // undefined
 */