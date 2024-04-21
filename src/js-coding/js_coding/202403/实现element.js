/**
 * 标题
实现 element.js

题目描述
用 Javascript 对象模拟 DOM 树，并实现它的 render 方法，通过调用该方法可以转成真正的 DOM 节点。例如我们已经实现了 element.js，通过 require('element.js')，我们可以定义 ul，如下：​
​
const el = require('./element.js')；​
const ul = el('ul', {id: 'list'}, [​
  el('li', {className: 'item'}, ['Item 1']),​
  el('li', {className: 'item'}, ['Item 2']),​
  el('li', {className: 'item'}, ['Item 3'])​
])​​​
​
现在 ul 只是一个 JavaScript 对象表示的 DOM 结构，页面上并没有这个结构。我们可以根据这个 ul 构建真正的<ul>，最终当我们这样调用时：​
​
const ulRoot = ul.render();​
document.body.appendChild(ulRoot);​​​
​
<body>中就有了真正的 DOM 结构，如下​
​
<ul id='list'>​
  <li class='item'>Item 1</li>​
  <li class='item'>Item 2</li>​
  <li class='item'>Item 3</li>​
</ul>​
 */

class Vnode {
  constructor(tag, attr, children) {
    this.tag = tag;
    this.attr = attr;
    this.children = children;
  }
  render() {
    const el = document.createElement(this.tag);
    Object.keys(this.attr).forEach(k => el.setAttribute(k, this.attr[k]));
    if (this.children.length) {
      this.children.forEach(({tag, attr, children}) => {
        const child = new Vnode(tag, attr, children).render();
        el.appendChild(child);
      })
    }
  }
}

function el(tag, attr, children) {
  return new Vnode(tag, attr, children);
}