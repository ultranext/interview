/**
 * 题目描述
大文件/视频上传 SDK 的设计中，有一个「客户端选路」的概念。顾名思义，后端会下发多个候选节点，SDK 对这些候选节点进行测速，拿到最优节点进行上传​
现比如，后端返回的地址如下，请编码实现上述需求：​
​
const apis = [​
  'https://registry.npmjs.org/fe/latest',​
  'https://registry.npm.taobao.org/fe/latest',​
  'https://registry.yarnpkg.com/fe/latest'​
]
 */