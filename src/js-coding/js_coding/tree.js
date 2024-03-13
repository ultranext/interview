题目描述
数据格式：
[
{ id: 1, name: 'aaa1' },
{ id: 2, name: 'aaa2' , parentId: 1},
{ id: 3, name: 'aaa3' },
{ id: 4, name: 'aaa4' , parentId: 2},
{ id: 5, name: 'aaa5' },
{ id: 6, name: 'aaa6' , parentId: 4},
]

输出结果（用 console.log 输出）：
├ aaa1
   ├ aaa2
        ├ aaa4
            ├ aaa6
├ aaa3
├ aaa5