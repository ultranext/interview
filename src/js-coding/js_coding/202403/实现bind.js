/**
 * 标题
实现bind函数

题目描述

// 不能使用 call, apply , bind​
// 实现 bind 方法​
function bind (fn, obj){​


}​
// return fn:  this -> obj
ctx.fn = fn;
ctx.fn()
delete ctx.fn;
/
function bind(fn, ctx) {

}