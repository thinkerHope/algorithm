// 迭代
var reverseList = function(head) {
  const pHead = new ListNode(null)
  pHead.next = null

  let p = head
  let q = null
  while (p) {
      q = p.next
      p.next = pHead.next
      pHead.next = p
      p = q
  }
  return pHead.next
};

// 递归
var reverseList = function(head) {
  if (!head.next) return head
  head.next.next = head
  head.next = null
  return last
};