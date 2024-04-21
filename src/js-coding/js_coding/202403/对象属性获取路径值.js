/**
 * 标题
通过对象属性路径获取属性值

题目描述
const obj = {​
    a: 1,​
    b: {​
        c: 2,​
        d: {​
            e: 3​
        }​
    }​
}​

get(obj, 'a.d.e') // 3​
get(obj, 'a.f.e') // undefined
 */

function get(obj, path) {
    if (!path) return undefined;
    const paths = path.replace(/\[(\d+)\]/g, '.$1').split('.');
    let result;
    for (const p of paths) {
        result = Object(result)[p];
    }
    if (result === undefined) return undefined;
    return result;

}