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

/**
 *  let obj = {
      name: 'obj',
      foo: function () {
        console.log(this);    //obj
        function test() {
          console.log(this);  //window  为什么？  因为test独立调用
        }
        test()
      }
    }
    obj.foo()

作者：可狗可乐
链接：https://juejin.cn/post/7035257186565488670
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

/**
 *   let obj = {
      name: 'obj',
      foo: function () {
        console.log(this);  //window   为什么不是obj？  bar拿到obj.foo的引用，然后在全局下独立调用
      }
    }
    let bar = obj.foo
    bar()

作者：可狗可乐
链接：https://juejin.cn/post/7035257186565488670
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

/**
 *     var a = 0
    function foo() {
      let test = () => {
        console.log(this)
      }
      return test
    }
    let obj1 = {
      a: 1,
      foo: foo
    }
 等同于： 
 let obj1 = {
      a: 1,
      foo() {
      let test = () => {
        console.log(this)
      }
      return test
    }
    }
===================

    let obj2 = {
      a: 2,
      foo: foo
    }
    obj1.foo().call(obj2)
​
     //obj1.foo()返回test   obj1.foo.call(obj2)把test的指向绑定到obj2上，无效，this依然指向obj1

作者：可狗可乐
链接：https://juejin.cn/post/7035257186565488670
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */