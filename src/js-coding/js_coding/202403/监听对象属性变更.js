/**
 * vue 的watcher
 */

class Observer {
    constructor(data) {
        Object.defineProperty(data, '__ob__', {
            enumbale: false,
            value: data
        });
        if (Array.isArray(data)) {

        } else {
            this.walk(data);
        }
    }


    walk(data) {
        Object.keys(data).forEach(key => {
            defineReactive(data, key, data[key]);
        })
    }
}

function defineReactive(data, key, value) {
    const dep = new Dep();
    observe(value);
    Object.defineProperty(data, key, {
        get() {
             // 添加依赖
            if (Dep.target) {
                dep.depend();
            }
            return value;
        },
        set(newVal) {
            if (newVal === value) {
                return;
            }
            observe(newVal);
            value = newVal;
            dep.notify();   
        }
    })
}

function observe(data) {
    if (typeof data !== 'object' || data === null) {
        return;
    }
    if (data.__ob__) return;
    return new Observer(data);
}

let did = 0;

class Dep {
    id = did++;
    watcher = [];

    depend() {
        Dep.target.addDep(this);
    }
    addWatcher(watcher) {
        this.watcher.push(watcher)
    }
    notify() {

    }
}
Dep.target = null;

class Watcher {
    deps = [];
    depIds = new Set();
    addDep(dep) {
        if (!this.depIds.has(dep.id)) {
            this.deps.push(dep);
            this.depIds.add(dep.id);
            dep.addWatcher(this);
        }
    }
}