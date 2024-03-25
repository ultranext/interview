/**
 标题
用typescript实现一个重试方法

题目描述
当服务端返回抛出异常时触发重试，可以限定重试次数​
需要给出测试用例
*/

const retry<T> = (PFn: (...args: any[]) => Promise<T>, times: number): () => Promise<T> => {
    return (...args) => new Promise((resovle, reject) => {
        const handle = (PFn, times) => {
            return PFn(...args).then(
                (res) => resovle(res),
                (err) => {
                    if (times > 0) {
                        handle(PFn, --times);
                    } else {
                        reject(err);
                    }
                }
            )
        }
        handle(PFn, times);
    })
};

const fech = fetch;
const rfetch = retry(fech, 3);
rfetch()