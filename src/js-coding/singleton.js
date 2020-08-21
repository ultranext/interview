export const singleton = (function(constructor) {
    let instance;
    return function(...args) {
        if (!instance) {
            instance = new constructor(...args);
        }
        return instance;
    }
})();