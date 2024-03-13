/*
this指针 作用域

题目描述
var name = '123';​

var obj = {​
        name: '456',​
        print: function() {​
                function a() {​
                        console.log(this.name);​
                }​
                a();​
        }​
}​

obj.print();
*/

// 123