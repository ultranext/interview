/**
 * 限流功能的图片请求工具函数
function batch(urls, max) {
    const result = [];
    const len = urls.length;
    let count = 0;
    return new Promise((resolve, reject) => {
        function next() {
            let current = count++;
            if (current > max) {
                 resolve(result);
             }
            const img = new Image();
            img.src = urls[current]; 
            img.onload = res => {
                result[current] = res;
                next();
            };
            img.onError = err => {
                result[current] = res;
                next();
            }
        }
        while(count < max) {
            next();
        }
    })
}
 */