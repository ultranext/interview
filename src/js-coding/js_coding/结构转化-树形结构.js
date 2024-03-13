/**
 结构转化-树形结构
 
  有一个数据结构，格式类似
["a/b/c/d.js","a/b/ddd.js","rrr.js"，"uuuu/i.js"]

请转成，children 需要 不断往下延展，变成树的结构

[
  {
    key: 'a',
    children: [
      {
        key: 'b',
        children: [
          { key: 'c', children: [{ key: 'd.js', children: [] }] },
          { key: 'ddd.js', children: [] }
        ]
      }
    ]
  },
  { key: 'rrr.js', children: [] },
  { key: 'uuuu', children: [{ key: 'i.js', children: [] }] }
]
 */


const formartPathToTree = pathArr => {
    const map = {};
    pathArr.forEach(path => {
        const pathNodes = path.split('/');
        pathNodes.forEach((node, index) => {
            if (map[node]) {
                return
            }
            if (index === 0) {
               map[node] = {
                    key: node
               }
               return
            }
            map[node] = {
                key: node,
                parent: pathNodes[index - 1]
            }

        })
    })
    const result= []
    for(let [k, v] of Object.entries(map)) {
        const parentKey = map[k]?.parent
        if (parentKey) {
            const pNode = map[parentKey]
            if (pNode.children) {
                pNode.children.push(map[k])
                return
            }
            pNode.children = [map[k]]
        } else {
            result.push()
        }
    }
}