/**
 * 
 * 标题
代码实现

题目描述
- 编写方法，返回最长无重复子串的长度​
- 无重复子串指：子串中每个字符都不相同​
- 例如：s = 'aaabcddddefghh' ，其中，最长的无重复子串为'defgh'长度为5

输入: "abcabcbb"

输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */

// const s = 'aaabcddddefghh';
const s = "abcabcbb";

function getLenOfSubstr(s) {
 if (!s) return 0;
  let left = 0;
  let right = -1;
  const len = s.length;
  const map = new Map();
  let max = 0;
  let res = '';

  while (left < len) {
     if (!map.has(s[++right])) {
        map.set(s[right], right);
        if (right - left + 1 > max) {
                res = s.substring(left, right + 1);
        }
        max = Math.max(max, right - left + 1);

     } else {
        left = map.get(s[right]) + 1;
        map.set(s[right], right); // 重新设置变量
     }
     console.log('index', left, right, max, res);
  } 
  return max;

}

// console.log(getLenOfSubstr(s));



function getMaxSubstr(str) {
   const len = str.length;
   let left = 0; let right = 1;
   const map = new Map();
   map.set([left[0], left]);
   let max = 0;
   while(right < len) {
      if (map.has(str[right])) {
         left = map.get(str[right]) + 1;
         map.set(left[0], right);
         map.set([str[right], right]);
      } else {
         map.set([str[right], right]);
      }
      max = Math.max(max, right - left + 1);
      right++;
   }
   return max;
}
console.log(getMaxSubstr(s));