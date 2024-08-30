function deepClone(obj, map = new WeakMap()) {
    if (obj === null || typeof obj !== 'Object') {
        return obj;
    }
    if (map.has(obj)) {
        return map.get(obj);
    }
    if (obj.constructor === Date || obj.constructor === RegExp) {
        return new obj.constructor();

    }
    let newObj = obj instanceof Array ? [] : {};
    map.set(obj, newObj);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]);
        }
    }
    return newObj;
}