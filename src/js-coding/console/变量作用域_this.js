/**
 * 标题
--

题目描述
var inner = 'window';​

function say() {​
    console.log(inner);​
    console.log(this.inner);​
}​

var obj1 = (function() {​
    var inner = '1-1';​
    return {​
        inner: '1-2',​
        say: function() {​
            console.log(inner);​
            console.log(this.inner);​
        }​
    }​
})();​

say();​
obj1.say();​
obj1.say = say;​
obj1.say();
 */