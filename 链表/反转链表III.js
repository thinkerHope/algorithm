// 反转前n个结点（递归）
let Successor = null

var reverseN = function(head, N) {
  if (N === 1) {
    Successor = head.next
    return head
  }
  const last = reverseN(head.next, N - 1)
  head.next.next = head
  head.next = Successor
  return last
};
