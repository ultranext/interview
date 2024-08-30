/**
 * 标题
实现异步累加

题目描述
const arr = [1, 12, [45, 90, [34]]]​
  已知 function add(a, b) {​
      return Promise.resolve(a + b)​
  }​
      实现 function sum(arr) {}
 */
function add(a, b) {
    return Promise.resolve(a + b);
}
async function sum(arr) {
    return arr.reduce(async (prev, cur) => {
        if (Array.isArray(cur)) {
            return sum(cur);
        }
        const res = add(prev, cur)
        return res;
    }, 0);

}

console.log(sum([1,12,[45,90,[34]]]));