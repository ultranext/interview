/**
 * 标题
实现 get 方法

题目描述
const data1 = { ​
    name: 1, ​
    city: [{ tianjin: 20, beijing: { name: 50 }}], ​
    code: [{ hebei: 30 }, { beijing: 40 }],​
    car:{ large: { width: 5000, height: 3000, color : "blue" } }​
} ​

/**​
* @param {object} obj - 传入的数据​
* @param {string} path - 内部数据的路径​
*/​
const get = (obj, path) => {​
}​

console.log(get(data1, 'code[1].beijing'))   // 40​
code.1.beijing​
console.log(get(data1, 'city[0].beijing.name'))   // 50​
console.log(get(data1, 'car.large.color'))   // blue​
console.log(get(data1, 'car.large.c.a.b.c'))   // null
 */