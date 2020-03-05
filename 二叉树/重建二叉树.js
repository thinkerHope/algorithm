function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
} 
const reConstructBinaryTree = (pre, vin) => {
  if (pre.length === 0) return null
  if (pre.length === 1) return pre[0]

  const root = pre[0]
  const rootIndexOfInOrder = vin.findIndex(i => i === root)
  // pre[0]的左子树和右子树
  const _preLeft = pre.slice(1, rootIndexOfInOrder)
  const _vinLeft = vin.slice(0, rootIndexOfInOrder)
  const _preRight = pre.slice(rootIndexOfInOrder + 1, pre.length)
  const _vinRight = vin.slice(rootIndexOfInOrder + 1, vin.length)
  root.lchild = reConstructBinaryTree(_preLeft, _vinLeft)
  root.rchild = reConstructBinaryTree(_preRight,_vinRight)

  return root
}