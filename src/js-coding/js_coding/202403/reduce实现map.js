// reduce实现map
Array.prototype.map = function(fn, thisArg) {
    if (typeof fn !== 'function') {
        throw new TypeError(fn + 'is not a function');
    }
    let result = [];
    this.reduce((prev, cur, index, arr) => {
        result.push(fn.call(thisArg, cur, index, arr));
    }, null);
    return result;
}