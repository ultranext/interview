/**
 * JS的promise可用于封装各类异步调用场景，但多数接口都有访问qps的限制，要求实现一个ES6 class (或ES5函数类），该类可以接受并行执行promise的上限参数M作为构造参数，通过提供一个enqueue方法来接收promise生成器，并确保线程执行中的promise数量始终不超过M，调用样例参考：
 * 
 * var instance = new PromiseHandler(3);

var promiseList = [1,2,3,4].map(i => {
    return () => new Promise(resolve => setTimeout(() => {
        console.log(i);
        resolve();
    }, 1000 * i));
}); // 4个异步调用，分别在1s，2s，3s，4s后执行

var extraPromise = () => new Promise(resolve => setTimeout(() => {
    console.log('new');
    resolve();
}, 1000)); // 1s后执行

instance.enqueue(promiseList);
instance.enqueue(extraPromise);
 */