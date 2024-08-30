/**
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定  s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。

示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
 */

function wordSplit(s, wordDict) {
    const len = s.length;
    const dp = [];

    const wordSet = new Set(wordDict);

    for (let i = 1; i < len; i++) {
        for (let j = i; j >= 0; j--) {
            const rest = s.slice(j, i);
            if (dp[j] && wordSet.has(rest)) {
                dp[i] = true;
                break;
            }
        }
    }
    return !!dp[n];
}