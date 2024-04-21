/**
 * 标题
扁平结构变树

题目描述
 const arr = [​
      {id: 1, name: '四川省', pid: 0},​
      {id: 2, name: '成都市', pid: 1},​
      {id: 3, name: '绵阳市', pid: 1},​
      {id: 4, name: '三台县', pid: 3},​
      {id: 5, name: '潼川镇', pid: 4},​
    ]
 */
const arr = [
  {id: 1, name: '四川省', pid: 0},
  {id: 2, name: '成都', pid: 1},
  {id: 3, name: '绵阳', pid: 1},
  {id: 4, name: '三台', pid: 3},
  {id: 5, name: '铜川', pid: 4},
];
function listToTree(arr) {
  const result = [];
  const map = new Map();
  arr.forEach(item => {
    item.children = [];
    map.set(item.id, item);
  });

  arr.forEach(item => {
    const p = map.get(item.pid);
    if (!p) {
      result.push(item);
    } else {
      p.children.push(item);
    }
  })
  return result;
}

console.log(listToTree(arr))
