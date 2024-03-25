标题
判断有效括号

题目描述
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。​

有效字符串需满足：​

左括号必须用相同类型的右括号闭合。​
左括号必须以正确的顺序闭合。​
 ​

示例 1：​
输入：s = "()"​
输出：true​

示例 2：​
输入：s = "()[]{}"​
输出：true​

示例 3：​
输入：s = "(]"​
输出：false​

示例 4：​
输入：s = "([)]"​
输出：false​

示例 5：​
输入：s = "{[]}"​
输出：true​

let isValid = function(s) {​

}

const isValid = (str) => {
    const map = {
        '{' : '}',
        '[' : ']',
        '(' : ')',
    }
    const stack = []

    for(let item of str){
        if (map[item]) {
            stack.push(map[item])
        } else {
            const last = stack.pop();
            if (item !== last) {
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(isValid('()'))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([)]"))
console.log(isValid("{[]}"))