/* 
实现一个 isEqual 函数用于比较两个对象是否相等

实现一个 isEqual 函数用于比较两个对象是否相等，函数接受两个对象参数 ，如果两个对象“相等”则返回 true，否则返回 false。 判断规则：如果两个对象有相同的属性，以及它们的属性有相同的值，那么这认为两个对象就相等。 例如：

var stooge = {name: 'moe', luckyNumbers: [13, 27, 34]};
var clone  = {name: 'moe', luckyNumbers: [13, 27, 34]};
stooge == clone;
=> false
isEqual(stooge, clone);
=> true

*/


function isEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (typeof a !== typeof b) {
        return false;
    }

    if ((a !== null && b === null) || (a === null) && b !== null ) {
        return false;
    }

    const keysOfa = Object.keys(a);
    const keysOfb = Object.keys(b);

    if (keysOfa.length !== keysOfb.length) {
        return false;
    }

    for (let k of keysOfa) {
        if (!isEqual(a, b)) {
            return false;
        }
    }
    return true;

}