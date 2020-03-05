// 有先序和中序序列重建二叉树
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
} 
function reConstructBinaryTree(pre, vin) {
  if (pre.length === 0) return null;
    
  let root = new TreeNode(pre[0]); 
  let preIndex
  let inIndex = vin.indexOf(pre[0]);
  let leftVin = vin.slice(0, inIndex);
  let rightVin = vin.slice(inIndex, pre.length);
  let leftPre = pre.slice(0, preIndex);
  let rightPre = pre.slice(preIndex, pre.length);
  
  root.left = reConstructBinaryTree(leftPre, leftVin);
  root.right = reConstructBinaryTree(rightPre,rightVin);
  
  return root;
}