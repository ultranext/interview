type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type ReturnType<T> = T extends (...args: any[]) => infer P ? P : any;

type Length<T extends readonly any[]> = T['length'];

type MyExclude<T, K> = T extends K ? never : T;

const person = new Object();
Object.defineProperty(person, 'name', {
    value: 'person',
    get() {
        return this.name;
    },
    set(newVal) {
        this.name = newVal
    },
    configurable: true,
    writable: true,
    enumerable: true,
});
Object.seal(person); // 不可配置, 不可新增删除，但可修改属性
Object.freeze(person); // 在seal基础上，不可变更属性。


const proxyed = new Proxy({}, {
    get(target, propKey, receiver) {
        console.log('proxyed_get');
        return target[propKey];
    },
    set(target, propKey, value, receiver) {
        target[propKey] = value;
        return true;
    },
    // in 操作符
    has(target, propKey) {
        return target[propKey] !== undefined;
    },
    deleteProperty(target, p) {
        delete target[p];
        return true;
    },
    // Object.getOwnPropertyNames(target); 
    // Object.getOwnPropertySymbols(target);
    ownKeys(target) {
        return Object.keys(target);
    },
    getOwnPropertyDescriptor(target, p) {
        return {};
    },
    defineProperty(target, property, attributes) {
        return true;
    },
    getPrototypeOf(target) {
        return {}
    },
    apply(target, object, args) {

    },
    construct(target, args) {
        return {};
    }
});


