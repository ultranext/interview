window.base = 20;

const addObj = {
  base: 10,
  add1(a) {
    const f = v => v + this.base;
    return f(a);
  },
  add2(a) {
    const f = v => v + this.base;
    const b = {
      base: 2,
    };
    return f.call(b, a);
  },
  add3: a => {
    const f = v => v + this.base;
    return f(a);
  },
};
const tempAdd = addObj.add1;
console.log(addObj.add1(1));
console.log(addObj.add2(1));
console.log(addObj.add3(1));
console.log(tempAdd(1));

// 11
//  11
//  21
// 21