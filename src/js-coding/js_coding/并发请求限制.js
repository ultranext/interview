/**
 * 实现一个函数，将请求按并发限制依次发送出去

题目描述
实现一个 batchFetch 函数，参数 apis 为一个数组，包含多个请求地址，limit 表示并发限制，要求:​
- 要求最大并发数 limit​
- 每当有一个请求返回，就留下一个空位，可以增加新的请求​
- 所有请求完成后，结果按照 apis 里面的顺序依次打出

function batchFetch(apis: string[], limit: number): Promise<any[]> {
 
}
 */