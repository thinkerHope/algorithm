// 双指针 复杂度太大...未通过, 但是可以跑出结果
function ListNode(x){
  this.val = x;
  this.next = null;
}

function FindFirstCommonNode(pHead1, pHead2)
{
    // 让链表成环
    let pNode2 = pHead2;
    while (pNode2.next) {
        pNode2 = pNode2.next;
    }
    pNode2.next = pHead2;
    
    // 快慢针判断成环链表的环起点
    let fast = pHead1;
    let slow = pHead1;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow) {
            fast = pHead1;
            while (fast != slow) {
                fast = fast.next;
                slow = slow.next;
            }
            
            return fast;
        }
    }
    
    return null;
}

let pos = new ListNode(1);
let pHead1 = new ListNode(2);
let pHead2 = new ListNode(3);
let b = new ListNode(4);
let c = new ListNode(5);
let d = new ListNode(6);
let e = new ListNode(7);
let f = new ListNode(8);
let g = new ListNode(9);
pHead1.next = b;
b.next = c;
c.next = pos;
pHead2.next = d;
d.next = e;
e.next = pos;
pos.next = f;
f.next = g;
console.log(FindFirstCommonNode(pHead1, pHead2)); // pos

// 
function FindFirstCommonNode(pHead1, pHead2)
{
    let node_set = new Set();
    let count = 0;
    while (pHead1 && pHead2) {
        node_set.add(pHead1);
        count++;
        if (node_set.size < count) return pHead1;
        else  pHead1 = pHead1.next;
        node_set.add(pHead2);
        count++;
        if (node_set.size < count) return pHead2;
        else  pHead2 = pHead2.next;
    }
    while (pHead1) {
        node_set.add(pHead1);
        count++;
        if (node_set.size < count) return pHead1;
        else  pHead1 = pHead1.next;
    }
    while (pHead2) {
        node_set.add(pHead2);
        count++;
        if (node_set.size < count) return pHead2;
        else  pHead2 = pHead2.next;
    }
    
    return null;
}

