class CurrentPoll {
    constructor() {
        // 执行任务栈
        this.tasks = [];
        // 最大可并发数
        this.max = 10;
        //
        this.count = 0;
    }

    // 添加任务
    addTask(task) {
        this.tasks.push(task);
    }

    // 执行任务
    run() {
        
        if (this.count < this.max && this.tasks.length) {
            let task = this.tasks.shift();
            while(task) {
                this.count++;
                task instanceof Promise ? task().then(res => console.log(res)).finally(() => {
                    this.count--;
                    this.run();
                }) : Promise.resolve(task()).then(res => console.log(res)).finally(() => {
                    this.count--;
                    this.run();
                });
                task = this.count < 10 ? this.tasks.shift() : null;
            }
           
           
        }
    }
}

const poll = new CurrentPoll();

for (var i = 0; i < 15; i++) {
    poll.addTask(function() {
        return new Promise((resolve, reject) => {
            // 异步操作
           setTimeout(() => {
            resolve('success');
           }, 1000);
        })
    })
}

// 要求 执行run的时候同时最多只能有10个异步任务在执行，一旦有异步任务执行完毕继续从任务栈中拿任务执行
poll.run();