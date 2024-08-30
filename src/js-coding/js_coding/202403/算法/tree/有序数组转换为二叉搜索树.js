/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:
给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5

 */

 // 将有序数组分为左、中、右三个部分，以中为根节点，并且递归的对左右两部分建立平衡二叉树即可

 function arr2BST(arr) {
     if (arr.length === 0) {
         return null;
     }
     const mid = Math.floor(arr.length / 2);
     const root = new TreeNode(arr[mid]);
     root.left = arr2BST(arr.slice(0, mid));
     root.right = arr2BST(arr.slice(mid + 1));
     return root;
 }

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

 const arr = [-10,-3,0,5,9];
 console.log(arr2BST(arr));