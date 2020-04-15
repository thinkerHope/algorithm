// 示例
// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5
var deleteDuplicates = function(head) {
  // 先驱结点
  const pHead = new ListNode(null)
  pHead.next = head
  let cur = pHead
  while (cur.next && cur.next.next) {
      if (cur.next.val === cur.next.next.val) {
          let temp = cur.next
          while (temp && temp.next && temp.val === temp.next.val) {
              temp = temp.next
          }
          cur.next = temp.next
      } else {
          cur = cur.next
      }
  }
  return pHead.next
};