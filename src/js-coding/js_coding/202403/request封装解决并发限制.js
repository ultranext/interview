/**
 * wx.request 封装，解决并发限制问题
 * 
 * 微信小程序 wx.request 有并发数量限制，通过二次封装解决并发数
 */

/**
 * 
 * @param {*} size 
 * @param {*} func 
 
// TS
declare function limit<T extends (...props: any[]) => Promise<unknown>>(size: number, func?: T): T;

// eg. 假设 wx.request 返回 Promise
const http = limit(10, wx.request);

cosnt result = await http('url');
cosnt result2= await http(...);
// .... 假设前10个都没结束，第11个会等前10个中任意一个结束
cosnt result11 = await http(...);

*/