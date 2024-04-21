// promise.all


class MyPromise {
    static all(promises) {
        return new Promise((res, rej) => {
            let count = 0;
            const result = [];
            for (let i = 0; i < promises.length; i++) {
                const promise = promises[i];
                promise.then(data => {
                    result[i] = data;
                    count++;
                    if (count === promises.length) {
                        res(result);
                    }
                }).catch(err => {
                    rej(err);
                });
            }
        });
    }
    static race(promises) {
        return new Promise((res, rej) => {
            for (let i = 0; i < promises.length; i++) {
                const promise = promises[i];
                promise.then(data => {
                    res(data);
                }).catch(err => {
                    rej(err);
                });
            }
        });
}