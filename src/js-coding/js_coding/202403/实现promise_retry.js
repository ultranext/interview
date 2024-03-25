// Q: 实现一个 promise retry（2.5）
```
function promiseRetry (promiseFn: promiseFn, maxTry: number): Promise {
}
type promiseFn = () => Promise
```
A: 
```
function promiseRetry(promiseFn, maxTry) {
    let count = 0;
    const promise = new Promise((resolve, reject) => {
        promiseFn().then(() => {
            resolve();
        }).catch((e) => {
            count++;
            if (count < maxTry) {
                return promiseFn();
            }
            reject(e);
        })
    })
}
```