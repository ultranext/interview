/**
 * 实现 document.querySelector 方法
 */
const matchByClassSelector = (selector, el) => {
    return el.classList.includes(selector.replace('.', ''));
}
const matchByID = (selector, el) => {
    return el.id === selector.replace('#', '');
}
const matchByAttr = (selector, el) => {
    
}

const matchSelector = (selector, el) => {
    // class
    if (selector.startWith('.')) {
        return matchByClassSelector(selector, el);
    }
    // id
    if (selector.startWith('#')) {
        return matchByID(selector, el)
    }
    // 属性
    if (selector.match(/^\[(.+?)\]$/)) {
        return matchByAttr(selector, el);
    }
    //标签
    if (selector === el.tagName) {
        return true;
    }
    // 组合


}


function querySelector(selector, el) {
    if (!el || !selector) {
        return null;
    }
    if (matchSelector(selector, el)) return el;
    if (el.children) {
        el.children.forEach(child => {
            querySelector(selector, child);
        })
    }
    return null;

   
}