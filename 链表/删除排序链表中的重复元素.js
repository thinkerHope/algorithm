var deleteDuplicates = function(head) {
  if (!head || !head.next) return head
  let p = head
  let q = head.next
  while (q) {
      while (q && p.val === q.val) {q = q.next}
      if (q) {
          p.next = q
          p = q
          q = p.next
      }
  } 
  if (p.next) p.next = null
  return head
};