function isSymmetrical(pRoot) {
  return isSymmetricalTree(pRoot, pRoot)
}
function isSymmetricalTree(biTreeNode1, biTreeNode2) {
  if (!biTreeNode1 && !biTreeNode2) return true
  if (!biTreeNode1 || !biTreeNode2) return false
  if (biTreeNode1.val !== biTreeNode2.val) return false

  return isSymmetricalTree(biTreeNode1.lchild, biTreeNode1.rchild) && isSymmetricalTree(biTreeNode2.lchild, biTreeNode2.rchild) 
}