/**
 * 基于Promise的jsonp：
let jsonp = (url) => {
    let _script document.createElement('script');
    _script.src = url;
    let cb = url.split('&')[1].split('&')[1];
    window[cb] = function(res) {
        return new Promise((resolve, reject) => {
                   resolve(res);
                })
    }
    return window[cb]
}
jsonp('http://xxx/?id=1&cb=callback1').then((data) => {
    console.log(data);
}
 */