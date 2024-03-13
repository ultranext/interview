let val = 2;
let o = {
    name: 'google',
    val: 4
};
let show = () => {
    console.log(this.val);
}
let o1 = {
    name: 'other',
    val: 7
}

function A(p1) {
    let val = 3;
    let o = p1;
    o.val = 5;
    return function B(p2) {
        let p3 = p2;
        p3.val = 8;
        p2 = {name: 'bytedance', val: 6};
        let r = val + o.val + p2.val;
        console.log('r:', r);
        return p1;
    }
}
A(o1)(o)
let bindedShow = show.bind(A(o1)(o));
