
export function deepClone (obj) {
    let targetMap = new Map();
    const _deepClone = target => {
        if (!target) {
            return target;
        }
        // regExp|Date|function|
        if (target instanceof RegExp) {
            return new RegExp(target);
        }
        if (target instanceof Date) {
            return new Date(target);
        }
        if (typeof target === 'function') {
            return new Function(target);
        }
        if (targetMap.has(target)) {
            return targetMap.get(target);
        }

        let result = target instanceof Array ? [] : {};
        targetMap.set(target, target);
        for (let prop in target) {
            result[prop] = _deepClone(target[prop]);
        }
        return result;

    }
    return _deepClone(target);
};

