/**
 * 标题
对象转换

题目描述
const entry = {​
  a: {​
    b: {​
      c: {​
        dd: 'abcdd',​
      },​
    },​
    d: {​
      xx: 'adxx',​
    },​
    e: 'ae',​
  },​
};​

// 要求转换成如下对象​
const output = {​
  'a.b.c.dd': 'abcdd',​
  'a.d.xx': 'adxx',​
  'a.e': 'ae',​
};
 */
const entry = {
  a: {
    b: {
      c : {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
};

function transformObj(entry) {
  const ret = {};
  const dfs = (entry, pre = []) => {
    if (!entry) return '';
    for (const [k, v] of Object.entries(entry)) {
      if (Object.prototype.toString(v) === '[Object object]') {
        dfs(v, pre.concat(k))
      }
      ret[pre.concat(k).join('.')] = v;
    }
  }
  
  dfs(entry);
  return ret;
}

const result = transformObj(entry);
console.log(result, result)

