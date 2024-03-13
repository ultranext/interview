/*
实现一个 createCurry 的函数，它接受任意函数作为参数，并将该函数柯里化后返回。可以实现如下的效果

// 原函数
function sum(a, b, c) {
   return a + b + c
}
// 函数柯里化
const currySum = createCurry(sum)
// 使用举例
currySum(1)(2)(3) // 6
// 使用举例
currySum(1, 2)(3) // 6
// 使用举例
currySum(1)(2, 3) // 6
// 使用举例
const add1 = currySum(1) 
add1(2, 3) // 6



// 原函数
function saySomething(name,  word) {
   console.log(`${name} says ${word}`)
}
// 函数柯里化
const currySay = createCurry(saySomething)
// 使用举例
currySay('小明')('你好') // 小明 says 你好
// 使用举例
const jackSay = currySay('Jack')
jackSay('hello') // jack says hello

*/