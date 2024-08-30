/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
说明:
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 */

function tel(str) {
    const map = [
        " ",    //0
        "",     //1
        "abc",  //2
        "def",  //3
        "ghi",  //4
        "jkl",  //5
        "mno",  //6
        "pqrs", //7
        "tuv",  //8
        "wxyz"  //9
    ];
    const res = [];
    const len = str.length;

    const helper = (start, prev) => {
            if (start === len) {
                res.push(prev);
                return;
            }
            const cur = str[start];
            const curMap = map[cur];
            for (let j = 0; j < curMap.length; j++) {
                const curChar = curMap[j];
                helper(start + 1, prev + curChar);
            }
    }
    helper(0 , '');
    return res;
}

console.log(tel('23'));
console.log(tel('456'));

console.log('end');