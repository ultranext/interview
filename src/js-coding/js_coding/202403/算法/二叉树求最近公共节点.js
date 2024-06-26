/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]

示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
示例  2:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。

说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。
 */


function findParentNode(root, p, q) {
    if (!root || !q || !p) {
        return false;
    }
    // 遍历找层级
    const findDePth = (node, target, level = 0) => {

        let finded = null;
        if (node.val === target.val) {
            return {level, node};
        }
        level++;
        if (node.left) {
            node.left.parent = node;
            finded = findDePth(node.left, target, level)
        } 
        if (finded) {
            return finded;
        }
        if (node.right) {
            node.right.parent = node;
            return findDePth(node.right, target, level);
        }
    }

    const findP = findDePth(root, p, 0) || {};
    const findQ = findDePth(root, q, 0) || {};

    let = findP.level > findQ.level ? q : p;

    const isAncestor = (node, target) => {
        if (!node) {
            return false;
        }
        if (node === target) {
            return true;
        }
        return (isAncestor(node.left, target) || isAncestor(node.right, target))

    }

    while(!!(isAncestor(cur, p) || isAncestor(cur, q))) {
        cur = cur.parent;
    }
    return cur;


}



