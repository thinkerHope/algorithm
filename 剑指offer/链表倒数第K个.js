// function ListNode(x){
//   this.val = x;
//   this.next = null;
// }
function FindKthToTail(head, k)
{
  if (!head) return null;
  let arr = [];
  let node = head;
  arr.push(node);
  while (node.next) {
      node = node.next;
      arr.push(node);
  } 
  return arr[arr.length - k];
}