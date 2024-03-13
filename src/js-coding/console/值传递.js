let x = 1;
let o = {
    url: 'www.baidu.com'
}

function modify(x, o) {
    let y = x;
    let o1 = o;
    y++;
    o1.url = 'www.bytedance.com'
    o1 = {url: 'www.google.com'}
    return [y, o1];
}

const [y, o1] = modify(x, o)

console.log(x)
console.log(y)
console.log(o)
console.log(o1)



