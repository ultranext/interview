/**
 * 实现JS限流调度器，方法add接收一个返回Promise的函数，同时执行的任务数量不能超过两个。
 */

class Scheduler {
    count = 0;
    queue = [];
    async add(promiseFunc) {
        return new Promise((resolve, reject) => {
            this.queue.push({
                cb: resolve
            });
            this.run();
        }).then(() => promiseFunc()).finally(() => {this.count--;this.run()});
    }
    async run() {
        if (this.count < 2) {
            this.count++;
            if (this.queue.length) {
                const task = this.queue.shift();
                task.cb();
            }
            
        }
    }
}

const scheduler = new Scheduler()
const timeout = (time) => {
    return new Promise(r => setTimeout(r, time))
}
const addTask = (time, order) => {
    scheduler.add(() => timeout(time))
        .then(() => console.log(order))
}

addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)
addTask(100, 5)
// log: 2 3 1 4