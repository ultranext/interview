export function debounce(fn, delay) {
    let timer;
    return function() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, delay);
    }
};

export function throttle(fn, wait) {
    let lastTime = Date.now();
    return function() {
        if (Date.now() - lastTime >= wait) {
            lastTime = Date.now();
            fn();
        }
    }
}

export function throttle_timer(fn, wait) {
    
}
