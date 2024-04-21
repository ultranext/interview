/**
 * Q:实现一个批量请求函数 multiRequest(urls: array, maxNum: number)
要求如下：
1. 要求最大并发数 maxNum
2. 每当有一个请求返回，就留下一个空位，可以增加新的请求
3. 所有请求完成后，结果按照 urls 里面的顺序依次打出
请求函数可用fetch模拟
 */


function multiRequest(url: string[], maxNum: number) {
    let i = 0;
    let count = 0;
    let dataList = (new Array(url.length)).fill(null);
    return new Promise((rl, rj) => {
        const next = () => {
            count++;
            fetch(url[i]).then(res => {
                dataList[i] = res;
            }).finally(() => {
                if (i === url.length) {
                    rl(dataList);
                    return;
                }
                if (i < url.length) {
                    count--;
                    i++;
                    next();
                }
               
            })
        }
        while (count < maxNum) {
            next();
        }
        
    })
}