/**
 * 标题
代码考核 flattenObject

题目描述
​
const obj = {​
  a: {​
    b: {​
      c: [​
        {​
          d: 1​
        }​
      ],​
      e: [2]​
    }​
  },​
  f: {​
    g: 3​
  }​
};​

// output​
 const result = {​
   'a.b.c[0].d': 1,​
   'a.b.e[0]': 2,​
   'f.g': 3​
 };​



const flatternObject = function (obj) {​
  const result = {};​
  // your code​
  return result;​
};​
console.log(flatternObject(obj));
 */