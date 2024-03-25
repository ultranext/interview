/**
 * 实现 lodash.get
使用 lodash 中的 get 函数可避免长链的 key 时获取不到属性而出现问题，此时进行异常避免时及其服务，如 o.a && o.a.b && o.a.b.c && o.a.b.c.d

var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
get(object, 'a[0].b.c');
// => 3
 
get(object, ['a', '0', 'b', 'c']);
// => 3
 
get(object, 'a.b.c', 'default');
// => 'default'

function get () {
// 实现
}
 */


/**
 * lodash.get

题目描述
function get(obj, str) {}​

const obj = {​
a: {​
b: {​
c: [1,1,2]​
}​
}​
}​

get(obj, 'a.b.c') => [1,1,2]​

get(obj, 'a.d.e') => undefined​
get(obj, '') => obj​

get(obj, undefined)
 */