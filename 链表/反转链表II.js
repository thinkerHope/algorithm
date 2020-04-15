// 反转一部分链表（递归）
// 题解：https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/bu-bu-chai-jie-ru-he-di-gui-di-fan-zhuan-lian-biao/
let Successor = null
var reverseN = function(head, N) {
  if (N === 1) {
    Succesor = head.next
    return head
  }
  const last = reverseN(head.next, N - 1)
  head.next.next = head
  head.next = Successor
  return last
}

var reverseBetween = function(head, m, n) {
  if (m === 1) {
    return reverseN(head, n)
  }
  head.next = reverseBetween(head.next, m - 1, n - 1)
  return head
};