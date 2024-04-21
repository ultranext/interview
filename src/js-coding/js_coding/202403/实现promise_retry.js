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


 function promiseRetry(promiseFn, maxTry) {
    let count = 0;
    const request = (fn, count, maxTry, resolve, reject) => {
        fn().then((res) => {
            resolve(res);
        }).catch(e => {
            if (count <= maxTry) {
                request(fn, count++, maxTry, resolve, reject)
            }
            else {
                reject(e);
            }
        });
    }
    return new Promise((resolve, reject) => {
        request(promiseFn, count, maxTry, resolve, reject);
    });
 }