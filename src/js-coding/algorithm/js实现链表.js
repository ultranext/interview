/**
 * 使用js创建一个单链表结构，要求实现链表的添加节点方法。
 */

class LinkNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkList {
    header = null;

    addNode(node) {
        if (this.header == null) {
            this.header = node;
        }
        const currentNode = this.header;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }
}