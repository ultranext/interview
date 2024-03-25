// this指向问题

// 题目描述
var obj = {​
  a: function(){ console.log(this)},​
  b: () => {console.log(this)},​
  c: function(){​
    var inner = () => { console.log(this)};​
    inner();​
  }​
}​
var _a = obj.a; ​
var _b = obj.b; ​
var _c = obj.c;​

_a();  // window​
_b(); // window​
_c(); // window​
obj.a(); // obj​
obj.b(); // window​
obj.c(); // obj