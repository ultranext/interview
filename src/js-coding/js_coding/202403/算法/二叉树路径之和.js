/**
 * 给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过 1000 个节点，且节点数值范围是 [-1000000,1000000] 的整数。
 */

/**
 * 
 * 
 * 每个节点都求一次和，考虑正负相加的情况，需要遍历到底
 */
function countPath(root, target) {
    sumPath(root, target) + countPath(root.left, target) + countPath(root.right, target);
}

function sumPath(node, target) {
    let count = 0;
    const dfs = (node, t) => {
        if (!node) {
            return;
        }
        dfs(node.left, target - node.value);
        dfs(node.right, target - node.value);
    }
    dfs(node, target);
    return count;
}