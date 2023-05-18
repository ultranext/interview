/*
实现一个可控制并发数的 request 函数

实现下面的函数，可以并发请求数据，所有的 URL 地址在 urls 参数中，同时可以通过max控制最大并发数量，该函数需要尽可能快的将所有请求执行完成，所有请求执行完成后调用  callback 方法，并将请求结果通过 callback 返回。

网络请求直接用 window.fetch 请求即可。

/**
 * @param {array<string>} urls 请求 url 数组
 * @param {number} max 最大并发数量
 * @param {(args: Result[]) => void} callback 回调函数
 */
function request(urls, max, callback) {
}

