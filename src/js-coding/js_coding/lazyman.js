/**
 * 
 * 实现一个CodingMan，可以按照以下方式调用:
CodingMan(“Hank”)输出:
Hi! This is Hank!

CodingMan(“Hank”).sleep(10).eat(“dinner”)
输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

CodingMan(“Hank”).eat(“dinner”).eat(“supper”)
输出
Hi This is Hank!
Eat dinner~
Eat supper~

CodingMan(“Hank”).sleepFirst(5).eat(“supper”)
输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
以此类推。
 */
function CodingMan(name) {
    return new CodingManClass(name);
}
class CodingManClass {
    static sleep(time) {
        return new Promise((r) => setTimeout(r, time));
    }
    constructor(name) {
        this.name = name;
        this.taskQuque = [() => {
            console.log(`Hi This is ${name}!`);
            this.next();
        }];
        setTimeout(() => this.next(), 0);
    }
    next() {
        const task = this.taskQuque.shift();
        task && task();
    }

    eat(food) {
        const task = () => {
            console.log(`eat ${food}`);
            this.next();
        }
        this.taskQuque.push(task);
        return this;
    }

    sleep(time) {
        const task = async () => {
            await CodingManClass.sleep(time);
            console.log(`Wake up after %${time}`);
            this.next();
        }
        this.taskQuque.push(task);
        return this;
    }
    sleepFirst(time) {
        const task = async () => {
            await CodingManClass.sleep(time);
            console.log(`Wake up after %${time}`);
            this.next();
        }
        this.taskQuque.unshift(task);
        return this;
    }
}

// CodingMan('Hank').sleep(10).eat('dinner');
// CodingMan('Hank').eat('dinner').eat('supper');
CodingMan('Hank').sleepFirst(10).eat('dinner');
