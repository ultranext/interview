/**
 * Q:实现一个批量请求函数 multiRequest(urls: array, maxNum: number)
要求如下：
1. 要求最大并发数 maxNum
2. 每当有一个请求返回，就留下一个空位，可以增加新的请求
3. 所有请求完成后，结果按照 urls 里面的顺序依次打出
请求函数可用fetch模拟
 */