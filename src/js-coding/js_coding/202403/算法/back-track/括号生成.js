/**
 * 数字 n  代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 输入：n = 3
输出：[
       "((()))",
       "(()())",
       "(())()",
       "()(())",
       "()()()"
     ]
 */

    function generateParenthesis(n) {
        const res = [];
        const helper = (left, right, prev) => {
            if (left < 0 || right < 0 || right < left) {
                return;
            }
            if (left === 0 && right === 0) {
                res.push(prev);
            }
            helper(left - 1, right, prev + '(');
            helper(left, right - 1, prev + ')')
        }
        helper(n, n, '');
    }

    function generateParenthesis(n) {
        const res = [];
        const permute = (left, right, prev) => {
            if (left > 3 || right > 3 || right > left) {
                return;
            }
            if (left === 3 && right === 3) {
                res.push(prev);
            }
            permute(left + 1, right, prev);
            permute(left, right + 1, prev)
        }
        permute(0, 0, '');
        return res;
    }
