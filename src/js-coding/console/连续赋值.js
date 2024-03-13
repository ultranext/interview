/*

var a = {
    k1: 'v1'
};
var b = a;

a.k3 = a = {
  k2: 'v2'
};

console.log(a);
console.log(b);

*/

// a {k2: 'v2'}
// b {k1: 'v1', k3: {…}}