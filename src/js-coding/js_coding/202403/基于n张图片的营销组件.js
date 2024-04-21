/**
 * 标题
基于n张图片链接的营销组件【React函数组件】

题目描述
所有图片加载完成时展示组件UI​
有图片加载失败时自动重试3次​
自动重试也失败后不展示​
要考虑超时时间m
 */

async function testDemo() {
    let times = 0;

const mockAsyncTask = (i) => {
    times++;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(i > -1) {reject('fail')} else {
                resolve('success');
            };
        }, 2000);
    });
}

const requestWithRetry = (requestFn, maxTry) => {
    return new Promise((outResolve, outReject) => {
        let count = 0;
        const recursion = (requestFn, count) => {
            if (count <= maxTry) {
                count++;
                requestFn(maxTry - count).then((res) => {
                    outResolve(res);
                }).catch(e => {
                    if (count > maxTry) {
                        return outReject(e);
                    }
                    recursion(requestFn, count);

                });
            }
        }
        recursion(requestFn, count);
        
    });
}

const res = await requestWithRetry(mockAsyncTask, 5);
console.log('time', times, res);
}

testDemo();

const loadImg = (url) => {
    return new Promise((res, rej) => {
        const img = new Image();
        img.onload(() => res());
        img.onerror(() => rej('img load fail'));
        img.src = url;
    });
}
const timeout = (time) => {
    return new Promise((_, rej) => {
        setTimeout(rej, time);
    });
}
function MarketingComp(list) {
    const [mount, setMount] = useState(false);
    useEffect(() => {
        const promises = list.map(url => requestWithRetry(() => loadImg(url), 3))
        Promise.race([timeout, Promise.all(promises)]).then(() => {
            setMount(true);
        }).catch(e => {
            console.log(e)
        });
    })
    
    
}