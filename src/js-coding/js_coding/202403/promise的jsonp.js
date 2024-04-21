/**
 * 基于Promise的jsonp：
let jsonp = (url) => {
    let _script document.createElement('script');
    _script.src = url;
    let cb = /cb=([^=&]+)/.exec('http://xxx/?id=1&cb=callback1');
    window[cb] = function(res) {
        return new Promise((resolve, reject) => {
                   resolve(res);
                })
    }
    return window[cb]
}
jsonp('http://xxx/?id=1&cb=callback1&b=ccc').then((data) => {
    console.log(data);
}
 */
const jsonp = url => {
    return new Promise((res, rej) => {
        const script = document.createElement('script');
        const match = url.match(/cb=([^=&]+)/);
        let cb = `callback${Date.now()}`;
        if (match) {
            cb = match[1];
        };
        window[cb] = function(data) {
            res(data);
            delete window[cb];
            document.body.removeChild(script);
        }
        script.src = url;
        script.onerror = function() {
            rej(new Error('jsonp error'));
            delete window[cb];
            document.body.removeChild(script);
        }
        document.body.appendChild(script);
    })
    
}

console.log(/cb=([^=&]+)/.exec('http://xxx/?id=1&cb=callback1'))