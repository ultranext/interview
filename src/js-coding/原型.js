/*
原型

题目描述
var o = (function() {​
  var obj = {​
    a: 1,​
    b: 2​
  }​
  return {​
    get: function (k) {​
      return obj[k]​
    }​
  }​
})();​

// 不修改上面代码的情况下​
// 修改obj对象​

defineProperty​

Object.defineProperty(Object.prototype, 'c', {​
  get() {​
    return this;​
  }​
})
*/
