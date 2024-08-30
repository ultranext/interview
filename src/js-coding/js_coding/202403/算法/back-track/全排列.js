/** 
 * 标题
全排列

题目描述
全排列​
输入一个字符串，打印出该字符串中字符的所有排列。​
 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。​
 ​
示例:​
输入：s = "abc"输出：["abc","acb","bac","bca","cab","cba"]
*/


    const innerRank = (str) => {
        if (str.length === 1) {
            return [str];
        }
        const result = [];
        for (let i = 0; i < str.length; i++) {
            const cur = str[i];
            const rest = str.slice(0, i) + str.slice(i + 1);
            const rankedRest = innerRank(rest);
            for (let r of rankedRest) {
                result.push([cur].concat(r));
            }
        }
        return result.map(i => i.join(''));
    }


console.log(innerRank('abc'));
function allRank(str) {
    const res = [];
    const len = str.length;
    const permute = (s) => {
        if (s.length === 1) {
            return [s];
        }
       for (let i = 0; i < s.length; i++) {
        const cur = s[i];
        const rest = `${s.slice(0, i)}${s.slice(i + 1)}`;
        const rankedRest = permute(rest);
        const temp = [];
        for (let i = 0; i < rankedRest.length; i++) {
            temp.push(cur.concat(rankedRest[i]));
        }
        return temp;
       }
    }
    permute(str);
    return res;
}

console.log(allRank('abc'));
console.log('end');