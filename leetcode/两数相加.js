/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val
 *     this.next = null
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  let p = l1
  let q = l2
  let carry = 0
  const dummyHead = new ListNode(0)
  let cur = dummyHead
  while (p || q) {
      const vp = p ? p.val : 0
      const vq = q ? q.val : 0
      p = p && p.next
      q = q && q.next
      const sum = vp + vq + carry
      carry = sum >= 10 ? 1 : 0
      cur.next = new ListNode(sum >= 10 ? sum - 10 : sum)
      cur = cur.next
  }
  if (carry) {
      cur.next = new ListNode(carry)
      cur = cur.next
  }
  return dummyHead.next
}