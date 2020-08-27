export const singleton = (function() {
    let instance;
    return function(...args) {
        if (!instance) {
            instance = new constructor(...args);
        }
        return instance;
    }
})();