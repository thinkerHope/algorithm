function ListNode(x){
  this.val = x;
  this.next = null;
}
// 自己写的未通过的算法，但是vscode能跑出结果。
function ReverseList(pHead)
{
    if (pHead == null) return null;
    let p = pHead;
    let q = pHead.next;
    while (q) {
        pHead.next = q.next;
        q.next = p;
        p = q;
        q = pHead.next;
    }
    return p;
}

let a = new ListNode(1)
let b = new ListNode(2)
let c = new ListNode(3)
let d = new ListNode(4)
let e = new ListNode(5)
let f = new ListNode(6)
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
console.log(ReverseList(a));
console.log(f.next)
console.log(e.next)
console.log(d.next)
console.log(c.next)
console.log(b.next)

// - 16ms
function ReverseList(pHead)
{
  var tail = null;
  var head = null;
  var curr = pHead;
  while(curr != null){
    head = curr;
    curr = curr.next;
    head.next = tail;
    tail = head;
  }
  return head;
}
