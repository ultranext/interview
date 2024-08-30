// 实现debounce(fn, duration, leading)
// 实现debounce hook

function debounce(fn, duration, leading) {
    let timer = null;
    return function(...args) {
        if (timer) {
            clearTimeout(timer);
        }
        if (leading) {
            fn.apply(null, args);
        }
        timer = setTimeout(() => {
            fn.apply(null, args);
            timer = null;
        }, duration);
    }
}

function throttle(fn, delay, leading) {
    let lastUpdateTime;
    return function(...args) {
        const now = Date.now();
        if (leading && !lastUpdateTime) {
            fn.apply(null, args);
            lastUpdateTime = now;
        }
        const diff = now - lastUpdateTime;
        if (diff >= delay) {
            fn.apply(null, args);
            lastUpdateTime = now;
        }
    }
}
function useDebounce(fn, delay) {
    const d = useCallback(() => );
    useEffect(() => {
        setDfn(debounce(fn, delay));
    }, )
}