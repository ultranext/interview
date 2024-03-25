标题
this的指向

题目描述
1. 指向window​
2. 箭头函数​
3. 对象的方法调用指向对象​
const a = {​
   name: 'xxx',​
  sayName: function() {​
    console.log(this.name)​
  }​
}​

a.sayName()​

const b = a.sayName​
b()​


4. call apply bind ​
5. new ​
function Person(name) {​
this.name = name​
}​

const a = new Person('xx')​
const b = Person('xx')