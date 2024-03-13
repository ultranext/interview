/*
1. 以下代码输出什么结果，`this.name`中this指向什么：
```
window.name = 'ByteDance';
function A () {
   this.name = 123;
}
A.prototype.getA = function(){
	console.log(this);
	return this.name + 1;
}
let a = new A();
let funcA = a.getA;
funcA();
```

2. 如何使`funcA()`返回`undefined`?
3. 下面ES6中又会发生什么，this是什么？ es6 class内部默认严格模式
```
window.name = 'ByteDance';
class A {
	constructor() {
  	this.name = 123;
	}
	getA() { 
	  console.log(this);
		return this.name + 1; 
	}
}
let a = new A();
let funcA = a.getA;
funcA();
```

附加
window.name = 'ByteDance';
class A {
        constructor() {
          this.name = 123;
        }
        getA = () => { 
          console.log(this);
                return this.name + 1; 
        }
}
let a = new A();
let funcA = a.getA;
funcA();
*/
