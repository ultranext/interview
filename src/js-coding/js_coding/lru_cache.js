/**
 * 标题
LRU cache

题目描述
实现一个LRU过期算法的KV cache, 所有KV过期间隔相同, 满足如下性质:​
1. 最多存储n对KV;​
2. 如果大于n个, 则随意剔除一个已经过期的KV;​
3. 如果没有过期的KV, 则按照LRU的规则剔除一个KV;​
4. 查询时如果已经过期, 则返回空;
 */