/**
 * 给定一个字符串 S，通过将字符串 S 中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。
 * 
 * 示例:
输入: S = "a1b2"
输出: ["a1b2", "a1B2", "A1b2", "A1B2"]

输入: S = "3z4"
输出: ["3z4", "3Z4"]

输入: S = "12345"
输出: ["12345"]
注意：

S 的长度不超过12。
S 仅由数字和字母组成。
 */

function getStringSet(s) {
    const res = [];
    const len = s.length;
    const permute = (prev, start) => {
        if (start > len - 1) {
            res.push(prev);
            return;
        }

        const cur = s[start];
       const temp = cur.charCodeAt() > 64 && cur.charCodeAt() < 123 ? [cur.toLowerCase(), cur.toUpperCase()] : [cur];
       for (let i = 0; i < temp.length; i++) {
            permute(`${prev}${temp[i]}`, start+1);
       }
    }
    permute('', 0);
    return res;
}

console.log(getStringSet("a1b2"));
console.log(getStringSet("3z4"));
console.log(getStringSet("12345"));

console.log('end');