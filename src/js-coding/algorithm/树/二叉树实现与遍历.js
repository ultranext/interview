/**
 * 
 * JS编码实现一个二叉树的构造函数，包括节点类Node，树类BST，插入节点函数insert，
并且满足
1.左子节点的值 < 父节点的值 <= 右子节点的值
2.可以实现先序，中序，后续遍历
 */
class Node {
    value = undefined;
    left = null;
    right = null;
    constructor(value, left, right) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
    root = null;
    constructor() {

    }

    insert(node) {
        if (!this.root) {
            this.root = node;
            return;
        }
        const insertNode = (node, current) => {
            while(current) {
                if (node.value > current.value) {
                    if (current.right) {
                        current = current.right;
                    } else {
                        current.right = node;
                        break
                    }
                } else {
                    if (current.left) {
                        current = current.left;
                    } else {
                        current.left = node;
                        break
                    }
                }
    
            }
        }
        insertNode(node, this.root);
    }

    

    preOrder() {
        const _preOrder = (node) => {
            if (node == null) {
                return;
            }
            console.log(node.value);
            _preOrder(node.left);
            _preOrder(node.right);
        }
        _preOrder(this.root);

    }


}