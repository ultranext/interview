/**
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 */

function inverseBinaryTree(root) {
    if (!root) {
        return null;
    }
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    inverseBinaryTree(root.left);
    inverseBinaryTree(root.right);
    return root;
}

function inverseBinaryTree(root) {
    const queue = [root];
    while(queue.length) {
        const node = queue.shift();
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
        queue.push(node.left);
        queue.push(node.right);
    }
    return root;

}
