/**
 * 标题
反转单向链表

题目描述
反转单向链表​

Example:​
Input: 1->2->3->4->5->NULL​
Output: 5->4->3->2->1->NULL​

Use the definition for singly-linked list below:
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let cur = head;
    let prev = null;
    while (cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
};